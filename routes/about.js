const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const Commitment = require("../models/commitment");
const PrivacyPolicy = require("../models/PrivacyPolicy");

router.get("/team", async (req, res) => {
  const team = await Team.find({});
  res.render("about/team", { currentRoute: "other" });
});

router.get("/commitment", (req, res) => {
  res.render("about/commitment", { currentRoute: "other" });
});

router.get("/privacyPolicy", (req, res) => {
  res.render("about/privacyPolicy", { currentRoute: "other" });
});

module.exports = router;
