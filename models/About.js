const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  section: String,
  content: String,
});

module.exports = mongoose.model("About", AboutSchema);
