const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  position: String,
  bio: String,
});

module.exports = mongoose.model("team", teamSchema);
