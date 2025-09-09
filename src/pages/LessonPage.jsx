import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./LessonPage.css";

export default function LessonPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { videoId, title } = location.state || {};

  const [progress, setProgress] = useState(0);
  const [player, setPlayer] = useState(null);

  if (!videoId) return <p style={{ color: "white" }}>No video selected!</p>;

  const opts = { width: "100%", height: "450", playerVars: { autoplay: 0 } };

  const onReady = (event) => {
    setPlayer(event.target);

    // Update progress every 500ms
    const interval = setInterval(() => {
      const duration = event.target.getDuration();
      const current = event.target.getCurrentTime();
      if (duration) setProgress((current / duration) * 100);

      // When video ends, redirect to Quiz page
      if (current >= duration) {
        clearInterval(interval);
        navigate("/quiz", { state: { courseTitle: title, courseId: id } });
      }
    }, 500);
  };

  // Optional: make progress bar clickable
  const handleProgressClick = (e) => {
    if (!player) return;
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    const duration = player.getDuration();
    player.seekTo((newProgress / 100) * duration, true);
    setProgress(newProgress);
  };

  return (
    <div className="lesson-container">
      <h2>{title}</h2>
      <div className="video-wrapper">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
      <div className="progress-container" onClick={handleProgressClick}>
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
