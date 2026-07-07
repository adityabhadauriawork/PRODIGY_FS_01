<div align="center">

# 🔐 SecureAuth

### Enterprise-Grade MERN Authentication System

Modern authentication platform built using **MongoDB, Express.js, React, Node.js, JWT and BCrypt** with secure user registration, login, password hashing and protected routes.

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Secure-black?style=for-the-badge&logo=jsonwebtokens)
![BCrypt](https://img.shields.io/badge/BCrypt-Password%20Hashing-orange?style=for-the-badge)

---

### 🚀 Prodigy InfoTech Internship Task-01

Secure User Authentication System using MERN Stack

</div>

---

# 📌 Project Overview

SecureAuth is a full-stack authentication system that demonstrates modern authentication practices used in real-world web applications.

The application enables users to securely create an account, authenticate using JSON Web Tokens (JWT), store encrypted passwords using BCrypt, and access protected routes after successful authentication.

The project follows industry-standard authentication workflows while maintaining a clean and responsive user interface.

---

# ✨ Features

✅ User Registration

✅ User Login

✅ JWT Authentication

✅ Password Hashing using BCrypt

✅ Protected Dashboard

✅ MongoDB Atlas Integration

✅ Secure REST APIs

✅ React Frontend

✅ Express Backend

✅ Responsive UI

✅ Glassmorphism Design

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Framer Motion

---

## Backend

- Node.js
- Express.js
- JWT
- BCrypt.js
- Mongoose

---

## Database

- MongoDB Atlas

---

# 📂 Project Structure

```
PRODIGY_FS_01
│
├── client
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── assets
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔒 Authentication Flow

```
User Registration
        │
        ▼
Password Hashed using BCrypt
        │
        ▼
Stored in MongoDB Atlas
        │
        ▼
User Login
        │
        ▼
JWT Token Generated
        │
        ▼
Token Stored in Browser
        │
        ▼
Protected Route Access
```

---

# 📸 Screens

- 🏠 Landing Page
- 🔐 Login Page
- 📝 Register Page
- 📊 Protected Dashboard

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/PRODIGY_FS_01.git
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd ../server
npm install
```

---

## Configure Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

---

## Run Backend

```bash
cd server
npm run dev
```

---

## Run Frontend

```bash
cd client
npm run dev
```

---

# 📡 API Endpoints

## Register User

```
POST /api/auth/register
```

---

## Login User

```
POST /api/auth/login
```

---

## Protected Route

```
GET /api/auth/dashboard
```

---

# 🔐 Security Features

- BCrypt Password Encryption
- JWT Authentication
- Protected Routes
- MongoDB Cloud Database
- REST API Architecture
- Secure Token Verification
- Middleware Authentication

---

# 🎯 Learning Outcomes

This project demonstrates practical implementation of:

- Authentication Systems
- Authorization
- JWT Tokens
- Password Encryption
- REST APIs
- MERN Stack Development
- MongoDB Atlas Integration
- React Routing
- Backend Middleware

---

# 📈 Future Improvements

- Email Verification
- Forgot Password
- Reset Password
- Refresh Tokens
- User Roles (Admin/User)
- Profile Management
- OAuth (Google Login)
- Two-Factor Authentication
- Docker Deployment
- CI/CD Pipeline

---

# 👨‍💻 Developer

**Aditya Bhadauria**

B.Tech CSE Student

MERN Stack Developer

AI & Machine Learning Enthusiast

---

<div align="center">

### ⭐ If you found this project helpful, don't forget to Star the repository.

Made with ❤️ using the MERN Stack

</div>
