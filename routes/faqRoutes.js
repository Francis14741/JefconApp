// routes/faqRoutes.js
const express = require("express");
const router = express.Router();
const Faq = require('../models/faq');

// General FAQ page
router.get("/", async (req, res) => {
  try {
    const faqs = await Faq.find().sort({ createdAt: -1 });
    res.render("faqs/index", { faqs });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading FAQs");
  }
});

// Single FAQ by slug
router.get("/:slug", async (req, res) => {
  try {
    const faq = await Faq.findOne({ slug: req.params.slug });
    if (!faq) return res.status(404).render("pages/404", { message: "FAQ not found" });

    res.render("faqs/show", { faq });
  } catch (err) {
    console.error(err);
    res.status(500).render("pages/500", { message: "Server error" });
  }
});

module.exports = router;