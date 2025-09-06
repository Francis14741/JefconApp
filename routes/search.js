const express = require("express");
const router = express.Router();

const Blog = require('../models/blog');
const Service = require('../models/service');
const Project = require('../models/project');
const Archive = require('../models/archive');
const Faq = require('../models/faq');
const Tag = require('../models/tag');
const Category = require('../models/category');

router.get("/", async (req, res) => {
  const query = req.query.q || "";

  try {
    // --- BLOGS ---
    const blogs = await Blog.find({ $text: { $search: query } });
    const blogResults = blogs.map(blog => ({
      title: blog.title,
      slug: blog.slug,
      description: blog.content?.substring(0, 150) || "",
      type: "Blog",
      link: `/blogs/${blog.slug}`
    }));

    // --- SERVICES ---
    const services = await Service.find({ $text: { $search: query } });
    const serviceResults = services.map(s => ({
      title: s.title,
      description: s.content?.substring(0, 50) || "",
      link: `/services/${s.slug}`,
      type: 'Service'
    }));

    // --- PROJECTS ---
    const projects = await Project.find({ $text: { $search: query } });
    const projectResults = projects.map(p => ({
      title: p.title,
      description: p.content?.substring(0, 50) || "",
      link: `/projects/${p.slug}`,
      type: 'Project'
    }));

    // --- ARCHIVES ---
    const archives = await Archive.find({ $text: { $search: query } });
    const archiveResults = archives.map(a => ({
      title: a.title,
      description: a.content?.substring(0, 50) || "",
      link: `/archives/${a.slug}`,
      type: 'Archive'
    }));

    // --- FAQ Categories & FAQ Q/A ---    
    const faqs = await Faq.find({ $text: { $search: query } });

    const faqResults = faqs.map(faq => ({
      title: faq.title,
      description: faq.description,
      slug: faq.slug,
      questions: faq.questions.slice(0, 2), // preview first 2
      tags: faq.tags || []
    }));

    // --- TAGS ---
    const tags = await Tag.find({ $text: { $search: query } });
    const tagResults = tags.map(tag => ({
      title: tag.title,
      slug: tag.slug,
      description: `View all items tagged "${tag.title}"`,
      type: "Tag",
      link: `/tags/${tag.slug}`
    }));

    // --- CATEGORIES ---
    const categories = await Category.find({ $text: { $search: query } });
    const categoryResults = categories.map(cat => ({
      title: cat.title,
      description: `View all items in category "${cat.title}"`,
      link: `/categories/${cat.slug}`,
      type: 'Category'
    }));

    // --- Render search results ---
    res.render("search/results", {
      query,
      blogResults,
      serviceResults,
      projectResults,
      archiveResults,
      faqResults,
      tagResults,
      categoryResults
    });

  } catch (err) {
    console.error("Search route error:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;