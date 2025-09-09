const express = require("express");
const router = express.Router();
const Faq = require('../models/faq');
const faq = require("../models/faq");

router.get("/faq_construction", async (req, res) => {
  const faq = await Faq.findOne({ slug: "faq_construction" });
  res.render("faqs/faq_construction", { faq });
});

router.get("/faq_consultancy", async (req, res) => {
  const faq = await Faq.findOne({ slug: "faq_consultancy" });
  res.render("faqs/faq_consultancy", { faq });
});

router.get("/faq_stormwater", async (req, res) => {
  const faq = await Faq.findOne({ slug: "faq_stormwater" });
  res.render("faqs/faq_stormwater", { faq });
});

router.get("/faq_participation", async (req, res) => {
  const faq = await Faq.findOne({ slug: "faq_participation" });
  res.render("faqs/faq_participation", { faq });
});

router.get("/", async (req, res) => {
  const faqs = await Faq.find();
  res.render("faqs/index", { faqs });
});

// router.get("/:slug", async (req, res) => {
//   const Faq = await Faq.findOne({ slug: req.params.slug }).lean();
//   if (!faq) return res.status(404).send("Faq not found");
//   res.render("faqs/show", { faq });
// });

// show single FAQ by slug
router.get("/:slug", async (req, res) => {
  try {
    const faq = await Faq.findOne({ slug: req.params.slug });
    if (!faq) {
      return res.status(404).render("error/404", { url: req.originalUrl });
    }
    res.render("faqs/show", { faq });
  } catch (err) {
    console.error("Error loading FAQ:", err);
    res.status(500).render("error/500", { error: err });
  }
});

module.exports = router;

