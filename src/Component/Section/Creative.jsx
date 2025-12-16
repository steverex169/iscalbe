"use client";
import React, { useState } from "react";
import "../Section/Creative.css";
import VideoBox from "../Videocard/Videocard";
import DashboardCard from "../Dashboard/DashboardCard.jsx";
import Footer from "../Footer/Footer.jsx";
import introVideo from "../../../public/videos/video1.mp4";
import lightsVideo from "../../../public/videos/video2.mp4";

// Sparkles component
import SparkleMasked from "../../Component/ui/SparklesClean.jsx";

// Brand logos
import Jnbreakable from "../Bottom/images/Js.png";
import Fragrant from "../Bottom/images/Fra.png";
import Conzuri from "../Bottom/images/Co.png";
import Selene_black from "../Bottom/images/Se.png";
import Soothe from "../Bottom/images/So.png";
import Blowbrusher from "../Bottom/images/Blo.png";

const Creative = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % 2);
  const prev = () => setIndex((prev) => (prev - 1 + 2) % 2);

  return (
    <>
      {/* ⭐⭐⭐ YOUR ORIGINAL CREATIVE SECTION SAME AS BEFORE ⭐⭐⭐ */}
      <div className="creative-wrapper">
              {/* ⭐⭐⭐ TOP BRAND LOGO SLIDER ⭐⭐⭐ */}
      <div className="brand-slider-wrapper">
        <div className="brand-slider">
          <img src={Jnbreakable} />
          <img src={Fragrant} />
          <img src={Conzuri} />
          <img src={Selene_black} />
          <img src={Soothe} />
          <img src={Blowbrusher} />

          {/* Duplicate for infinite loop */}
          <img src={Jnbreakable} />
          <img src={Fragrant} />
          <img src={Conzuri} />
          <img src={Selene_black} />
          <img src={Soothe} />
          <img src={Blowbrusher} />
        </div>
      </div>

      {/* ⭐⭐⭐ SPARKLES 2px BELOW SLIDER ⭐⭐⭐ */}
      <div className="mainspark">
        <div className="sparkle-container">
          <SparkleMasked />
        </div>
              <div className="testmask w-full h-[200px] bg-red-500"></div>

      </div>


      
        <section className="Creative">
          <h2 className="creative-h2">Number never lie...</h2>
          <p className="creative-p">
            Our clients generate an average between 20- 40% of their revenue
            from email.
          </p>

          <div className="row-video-card">
            <VideoBox
              link={introVideo}
              title="RGBA-Lights"
            />
            <VideoBox
              link={lightsVideo}
              title="RGBA-Lights"
            />
          </div>

          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>

          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>
          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>
          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>
          <div className="dashboard-card-row">
            <DashboardCard />
            <DashboardCard />
          </div>
        </section>

        <Footer data="Like what you see dont you 😊" />
      </div>
    </>
  );
};

export default Creative;
