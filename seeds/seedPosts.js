const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

const Post = require("../models/Post");
const Tag = require("../models/tag");
const Category = require("../models/category");
const Archive = require("../models/archive");
const Faq = require("../models/faq");
const Service = require("../models/service");

module.exports = async function seedPosts() {
  try {
    // Load all content from JSON
    const allContent = JSON.parse(
      fs.readFileSync(path.join(__dirname, "allContent.json"), "utf-8")
    );

    for (const item of allContent) {
      switch (item.type) {
        case "blog":
          // -------- Tags --------
          const tagsIds = [];
          for (const slug of item.tagsSlugs || []) {
            const tagDoc = await Tag.findOneAndUpdate(
              { slug },
              { title: slug.replace(/-/g, " "), slug },
              { upsert: true, new: true }
            );
            tagsIds.push(tagDoc._id);
          }

          // -------- Category --------
          let categoryId = null;
          if (item.categorySlug) {
            const categoryDoc = await Category.findOneAndUpdate(
              { slug: item.categorySlug },
              { title: item.categorySlug.replace(/-/g, " "), slug: item.categorySlug },
              { upsert: true, new: true }
            );
            categoryId = categoryDoc._id;
          }

          // -------- Archive --------
          let archiveId = null;
          if (item.archiveSlug) {
            const archiveDoc = await Archive.findOneAndUpdate(
              { slug: item.archiveSlug },
              { title: item.archiveSlug.replace(/-/g, " "), slug: item.archiveSlug },
              { upsert: true, new: true }
            );
            archiveId = archiveDoc._id;
          }

          // -------- Services --------
          const servicesDocs = await Service.find({ slug: { $in: item.servicesSlugs || [] } });
          const servicesIds = servicesDocs.map(s => s._id);

          // -------- Create Blog --------
          await Post.findOneAndUpdate(
            { slug: item.slug },
            {
              title: item.title,
              slug: item.slug,
              content: item.content,
              type: item.type,
              tags: tagsIds,
              category: categoryId,
              archive: archiveId,
              services: servicesIds,
              createdAt: new Date(item.createdAt || Date.now())
            },
            { upsert: true, new: true }
          );

          console.log(`✅ Seeded blog: ${item.title}`);
          break;

        case "faq":
          await Faq.findOneAndUpdate(
            { slug: item.slug },
            {
              title: item.title,
              slug: item.slug,
              description: item.description,
              faqs: item.faqs,
              createdAt: new Date(item.createdAt || Date.now())
            },
            { upsert: true, new: true }
          );
          console.log(`✅ Seeded FAQ: ${item.title}`);
          break;

        case "category":
          await Category.findOneAndUpdate(
            { slug: item.slug },
            { title: item.title, description: item.description, slug: item.slug },
            { upsert: true, new: true }
          );
          console.log(`✅ Seeded category: ${item.title}`);
          break;

        case "archive":
          await Archive.findOneAndUpdate(
            { slug: item.slug },
            { title: item.title, description: item.description, slug: item.slug },
            { upsert: true, new: true }
          );
          console.log(`✅ Seeded archive: ${item.title}`);
          break;

        case "service":
          await Service.findOneAndUpdate(
            { slug: item.slug },
            { title: item.title, description: item.description, slug: item.slug },
            { upsert: true, new: true }
          );
          console.log(`✅ Seeded service: ${item.title}`);
          break;

        default:
          console.log(`⚠️ Skipped unknown type: ${item.type}`);
      }
    }

    // ---------------------------
    // Cleanup: Remove empty 'blogs' arrays
    // ---------------------------
    await Tag.updateMany({ blogs: { $size: 0 } }, { $unset: { blogs: "" } });
    await Category.updateMany({ blogs: { $size: 0 } }, { $unset: { blogs: "" } });
    await Archive.updateMany({ blogs: { $size: 0 } }, { $unset: { blogs: "" } });

    console.log("🧹 Cleaned up empty 'blogs' arrays in tags, categories, and archives.");

    console.log("🎉 All posts, services, FAQs, categories, archives, and tags seeded!");
  } catch (err) {
    console.error("❌ Error seeding posts:", err);
    throw err; // propagate error to seedAll.js
  }
};