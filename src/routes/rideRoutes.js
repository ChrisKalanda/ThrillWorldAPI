const express = require("express");
const router = express.Router();
const {
  createRide,
  getRides,
  getRideById,
  updateRide,
  deleteRide
} = require("../controllers/rideController");

router.route("/")
  .get(getRides)
  .post(createRide);

router.route("/:id")
  .get(getRideById)
  .put(updateRide)
  .delete(deleteRide);

module.exports = router;
