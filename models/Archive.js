const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const archiveSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true }, // e.g., 'archives_2025_june'
  description: String,
  content: String,
  blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],// ✅ reference blogs
  createdAt: { type: Date, default: Date.now }
});

archiveSchema.pre("save", function (next) {
  if (!this.slug) this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

// Text index for search
archiveSchema.index({
  title: "text",
  content: "text",
  description: "text",
  slug: "text"
});

module.exports = mongoose.models.Archive || mongoose.model("Archive", archiveSchema);
