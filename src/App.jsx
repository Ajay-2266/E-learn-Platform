import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import CourseList from "./pages/CourseList";
import LessonPage from "./pages/LessonPage";
import Progress from "./pages/Progress";
import Quiz from "./pages/Quiz";
import CertificateForm from "./pages/certificateForm";
import Certificate from "./pages/Certificate";
import Certifications from "./pages/Certifications";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Dashboard Layout */}
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="courses" element={<CourseList />} />
              <Route path="lesson/:id" element={<LessonPage />} />
              <Route path="progress" element={<Progress />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="certificate-form" element={<CertificateForm />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/certifications" element={<Certifications />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}
