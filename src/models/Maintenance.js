const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },

  rideId: { type: Number, required: true },

  employeeId: { type: Number, required: true },

  date: { type: Date, required: true },

  description: { type: String, required: true, trim: true },

  status: {
    type: String,
    required: true,
    enum: ["scheduled", "in-progress", "completed"],
    default: "scheduled"
  },

  // ✅ bonus
  priority: {
    type: String,
    enum: ["low", "normal", "urgent"],
    default: "normal"
  },
  costEstimate: { type: Number, min: 0 },
  completedAt: { type: Date }

}, { timestamps: true });

maintenanceSchema.pre("save", function(next){
  if (this.status === "completed" && !this.completedAt){
    this.completedAt = new Date();
  }
  next();
});

module.exports = mongoose.model("Maintenance", maintenanceSchema);
