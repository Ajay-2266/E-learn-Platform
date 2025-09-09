import React from "react";
import { Nav } from "react-bootstrap";
import logo from "../assets/overlay.png"; // your logo image

export default function Sidebar() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #4f46e5, #9333ea)", // modern gradient
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2.5rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="E-Learning Logo"
        style={{
          width: "90px",
          height: "90px",
          objectFit: "cover",
          marginBottom: "0.75rem",
          borderRadius: "50%", // circular logo
          boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <h4
        style={{
          color: "#fff",
          marginBottom: "2.5rem",
          textAlign: "center",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        E-Learning Platform
      </h4>

      {/* Navigation Links */}
      <Nav defaultActiveKey="/dashboard" className="flex-column w-100 px-3">
        {["Dashboard", "Courses", "Certifications", "Progress", "Quiz"].map(
          (item, idx) => (
            <Nav.Link
              key={idx}
              href={`/${item.toLowerCase()}`}
              style={{
                color: "#fff",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                marginBottom: "0.75rem",
                transition: "all 0.3s",
                fontWeight: "500",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgba(255,255,255,0.15)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              {item}
            </Nav.Link>
          )
        )}
      </Nav>
    </div>
  );
}
