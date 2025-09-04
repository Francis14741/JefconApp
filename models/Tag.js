// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const tagSchema = new Schema({
//   title: { text },
//   slug: { type: String,  unique: true },
//   blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }], // ✅ reference blogs
//   description: { type: String, default: "" },
//   content: { type: String, default: "" },
// });

// module.exports = mongoose.models.Tag || mongoose.model("Tag", tagSchema);


const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  title: { type: String, required: true },   // ✅ properly defined string field
  slug: { type: String, unique: true },
  blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }], // ✅ reference blogs
  description: { type: String, default: "" },
  content: { type: String, default: "" },
});

// auto-generate slug before save
tagSchema.pre('save', function (next) {
  if (!this.isModified('name')) return next();
  this.slug = slugify(this.name, { lower: true, strict: true });
  next();
});

module.exports = mongoose.models.Tag || mongoose.model("Tag", tagSchema);