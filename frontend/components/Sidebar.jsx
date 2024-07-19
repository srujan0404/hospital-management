import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaChartLine, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Dashboard</h3>
      <ul className="sidebar-links">
        <li>
          <Link to="/dashboard">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/doctors">
            <FaUsers /> Doctors
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <FaChartLine /> Analytics
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
