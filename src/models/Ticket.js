const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },

  visitorId: { type: Number, required: true },

  type: {
    type: String,
    required: true,
    enum: ["day", "season", "vip"]
  },

  price: { type: Number, required: true, min: 0 },

  purchaseDate: { type: Date, required: true, default: Date.now },

  validUntil: { type: Date, required: true },

  // ✅ bonus
  basePrice: { type: Number, min: 0 },
  discountCode: { type: String, trim: true }

}, { timestamps: true });

module.exports = mongoose.model("Ticket", ticketSchema);
