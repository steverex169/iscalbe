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
  [img111],
  [fimg2],
  [img1113],
  [img1112],
    [img1114],

];


// 🌟 CREATIVE COMPONENT
const Creative = () => {
  return (
    <div className="creative-wrapper">
      
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
