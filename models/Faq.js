const mongoose = require('mongoose');
const slugify = require('slugify');

const faqSchema = new mongoose.Schema({
  title: String,           // category title
  slug: { type: String, unique: true },
  description: String,     // category description
  questions: [             // array of question objects
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
});

// Generate slug before saving
faqSchema.pre('save', function(next) {
  if (!this.isModified('title')) return next();
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

module.exports =
  mongoose.models.faq || mongoose.model("faq", faqSchema);