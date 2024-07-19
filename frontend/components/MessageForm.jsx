import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="message-form-container">
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage} className="message-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
          />
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-textarea"
        />
        <div className="form-button-container">
          <button type="submit" className="form-button">
            Send
          </button>
        </div>
      </form>
      <img src="/Vector.png" alt="vector" className="vector-image" />
    </div>
  );
};

export default MessageForm;
