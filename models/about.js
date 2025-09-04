const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  section: String,
  content: String,
});

module.exports = mongoose.model("about", aboutSchema);
