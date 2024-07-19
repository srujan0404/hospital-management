import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nic: "",
    dob: "",
    gender: "",
    appointmentDate: "",
    department: "Pediatrics",
    doctorFirstName: "",
    doctorLastName: "",
    address: "",
    hasVisited: false,
  });

  const [doctors, setDoctors] = useState([]);
  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error("Failed to load doctors");
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        { ...formData },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        nic: "",
        dob: "",
        gender: "",
        appointmentDate: "",
        department: "Pediatrics",
        doctorFirstName: "",
        doctorLastName: "",
        address: "",
        hasVisited: false,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Appointment Form</h2>
      <form onSubmit={handleAppointment} className="appointment-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="nic"
            placeholder="NIC"
            value={formData.nic}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            name="appointmentDate"
            placeholder="Appointment Date"
            value={formData.appointmentDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <select
            name="department"
            value={formData.department}
            onChange={(e) => {
              handleChange(e);
              setFormData((prevData) => ({
                ...prevData,
                doctorFirstName: "",
                doctorLastName: "",
              }));
            }}
          >
            {departmentsArray.map((depart, index) => (
              <option value={depart} key={index}>
                {depart}
              </option>
            ))}
          </select>
          <select
            name="doctor"
            value={`${formData.doctorFirstName} ${formData.doctorLastName}`}
            onChange={(e) => {
              const [firstName, lastName] = e.target.value.split(" ");
              setFormData((prevData) => ({
                ...prevData,
                doctorFirstName: firstName || "",
                doctorLastName: lastName || "",
              }));
            }}
            disabled={!formData.department}
          >
            <option value="">Select Doctor</option>
            {doctors
              .filter(
                (doctor) => doctor.doctorDepartment === formData.department
              )
              .map((doctor, index) => (
                <option
                  value={`${doctor.firstName} ${doctor.lastName}`}
                  key={index}
                >
                  {doctor.firstName} {doctor.lastName}
                </option>
              ))}
          </select>
        </div>
        <textarea
          name="address"
          rows="4"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <div className="form-group">
          <label>
            Have you visited before?
            <input
              type="checkbox"
              name="hasVisited"
              checked={formData.hasVisited}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Get Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
