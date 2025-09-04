const Search = require("../models/Search");

async function updateSearchIndex({ title, url, text }) {
  try {
    await Search.findOneAndUpdate(
      { url }, // unique identifier
      { title, text, url },
      { upsert: true, new: true }
    );
  } catch (err) {
    console.error("Error updating search index:", err);
  }
}

module.exports = { updateSearchIndex };
