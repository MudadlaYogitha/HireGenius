import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Educator from "../models/Educator.js";

const router = express.Router();

// POST /api/educators/register
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, role, password, confirmPassword } = req.body;

    // Check all fields
    if (!firstName || !lastName || !email || !role || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if email exists
    const existing = await Educator.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save educator
    const educator = await Educator.create({
      firstName,
      lastName,
      email,
      role,
      password: hashedPassword,
    });

    // Generate JWT
    const token = jwt.sign({ id: educator._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({
      message: "Educator registered successfully",
      token,
      educator: { id: educator._id, firstName, lastName, email, role },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
