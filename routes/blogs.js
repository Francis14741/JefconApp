const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");


// List all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate("tags categories archive");
    res.render("blogs/index", { blogs, title: "All Blogs" });
  } catch (err) {
    console.error("Error loading blogs:", err);
    res.status(500).render("error/500", { error: err });
  }
});


router.get("/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).send("Blog not found");
    }

    // Render EJS page based on slug
    res.render(`blogs/${blog.slug}`, { blog });

  } catch (err) {
    console.error("Blog route error:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;


