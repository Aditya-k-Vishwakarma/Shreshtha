// const mongoose = require('mongoose');

// const notificationSchema = new mongoose.Schema({
//   parcelId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Parcel',
//     required: true,
//   },
//   recipientContact: {
//     type: String,
//     required: [true,"recipient contact is required"]
//   },
//   message: {
//     type: String,
//     required: [true,"message is required"],
//   },
//   status: {
//     type: String,
//     enum: ['sent', 'pending', 'failed'],
//     default: 'pending',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Notification = mongoose.model('Notification', notificationSchema);

// module.exports = Notification;


const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  notificationId: { type: String, required: true, unique: true }, // Auto-generated
  parcel: { type: mongoose.Schema.Types.ObjectId, ref: "Parcel", required: true }, // Reference to Parcel Model
  message: { type: String, required: true }, // Notification content
  phoneNumber: { type: String, required: true }, // Receiver's phone number
  status: { type: String, enum: ["sent", "failed"], default: "sent" },
  sentAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Notification", NotificationSchema);
