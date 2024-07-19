import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/patients",
          { withCredentials: true }
        );
        setPatients(data.patients);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchPatients();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="page patients">
      <h1>Patients</h1>
      <div className="banner">
        {patients && patients.length > 0 ? (
          patients.map((patient) => (
            <div className="card" key={patient.id}>
              <img
                src={patient.avatar && patient.avatar.url}
                alt="patient avatar"
              />
              <h4>{`${patient.firstName} ${patient.lastName}`}</h4>
              <div className="details">
                <p>
                  Email: <span>{patient.email}</span>
                </p>
                <p>
                  Phone: <span>{patient.phone}</span>
                </p>
                <p>
                  DOB: <span>{patient.dob.substring(0, 10)}</span>
                </p>
                <p>
                  Address: <span>{patient.address}</span>
                </p>
                <p>
                  Gender: <span>{patient.gender}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>No Registered Patients Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Patients;
