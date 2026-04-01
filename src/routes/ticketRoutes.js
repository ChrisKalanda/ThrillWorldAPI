const express = require("express");
const router = express.Router();
const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
  purchaseTicket
} = require("../controllers/ticketController");

// /api/tickets
router.route("/")
  .get(getTickets)
  .post(createTicket);

// /api/tickets/purchase
router.post("/purchase", purchaseTicket);

// /api/tickets/:id
router.route("/:id")
  .get(getTicketById)
  .put(updateTicket)
  .delete(deleteTicket);

module.exports = router;
