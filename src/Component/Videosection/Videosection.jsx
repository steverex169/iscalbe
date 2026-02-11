import React, { useRef, useEffect, useState } from "react";
import "./Videosection.css";
import gsap from "gsap";

const VideoSection = () => {
  const videoRef = useRef(); // ONLY on <video>
  const [showSpeedOptions, setShowSpeedOptions] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(3);

  const speeds = [2, 3, 4];
  const speedMap = { 2: 2, 3: 6, 4: 8 };

  // GSAP fade-in
  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );
    }
  }, []);

  const handleSpeedChange = (speed) => {
    const video = videoRef.current;
    if (video) {
      const realSpeed = speedMap[speed] || 6;
      video.playbackRate = realSpeed;
      setCurrentSpeed(speed);
      setShowSpeedOptions(false);
      console.log(`[SPEED] Button ${speed}x clicked → PlaybackRate: ${realSpeed}x`);
    }
  };

  const handleVideoReady = () => {
    const video = videoRef.current;
    if (video) {
      const realSpeed = speedMap[currentSpeed] || 6;
      video.playbackRate = realSpeed;
      console.log(`[VIDEO] Video ready, PlaybackRate set to: ${realSpeed}x`);
    }
  };

  return (
    <section className="video-section">
                      <div className="video-header">
                    
                    <h1>PRIME’s Email, Built Step by Step (the prime is the logo of prime)</h1>
                    <p>
                        We recreated PRIME’s email and walk you through the design process, step by step, exactly how our team would build it for a client.
                    </p>
                </div>
      <div
        className="video-container"
        onMouseEnter={() => setShowSpeedOptions(true)}
        onMouseLeave={() => setShowSpeedOptions(false)}
      >
        <video
          ref={videoRef} // ✅ ref only on video
          src="/videos/Primevideo.mp4" // MUST be in public/videos/
          autoPlay
          muted
          loop
          playsInline
          className="center-video"
          onLoadedMetadata={handleVideoReady}
          onCanPlay={handleVideoReady}
        />

        {/* Hover buttons */}
        {showSpeedOptions && (
          <div className="speed-options">
            {speeds.map((speed) => (
              <button
                key={speed}
                className={`speed-btn ${currentSpeed === speed ? "active" : ""}`}
                onClick={() => handleSpeedChange(speed)}
              >
                {speed}x
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
