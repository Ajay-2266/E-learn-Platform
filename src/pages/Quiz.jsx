import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Quiz.css";

export default function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { courseTitle, userName = "Student" } = location.state || { courseTitle: "Course", userName: "Student" };

  // Sample quiz questions
  const quizData = {
    "Java Fundamentals": [
      { question: "Java is a ___ language.", options: ["Compiled", "Interpreted", "Both"], answer: 2 },
      { question: "JVM stands for?", options: ["Java Virtual Machine", "Java Very Much", "Java Visual Model"], answer: 0 },
    ],
    "Spring Boot Essentials": [
      { question: "Spring Boot simplifies ___.", options: ["Configuration", "Compilation", "Deployment"], answer: 0 },
      { question: "Annotation for main Spring Boot class?", options: ["@Controller", "@SpringBootApplication", "@Service"], answer: 1 },
    ],
    "React with Vite": [
      { question: "React is used for ___ development.", options: ["Backend", "Frontend", "Database"], answer: 1 },
      { question: "Vite is a ___.", options: ["Framework", "Build tool", "Library"], answer: 1 },
    ],
  };

  const questions = quizData[courseTitle] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentIndex].answer) setScore(score + 1);

    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
    else setQuizCompleted(true); // mark quiz as completed
  };

  if (!questions.length) return <p>No quiz available for this course.</p>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-page">
      <Navbar />
      <div className="quiz-container">
        <h2>{courseTitle} - Quiz</h2>

        {!quizCompleted ? (
          <div className="question-card">
            <p className="question">{currentQuestion.question}</p>
            <div className="options">
              {currentQuestion.options.map((opt, i) => (
                <button key={i} className="option-btn" onClick={() => handleAnswer(i)}>
                  {opt}
                </button>
              ))}
            </div>
            <p className="quiz-progress">
              Question {currentIndex + 1} of {questions.length}
            </p>
          </div>
        ) : (
          <div className="quiz-completed">
            <p>Quiz completed! Your score: {score}/{questions.length}</p>
            <button
              className="download-certificate-btn"
              onClick={() =>
                navigate("/certificate-form", { state: { courseTitle} })
              }
            >
              Download Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
