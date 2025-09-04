const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }   // ✅ new field
});

module.exports = mongoose.model("Message", messageSchema);