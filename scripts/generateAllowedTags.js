const mongoose = require("mongoose");
const Post = require("../models/post"); // adjust path as needed

const MONGO_URI =
  "mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/?retryWrites=true&w=majority&appName=Jefconapp"; // Replace with your real URI

async function generateAllowedTags() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB...");

    // Get all unique tags
    const result = await Post.aggregate([
      { $unwind: "$tags" },
      { $group: { _id: "$tags" } },
      { $sort: { _id: 1 } },
    ]);

    const allTags = await Blog.distinct("tags");
    const tags = result.map((item) => item._id.trim().toLowerCase());

    console.log("\n✅ allowedTags = [");
    tags.forEach((tag, i) => {
      console.log(`  "${tag}"${i < tags.length - 1 ? "," : ""}`);
    });
    console.log("];\n");

    process.exit();
  } catch (err) {
    console.error("❌ Error generating tags:", err);
    process.exit(1);
  }
}

generateAllowedTags();
