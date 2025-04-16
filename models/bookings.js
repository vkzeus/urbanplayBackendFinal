const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    turfName: { type: String, required: true },
    rate: { type: Number, required: true },
    
    user: {
      type: String
      
    },
  });

const booked = mongoose.model("booking", bookingSchema);

module.exports = booked;



