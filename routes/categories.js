const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Blog = require("../models/blog");

router.get("/case_studies", async (req, res) => {
  const category = await Category.findOne({ slug: "case_studies" });
  res.render("categories/case_studies", { category });
});

router.get("/construction_law", async (req, res) => {
  const category = await Category.findOne({ slug: "construction_law" });
  res.render("categories/construction_law", { category });
});

router.get("/construction_technology", async (req, res) => {
  const category = await Category.findOne({ slug: "construction_technology" });
  res.render("categories/construction_technology", { category });
});

router.get("/consultancy_advisory", async (req, res) => {
  const category = await Category.findOne({ slug: "consultancy_advisory" });
  res.render("categories/consultancy_advisory", { category });
});

router.get("/engdesign_simulation", async (req, res) => {
  const category = await Category.findOne({ slug: "engdesign_simulation" });
  res.render("categories/engdesign_simulation", { category });
});

router.get("/category_eng_surveys", async (req, res) => {
  const category = await Category.findOne({ slug: "category_eng_surveys" });
  res.render("categories/category_eng_surveys", { category });
});

router.get("/cat_environmental", async (req, res) => {
  const category = await Category.findOne({ slug: "cat_environmental" });
  res.render("categories/cat_environmental", { category });
});

router.get("/cat_feasibility_eco", async (req, res) => {
  const category = await Category.findOne({ slug: "cat_feasibility_eco" });
  res.render("categories/cat_feasibility_eco", { category });
});

router.get("/industrynews_trend", async (req, res) => {
  const category = await Category.findOne({ slug: "industrynews_trend" });
  res.render("categories/industrynews_trend", { category });
});

router.get("/innovation_research", async (req, res) => {
  const category = await Category.findOne({ slug: "innovation_research" });
  res.render("categories/innovation_research", { category });
});

router.get("/mech_elec_plumbing", async (req, res) => {
  const category = await Category.findOne({ slug: "mech_elec_plumbing" });
  res.render("categories/mech_elec_plumbing", { category });
});

router.get("/pro_superv_cat", async (req, res) => {
  const category = await Category.findOne({ slug: "pro_superv_cat" });
  res.render("categories/pro_superv_cat", { category });
});

router.get("/proj_valuation_cost", async (req, res) => {
  const category = await Category.findOne({ slug: "proj_valuation_cost" });
  res.render("categories/proj_valuation_cost", { category });
});

router.get("/safety_regulations", async (req, res) => {
  const category = await Category.findOne({ slug: "safety_regulations" });
  res.render("categories/safety_regulations", { category });
});

router.get("/training_education", async (req, res) => {
  const category = await Category.findOne({ slug: "training_education" });
  res.render("categories/training_education", { category });
});

router.get("/uncategorized", async (req, res) => {
  const category = await Category.findOne({ slug: "uncategorized" });
  res.render("categories/uncategorized", { category });
});

router.get("/uncategorized_2", async (req, res) => {
  const category = await Category.findOne({ slug: "uncategorized_2" });
  res.render("categories/uncategorized_2", { category });
});

router.get("/uncategorized_3", async (req, res) => {
  const category = await Category.findOne({ slug: "uncategorized_3" });
  res.render("categories/uncategorized_3", { category });
});

router.get("/uncategorized_4", async (req, res) => {
  const category = await Category.findOne({ slug: "uncategorized_4" });
  res.render("categories/uncategorized_4", { category });
});

router.get("/categories/:page", (req, res) => {
  const page = req.params.page;

  if (!validViews.includes(page)) {
    return res.status(404).render("error/404", { url: req.originalUrl });
  }

  res.render(`categories/${page}`);
});

// All categories
router.get('/', async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });
  res.render('categories/index', { categories, title: 'All Categories', layout: 'partials/layout' });
});

// Single category by slug
router.get('/:slug', async (req, res) => {
  const category = await Category.findOne({ slug: req.params.slug });
  if (!category) return res.status(404).render('error/404', { url: req.originalUrl, layout: 'partials/layout' });

  const blogs = await Blog.find({ categories: category._id });
  res.render('categories/show', { category, blogs, title: `Category: ${category.title}`, layout: 'partials/layout' });
});

module.exports = router;