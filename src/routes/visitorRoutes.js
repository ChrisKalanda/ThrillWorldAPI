const express = require("express");
const router = express.Router();
const {
  createVisitor,
  getVisitors,
  getVisitorById,
  updateVisitor,
  deleteVisitor
} = require("../controllers/visitorController");

router.route("/")
  .get(getVisitors)
  .post(createVisitor);

router.route("/:id")
  .get(getVisitorById)
  .put(updateVisitor)
  .delete(deleteVisitor);

module.exports = router;
