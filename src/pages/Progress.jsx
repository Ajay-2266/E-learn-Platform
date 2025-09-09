import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "./Progress.css"; // Add custom styles

export default function Progress() {
  const stats = [
    { course: "Java Fundamentals", progress: 80 },
    { course: "Spring Boot", progress: 45 },
    { course: "React", progress: 25 },
  ];

  return (
    <div className="progress-page">
      <Navbar />
      <div className="container">
        <h2 className="page-title">Progress Report</h2>
        <div className="progress-list">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="progress-card"
            >
              <h3 className="course-title">{s.course}</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${s.progress}%` }}
                ></div>
              </div>
              <p className="progress-text">{s.progress}% complete</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
