import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import dashboardBg from "../assets/dashboard-bg.jpg";
import { useLocation, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [completedCourses, setCompletedCourses] = useState([]);

  useEffect(() => {
    // Check if redirected from Certificate page with completed course
    if (location?.state?.completedCourse) {
      setCompletedCourses((prev) => [...prev, location.state.completedCourse]);
      // Optionally store in localStorage to persist across reloads
      const stored = JSON.parse(localStorage.getItem("completedCourses")) || [];
      if (!stored.includes(location.state.completedCourse)) {
        localStorage.setItem("completedCourses", JSON.stringify([...stored, location.state.completedCourse]));
      }
    } else {
      // Load from localStorage on initial load
      const stored = JSON.parse(localStorage.getItem("completedCourses")) || [];
      setCompletedCourses(stored);
    }
  }, [location]);

  // Sample courses (same as CourseList)
  const courses = [
    { id: 1, title: "Java Fundamentals" },
    { id: 2, title: "Spring Boot Essentials" },
    { id: 3, title: "React with Vite" },
  ];

  const handleStartCourse = (course) => {
    // Redirect to lesson page for that course
    navigate(`/lesson/${course.id}`, { state: { videoId: "VIDEO_ID_" + course.id, title: course.title } });
  };

  return (
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${dashboardBg})` }}
    >
      <div className="dashboard-card">
        <h1>Welcome to Dashboard</h1>
        <p>This is your main control panel.</p>

        <div style={{ marginTop: "2rem" }}>
          <h2>Your Courses</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {courses.map((c) => {
              const isCompleted = completedCourses.includes(c.title);
              return (
                <div
                  key={c.id}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "12px",
                    backgroundColor: isCompleted ? "#4ade80" : "#f87171",
                    color: "#fff",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>{c.title}</span>
                  {isCompleted ? (
                    <span>✔ Completed</span>
                  ) : (
                    <button
                      style={{
                        padding: "0.2rem 0.5rem",
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "#2563eb",
                        color: "#fff",
                        fontSize: "0.8rem",
                      }}
                      onClick={() => handleStartCourse(c)}
                    >
                      Start Course
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
