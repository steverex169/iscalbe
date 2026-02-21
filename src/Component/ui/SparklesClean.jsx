"use client";
import React, { useState, useEffect } from "react";
import { SparklesCore } from "../../Component/ui/sparkles";

const SparkleClean = () => {
  const [particleCount, setParticleCount] = useState(1400);

  useEffect(() => {
    // Function to update particle count based on window width
    const updateParticleCount = () => {
      if (window.innerWidth <= 768) {
        setParticleCount(900);
      } else {
        setParticleCount(1400);
      }
    };

    updateParticleCount(); // initial check
    window.addEventListener("resize", updateParticleCount);

    return () => {
      window.removeEventListener("resize", updateParticleCount);
    };
  }, []);

  return (
    <div className="relative w-full h-[1200px] overflow-hidden">
      {/* ⭐ actual particles */}
      <SparklesCore
        background="transparent"
        minSize={2}
        maxSize={1.5}
        particleCount={particleCount}
        particleColor="#ffffff"
        className="w-full h-full"
      />

      {/* ⭐ BOTTOM CURVED MASK */}
      <div className="sparkle-mask"></div>
    </div>
  );
};

export default SparkleClean;
