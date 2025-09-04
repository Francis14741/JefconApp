const express = require("express");
const router = express.Router();
const Faq = require("../models/faq");

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

router.get('/', async (req, res) => {
  const faqs = await Faq.find().sort({ createdAt: -1 });
  res.render('faqs/index', { faqs });
});

router.get('/:slug', async (req, res) => {
  try {
    const faq = await Faq.findOne({ slug: req.params.slug });
    if (!faq) return res.status(404).render('pages/404');
    res.render('faqs/show', { faq });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

