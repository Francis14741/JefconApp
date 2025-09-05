const mongoose = require('mongoose');
const slugify = require('slugify');

const tagSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }]
});

// auto-generate slug before save
tagSchema.pre("save", function (next) {
  if (!this.slug) this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

tagSchema.index({
  title: "text",
  description: "text",
  slug: "text"
});

// ✅ Register as "Tag"
module.exports = mongoose.models.Tag || mongoose.model("Tag", tagSchema);
