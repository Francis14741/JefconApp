const mongoose = require("mongoose");
const slugify = require("slugify");

const faqSchema = new mongoose.Schema({
  title: { type: String, required: true },   // e.g. "Stormwater FAQs"
  slug: { type: String, required: true, unique: true },
  description: String,
  questions: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

// Generate slug from title if missing
faqSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

// Full-text index for search
faqSchema.index({
  title: "text",
  description: "text",
  "questions.question": "text",
  "questions.answer": "text"
});

module.exports = mongoose.models.Faq || mongoose.model("Faq", faqSchema);
