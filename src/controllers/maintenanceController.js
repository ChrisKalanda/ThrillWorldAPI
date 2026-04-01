const Maintenance = require("../models/Maintenance");

// Planifier une maintenance
exports.createMaintenance = async (req, res, next) => {
  try {
    const maintenance = await Maintenance.create(req.body);
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// Lister toutes les maintenances
exports.getMaintenances = async (req, res, next) => {
  try {
    const maintenances = await Maintenance.find();
    res.status(200).json(maintenances);
  } catch (error) {
    next(error);
  }
};

// Détails d'une maintenance
exports.getMaintenanceById = async (req, res, next) => {
  try {
    const maintenance = await Maintenance.findOne({ id: req.params.id });
    if (!maintenance) {
      res.status(404);
      throw new Error("Maintenance non trouvée");
    }
    res.status(200).json(maintenance);
  } catch (error) {
    next(error);
  }
};

// Mettre à jour une maintenance
exports.updateMaintenance = async (req, res, next) => {
  try {
    const maintenance = await Maintenance.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!maintenance) {
      res.status(404);
      throw new Error("Maintenance non trouvée");
    }

    res.status(200).json(maintenance);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// Annuler / supprimer une maintenance
exports.deleteMaintenance = async (req, res, next) => {
  try {
    const maintenance = await Maintenance.findOneAndDelete({ id: req.params.id });

    if (!maintenance) {
      res.status(404);
      throw new Error("Maintenance non trouvée");
    }

    res.status(200).json({ message: "Maintenance annulée / supprimée" });
  } catch (error) {
    next(error);
  }
};
