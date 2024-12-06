const express = require("express")
const router = express.Router();
const parcelController = require("./../controllers/parcelController")


router.route("/")
  .post(parcelController.createParcel)
  .get(parcelController.getAllParcels);

router.route("/:id")
  .get(parcelController.getParcelById)
  .patch(parcelController.updateParcel)
  .delete(parcelController.deleteParcel);

router.route("/tracking/:trackingId")
  .get(parcelController.getParcelByTrackingId);

router.route("/:id/notify")
  .post(parcelController.sendNotification);


  module.exports = router