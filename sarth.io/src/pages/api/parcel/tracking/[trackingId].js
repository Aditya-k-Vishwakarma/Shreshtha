import dbConnect from "../../../utils/db";
import Parcel from "../../../models/parcelModel";

export default async function handler(req, res) {
  await dbConnect();

  const { trackingId } = req.query;

  if (req.method === "GET") {
    try {
      const parcel = await Parcel.findOne({ trackingId });
      if (!parcel) {
        return res.status(404).json({ status: "fail", message: "Parcel not found" });
      }
      res.status(200).json({ status: "success", data: parcel });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
