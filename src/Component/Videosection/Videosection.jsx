import React, { useRef, useEffect } from "react";
import "./VideoSection.css";
import VideoPath from "../../../public/videos/Primevideo.mp4";
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
          src={VideoPath}
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