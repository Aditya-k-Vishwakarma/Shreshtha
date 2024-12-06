const Parcel = require("./../models/parcelModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/AppError");

// 1. Create a Parcel
exports.createParcel = catchAsync(async (req, res, next) => {
  const {
    senderName,
    senderAddress,
    receiverName,
    receiverAddress,
    weight,
    dimensions,
    source,
    destination,
    phoneNumber,
  } = req.body;

  // Generate unique tracking ID
  const trackingId = `POST-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const newParcel = await Parcel.create({
    senderName,
    senderAddress,
    receiverName,
    receiverAddress,
    weight,
    dimensions,
    source,
    destination,
    trackingId,
    phoneNumber,
  });

  res.status(201).json({
    status: "success",
    message: "Parcel created successfully",
    data: newParcel,
  });
});

// 2. Get All Parcels
exports.getAllParcels = catchAsync(async (req, res, next) => {
  const parcels = await Parcel.find();
  res.status(200).json({
    status: "success",
    results: parcels.length,
    data: parcels,
  });
});

// 3 Get a Single Parcel by ID
exports.getParcelById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const parcel = await Parcel.findById(id);

  if (!parcel) {
    return next(new AppError("Parcel not found", 400));
  }

  res.status(200).json({
    status: "success",
    data: parcel,
  });
});

//  Update Parcel
exports.updateParcel = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updatedParcel = await Parcel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedParcel) {
    return next(new AppError("Parcel not found", 400));
  }

  res.status(200).json({
    status: "success",
    message: "Parcel updated successfully",
    data: updatedParcel,
  });
});

// 5. Delete Parcel
exports.deleteParcel = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const parcel = await Parcel.findByIdAndDelete(id);

  if (!parcel) {
    return next(new AppError('Parcel not found', 404));

  }

  res.status(204).json({
    status: "success",
    message: "Parcel deleted successfully",
  });
});

// 6. Get Parcels by Tracking ID
exports.getParcelByTrackingId = catchAsync(async (req, res, next) => {
  const { trackingId } = req.params;
  const parcel = await Parcel.findOne({ trackingId });

  if (!parcel) {
    return next(new AppError('Parcel not found', 404));

  }

  res.status(200).json({
    status: "success",
    data: parcel,
  });
});

// 7. Send Notifications (Example Implementation)
exports.sendNotification = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { message } = req.body;

  const parcel = await Parcel.findById(id);

  if (!parcel) {
    return next(new AppError('Parcel not found', 404));

  }

  // Add notification to parcel
  parcel.notifications.push({ message });
  await parcel.save();

  // Simulate sending notification
  console.log(`Notification sent to ${parcel.phoneNumber}: ${message}`);

  res.status(200).json({
    status: "success",
    message: "Notification sent successfully",
  });
});
