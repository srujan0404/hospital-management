import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import AddNewAdmin from "./components/AddNewAdmin";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, admin, setAdmin } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };
    fetchUser();
  }, [setIsAuthenticated, setAdmin]);

  return (
    <Router>
      <div style={styles.appContainer}>
        <Sidebar style={styles.sidebar} />
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctor/addnew" element={<AddNewDoctor />} />
            <Route path="/admin/addnew" element={<AddNewAdmin />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </main>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#f4f4f9",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#343a40",
    color: "#fff",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  mainContent: {
    marginLeft: "250px",
    padding: "20px",
    flex: 1,
  },
};

export default App;
