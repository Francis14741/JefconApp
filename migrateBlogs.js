const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const Tag = require("./models/Tag");
const Category = require("./models/Category");
const Archive = require("./models/Archive");

(async () => {
  try {
    await mongoose.connect("mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/?retryWrites=true&w=majority&appName=jefconapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    const blogs = await Blog.find({});
    console.log(`Found ${blogs.length} blogs to migrate...`);

    for (const blog of blogs) {
      let updated = false;

      // 🔹 1. Convert tagsSlugs → tags (ObjectIds)
      if (Array.isArray(blog.tagsSlugs) && blog.tagsSlugs.length > 0) {
        const tagDocs = await Tag.find({ slug: { $in: blog.tagsSlugs } });
        const tagIds = tagDocs.map(tag => tag._id);

        if (tagIds.length > 0) {
          blog.tags = tagIds;
          updated = true;
        }
      }

      // 🔹 2. Convert categorySlug → category (ObjectId)
      if (blog.categorySlug) {
        const catDoc = await Category.findOne({ slug: blog.categorySlug });
        if (catDoc) {
          blog.category = catDoc._id;
          updated = true;
        }
      }

      // 🔹 3. Convert archiveSlug → archive (ObjectId)
      if (blog.archiveSlug) {
        const archiveDoc = await Archive.findOne({ slug: blog.archiveSlug });
        if (archiveDoc) {
          blog.archive = archiveDoc._id;
          updated = true;
        }
      }

      // 🔹 4. Save changes if anything was updated
      if (updated) {
        await blog.save();
        console.log(`✅ Updated blog: ${blog.slug}`);
      }
    }

    console.log("🎉 Migration complete!");
    process.exit();
  } catch (err) {
    console.error("❌ Migration failed:", err);
    process.exit(1);
  }
})();