const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  archives: [{ type: mongoose.Schema.Types.ObjectId, ref: "Archive" }],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  createdAt: { type: Date, default: Date.now }
});

blogSchema.index({
  title: "text",
  slug: "text",
  content: "text",
  description: "text"
});

// Only generate slug if not set
blogSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema);