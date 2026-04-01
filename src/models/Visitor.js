const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },

  name: { type: String, required: true, trim: true },

  age: { type: Number, required: true, min: 0 },

  height: { type: Number, required: true, min: 0 }, // cm

  // ✅ bonus
  email: { type: String, trim: true, lowercase: true },
  membershipType: {
    type: String,
    enum: ["regular", "student", "family"],
    default: "regular"
  },
  birthDate: { type: Date }

}, { timestamps: true });

module.exports = mongoose.model("Visitor", visitorSchema);
