import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Billing = () => {
  const [bills, setBills] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/billing/getall",
          { withCredentials: true }
        );
        setBills(data.bills);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchBills();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="billing-page">
      <h1 className="page-title">Billing</h1>
      <div className="bills-container">
        {bills && bills.length > 0 ? (
          bills.map((bill) => (
            <div className="bill-card" key={bill._id}>
              <div className="bill-details">
                <p>
                  Bill ID: <span>{bill._id}</span>
                </p>
                <p>
                  Patient: <span>{bill.patientName}</span>
                </p>
                <p>
                  Amount: <span>${bill.amount.toFixed(2)}</span>
                </p>
                <p>
                  Date: <span>{new Date(bill.date).toLocaleDateString()}</span>
                </p>
                <p>
                  Status: <span>{bill.status}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h2 className="no-bills-message">No Billing Records!</h2>
        )}
      </div>
    </section>
  );
};

export default Billing;
