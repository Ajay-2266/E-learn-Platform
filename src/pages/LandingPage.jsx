import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

// ✅ Import background image
import bg from "../assets/bg.jpg";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div 
      className="landing-container"
      style={{ backgroundImage: `url(${bg})` }}  // ✅ Set bg image
    >
      {/* Glass effect box */}
      <div className="glass-box text-center p-5">
        <h1 className="mb-3">LearnPlus Application</h1>
        <p className="mb-4">
          Your one-stop platform for courses, quizzes, and certifications.
        </p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary me-2"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
