const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],          // ✅ fixed
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  archive: { type: Schema.Types.ObjectId, ref: "Archive" },      // ✅ fixed
  mainPageSlug: { type: String },
  createdAt: { type: Date, default: Date.now }
});

blogSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema);