import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Certifications() {
  const navigate = useNavigate();
  const [completedCourses, setCompletedCourses] = useState([]);

  // List of all courses
  const courses = [
    { id: 1, title: "Java Fundamentals", videoId: "AushtkE0FKM" },
    { id: 2, title: "Spring Boot Essentials", videoId: "5MgBikgcWnY" },
    { id: 3, title: "React with Vite", videoId: "Ke90Tje7VS0" },
  ];

  // Load completed courses from localStorage
  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem("completedCourses")) || [];
    setCompletedCourses(completed);
  }, []);

  // Handle click on incomplete course
  const handleCourseClick = (course) => {
    if (!completedCourses.includes(course.title)) {
      navigate(`/lesson/${course.id}`, { state: { videoId: course.videoId, title: course.title } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-indigo-100">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => {
            const isCompleted = completedCourses.some(
              (completed) => completed.toLowerCase() === course.title.toLowerCase()
            );

            return (
             <div
                key={course.id}
                className={`p-6 rounded-lg shadow-lg cursor-pointer ${
                    isCompleted
                    ? "bg-green-500 text-gray-900 font-bold" // darker text for visibility
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => {
                    if (!isCompleted) handleCourseClick(course);
                }}
                >
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="mt-2">{isCompleted ? "✅ Completed" : "Not Completed"}</p>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
