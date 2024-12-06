// const mongoose = require('mongoose');

// const routeSchema = new mongoose.Schema({
//   parcelId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Parcel',
//     required: true,
//   },
//   source: {
//     type: String,
//     required: [true,"Source is required"],
//   },
//   destination: {
//     type: String,
//     required: [true,"destination is required"],
//   },
//   transportMode: {
//     type: String,
//     enum: ['air', 'train', 'road', 'ship'],
//     required: [true,"Please select transport mode"],
//   },
//   estimatedDeliveryTime: {
//     type: Date,
//     required: true,
//   },
//   distance: {
//     type: Number,
//     required: [true, "Total distance"], // in kilometers
//   },
//   cost: {
//     type: Number,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Route = mongoose.model('Route', routeSchema);

// module.exports = Route;

const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema({
  routeId: { type: String, required: true, unique: true }, // Auto-generated
  parcel: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Parcel", 
    required: true // Linked to the Parcel for which this route is generated
  },
  optimizedPath: { 
    type: [String], 
    required: true // AI/ML output: List of locations (city names or coordinates)
  },
  mode: { 
    type: String, 
    enum: ["road", "rail", "air", "water"], 
    required: true // AI/ML output: Transport mode
  },
  estimatedTime: { 
    type: String, 
    required: true // Example: "2 days 5 hours"
  },
  cost: { 
    type: Number, 
    required: true // Cost in INR, based on AI/ML calculations
  },
  status: { 
    type: String, 
    enum: ["active", "completed"], 
    default: "active" 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Route", RouteSchema);
