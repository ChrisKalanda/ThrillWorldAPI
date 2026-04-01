const Visitor = require("../models/Visitor");

// Create
exports.createVisitor = async (req, res, next) => {
  try {
    const visitor = await Visitor.create(req.body);
    res.status(201).json(visitor);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// Read all
exports.getVisitors = async (req, res, next) => {
  try {
    const visitors = await Visitor.find();
    res.status(200).json(visitors);
  } catch (error) {
    next(error);
  }
};

// Read one
exports.getVisitorById = async (req, res, next) => {
  try {
    const visitor = await Visitor.findOne({ id: req.params.id });
    if (!visitor) {
      res.status(404);
      throw new Error("Visiteur non trouvé");
    }
    res.status(200).json(visitor);
  } catch (error) {
    next(error);
  }
};

// Update
exports.updateVisitor = async (req, res, next) => {
  try {
    const visitor = await Visitor.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!visitor) {
      res.status(404);
      throw new Error("Visiteur non trouvé");
    }

    res.status(200).json(visitor);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// Delete
exports.deleteVisitor = async (req, res, next) => {
  try {
    const visitor = await Visitor.findOneAndDelete({ id: req.params.id });

    if (!visitor) {
      res.status(404);
      throw new Error("Visiteur non trouvé");
    }

    res.status(200).json({ message: "Visiteur supprimé" });
  } catch (error) {
    next(error);
  }
};
