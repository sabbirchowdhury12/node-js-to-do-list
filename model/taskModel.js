const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  complete: { type: Boolean },
});

module.exports = mongoose.model("Tasks", taskSchema);
