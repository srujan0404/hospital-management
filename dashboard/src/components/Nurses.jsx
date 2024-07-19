import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Nurses = () => {
  const [nurses, setNurses] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchNurses = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/nurses",
          { withCredentials: true }
        );
        setNurses(data.nurses);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchNurses();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="nurses-page">
      <h1 className="page-title">Registered Nurses</h1>
      <div className="nurses-container">
        {nurses && nurses.length > 0 ? (
          nurses.map((nurse) => (
            <div className="nurse-card" key={nurse.id}>
              <img
                src={nurse.avatar?.url || "/defaultAvatar.jpg"}
                alt="Nurse Avatar"
                className="nurse-avatar"
              />
              <div className="nurse-details">
                <h4 className="nurse-name">{`${nurse.firstName} ${nurse.lastName}`}</h4>
                <p className="nurse-info">
                  Email: <span>{nurse.email}</span>
                </p>
                <p className="nurse-info">
                  Phone: <span>{nurse.phone}</span>
                </p>
                <p className="nurse-info">
                  DOB: <span>{new Date(nurse.dob).toLocaleDateString()}</span>
                </p>
                <p className="nurse-info">
                  Department: <span>{nurse.department}</span>
                </p>
                <p className="nurse-info">
                  Gender: <span>{nurse.gender}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h2 className="no-nurses-message">No Registered Nurses Found!</h2>
        )}
      </div>
    </section>
  );
};

export default Nurses;
