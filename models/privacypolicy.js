const mongoose = require("mongoose");

const privacyPolicySchema = new mongoose.Schema({
  policy: String,
});

module.exports = mongoose.model("PrivacyPolicy", privacyPolicySchema);
