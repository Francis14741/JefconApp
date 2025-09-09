const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const serviceSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: String,
  blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  category: String,
  createdAt: { type: Date, default: Date.now }
});

serviceSchema.index({
  title: "text",
  description: "text"
});

serviceSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.models.Service || mongoose.model("Service", serviceSchema);
