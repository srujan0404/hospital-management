import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  getAppointmentById, // New endpoint
  postAppointment,
  updateAppointmentStatus,
  getAppointmentsByPatientId, // New endpoint
  searchAppointments, // New endpoint
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

router.get("/get/:id", isAdminAuthenticated, getAppointmentById); 
router.get(
  "/patient/:patientId",
  isPatientAuthenticated,
  getAppointmentsByPatientId
); 
router.get("/search", isAdminAuthenticated, searchAppointments); 

export default router;
