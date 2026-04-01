const Employee = require("../models/Employee");

// Create
exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// Read all
exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

// Read one
exports.getEmployeeById = async (req, res, next) => {
  try {
    const employee = await Employee.findOne({ id: req.params.id });
    if (!employee) {
      res.status(404);
      throw new Error("Employé non trouvé");
    }
    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};

// Update
exports.updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!employee) {
      res.status(404);
      throw new Error("Employé non trouvé");
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// Delete
exports.deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findOneAndDelete({ id: req.params.id });

    if (!employee) {
      res.status(404);
      throw new Error("Employé non trouvé");
    }

    res.status(200).json({ message: "Employé supprimé" });
  } catch (error) {
    next(error);
  }
};
