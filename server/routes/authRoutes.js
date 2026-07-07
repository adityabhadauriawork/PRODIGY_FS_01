const express = require("express");
const router = express.Router();

const {
  register,
  login,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Protected Route
router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Welcome to Protected Route",
    user: req.user,
  });
});

module.exports = router;