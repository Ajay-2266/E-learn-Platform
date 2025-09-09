import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./CourseList.css";

export default function CourseList() {
  const navigate = useNavigate();
  const courses = [
  { id: 1, title: "Java Fundamentals", videoId: "AushtkE0FKM" },
  { id: 2, title: "Spring Boot Essentials", videoId: "5MgBikgcWnY" },
  { id: 3, title: "React with Vite", videoId: "Ke90Tje7VS0" },
];

  

  return (
    <div className="course-container">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div
                className="card cursor-pointer"
                onClick={() =>
                  navigate(`/lesson/${c.id}`, { state: { videoId: c.videoId, title: c.title } })
                }
              >
                <h3>{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
