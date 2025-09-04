const express = require("express");
const router = express.Router();
const Faq = require('../models/faq');

// Static list of slugs (same as your route names)
const staticFaqPages = [
  "faq_construction",
  "faq_stormwater",
  "faq_consultancy",
  "faq_participation",
];

staticFaqPages.forEach((page) => {
  router.get(`/${page}`, async (req, res) => {
    try {
      const faq = await Faq.findOne({ slug: page });
      if (!faq) {
        return res.status(404).render("pages/404", { message: "FAQ not found" });
      }

      res.render(`faqs/${page}`, { faq });
    } catch (err) {
      console.error(err);
      res.status(500).render("pages/500", { message: "Server error" });
    }
  });
});

module.exports = router;