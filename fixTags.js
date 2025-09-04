// fixTags.js
const mongoose = require("mongoose");

// 🟡 Replace with your actual MongoDB connection string
const MONGODB_URI =
  "mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/jefconapp?retryWrites=true&w=majority&appName=Jefconapp";

// Replace with the correct path if your Blog model is elsewhere
const Blog = require("./models/Blog");

async function fixDuplicateTags() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    const blogs = await Blog.find({});
    let updatedCount = 0;
    let skippedCount = 0;

    for (const blog of blogs) {
      if (!Array.isArray(blog.tags)) continue;

      const originalTags = blog.tags.map((t) => t.trim().toLowerCase());
      const uniqueTags = [...new Set(originalTags)];

      if (originalTags.length !== uniqueTags.length) {
        console.log(`🛠 Fixing blog: ${blog.title || blog._id}`);
        console.log(`   Before: [${originalTags.join(", ")}]`);
        console.log(`   After : [${uniqueTags.join(", ")}]\n`);

        await Blog.updateOne({ _id: blog._id }, { $set: { tags: uniqueTags } });
        updatedCount++;
      } else {
        skippedCount++;
      }
    }

    console.log(`\n✅ Tag cleanup complete.`);
    console.log(`🔄 Updated: ${updatedCount} blog(s)`);
    console.log(`✅ Skipped: ${skippedCount} blog(s) (already clean)`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error during tag cleanup:", error);
    process.exit(1);
  }
}

fixDuplicateTags();
