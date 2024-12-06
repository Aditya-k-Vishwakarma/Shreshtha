// const mongoose = require("mongoose");
// const validator = require("validator")
// const parcelSchema = new mongoose.Schema(
//   {
//     senderName: {
//       type: String,
//       required: [true, "Sender name is required"],
//     },
    
//     senderAddress: {
//       type: String,
//       required: [true, "Sender address is required"],
//     },
//     receiverName: {
//       type: String,
//       required: [true, "Receiver name is required"],
//     },
//     receiverAddress: {
//       type: String,
//       required: [true, "Receiver address is required"],
//     },
//     weight: {
//       type: Number,
//       required: [true, "Parcel weight is required"],
//       min: [0.1, "Weight must be at least 0.1 kg"],
//     },
//     dimensions: {
//       // length: { type: Number, required: true },
//       // width: { type: Number, required: true },
//       // height: { type: Number, required: true },
//       type:String,
//       required:true
//     },
//     source: {
//       type: String,
//       required: [true, "Source is required"],
//     },
//     destination: {
//       type: String,
//       required: [true, "Destination is required"],
//     },
//     trackingId: {
//       type: String,
//       unique: true,
//       required: [true, "Tracking ID is required"],
//     },
//     phoneNumber: {
//       type: String,
//       required: [true, "Phone number is required"],
//       validate: {
//         validator: function (v) {
//           return /^[6-9]\d{9}$/.test(v); // Validate Indian phone numbers
//         },
//         message: "Please provide a valid phone number",
//       },
//     },
//     status: {
//       type: String,
//       enum: ["Pending", "In Transit", "Delivered", "Cancelled"],
//       default: "Pending",
//     },
//     optimizedRoute: {
//       type: String,
//       default: "Not assigned",
//     },
//     notifications: [
//       {
//         message: { type: String },
//         timestamp: { type: Date, default: Date.now },
//       },
//     ],
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     }
    
//   },
//   {
//     timestamps: true, // Automatically add createdAt and updatedAt fields
//   }
// );

// // Pre-save hook for default values or validations
// parcelSchema.pre("save", function (next) {
//   if (!this.optimizedRoute) {
//     this.optimizedRoute = "Optimization Pending";
//   }
//   next();
// });

// const Parcel = mongoose.model("Parcel", parcelSchema);
// module.exports = Parcel;




const mongoose = require("mongoose");

const ParcelSchema = new mongoose.Schema({
  parcelId: { type: String, required: true, unique: true }, // Auto-generated
  senderName: { type: String, required: true },
  senderPhoneNumber: { type: String, required: true },
  receiverName: { type: String, required: true },
  receiverPhoneNumber: { type: String, required: true },
  pickupAddress: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  weight: { type: Number, required: true }, // Weight in kg
  dimensions: { type: String, required: true }, // Example: "10x10x10 cm"
  mode: { 
    type: String, 
    enum: ["road", "rail", "air", "water"], 
    default: null // AI/ML algorithm will decide the mode
  },
  status: { 
    type: String, 
    enum: ["created", "processing", "in-transit", "delivered", "failed"], 
    default: "created" 
  },
  trackingId: { type: String, required: true, unique: true }, // Used for tracking parcel
  route: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Route", 
    default: null // Will be updated after AI/ML generates the route
  },
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notification" }], // Notifications for updates
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Parcel", ParcelSchema);
