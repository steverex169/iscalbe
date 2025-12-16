import React, { useRef, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";
import "../Videocard/Videocard.css";

const VideoBox = ({ link, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0); // percent value
  const [duration, setDuration] = useState(0); // video length

  // when video metadata is loaded (duration available)
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // update progress bar while video plays
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const percent = (current / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  // play video
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // pause video
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // seeking with range input
  const handleSeek = (e) => {
    const newProgress = e.target.value;
    if (videoRef.current) {
      videoRef.current.currentTime = (newProgress / 100) * duration;
      setProgress(newProgress);
    }
  };

  return (
    <div
      className="Video-main-box"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={link}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></video>

      {/* Overlays visible if not playing OR if hovered */}
      {(!isPlaying || isHovered) && (
        <>
          <h1 className="video-h1">{title}</h1>

          <div className="video-bar">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              style={{ "--progress": `${progress}%` }}
            />
          </div>

          {!isPlaying ? (
            <FaRegPlayCircle className="play" onClick={handlePlay} />
          ) : (
            <CiPause1 className="play" onClick={handlePause} />
          )}
        </>
      )}
    </div>
  );
};

export default VideoBox;
