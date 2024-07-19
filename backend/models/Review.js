import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  appointment: {
    type: mongoose.Schema.ObjectId,
    ref: "Appointment",
    required: [true, "Appointment Is Required!"],
  },
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Patient Is Required!"],
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctor",
    required: [true, "Doctor Is Required!"],
  },
  rating: {
    type: Number,
    required: [true, "Rating Is Required!"],
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: [true, "Comment Is Required!"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Review = mongoose.model("Review", reviewSchema);
