const Ticket = require("../models/Ticket");

// Créer un ticket (utilisé aussi pour /purchase)
exports.createTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// Liste de tous les billets
exports.getTickets = async (req, res, next) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    next(error);
  }
};

// Détails d'un billet
exports.getTicketById = async (req, res, next) => {
  try {
    const ticket = await Ticket.findOne({ id: req.params.id });
    if (!ticket) {
      res.status(404);
      throw new Error("Billet non trouvé");
    }
    res.status(200).json(ticket);
  } catch (error) {
    next(error);
  }
};

// Mise à jour d'un billet (ex: prolongation, changement de type)
exports.updateTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!ticket) {
      res.status(404);
      throw new Error("Billet non trouvé");
    }

    res.status(200).json(ticket);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// Suppression / annulation d'un billet
exports.deleteTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.findOneAndDelete({ id: req.params.id });

    if (!ticket) {
      res.status(404);
      throw new Error("Billet non trouvé");
    }

    res.status(200).json({ message: "Billet annulé et supprimé" });
  } catch (error) {
    next(error);
  }
};

// Achat spécifique via /purchase (alias de createTicket, mais on garde une méthode séparée pour extension future)
exports.purchaseTicket = async (req, res, next) => {
  try {
    const { id, visitorId, type, discountCode } = req.body;

    // Vérifier que le visiteur existe
    const Visitor = require("../models/Visitor");
    const visitor = await Visitor.findOne({ id: visitorId });
    if (!visitor) {
      res.status(404);
      throw new Error("Visiteur non trouvé");
    }

    // Prix de base selon le type
    const PRICE_MAP = { day: 50, season: 250, vip: 120 };
    const basePrice = PRICE_MAP[type];
    if (!basePrice) {
      res.status(400);
      throw new Error("Type de billet invalide");
    }

    let finalPrice = basePrice;

    // Rabais selon abonnement
    if (visitor.membershipType === "student") finalPrice *= 0.9;
    if (visitor.membershipType === "family") finalPrice *= 0.85;

    // Rabais code promo (optionnel)
    const DISCOUNT_CODES = { PROMO10: 0.10, FAMILY15: 0.15, STUDENT20: 0.20 };
    if (discountCode && DISCOUNT_CODES[discountCode]) {
      finalPrice *= (1 - DISCOUNT_CODES[discountCode]);
    }

    // Dates
    const purchaseDate = new Date();
    const validUntil = new Date(purchaseDate);
    if (type === "day") validUntil.setDate(validUntil.getDate() + 1);
    if (type === "vip") validUntil.setDate(validUntil.getDate() + 3);
    if (type === "season") validUntil.setDate(validUntil.getDate() + 120);

    const ticket = await Ticket.create({
      id,
      visitorId,
      type,
      price: Number(finalPrice.toFixed(2)),
      purchaseDate,
      validUntil,
      basePrice,
      discountCode
    });

    res.status(201).json({
      message: "Billet acheté avec succès",
      ticket
    });
  } catch (error) {
    // si on a throw, status déjà set
    if (!res.statusCode || res.statusCode < 400) res.status(400);
    next(error);
  }
};
