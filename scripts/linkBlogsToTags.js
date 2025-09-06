const mongoose = require("mongoose");
const Blog = require("../models/blog");
const Tag = require("../models/tag");
const slugify = require("slugify");
require("dotenv").config(); // ✅ load .env when running locally

// Use env var if available, otherwise fallback to your hardcoded URI
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/JefconApp?retryWrites=true&w=majority&appName=Jefconapp";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1);
  });

function stem(word) {
  return word
    ? word.toLowerCase().replace(/[^a-z0-9]/gi, "").replace(/s$/i, "")
    : "";
}

function normalize(text) {
  return text ? text.toLowerCase().replace(/[^a-z0-9\s]/gi, "") : "";
}

async function linkBlogsAndTagsSmart() {
  try {
    const blogs = await Blog.find({});
    const tags = await Tag.find({});

    for (const blog of blogs) {
      if (blog.tags && blog.tags.length > 0) continue;

      let matchedTagIds = [];

      const blogText = [
        blog.title || "",
        blog.description || "",
        blog.content || "",
      ]
        .map(normalize)
        .join(" ");

      const blogWords = blogText.split(/\s+/).map(stem);

      for (const tag of tags) {
        if (!tag.name) continue;

        const keywords = [tag.name, ...(tag.keywords || [])].map(stem);

        const matched = keywords.some(
          (keyword) => keyword && blogWords.includes(keyword)
        );

        if (matched) {
          matchedTagIds.push(tag._id);

          if (!tag.blogs) tag.blogs = [];
          if (!tag.blogs.includes(blog._id)) {
            tag.blogs.push(blog._id);
            await tag.save();
          }
        }
      }

      if (matchedTagIds.length > 0) {
        blog.tags = matchedTagIds;
        await blog.save();
        console.log(`🔗 Linked blog: "${blog.title}" with ${matchedTagIds.length} tags`);
      }
    }

    console.log("🎉 All blogs and tags have been linked successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error linking blogs and tags:", err);
    mongoose.connection.close();
    process.exit(1);
  }
}

linkBlogsAndTagsSmart();