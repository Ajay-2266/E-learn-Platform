import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./CertificateForm.css";

export default function CertificateForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseTitle } = location.state || { courseTitle: "Course" };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("Please enter both first and last name.");
      return;
    }
    navigate("/certificate", { state: { courseTitle, firstName, lastName } });
  };

  return (
    <div className="certificate-form-page">
      <Navbar />
      <div className="certificate-form-container">
        <h2>Enter Your Name for Certificate</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">Generate Certificate</button>
        </form>
      </div>
    </div>
  );
}
