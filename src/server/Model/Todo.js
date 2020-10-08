var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const PRIORITY = ["None", "Low", "Medium", "High"];
var BookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  currentState: { type: String, required: true },
  dueDate: { type: Date, required: true },
  priority: { type: String, enum: PRIORITY, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Todo", BookSchema);
