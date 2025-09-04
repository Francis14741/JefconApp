const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Project = require('../models/project');
const withRandomImage = require("../middleware/randomImage");

router.get("/pastProjects", withRandomImage, (req, res) => {
  res.render("projects/pastProjects");
});

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

router.get("/:projectSlug", (req, res) => {
  const { projectSlug } = req.params;
  
  try {
    res.render(`projects/${projectSlug}`);
  } catch (err) {
    console.error(err);
    res.status(404).render('404', { 
      url: req.originalUrl, 
      message: 'Project not found' 
    });
  }
});

module.exports = router;
