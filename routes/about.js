const express = require("express");
const router = express.Router();
const Team = require('../models/team');
const Commitment = require('../models/commitment');
const PrivacyPolicy = require('../models/privacyPolicy');

router.get("/team", async (req, res) => {
  const team = await Team.find({});
  res.render("about/team", { currentRoute: "other" });
});

router.get("/commitment", async (req, res) => {
  const commitment = await Commitment.find({});
  res.render("about/commitment", { currentRoute: "other" });
});

router.get("/privacyPolicy", async (req, res) => {
  const privacyPolicy = await privacyPolicy.find({});
  res.render("about/privacyPolicy", { currentRoute: "other" });
});

module.exports = router;
