const mongoose = require("mongoose");
const slugify = require("slugify");

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "FaqCategory" },
  slug: String,
  createdAt: { type: Date, default: Date.now }
});

// Pre-save hook: generate slug from title
faqSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

// Text index for search
faqSchema.index({
  title: "text",
  description: "text",
  "questions.question": "text",
  "questions.answer": "text"
});

module.exports = mongoose.models.Faq || mongoose.model("Faq", faqSchema);