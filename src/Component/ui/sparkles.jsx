"use client";
import React from "react";
import { SparklesCore } from "../../Component/ui/sparkles";

const SparkleClean = () => {
  return (
    <div className="relative w-full h-[150px] overflow-hidden">
      
      {/* ⭐ actual particles */}
      <SparklesCore
        background="transparent"
        minSize={1}
        maxSize={1.5}
        particleCount={400}
        particleColor="#ffffff"
        className="w-full h-full"
      />

      {/* ⭐ BOTTOM CURVED MASK */}
      <div className="sparkle-mask"></div>
    </div>
  );
};

export default SparkleClean;
