import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Medications = () => {
  const [medications, setMedications] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/medications/getall",
          { withCredentials: true }
        );
        setMedications(data.medications);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchMedications();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="medications-page">
      <h1 className="page-title">Medications</h1>
      <div className="medications-container">
        {medications && medications.length > 0 ? (
          medications.map((medication) => (
            <div className="medication-card" key={medication._id}>
              <div className="medication-details">
                <p>
                  Name: <span>{medication.name}</span>
                </p>
                <p>
                  Dosage: <span>{medication.dosage}</span>
                </p>
                <p>
                  Frequency: <span>{medication.frequency}</span>
                </p>
                <p>
                  Manufacturer: <span>{medication.manufacturer}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h2 className="no-medications-message">No Medications Found!</h2>
        )}
      </div>
    </section>
  );
};

export default Medications;
