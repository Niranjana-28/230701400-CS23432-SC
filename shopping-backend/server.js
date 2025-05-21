const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");  // Import the CORS module
const User = require("./models/User");
require("dotenv").config();  // Load environment variables from .env file

const app = express();
app.use(express.json());

// Use CORS middleware
app.use(cors({
  origin: "http://localhost:3000",  // Allow only the frontend to make requests
  methods: ["GET", "POST"],        // Allow only GET and POST requests
  allowedHeaders: ["Content-Type", "Authorization"], // Allow certain headers
}));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/myshop_login")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB Error:", err));

// Login API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("🔍 Login attempt with:", email);

  try {
    const user = await User.findOne({ email });
    console.log("👤 Fetched User:", user);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔐 Password match status:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in .env file");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("✅ Login successful. Token generated.");
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("💥 Error during login:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
