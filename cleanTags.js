const mongoose = require("mongoose");
const Tag = require("./models/Tag"); // Adjust if in different folder
require("dotenv").config(); // if you're using a .env file for MONGO_URI

const MONGO_URI =
  "mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/jefconapp?retryWrites=true&w=majority&appName=Jefconapp";

async function cleanTags() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB...");

    const allTags = await Tag.find({});

    const seen = new Set();
    const duplicates = [];
    const invalids = [];

    for (const tag of allTags) {
      if (!tag.name) {
        invalids.push(tag._id);
        continue;
      }

      const name = tag.name.trim().toLowerCase(); // Normalize
      if (seen.has(name)) {
        duplicates.push(tag._id);
      } else {
        seen.add(name);

        // Optional: Normalize tag name in DB
        if (tag.name !== name) {
          tag.name = name;
          await tag.save();
        }
      }
    }

    // Remove invalid tags
    if (invalids.length > 0) {
      await Tag.deleteMany({ _id: { $in: invalids } });
      console.log(`Deleted ${invalids.length} invalid tag(s)`);
    }

    // Remove duplicate tags
    if (duplicates.length > 0) {
      await Tag.deleteMany({ _id: { $in: duplicates } });
      console.log(`Deleted ${duplicates.length} duplicate tag(s)`);
    }

    console.log("✅ Tag cleanup complete.");
    process.exit();
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

cleanTags();
