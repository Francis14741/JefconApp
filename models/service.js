const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, required: true },
  content: String,
  blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],// ✅ reference blogs
  category: String,
  createdAt: { type: Date, default: Date.now }
});

serviceSchema.index({
  title: "text",
  slug: "text",
  description: "text",
  content: "text",
});

serviceSchema.pre("save", function (next) {
  if (!this.slug) this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

module.exports =
  mongoose.models.service || mongoose.model("service", serviceSchema);

