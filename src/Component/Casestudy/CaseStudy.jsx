import React from "react";
import Casecard from "./CaseCard/Casecard";
import brush from "./CaseCard/images/brush.png";
import women from "./CaseCard/images/women.png";
import "./Casestudy.css";

const CaseStudy = () => {
  const cases = [
    {
      image: brush,
      title: "Nano Brush",
      description: "How we scaled an oral-care business from modest beginnings to impressive growth by building targeted email flows, boosting retention, and increasing revenue.",
      fullInfo:
        "We built advanced email flows, abandoned cart recovery, segmentation strategies, and increased repeat purchases by 43%."
    },
    {
      image: women,
      title: "Waist Trainers",
      description: "Discover how we helped a waist trainer company grow its reach and revenue by building data-driven email marketing systems that kept customers engaged.",
      fullInfo:
        "Using behavioral email campaigns, upsells, and re-engagement flows, revenue doubled in 6 months."
    }
  ];

  return (
    <section className="wrap-case-content">
      <div className="main-case">
        <div className="top-case">
          <h2>Case Studies</h2>
          <p>Discover the strategies behind growing lists, driving engagement, and building customer loyalty through email marketing.</p>
        </div>

        <div className="bottom-case">
          {cases.map((item, index) => (
            <Casecard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
