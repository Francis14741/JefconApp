const mongoose = require("mongoose");

const commitmentSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true, required: true },
  description: String,
  content: String,
});

// Search index
commitmentSchema.index({
  title: "text",
  slug: "text",
  description: "text",
  content: "text",
});

commitmentSchema.pre("save", function (next) {
  if (!this.slug) this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

module.exports =
  mongoose.models.Commitment || mongoose.model("Commitment", commitmentSchema);
