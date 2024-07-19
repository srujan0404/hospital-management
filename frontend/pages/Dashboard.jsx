import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
      <p className="dashboard-description">
        Here you can manage your profile, view appointments, and access other
        features.
      </p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Profile</h3>
          <p>Manage your personal information and settings.</p>
          <button className="dashboard-button">View Profile</button>
        </div>
        <div className="dashboard-card">
          <h3>Appointments</h3>
          <p>View and manage your upcoming appointments.</p>
          <button className="dashboard-button">View Appointments</button>
        </div>
        <div className="dashboard-card">
          <h3>Messages</h3>
          <p>Check and manage your messages.</p>
          <button className="dashboard-button">View Messages</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
