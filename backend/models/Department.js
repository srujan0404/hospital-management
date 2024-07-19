import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Department Name Is Required!"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Description Is Required!"],
  },
});

export const Department = mongoose.model("Department", departmentSchema);
