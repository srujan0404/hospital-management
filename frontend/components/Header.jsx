import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCalendarAlt, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/appointment">
              <FaCalendarAlt /> Appointment
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaUser /> Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
