

const mongoose = require("mongoose");

const ParcelSchema = new mongoose.Schema({

  senderName: { type: String, required: true },
  senderPhoneNumber: { type: String, required: true },
  receiverName: { type: String, required: true },
  receiverPhoneNumber: { type: String, required: true },
  pickupAddress: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  weight: { type: Number, required: true }, 
  dimensions: { type: String, required: true }, 
 
  status: { 
    type: String, 
    enum: ["created", "processing", "in-transit", "delivered", "failed"], 
    default: "created" 
  },
  trackingId: { type: String, required: true, unique: true }, 
  route: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Route", 
    default: null 
  }
});

module.exports = mongoose.model("Parcel", ParcelSchema);
