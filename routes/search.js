const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const Tag = require("../models/tag");
const Category = require("../models/category");
const Archive = require("../models/archive");
const Service = require("../models/service");
const Project = require("../models/project");
const Faq = require("../models/faq");

// Search route
router.get("/", async (req, res) => {
  try {
    const query = req.query.q ? req.query.q.trim() : "";

    if (!query) {
      // If no query, return all projects & services as default
      const [projects, services] = await Promise.all([
        Project.find({}).lean(),
        Service.find({}).lean(),
      ]);

      const formattedProjects = projects.map(p => ({
        title: p.title,
        description: p.description || "Project details here",
        link: `/projects/${p.slug}`,
      }));

      const formattedServices = services.map(s => ({
        title: s.title,
        description: s.description || "Service details here",
        link: `/services/${s.slug}`,
      }));

      return res.render("pages/results", {
        query,
        results: {
          blogs: [],
          tags: [],
          categories: [],
          archives: [],
          services: formattedServices,
          projects: formattedProjects,
          faqs: [],
        },
      });
    }

    // Run all searches in parallel using $text search
    const regex = new RegExp(query, "i");

    const [
      blogs,
      tags,
      categories,
      archives,
      services,
      projects,
      faqs,
    ] = await Promise.all([
      Blog.find({ $text: { $search: query } }).limit(10).lean(),
      Tag.find({ title: regex }).limit(10).lean(),
      Category.find({ $text: { $search: query } }).limit(10).lean(),
      Archive.find({ $text: { $search: query } }).limit(10).lean(),
      Service.find({ $text: { $search: query } }).limit(10).lean(),
      Project.find({}).lean(),      
      Faq.find({}).lean()
    ]);

    const formattedProjects = projects.map(p => ({
      title: p.title,
      description: p.description || "Project details here",
      link: `/projects/${p.slug}`,
    }));

    const formattedServices = services.map(s => ({
      title: s.title,
      description: s.description || "Service details here",
      link: `/services/${s.slug}`,
    }));

    res.render("pages/results", {
      query,
      results: {
        blogs,
        tags,
        categories,
        archives,
        services: formattedServices,
        projects: formattedProjects,
        faqs,
      },
    });
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;