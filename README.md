🎢 ThrillWorld API & Dashboard - Server-Side Framework Lab

A complete RESTful API and interactive dashboard for managing an amusement park system (ThrillWorld), including attractions, visitors, tickets, employees, and maintenance operations.

This project also includes a modern frontend interface connected to the API and a secure authentication system using JWT.

⸻

🧱 Tech Stack

Backend
 • Node.js
 • Express.js
 • MongoDB Atlas
 • Mongoose
 • Dotenv
 • CORS
 • Morgan

 ---

Frontend
 • HTML5
 • CSS3 (custom premium UI)
 • JavaScript (Fetch API)

Authentication
 • JSON Web Tokens (JWT)
 • Protected routes

Development
 • Nodemon

 ⸻

 📂 Project Structure

thrillworld-api/
├─ server.js
├─ package.json
├─ .env.example
├─ README.md
├─ login.html
├─ register.html
├─ profile.html
├─ style.css
└─ src/
   ├─ config/
   │  └─ db.js
   ├─ middleware/
   │  ├─ errorHandler.js
   │  └─ authMiddleware.js
   ├─ models/
   │  ├─ User.js
   │  ├─ Ride.js
   │  ├─ Visitor.js
   │  ├─ Ticket.js
   │  ├─ Employee.js
   │  └─ Maintenance.js
   ├─ controllers/
   │  ├─ authController.js
   │  ├─ rideController.js
   │  ├─ visitorController.js
   │  ├─ ticketController.js
   │  ├─ employeeController.js
      └─maintenanceController.js
   └─ routes/
      ├─ authRoutes.js
      ├─ rideRoutes.js
      ├─ visitorRoutes.js
      ├─ ticketRoutes.js
      ├─ employeeRoutes.js
      └─maintenanceRoutes.js

⸻

🔧 Installation

npm install

⸻

⚙️ Environment Variables
Create a .env file at the root:

PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ThrillWorld
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
NODE_ENV=development

⸻

▶️ Run the Server

Production

npm start

---

Development

npm run dev

⸻

🌐 API Endpoints

🔐 Authentication
 • POST /api/auth/register
 • POST /api/auth/login
 • GET /api/auth/me (protected)

⸻

🎢 Rides
 • GET /api/rides
 • GET /api/rides/:id
 • POST /api/rides
 • PUT /api/rides/:id
 • DELETE /api/rides/:id

⸻

👤 Visitors
 • GET /api/visitors
 • GET /api/visitors/:id
 • POST /api/visitors
 • PUT /api/visitors/:id
 • DELETE /api/visitors/:id

⸻

🎟️ Tickets
 • GET /api/tickets
 • GET /api/tickets/:id
 • POST /api/tickets
 • POST /api/tickets/purchase
 • PUT /api/tickets/:id
 • DELETE /api/tickets/:id

⸻

🧑‍💼 Employees
 • GET /api/employees
 • GET /api/employees/:id
 • POST /api/employees
 • PUT /api/employees/:id
 • DELETE /api/employees/:id

⸻

🛠️ Maintenance
 • GET /api/maintenance
 • GET /api/maintenance/:id
 • POST /api/maintenance
 • PUT /api/maintenance/:id
 • DELETE /api/maintenance/:id

⸻

🖥️ Frontend Pages

Accessible via browser:
 • /login.html
 • /register.html
 • /profile.html
 • /rides.html
 • /visitors.html
 • /tickets.html
 • /employees.html
 • /maintenance.html

⸻

🔐 Authentication Flow
 1. User registers → /api/auth/register
 2. User logs in → /api/auth/login
 3. JWT token is stored in the browser
 4. Protected routes use the token
 5. Profile page fetches /api/auth/me

⸻

 ✅ Quick Testing (Sample JSON)

Create Ride

{
  "id": 1,
  "name": "Mega Coaster",
  "capacity": 24,
  "minHeight": 140,
  "duration": 120,
  "status": "operational"
}

---

Create Visitor

{
  "id": 1,
  "name": "Alice",
  "age": 18,
  "height": 165
}

---

Purchase Ticket

{
  "id": 100,
  "visitorId": 1,
  "type": "day",
  "price": 59.99,
  "validUntil": "2025-01-02T00:00:00.000Z"
}

⸻

🚀 Features
 • Full CRUD API (RESTful)
 • MongoDB integration with Mongoose
 • Secure authentication with JWT
 • Protected routes (middleware)
 • Modern responsive UI (premium design)
 • Clean architecture (MVC pattern)
 • Error handling middleware

⸻

📌 Project Context

This project was developed as part of a Server-Side Framework course.

It demonstrates:
 • Backend API design
 • Database modeling
 • Authentication implementation
 • Full-stack integration (API + UI)

⸻


## 📸 Screenshots

### 🔐 Authentication

#### Login Page
![Login](screenshots/login.png)

#### Register Page
![Register](screenshots/register.png)

---

### 👤 User Dashboard

#### Profile Page
![Profile](screenshots/profile.png)

---

### 🎢 Park Management

#### Rides Management
![Rides](screenshots/rides.png)

#### Visitors Management
![Visitors](screenshots/visitors.png)

#### Tickets Management
![Tickets](screenshots/tickets.png)

#### Employees Management
![Employees](screenshots/employees.png)

#### Maintenance Management
![Maintenance](screenshots/maintenance1.png) ![Maintenance](screenshots/maintenance2.png)

⸻

## 🎨 UI Highlights

- Modern amusement park themed design
- Soft gradients (blue / white / pastel)
- Card-based layout
- Responsive interface
- Interactive dashboard experience

---

👨‍💻 Author

Chris Kalanda
Full-Stack Developer
:::