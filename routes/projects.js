// routes/projects.js
const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const withRandomImage = require("../middleware/randomImage");

// ✅ Projects index page
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().lean();
    res.render("projects/index", { projects });
  } catch (err) {
    console.error("Error loading projects:", err);
    res.status(500).send("Server Error");
  }
});

// ✅ Optional: Past projects page (static wrapper)
router.get("/pastProjects", withRandomImage, (req, res) => {
  res.render("projects/pastProjects");
});

// ✅ Optional: Recent projects page (static wrapper)
router.get("/recentProjects", withRandomImage, (req, res) => {
  res.render("projects/recentProjects");
});

router.get("/stormwater_project", (req, res) => {
  res.render("projects/stormwater_project");
});

router.get("/gallery1_project", (req, res) => {
  res.render("projects/gallery1_project");
});

router.get("/droneProject", (req, res) => {
  res.render("projects/droneProject");
});

// ✅ Single project dynamic route
router.get("/:slug", async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) return res.status(404).send("Project not found");
    res.render("projects/show", { project });
  } catch (err) {
    console.error("Project route error:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;