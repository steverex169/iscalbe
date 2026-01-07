import React from "react";
import { Link } from "react-router-dom";
import Casecard from "./CaseCard/Casecard";
import brush from "./CaseCard/images/brush.png";
import women from "./CaseCard/images/women.png";
import "./Casestudy.css";

const CaseStudy = () => {
  const cases = [
    {
      image: brush,
      title: "Selene Teeth — Oral Care",
      description:
        "Selene Teeth had no clear email strategy and wasn’t scaling through Klaviyo. iScalable rebuilt their lifecycle flows and implemented consistent weekly campaigns.",
      fullInfo:
        "X% increase in email performance after iScalable rebuilt Selene Teeth’s flows and campaign strategy from the ground up."
    },
    {
      image: women,
      title: "The Soothie — Sleep Health Device",
      description:
        "The Soothie had a strong incentive offer but poor execution that limited conversions. iScalable redesigned the pop-up and welcome flow experience.",
      fullInfo:
        "X% increase in sign-ups after iScalable optimised pop-ups and welcome flows, driving higher welcome-flow revenue."
    }
  ];

  return (
    <section className="wrap-case-content">
      <div className="main-case">
        <div className="top-case">
          <h2>Case Studies</h2>
          <p>
            Discover the strategies behind growing lists, driving engagement,
            and building customer loyalty through email marketing.
          </p>
        </div>

        {/* 👇 See More Button (LEFT END) */}
        <div className="case-header-row">
          <Link to="/case-studies" className="see-more-btn">
            See More →
          </Link>
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
