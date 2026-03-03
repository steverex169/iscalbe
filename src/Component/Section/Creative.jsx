"use client";
import React, { useRef, useEffect } from "react";
import "../Section/Creative.css";
import VideoBox from "../Videocard/Videocard";
import DashboardCard from "../Dashboard/DashboardCard.jsx";
import Footer from "../Footer/Footer.jsx";
import "../../assets/Css/main.css";

// Brand logos
import Jnbreakable from "../Bottom/images/Js.png";
import Fragrant from "../Bottom/images/Fra.png";
import Conzuri from "../Bottom/images/Co.png";
import Selene_black from "../Bottom/images/Se.png";
import Soothe from "../Bottom/images/So.png";
import Blowbrusher from "../Bottom/images/Blo.png";
import li from "../Bottom/images/l1.png";
import l2 from "../Bottom/images/l2.png";
import l4 from "../Bottom/images/l4.png";
import l11 from "../Bottom/images/l11.png";
import l12 from "../Bottom/images/l12.png";
import l13 from "../Bottom/images/l13.png";
import l14 from "../Bottom/images/l14.png";
import l22 from "../Bottom/images/l22.png";
import l33 from "../Bottom/images/l33.png";
import l44 from "../Bottom/images/l44.png";
import fimg1 from "../Bottom/images/fimg1.png";
import fimg2 from "../Bottom/images/fimg2.png";
import img111 from "../Bottom/images/fimg333.png";
import img1112 from "../Bottom/images/fimg44.png";
import img1113 from "../Bottom/images/fimg22.png";
import img1114 from "../Bottom/images/fimg11.png";
import img114 from "../Bottom/images/fimg33.png";

// ✅ COMPLETE DASHBOARD DATA
const dashboardImages = [
  [fimg1],
  [img114],
  [img1114],
  [img111],
  [fimg2],
  [img1113],
  [img1112],
];


// 🌟 SPARKLE CORE COMPONENT
function SparklesCore({
  background = "transparent",
  minSize = 1,
  maxSize = 1.5,
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


// 🌟 CREATIVE COMPONENT
const Creative = () => {
  return (
    <div className="creative-wrapper">
      <div className="mainspark">
        <div className="sparkle-container">
          {/* Sparkles inside Creative.jsx, no imports */}
          <SparklesCore className="w-full h-full" />

          <div className="brand-slider-wrapper">
            <div className="brand-slider">
              <img src={Jnbreakable} style={{ height: "40px" }} alt="" />
              <img src={Fragrant} style={{ height: "40px" }} alt="" />
              <img src={Conzuri} style={{ height: "32px" }} alt="" />
              <img src={Selene_black} style={{ height: "32px" }} alt="" />
              <img src={Soothe} style={{ height: "32px" }} alt="" />
              <img src={Blowbrusher} style={{ height: "32px" }} alt="" />
              <img src={li} style={{ height: "100px", marginTop: "-21px" }} alt="" />
              <img src={l2} style={{ height: "40px" }} alt="" />
              <img src={l4} style={{ height: "40px" }} alt="" />
              <img src={l11} style={{ height: "40px" }} alt="" />
              <img src={l12} style={{ height: "40px" }} alt="" />
              <img src={l13} style={{ height: "40px" }} alt="" />
              <img src={l14} style={{ height: "40px" }} alt="" />
              <img src={l22} style={{ height: "40px" }} alt="" />
              <img src={l33} style={{ height: "40px" }} alt="" />
              <img src={l44} style={{ height: "40px" }} alt="" />
            </div>
          </div>
        </div>
        <div className="testmask w-full h-[200px] bg-red-500"></div>
      </div>

      <section className="Creative">
        <h2 className="creative-h2">Numbers never lie...</h2>
        <p className="creative-p">
          Our clients generate an average between 20-40% of their revenue from email.
        </p>

        <div className="row-video-card">
          <VideoBox link="/videos/video1.mp4" title="RGBA-Lights" />
        </div>

        {/* Dashboard Cards */}
        {dashboardImages.map((row, rowIndex) => (
          <div className="dashboard-card-row" key={rowIndex}>
            <DashboardCard image={row[0]} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Creative;
