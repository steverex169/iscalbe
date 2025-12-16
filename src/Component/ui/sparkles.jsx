import React, { useRef, useEffect } from "react";

export function SparklesCore({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.4,
  particleCount = 400,
  particleColor = "#ffffff",
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: minSize + Math.random() * (maxSize - minSize),
          speedY: 0.2 + Math.random() * 0.7,
          opacity: 0.4 + Math.random() * 0.6,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = particleColor;

      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speedY;
        if (p.y > canvas.height) p.y = 0;
      });

      requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => window.removeEventListener("resize", resize);
  }, [particleCount, minSize, maxSize, particleColor]);

  return (
    <div
      style={{ width: "100%", height: "100%", background }}
      className={className}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
