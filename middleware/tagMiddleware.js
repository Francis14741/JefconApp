const Blog = require("../models/blog");

const tagMiddleware = async (req, res, next) => {
  try {
    const blogs = await Blog.find({}, "tags"); // only fetch tags
    const allTags = blogs.flatMap((blog) => blog.tags || []);
    const uniqueTags = [...new Set(allTags)];

    res.locals.uniqueTags = uniqueTags;
    next();
  } catch (err) {
    console.error("Tag middleware error:", err);
    res.locals.uniqueTags = [];
    next();
  }
};

module.exports = tagMiddleware;
