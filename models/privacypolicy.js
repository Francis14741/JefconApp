const mongoose = require("mongoose");

const privacyPolicySchema = new mongoose.Schema({
  title: { type: String, default: "Privacy Policy" },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("PrivacyPolicy", privacyPolicySchema);