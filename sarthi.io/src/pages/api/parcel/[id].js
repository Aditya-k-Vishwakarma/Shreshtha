import dbConnect from "../../../utils/db";
import Parcel from "../../../models/parcelModel";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const parcel = await Parcel.findById(id);
      if (!parcel) {
        return res.status(404).json({ status: "fail", message: "Parcel not found" });
      }
      res.status(200).json({ status: "success", data: parcel });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  } else if (req.method === "PATCH") {
    try {
      const updatedParcel = await Parcel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedParcel) {
        return res.status(404).json({ status: "fail", message: "Parcel not found" });
      }
      res.status(200).json({ status: "success", data: updatedParcel });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedParcel = await Parcel.findByIdAndDelete(id);
      if (!deletedParcel) {
        return res.status(404).json({ status: "fail", message: "Parcel not found" });
      }
      res.status(204).json({ status: "success", message: "Parcel deleted successfully" });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
