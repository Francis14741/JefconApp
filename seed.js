require("dotenv").config();
const mongoose = require("mongoose");
const slugify = require("slugify");

// Import your models
const Tag = require("./models/Tag");
const Category = require("./models/Category");
const Archive = require("./models/Archive");
const Blog = require("./models/Blog");

// Import your seed data
const tags = require("./data/tags");
const categories = require("./data/categories");
const archives = require("./data/archives");
const blogs = require("./data/blogs");

const validateAndSlugify = (items, type) => {
  return items.map((item, index) => {
    if (!item.title || typeof item.title !== "string") {
      throw new Error(`❌ [${type}] Missing or invalid title at index ${index}: ${JSON.stringify(item)}`);
    }
    return {
      ...item,
      slug: slugify(item.title, { lower: true, strict: true, replacement: "" })
    };
  });
};

(async () => {
  console.log("🚀 Starting full database seeding...");

  try {
    await mongoose.connect(process.env.MONGO);
    console.log("✅ Connected to MongoDB");

    // Seed Tags
    await Tag.deleteMany({});
    console.log("🗑 Deleted existing tags.");
    const validatedTags = validateAndSlugify(tags, "Tag");
    await Tag.insertMany(validatedTags);
    console.log(`✅ Seeded ${validatedTags.length} tags.`);

    // Seed Categories
    await Category.deleteMany({});
    console.log("🗑 Deleted existing categories.");
    const validatedCategories = validateAndSlugify(categories, "Category");
    await Category.insertMany(validatedCategories);
    console.log(`✅ Seeded ${validatedCategories.length} categories.`);

    // Seed Archives
    await Archive.deleteMany({});
    console.log("🗑 Deleted existing archives.");
    const validatedArchives = validateAndSlugify(archives, "Archive");
    await Archive.insertMany(validatedArchives);
    console.log(`✅ Seeded ${validatedArchives.length} archives.`);

    // Seed Blogs
    await Blog.deleteMany({});
    console.log("🗑 Deleted existing blogs.");
    const validatedBlogs = blogs.map((blog, index) => {
      if (!blog.title || typeof blog.title !== "string") {
        throw new Error(`❌ [Blog] Missing or invalid title at index ${index}`);
      }
      if (!blog.content || typeof blog.content !== "string") {
        throw new Error(`❌ [Blog] Missing or invalid content at index ${index}`);
      }
      return {
        ...blog,
        slug: slugify(blog.title, { lower: true, strict: true, replacement: "" })
      };
    });
    await Blog.insertMany(validatedBlogs);
    console.log(`✅ Seeded ${validatedBlogs.length} blogs.`);

    console.log("🎉 All data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error in seeding process:", error.message);
    process.exit(1);
  }
})();