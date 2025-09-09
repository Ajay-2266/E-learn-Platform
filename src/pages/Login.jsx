import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg";   // ✅ Import image
import "./LoginPage.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}  // ✅ Apply dynamically
    >
      <div className="login-card">
        <h3 className="text-center mb-3">Login</h3>

        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input type="password" className="form-control mb-3" placeholder="Password" />

        <button
          className="btn btn-primary w-100 mb-2"
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>

        <p className="text-center">
          Don’t have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
