import mongoose from "mongoose";
import validator from "validator";

const { Schema, model, Types } = mongoose;

const appointmentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name Is Required!"],
      minlength: [3, "First Name Must Contain At Least 3 Characters!"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name Is Required!"],
      minlength: [3, "Last Name Must Contain At Least 3 Characters!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email Is Required!"],
      validate: [validator.isEmail, "Provide A Valid Email!"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone Is Required!"],
      length: [11, "Phone Number Must Contain Exactly 11 Digits!"],
      match: [/^\d{11}$/, "Phone Number Must Contain Exactly 11 Digits!"],
    },
    nic: {
      type: String,
      required: [true, "NIC Is Required!"],
      length: [13, "NIC Must Contain Exactly 13 Digits!"],
      match: [/^\d{13}$/, "NIC Must Contain Exactly 13 Digits!"],
    },
    dob: {
      type: Date,
      required: [true, "Date of Birth Is Required!"],
    },
    gender: {
      type: String,
      required: [true, "Gender Is Required!"],
      enum: ["Male", "Female"],
    },
    appointmentDate: {
      type: Date,
      required: [true, "Appointment Date Is Required!"],
    },
    department: {
      type: String,
      required: [true, "Department Name Is Required!"],
      trim: true,
    },
    doctor: {
      firstName: {
        type: String,
        required: [true, "Doctor's First Name Is Required!"],
        trim: true,
      },
      lastName: {
        type: String,
        required: [true, "Doctor's Last Name Is Required!"],
        trim: true,
      },
    },
    hasVisited: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: [true, "Address Is Required!"],
      trim: true,
    },
    doctorId: {
      type: Types.ObjectId,
      ref: "Doctor",
      required: [true, "Doctor ID Is Required!"],
    },
    patientId: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "Patient ID Is Required!"],
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const Appointment = model("Appointment", appointmentSchema);
