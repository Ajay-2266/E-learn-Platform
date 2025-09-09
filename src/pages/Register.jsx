import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import bgImage from "../assets/bg.jpg";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div
      className="register-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="register-card">
        <h2>Create Account</h2>

        <input type="text" className="form-control mb-2" placeholder="Full Name" />
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input type="password" className="form-control mb-2" placeholder="Password" />
        <input type="password" className="form-control mb-3" placeholder="Confirm Password" />

        <button
          className="btn btn-primary w-100 mb-2"
          onClick={() => navigate("/dashboard")}
        >
          Register
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
