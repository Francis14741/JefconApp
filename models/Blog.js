const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  tags: [String],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  archives: [{ type: mongoose.Schema.Types.ObjectId, ref: "Archive" }],
  mainPageSlug: { type: String } ,
  createdAt: { type: Date, default: Date.now }
});

blogSchema.pre("save", function (next) {
  if (!this.slug) this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

module.exports = mongoose.models.blog || mongoose.model("blog", blogSchema);
