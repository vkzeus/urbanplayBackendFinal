const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    turfName: { type: String, required: true },
    rate: { type: Number, required: true },
    bookedAt: { type: Date, default: Date.now }, // ← add this
  });

const booked = mongoose.model("booking", bookingSchema);

module.exports = booked;