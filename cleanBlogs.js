const mongoose = require("mongoose");
const Blog = require("./models/Blog"); // Adjust path as needed
const Tag = require("./models/Tag"); // Optional: to validate existing tags
require("dotenv").config();

const MONGO_URI =
  "mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/jefconapp?retryWrites=true&w=majority&appName=Jefconapp";

async function cleanBlogTags() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB...");

    // Get all valid tag names from Tag collection (optional)
    const validTags = await Tag.find({});
    const validTagNames = new Set(
      validTags.map((t) => t.name.trim().toLowerCase())
    );

    const blogs = await Blog.find({});
    let cleanedCount = 0;

    for (const blog of blogs) {
      if (!Array.isArray(blog.tags)) continue;

      const cleanedTags = blog.tags
        .filter((tag) => tag && typeof tag === "string") // remove null/undefined
        .map((tag) => tag.trim().toLowerCase()) // normalize
        .filter((tag) => validTagNames.has(tag)); // ensure tag exists in Tag collection

      const uniqueTags = [...new Set(cleanedTags)];

      // Only update if something changed
      if (JSON.stringify(blog.tags) !== JSON.stringify(uniqueTags)) {
        blog.tags = uniqueTags;
        await blog.save();
        cleanedCount++;
      }
    }

    console.log(`✅ Cleaned tags for ${cleanedCount} blog(s).`);
    process.exit();
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

cleanBlogTags();
