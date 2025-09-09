const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
});

projectSchema.index({
  title: "text",
  description: "text",
});

projectSchema.pre("save", function (next) {
  if (!this.slug) this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

// ✅ Only define model if it hasn't been defined already
module.exports =
  mongoose.models.project || mongoose.model("project", projectSchema);
