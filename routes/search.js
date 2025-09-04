const express = require("express");
const router = express.Router();
const Blog = require('../../models/blog');
const Service = require('../../models/service');
const Project = require('../../models/project');
const Archive = require('../../models/archive');
const FAQ = require('../../models/faq');
const Tag = require('../../models/tag');
const Category = require('../../models/category');

router.get("/", async (req, res) => {
  const query = req.query.q || "";

  try {
    // --- BLOGS ---
    const blogs = await Blog.find({ $text: { $search: query } });
    const blogResults = blogs.map(blog => ({
      title: blog.title,
      description: blog.content ? blog.content.substring(0, 50) : "",
      link: `/blogs/${blog.slug}`,
      type: 'Blog'
    }));

    // --- SERVICES ---
    const services = await Service.find({ $text: { $search: query } });
    const serviceResults = services.map(s => ({
      title: s.title,
      description: s.content ? s.content.substring(0, 50) : "",
      link: `/services/${s.slug}`,
      type: 'Service'
    }));

    // --- PROJECTS ---
    const projects = await Project.find({ $text: { $search: query } });
    const projectResults = projects.map(p => ({
      title: p.title,
      description: p.content ? p.content.substring(0, 50) : "",
      link: `/projects/${p.slug}`,
      type: 'Project'
    }));

    // --- ARCHIVES ---
    const archives = await Archive.find({ $text: { $search: query } });
    const archiveResults = archives.map(a => ({
      title: a.title,
      description: a.content ? a.content.substring(0, 50) : "",
      link: `/archives/${a.slug}`,
      type: 'Archive'
    }));

    // --- FAQ Categories & FAQ Q/A ---
    const faqs = await FAQ.find({ $text: { $search: query } });
    const faqCategoryResults = faqs.map(faq => ({
      title: faq.title,
      description: faq.content ? faq.content.substring(0, 50) : "",
      link: `/faqs/${faq.slug}`,
      type: 'FAQ'
    }));

    const faqQAResults = faqs.map(faq => ({
      title: faq.title,
      description: faq.content ? faq.content.substring(0, 50) : "",
      link: `/faqs/${faq.slug}`,
      type: 'FAQ'
    }));

    // --- TAGS ---
    const tags = await Tag.find({ $text: { $search: query } });
    const tagResults = tags.map(tag => ({
      title: tag.title,
      description: `View all items tagged "${tag.title}"`,
      link: `/tags/${tag.slug}`,
      type: 'Tag'
    }));

    // --- CATEGORIES ---
    const categories = await Category.find({ $text: { $search: query } });
    const categoryResults = categories.map(cat => ({
      title: cat.title,
      description: `View all items in category "${cat.title}"`,
      link: `/categories/${cat.slug}`,
      type: 'Category'
    }));

    // --- Render ---
    res.render("search/results", {
      query,
      blogResults,
      serviceResults,
      projectResults,
      archiveResults,
      faqCategoryResults,
      faqQAResults,
      tagResults,
      categoryResults
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;