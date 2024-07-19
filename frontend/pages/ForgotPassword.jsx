import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigateTo = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/forgot-password",
          { email },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          navigateTo("/login");
          setEmail("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <h2 className={styles.authTitle}>Forgot Password</h2>
        <p className={styles.authSubtitle}>
          Enter your email to reset your password
        </p>
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.authButton}>
            Send Reset Link
          </button>
        </form>
        <div className={styles.authFooter}>
          <p>Remembered your password?</p>
          <Link to="/login" className={styles.authLink}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
