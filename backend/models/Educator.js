import mongoose from "mongoose";

const educatorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["trainee", "counselor"], required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Educator", educatorSchema);
