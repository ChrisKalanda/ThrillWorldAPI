const Ride = require("../models/Ride");

// @desc    Créer une nouvelle attraction
// @route   POST /api/rides
// @access  Public (pour le labo)
exports.createRide = async (req, res, next) => {
  try {
    const ride = await Ride.create(req.body);
    res.status(201).json(ride);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// @desc    Obtenir toutes les attractions
// @route   GET /api/rides
exports.getRides = async (req, res, next) => {
  try {
    const rides = await Ride.find();
    res.status(200).json(rides);
  } catch (error) {
    next(error);
  }
};

// @desc    Obtenir une attraction par son id logique (champ id)
// @route   GET /api/rides/:id
exports.getRideById = async (req, res, next) => {
  try {
    const ride = await Ride.findOne({ id: req.params.id });
    if (!ride) {
      res.status(404);
      throw new Error("Attraction non trouvée");
    }
    res.status(200).json(ride);
  } catch (error) {
    next(error);
  }
};

// @desc    Mettre à jour une attraction
// @route   PUT /api/rides/:id
exports.updateRide = async (req, res, next) => {
  try {
    const ride = await Ride.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!ride) {
      res.status(404);
      throw new Error("Attraction non trouvée");
    }

    res.status(200).json(ride);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// @desc    Supprimer une attraction
// @route   DELETE /api/rides/:id
exports.deleteRide = async (req, res, next) => {
  try {
    const ride = await Ride.findOneAndDelete({ id: req.params.id });

    if (!ride) {
      res.status(404);
      throw new Error("Attraction non trouvée");
    }

    res.status(200).json({ message: "Attraction supprimée" });
  } catch (error) {
    next(error);
  }
};
