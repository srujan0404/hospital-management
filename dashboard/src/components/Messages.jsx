import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="messages-page">
      <h1 className="page-title">Messages</h1>
      <div className="messages-container">
        {messages && messages.length > 0 ? (
          messages.map((message) => (
            <div className="message-card" key={message._id}>
              <div className="message-details">
                <p>
                  <strong>First Name:</strong> <span>{message.firstName}</span>
                </p>
                <p>
                  <strong>Last Name:</strong> <span>{message.lastName}</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>{message.email}</span>
                </p>
                <p>
                  <strong>Phone:</strong> <span>{message.phone}</span>
                </p>
                <p>
                  <strong>Message:</strong> <span>{message.message}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h2 className="no-messages-message">No Messages!</h2>
        )}
      </div>
    </section>
  );
};

export default Messages;
