const express = require("express");
const router = express.Router();

const commitmentPages = [
  "business_concept",
  "business_strategy",
  "our_values",
  "capacity_building",
  "vision_statement",
  "mission_statement",
];

commitmentPages.forEach((page) => {
  router.get(`/${page}`, (req, res) => {
    // Updated path: removed 'pages/' since files are now in views/commitment/
    res.render(`commitment/${page}`);
  });
});

module.exports = router;
