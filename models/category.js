const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },// e.g., 'case_studies'
  description: String,
  blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],// ✅ reference blogs
  createdAt: { type: Date, default: Date.now }
});

// Automatically generate slug from title
categorySchema.pre("save", function (next) {
  if (!this.slug) this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

// Text index for search
categorySchema.index({
  title: "text",
  description: "text",
  slug: "text"
});

module.exports = mongoose.models.category || mongoose.model("category", categorySchema);

