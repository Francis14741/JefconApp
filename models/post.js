const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  content: { type: String, required: true },
  type: { type: String, enum: ["blog", "service", "tag", "archive", "category"], default: "blog" },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],       // optional, only for blogs
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // optional
  archive: { type: mongoose.Schema.Types.ObjectId, ref: "Archive" },   // optional
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],// optional
  createdAt: { type: Date, default: Date.now },
});

postSchema.index({
  title: "text",
  content: "text",
  type: "text"
});

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema);