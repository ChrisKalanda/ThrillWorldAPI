require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const connectDB = require("./src/config/db");
const { notFound, errorHandler } = require("./src/middleware/errorHandler");

// Routes API
const rideRoutes = require("./src/routes/rideRoutes");
const visitorRoutes = require("./src/routes/visitorRoutes");
const ticketRoutes = require("./src/routes/ticketRoutes");
const employeeRoutes = require("./src/routes/employeeRoutes");
const maintenanceRoutes = require("./src/routes/maintenanceRoutes");

// Auth routes (login/register)
const authRoutes = require("./src/routes/authRoutes");

const app = express();


// =====================
// MIDDLEWARE
// =====================
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// =====================
// MONGODB
// =====================
connectDB();


// =====================
// STATIC FILES (UI)
// =====================
// Sert login.html, register.html, profile.html, style.css
app.use(express.static(path.join(__dirname)));


// =====================
// ROUTE TEST
// =====================
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenue sur l'API ThrillWorld 🎢",
    docs: "/api"
  });
});


// =====================
// API ROUTES
// =====================
app.use("/api/rides", rideRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/maintenance", maintenanceRoutes);

// Auth (login/register)
app.use("/api/auth", authRoutes);


// =====================
// ERROR HANDLING
// =====================
app.use(notFound);
app.use(errorHandler);


// =====================
// SERVER
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});