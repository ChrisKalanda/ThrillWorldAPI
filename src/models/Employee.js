const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },

  name: { type: String, required: true, trim: true },

  position: { type: String, required: true, trim: true },

  department: { type: String, required: true, trim: true },

  // ✅ bonus
  shift: {
    type: String,
    enum: ["morning", "evening", "night"],
    default: "morning"
  },
  phoneExtension: { type: String, trim: true }

}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);
