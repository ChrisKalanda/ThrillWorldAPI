const express = require("express");
const router = express.Router();
const {
  createMaintenance,
  getMaintenances,
  getMaintenanceById,
  updateMaintenance,
  deleteMaintenance
} = require("../controllers/maintenanceController");

router.route("/")
  .get(getMaintenances)
  .post(createMaintenance);

router.route("/:id")
  .get(getMaintenanceById)
  .put(updateMaintenance)
  .delete(deleteMaintenance);

module.exports = router;
