const mongoose = require("mongoose");
require("dotenv").config();

const seedTags = require("./seedTags");
const seedCategories = require("./seedCategories");
const seedArchives = require("./seedArchives");
const seedFaqs = require("./seedFaqs");
const seedServices = require("./seedServices");
const seedProjects = require("./seedProjects");
const seedBlogs = require("./seedBlogs");

mongoose.connect("mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@Jefconapp.4ufns6z.mongodb.net/jefconapp?retryWrites=true&w=majority&appName=jefconapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("✅ MongoDB connected");

  await seedTags();
  await seedCategories();
  await seedArchives();
  await seedFaqs();
  await seedServices();
  await seedProjects();
  await seedBlogs();  // Blogs will now see Archives in DB

  console.log("🎉 All data seeded!");
  mongoose.connection.close();
})
.catch(err => console.error("❌ MongoDB connection error:", err));