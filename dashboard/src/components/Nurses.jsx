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
    <section className="page nurses">
      <h1>Nurses</h1>
      <div className="banner">
        {nurses && nurses.length > 0 ? (
          nurses.map((nurse) => (
            <div className="card" key={nurse.id}>
              <img src={nurse.avatar && nurse.avatar.url} alt="nurse avatar" />
              <h4>{`${nurse.firstName} ${nurse.lastName}`}</h4>
              <div className="details">
                <p>
                  Email: <span>{nurse.email}</span>
                </p>
                <p>
                  Phone: <span>{nurse.phone}</span>
                </p>
                <p>
                  DOB: <span>{nurse.dob.substring(0, 10)}</span>
                </p>
                <p>
                  Department: <span>{nurse.department}</span>
                </p>
                <p>
                  Gender: <span>{nurse.gender}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>No Registered Nurses Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Nurses;
