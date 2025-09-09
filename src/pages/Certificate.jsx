import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import logo from "/logo.png"; // optional logo
import signature from "../assets/signature.png"; // optional signature

export default function Certificate() {
  const location = useLocation();
  const navigate = useNavigate();
  const { courseTitle, firstName, lastName } = location.state || {};

  useEffect(() => {
    if (firstName && lastName) {
      const doc = new jsPDF("landscape", "px", "a4");

      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;

      // Gradient background
      doc.setFillColor(255, 255, 255); // base
      doc.rect(0, 0, pageWidth, pageHeight, "F");

      // Decorative border
      doc.setDrawColor(255, 215, 0); // gold
      doc.setLineWidth(6);
      doc.rect(30, 30, pageWidth - 60, pageHeight - 60);

      doc.setDrawColor(255, 215, 0); // inner thin border
      doc.setLineWidth(2);
      doc.rect(50, 50, pageWidth - 100, pageHeight - 100);

      // Watermark
      doc.setFontSize(120);
      doc.setTextColor(230, 230, 230);
      doc.setFont("helvetica", "bold");
      doc.text("LEARNPLUS", pageWidth / 2, pageHeight / 2 + 40, {
        align: "center",
        angle: 45,
      });

      // Logo
      if (logo) doc.addImage(logo, "PNG", pageWidth / 2 - 50, 40, 100, 100);

      // Certificate title
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(42);
      doc.setFont("helvetica", "bold");
      doc.text("Certificate of Completion", pageWidth / 2, 180, { align: "center" });

      // Subtitle
      doc.setFontSize(22);
      doc.setFont("helvetica", "normal");
      doc.text("This is to certify that", pageWidth / 2, 230, { align: "center" });

      // User name
      doc.setFontSize(36);
      doc.setFont("helvetica", "bold");
      doc.text(`${firstName} ${lastName}`, pageWidth / 2, 280, { align: "center" });

      // Course completion
      doc.setFontSize(22);
      doc.setFont("helvetica", "normal");
      doc.text("has successfully completed the course", pageWidth / 2, 320, { align: "center" });

      doc.setFontSize(28);
      doc.setFont("helvetica", "bold");
      doc.text(`${courseTitle}`, pageWidth / 2, 360, { align: "center" });

      // Signature
      if (signature) doc.addImage(signature, "PNG", pageWidth - 200, pageHeight - 140, 120, 60);
      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.text("Authorized Signature", pageWidth - 140, pageHeight - 60);

      // Date
      const date = new Date().toLocaleDateString();
      doc.text(`Date: ${date}`, 60, pageHeight - 60);

      // Save PDF
      doc.save(`${firstName}_${lastName}_Certificate.pdf`);

      // Update completed courses in localStorage
      const completedCourses = JSON.parse(localStorage.getItem("completedCourses")) || [];
      if (!completedCourses.includes(courseTitle)) {
        completedCourses.push(courseTitle);
        localStorage.setItem("completedCourses", JSON.stringify(completedCourses));
      }

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [firstName, lastName, courseTitle, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "150px", color: "#333" }}>
      <h2>Generating your professional certificate...</h2>
      <p>Please wait a moment. Your certificate will be downloaded automatically.</p>
    </div>
  );
}
