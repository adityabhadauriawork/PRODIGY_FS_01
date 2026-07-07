const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all fields are entered
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Registered Successfully",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// ================= LOGIN =================
exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;

    // Check user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    // JWT Token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};