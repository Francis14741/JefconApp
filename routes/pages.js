const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Service = require('../models/service');
const Faq = require('../models/faq');
const Project = require('../models/project');
const Archive = require('../models/archive');
const Category = require('../models/category');
const Tag = require('../models/tag');
const Message = require("../models/message");

// Home page
router.get('/', (req, res) => {
  res.render('pages/jefcon_associates');
});

// Blog static pages
router.get("/blogs", (req, res) => res.render("pages/blogs"));
router.get("/blogs_page2", (req, res) => res.render("pages/blogs_page2"));
router.get("/blogs_page3", (req, res) => res.render("pages/blogs_page3"));
router.get("/blogs_page4", (req, res) => res.render("pages/blogs_page4"));
router.get("/blogs_page5", (req, res) => res.render("pages/blogs_page5"));

// Contact page (with recent archives + message form)
router.get('/contact', async (req, res) => {
  const recentArchives = await Archive.find().sort({ createdAt: -1 }).limit(5);
  res.render('pages/contact', { recentArchives });
});

router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, message } = req.body;
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).send("All required fields are required.");
    }

    await Message.create({ firstName, lastName, phoneNumber, email, message });
    res.render("pages/contact", { success: "✅ Message sent successfully!" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).send("Something went wrong, please try again later.");
  }
});

// Admin messages
router.get('/admin/messages', async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.render('admin/messages', { messages });
});

router.get("/admin/messages/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).send("Message not found");
    res.render("admin/message_detail", { message });
  } catch (err) {
    console.error(err);
    res.status(500).send("Could not load message");
  }
});

router.post("/admin/messages/delete/:id", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.redirect("/admin/messages");
  } catch (err) {
    console.error("Error deleting message:", err);
    res.status(500).send("Could not delete message");
  }
});

// Other static pages (⚠️ removed "contact" to avoid conflict)
const staticPages = [
  "faq_construction",
  "faq_stormwater",
  "faq_consultancy",
  "faq_participation",
  "website",
  "website2",
  "website3",
  "website4",
  "website5",
  "project_footer",
  "services_footer",
  "privacy_policy_footer",
  "faq_footer"
];

staticPages.forEach(page => {
  router.get(`/${page}`, (req, res) => {
    res.render(`pages/${page}`);
  });
});

// Dynamic content route
router.get('/content/:type/:slug', async (req, res) => {
  const { type, slug } = req.params;
  let content;

  try {
    switch (type.toLowerCase()) {
      case 'blog':
        content = await Blog.findOne({ slug });
        break;
      case 'service':
        content = await Service.findOne({ slug });
        break;
      case 'faq':
        content = await Faq.findOne({ slug });
        break;
      case 'project':
        content = await Project.findOne({ slug });
        break;
      case 'archive':
        content = await Archive.findOne({ slug });
        break;
      case 'category':
        content = await Category.findOne({ slug });
        break;
      case 'tag':
        content = await Tag.findOne({ slug });
        break;
      default:
        return res.status(404).render('pages/404');
    }

    if (!content) return res.status(404).render('pages/404');

    res.render('pages/contentDetail', {
      content,
      type,
      title: content.title || 'Content',
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;