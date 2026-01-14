"use client";
import React from "react";
import "../Section/Creative.css";
import VideoBox from "../Videocard/Videocard";
import DashboardCard from "../Dashboard/DashboardCard.jsx";
import Footer from "../Footer/Footer.jsx";

// Sparkles component
import SparkleMasked from "../../Component/ui/SparklesClean.jsx";

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
import img1 from "../Bottom/images/231.png";
import img2 from "../Bottom/images/241.png";
import img3 from "../Bottom/images/251.png";
import img4 from "../Bottom/images/252.png";
import img11 from "../Bottom/images/253.png";
import img12 from "../Bottom/images/254.png";
import img13 from "../Bottom/images/255.png";
import img14 from "../Bottom/images/257.png";
import img111 from "../Bottom/images/258.png";
import img112 from "../Bottom/images/259.png";
import img113 from "../Bottom/images/2312.png";
import img114 from "../Bottom/images/2411.png";
import img1112 from "../Bottom/images/2412.png";
import img1113 from "../Bottom/images/2413.png";
import img1114 from "../Bottom/images/2414.png";
import img11113 from "../Bottom/images/24111.png";



// ✅ COMPLETE DASHBOARD DATA (HAR CARD DIFFERENT)
const dashboardImages = [
  [img3, img4],
  [img11, img12],
  [img13, img14],
  [img111, img112],
  [img2, img11113],
  [img114, img1112],
  [img1113, img1114],
  [img1, img113],
];




const Creative = () => {
  return (
    <>
      <div className="creative-wrapper">
        <div className="mainspark">
          <div className="sparkle-container">
            <SparkleMasked />

            <div className="brand-slider-wrapper">
              <div className="brand-slider">
                <img src={Jnbreakable} />
                <img src={Fragrant} />
                <img src={Conzuri} />
                <img src={Selene_black} />
                <img src={Soothe} />
                <img src={Blowbrusher} />
                <img src={li} />
                <img src={l2} />
                <img src={l4} />
                <img src={l11} />
                <img src={l12} />


                <img src={Jnbreakable} />
                <img src={Fragrant} />
                <img src={Conzuri} />
                <img src={Selene_black} />
                <img src={Soothe} />
                <img src={l13} />
                <img src={l14} />
                <img src={l22} />
                <img src={l33} />
                <img src={l44} />

              </div>
            </div>
          </div>

          <div className="testmask w-full h-[200px] bg-red-500"></div>
        </div>

        <section className="Creative">
          <h2 className="creative-h2">Number never lie...</h2>
          <p className="creative-p">
            Our clients generate an average between 20-40% of their revenue
            from email.
          </p>

          <div className="row-video-card">
            <VideoBox link="/videos/video1.mp4" title="RGBA-Lights" />
            <VideoBox link="/videos/video2.mp4" title="RGBA-Lights" />
          </div>

          {/* ✅ AUTO DASHBOARD CARDS */}
          {/* ✅ DASHBOARD — 6 ROWS / 12 CARDS */}
          {dashboardImages.map((row, rowIndex) => (
            <div className="dashboard-card-row" key={rowIndex}>
              <DashboardCard image={row[0]} />
              <DashboardCard image={row[1]} />
            </div>
          ))}


        </section>

        <Footer data="Like what you see dont you 😊" />
      </div>
    </>
  );
};

export default Creative;
