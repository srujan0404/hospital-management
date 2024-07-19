import mongoose from "mongoose";
import validator from "validator";

const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Is Required!"],
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name Is Required!"],
    minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    unique: true,
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
    minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
  },
  specialization: {
    type: String,
    required: [true, "Specialization Is Required!"],
  },
  department: {
    type: mongoose.Schema.ObjectId,
    ref: "Department",
    required: [true, "Department Is Required!"],
  },
  experience: {
    type: Number,
    required: [true, "Experience Is Required!"],
  },
  address: {
    type: String,
    required: [true, "Address Is Required!"],
  },
});

export const Doctor = mongoose.model("Doctor", doctorSchema);
