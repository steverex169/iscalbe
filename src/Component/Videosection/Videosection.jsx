import React, { useRef, useEffect } from "react";
import "./Videosection.css"; // make sure filename matches exactly
import gsap from "gsap";

const VideoSection = () => {
  const videoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="video-section">
      <div className="video-container" ref={videoRef}>
        <video
          src="/videos/Primevideo.mp4"   // direct path from public folder
          autoPlay
          muted
          loop
          playsInline
          className="center-video"
        />
      </div>
    </section>
  );
};

export default VideoSection;
