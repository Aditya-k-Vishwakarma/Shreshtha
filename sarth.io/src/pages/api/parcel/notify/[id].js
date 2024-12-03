import dbConnect from "../../../utils/db";
import Parcel from "../../../models/parcelModel";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "POST") {
    try {
      const { message } = req.body;

      const parcel = await Parcel.findById(id);
      if (!parcel) {
        return res.status(404).json({ status: "fail", message: "Parcel not found" });
      }

      parcel.notifications.push({ message });
      await parcel.save();

      console.log(`Notification sent to ${parcel.phoneNumber}: ${message}`);
      res.status(200).json({ status: "success", message: "Notification sent successfully" });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
