# PrimeTrade – MERN Stack Authentication System

PrimeTrade is a full-stack authentication project built using the MERN stack (MongoDB Atlas, Express, React, Node.js).  
It demonstrates secure user signup and login with JWT authentication, protected routes, and a simple dashboard UI.

---

## Features

- User Signup (Registration)
- User Login & Authentication
- Password Hashing with bcrypt
- JWT Token Generation
- Protected Dashboard Route
- MongoDB Atlas Database
- RESTful API Backend (Express)
- Frontend with React + Bootstrap

---

## Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Bootstrap
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

---

##  Project Structure

# PrimeTrade – MERN Stack Authentication System

PrimeTrade is a full-stack authentication project built using the MERN stack (MongoDB Atlas, Express, React, Node.js).  
It demonstrates secure user signup and login with JWT authentication, protected routes, and a simple dashboard UI.

---

##  Features

- User Signup (Registration)
- User Login & Authentication
- Password Hashing with bcrypt
- JWT Token Generation
- Protected Dashboard Route
- MongoDB Atlas Database
- RESTful API Backend (Express)
- Frontend with React + Bootstrap

---

##  Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Bootstrap
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

---

##  Project Structure
Primetrade-Intern-Task
├── backend
│ ├── models
│ │ ├── User.js
│ │ └── Task.js
│ ├── routes
│ │ ├── auth.js
│ │ └── tasks.js
│ ├── middleware
│ │ └── authMiddleware.js
│ ├── server.js
│ ├── .env (not committed)
│ └── package.json
│
└── frontend
├── src
│ ├── components
│ │ ├── Navbar.jsx
│ │ └── ProtectedRoute.jsx
│ ├── pages
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ └── Dashboard.jsx
│ ├── api.js
│ ├── App.jsx
│ └── main.jsx
├── index.html
└── package.json

---

##  Authentication Flow

1. User signs up with email & password.
2. Password stored in MongoDB in hashed form.
3. User logs in and receives a JWT token.
4. JWT token stored in browser localStorage.
5. Protected dashboard verifies token before access.

---

##  How to Run the Project Locally

### Backend
cd backend
npm install
node server.js


### Frontend
cd frontend
npm install
npm run dev

App running:
http://localhost:5173


### Database
- MongoDB Atlas cloud database.
- User data stored in users collection.
- Passwords are encrypted (hashed), not stored in plain text.
- Verified via MongoDB Atlas Data Explorer.


### ✅ Sample Credentials (for testing)
Email: test@demo.com
Password: 123456


### Security Features
- Password hashing with bcryptjs.
- JWT token based authentication.
- Protected routes using middleware.
- Environment variables for sensitive keys.

### Future Improvements
- Add logout & session expiry.
- Add role-based access.
- Add Task CRUD UI/Backend.
- Deploy backend and frontend to hosting services.

### Author
Vishwajeet
