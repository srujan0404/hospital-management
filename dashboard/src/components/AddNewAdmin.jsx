import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddNewAdmin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [adminDetails, setAdminDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nic: "",
    dob: "",
    gender: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, nic, dob, gender, password } =
      adminDetails;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !nic ||
      !dob ||
      !gender ||
      !password
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/admin/addnew",
        { firstName, lastName, email, phone, nic, dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page" style={styles.page}>
      <section
        className="container form-component add-admin-form"
        style={styles.container}
      >
        <img src="/logo.png" alt="logo" className="logo" style={styles.logo} />
        <h1 className="form-title" style={styles.formTitle}>
          ADD NEW ADMIN
        </h1>
        <form onSubmit={handleAddNewAdmin} style={styles.form}>
          <div style={styles.formRow}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={adminDetails.firstName}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={adminDetails.lastName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formRow}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={adminDetails.email}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              name="phone"
              value={adminDetails.phone}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formRow}>
            <input
              type="number"
              placeholder="NIC"
              name="nic"
              value={adminDetails.nic}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              name="dob"
              value={adminDetails.dob}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formRow}>
            <select
              name="gender"
              value={adminDetails.gender}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={adminDetails.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>
              ADD NEW ADMIN
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  container: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    textAlign: "center",
  },
  logo: {
    width: "100px",
    marginBottom: "20px",
  },
  formTitle: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  input: {
    width: "48%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AddNewAdmin;
