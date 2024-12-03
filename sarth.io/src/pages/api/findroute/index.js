import connectDB from "@/utils/db";
import Route from "@/models/routeModel";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const { source, destination, waypoints } = req.body;

    if (!source || !destination) {
      return res.status(400).json({
        status: "fail",
        message: "Source and destination are required",
      });
    }

    try {
      // Example: Calculate estimated time and distance (dummy logic)
      const estimatedTime = Math.floor(Math.random() * 100); // Random for demo
      const distance = Math.random() * 500; // Random for demo

      const newRoute = await Route.create({
        source,
        destination,
        waypoints,
        estimatedTime,
        distance,
      });

      res.status(201).json({
        status: "success",
        message: "Route generated successfully",
        data: newRoute,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Something went wrong",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({
      status: "fail",
      message: `Method ${req.method} not allowed`,
    });
  }
}
