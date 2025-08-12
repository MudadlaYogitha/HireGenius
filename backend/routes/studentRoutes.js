import express from "express";
import bcrypt from "bcryptjs";
import Student from "../models/Student.js";

const router = express.Router();

// @route   POST /api/students/register
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, gradeLevel, password } = req.body;

    // Check if student exists
    const existing = await Student.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      firstName,
      lastName,
      email,
      gradeLevel,
      password: hashedPassword
    });

    await newStudent.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
