const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        message: "Access Denied. No Token Provided",
      });
    }

    // Remove "Bearer "
    if (token.startsWith("Bearer ")) {
      token = token.slice(7);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User Not Found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;