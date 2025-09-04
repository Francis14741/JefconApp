const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  title: String,
  description: String,
  content: String,
});

projectSchema.index({
  title: "text",
  slug: "text",
  description: "text",
  content: "text",
});

projectSchema.pre("save", function (next) {
  if (!this.slug) this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

// ✅ Only define model if it hasn't been defined already
module.exports =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
