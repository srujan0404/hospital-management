import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchAppointments();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="appointments-page">
      <h1 className="page-title">Appointments</h1>
      <div className="appointments-container">
        {appointments && appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div className="appointment-card" key={appointment._id}>
              <div className="appointment-details">
                <p>
                  Date:{" "}
                  <span>{new Date(appointment.date).toLocaleDateString()}</span>
                </p>
                <p>
                  Time: <span>{appointment.time}</span>
                </p>
                <p>
                  Patient: <span>{appointment.patientName}</span>
                </p>
                <p>
                  Doctor: <span>{appointment.doctorName}</span>
                </p>
                <p>
                  Status: <span>{appointment.status}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h2 className="no-appointments-message">No Appointments!</h2>
        )}
      </div>
    </section>
  );
};

export default Appointments;
