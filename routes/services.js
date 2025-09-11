const express = require("express");
const router = express.Router();
const Service = require('../models/service'); // <-- This is required

router.get("/engineering_design", async (req, res) => {
  const service = await Service.findOne({ slug: "engineering_design" });
  res.render("services/engineering_design", { service });
});

router.get("/project_costing", async (req, res) => {
  const service = await Service.findOne({ slug: "project_costing" });
  res.render("services/project_costing", { service });
});

router.get("/environmental_impact", async (req, res) => {
  const service = await Service.findOne({ slug: "environmental_impact" });
  res.render("services/environmental_impact", { service });
});

router.get("/project_supervision", async (req, res) => {
  const service = await Service.findOne({ slug: "project_supervision" });
  res.render("services/project_supervision", { service });
});

router.get("/engineering_surveys", async (req, res) => {
  const service = await Service.findOne({ slug: "engineering_surveys" });
  res.render("services/engineering_surveys", { service });
});

router.get("/feasibility_ecostudies", async (req, res) => {
  const service = await Service.findOne({ slug: "feasibility_ecostudies" });
  res.render("services/feasibility_ecostudies", { service });
});

router.get("/advisory_services", async (req, res) => {
  const service = await Service.findOne({ slug: "advisory_services" });
  res.render("services/advisory_services", { service });
});

// All services
router.get('/', async (req, res) => {
  const services = await Service.find().sort({ createdAt: -1 });
  res.render('services/index', { services, title: 'Our Services', layout: 'partials/layout' });
});

router.get("/:slug", async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug })

    if (!service) return res.status(404).render("404", { message: "Service not found" });

    res.render("services/show", { service });
  } catch (err) {
    console.error("Service route error:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
