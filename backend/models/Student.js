import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  gradeLevel:{ type: String, required: true },
  password:  { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
