# PrimeTrade – MERN Stack Authentication System

PrimeTrade is a full-stack authentication project built using the **MERN stack** (MongoDB Atlas, Express, React, Node.js).
It demonstrates secure user signup and login with **JWT authentication**, protected routes, and a simple dashboard UI.

---

## 🚀 Features

- User Signup (Registration)
- User Login & Authentication
- Password Hashing with bcrypt
- JWT Token Generation
- Protected Dashboard Route
- MongoDB Atlas Database
- RESTful API Backend (Express)
- Frontend with React + Bootstrap

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Bootstrap
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

---

## 📁 Project Structure

PrimeTrade-Intern-Task
├── backend
│   ├── models
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── server.js
│   ├── .env (not committed)
│   └── package.json
│
└── frontend
    ├── public
    │   └── (static files)
    ├── src
    │   ├── assets
    │   ├── components
    │   │   ├── Navbar.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── pages
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Dashboard.jsx
    │   ├── api.js
    │   ├── App.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json

---

## 🔐 Authentication Flow

1. User signs up with email & password.
2. Password is hashed and stored securely in MongoDB.
3. User logs in and receives a JWT token.
4. JWT token is stored in browser localStorage.
5. Protected routes verify JWT before granting access.

---

## ▶️ How to Run the Project Locally

### Backend
cd backend
npm install
# Start the backend (production)
npm start
# Or for development (hot reload with nodemon)
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at http://localhost:5173/

Backend runs at http://localhost:5000/ (default)

---

## 🔒 Security Features

- bcrypt password hashing
- JWT authentication
- Protected routes
- Environment variables

---

## 👤 Author

Vishwajeet
