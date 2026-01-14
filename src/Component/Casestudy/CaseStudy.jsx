import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Casecard from "./CaseCard/Casecard";
import brush from "./CaseCard/images/brush.png";
import women from "./CaseCard/images/women.png";
import "./Casestudy.css";

const CaseStudySlider = () => {
  const cases = [
    { image: brush, title: "Selene Teeth — Oral Care", description: "Selene Teeth had no clear email strategy and wasn’t scaling through Klaviyo. iScalable rebuilt their lifecycle flows and implemented consistent weekly campaigns.", fullInfo: "X% increase in email performance after iScalable rebuilt Selene Teeth’s flows and campaign strategy from the ground up." },
    { image: women, title: "The Soothie — Sleep Health Device", description: "The Soothie had a strong incentive offer but poor execution that limited conversions. iScalable redesigned the pop-up and welcome flow experience.", fullInfo: "X% increase in sign-ups after iScalable optimised pop-ups and welcome flows, driving higher welcome-flow revenue." },
    { image: brush, title: "BlowBrusher — Beauty Tools", description: "BlowBrusher needed a major revenue spike during peak summer demand. iScalable rebuilt flows, increased campaign cadence, and aligned messaging to seasonal promotions to maximise Klaviyo performance.", fullInfo: "X% surge in email-attributed revenue, with email driving over X% of total seasonal revenue after iScalable’s optimisation." },
    { image: women, title: "Unbreakable — Premium Umbrellas", description: "Despite sending emails consistently, Unbreakable’s campaigns were underperforming. iScalable rebuilt the campaign calendar and creative to position the brand as a market authority and drive engagement.", fullInfo: "2× revenue per recipient, plus X% higher opens and X% higher clicks after iScalable rebuilt campaign strategy and creative." },
    {
          image: brush,
          title: "Fragrant Breeze — Fragrance & Personal Care",
          description:
            "Fragrant Breeze was over-reliant on campaigns, with flows underperforming. iScalable rebuilt their automation ecosystem to rebalance revenue and unlock scalable growth through Klaviyo.",
          fullInfo:
            "£X in incremental revenue after iScalable increased flows’ contribution from X% to X% of email revenue."
        },
        {
          image: women,
          title: "Conzuri — Height-Boosting Footwear",
          description:
            "Conzuri had strong open rates but weak downstream conversions. iScalable redesigned every email template to follow high-converting, mobile-first best practices.",
          fullInfo:
            "Immediate improvements across all key metrics within days of iScalable launching redesigned email templates."
        },
        {
          image: brush,
          title: "GlowBear — Teddy Bear Toy",
          description:
            "GlowBear needed emails to convert emotional and gifting traffic into purchases. iScalable rebuilt flows and campaign messaging around gifting moments and urgency.",
          fullInfo:
            "X% increase in email revenue after iScalable rebuilt GlowBear’s gifting-focused flows and campaigns."
        },
        {
          image: women,
          title: "Cleen — Portable Nebuliser",
          description:
            "Cleen’s email channel wasn’t converting despite high-intent traffic. iScalable rebuilt education-driven flows that improved trust and purchase confidence.",
          fullInfo:
            "X% uplift in flow revenue after iScalable rebuilt Cleen’s education-led automation."
        },
        {
          image: brush,
          title: "Sanira — Women’s Health Shapewear",
          description:
            "Sanira needed email messaging aligned with confidence, comfort, and health. iScalable rebuilt lifecycle flows to improve conversion and order value.",
          fullInfo:
            "X% increase in email-attributed revenue after iScalable rebuilt Sanira’s Klaviyo flows."
        },
        {
          image: women,
          title: "Cuddli — Baby Sleep Product",
          description:
            "Cuddli needed emails to convert cautious new parents into buyers. iScalable rebuilt trust-focused flows that reassured parents and drove consistent sales.",
          fullInfo:
            "X% increase in automated revenue after iScalable rebuilt Cuddli’s lifecycle flows."
        },
        {
          image: brush,
          title: "Purr — Pet Feeder",
          description:
            "Purr’s email channel lacked consistency and scalability. iScalable rebuilt flows and campaign timing to improve conversion and repeat purchases.",
          fullInfo:
            "X% uplift in email revenue after iScalable optimised Purr’s lifecycle strategy."
        },
        {
          image: women,
          title: "PawTree — Cat Tree",
          description:
            "PawTree’s emails lacked urgency and structure. iScalable rebuilt flows and campaigns to drive faster buying decisions and higher order value.",
          fullInfo:
            "X% increase in placed order rate after iScalable rebuilt PawTree’s email strategy."
        },
        {
          image: brush,
          title: "Nova Bar — Mechanics Torch",
          description:
            "Nova Bar needed emails to convert professional buyers faster. iScalable rebuilt flows and campaigns with utility-driven messaging and clear use cases.",
          fullInfo:
            "X% increase in conversion rate after iScalable rebuilt Nova Bar’s Klaviyo flows."
        },
        {
          image: women,
          title: "Talki — Nut Milk Blender",
          description:
            "Talki’s emails lacked education and retention strategy. iScalable rebuilt lifecycle flows to increase conversions and repeat purchases.",
          fullInfo:
            "X% increase in flow-driven revenue after iScalable rebuilt Talki’s automation."
        },
        {
          image: brush,
          title: "Lemora — Portable Battle Ropes",
          description:
            "Lemora needed emails to convert high-intent fitness shoppers. iScalable rebuilt lifecycle strategy with motivational messaging and urgency triggers.",
          fullInfo:
            "X% uplift in email-attributed revenue after iScalable rebuilt Lemora’s Klaviyo strategy."
        },
        {
          image: women,
          title: "Selene Teeth — Oral Care",
          description:
            "Selene Teeth had no clear email strategy and wasn’t scaling through Klaviyo. iScalable rebuilt their lifecycle flows and implemented consistent weekly campaigns, turning email into a reliable revenue channel.",
          fullInfo:
            "X% increase in email performance after iScalable rebuilt Selene Teeth’s flows and campaign strategy from the ground up."
        }
  ];

  const trackRef = useRef(null);
  const cardRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width dynamically
  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth + 30; // gap included
      setCardWidth(width);
    }
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= cases.length ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [cases.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= cases.length ? prev : prev + 1
    );
  };

  return (
    <section className="wrap-case-content">
      <div className="main-case">
        <div className="top-case">
          <h2>Case Studies</h2>
          <p>Discover the strategies behind growing lists, driving engagement, and building customer loyalty through email marketing.</p>
        </div>

        {/* <div className="case-header-row">
          <Link to="/case-studies" className="see-more-btn">
            See More →
          </Link>
        </div> */}

        <div className="slider-wrapper">
          <button className="slider-btn prev" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="slider-container">
            <div
              ref={trackRef}
              className="slider-track"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
              }}
            >
              {cases.map((item, index) => (
                <div ref={index === 0 ? cardRef : null} key={index}>
                  <Casecard {...item} />
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySlider;
