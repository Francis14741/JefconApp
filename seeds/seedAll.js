const mongoose = require("mongoose");
require("dotenv").config();

// Import individual seeders
const seedTags = require("./seedTags");
const seedCategories = require("./seedCategories");
const seedArchives = require("./seedArchives");
const seedFaqs = require("./seedFaqs");
const seedServices = require("./seedServices");
const seedProjects = require("./seedProjects");
const seedBlogs = require("./seedBlogs");

const MONGO_URI = "mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/jefconapp?retryWrites=true&w=majority&appName=jefconapp"

async function seedAll() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");

    // Run in order so relationships link correctly
    await seedTags();
    await seedCategories();
    await seedArchives();
    await seedFaqs();
    await seedServices();
    await seedProjects();
    await seedBlogs();

    console.log("🎉 All seeding done!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
}

seedAll();