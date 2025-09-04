const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: String,
  position: String,
  bio: String,
});

module.exports = mongoose.model("Team", TeamSchema);
