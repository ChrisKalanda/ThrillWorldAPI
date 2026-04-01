const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },

  name: { type: String, required: true, trim: true },

  capacity: { type: Number, required: true, min: 1 },

  minHeight: { type: Number, required: true, min: 0 },

  duration: { type: Number, required: true, min: 1 }, // en secondes

  status: {
    type: String,
    required: true,
    enum: ["operational", "maintenance", "closed"],
    default: "operational"
  },

  minAge: { type: Number, default: 0 },
  intensityLevel: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
  },
  isOutdoor: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model("Ride", rideSchema);
