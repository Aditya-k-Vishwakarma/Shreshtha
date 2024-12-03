import dbConnect from "../../../utils/db";
import Parcel from "../../../models/parcelModel";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
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
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const parcels = await Parcel.find();
      res.status(200).json({
        status: "success",
        results: parcels.length,
        data: parcels,
      });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
