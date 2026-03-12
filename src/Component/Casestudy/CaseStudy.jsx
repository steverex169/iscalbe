import "./Casestudy.css";
import email1 from "../Bottom/images/Slice1.png";
import email2 from "../Bottom/images/Slice11.png";
import email3 from "../Bottom/images/Slice111.png";
import email4 from "../Bottom/images/email11.png";
import emailz from "../Bottom/images/email22.png";
import emailwest from "../Bottom/images/emailwest.png";
import se from"../Bottom/images/se.png";
import so from"../Bottom/images/Soothie.png";
import wa from"../Bottom/images/waaa.png";
import dark from"../Bottom/images/darkl.png";
import sooth1 from"../Bottom/images/sooth1.png";
import sooth2 from"../Bottom/images/sooth2.png";
import sooth3 from"../Bottom/images/sooth3.png";
import dark1 from"../Bottom/images/dark1.png";
import dark2 from"../Bottom/images/dark2.png";
import dark3 from"../Bottom/images/dark3.png";
import wa1 from"../Bottom/images/wais1.png";
import wa2 from"../Bottom/images/wais2.png";
import wa3 from"../Bottom/images/wais3.png";
import "../../assets/Css/main.css";
import GrowthArrow from "./GrowthArrow";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import React, { useState } from "react";
// Scroll-based CountUp wrapper
const CountUpWrapper = ({ end }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,   // sirf ek baar count kare
    threshold: 0.3,      // jab 30% visible ho
  });

  return (
    <span ref={ref}>
      {inView ? <CountUp start={0} end={end} duration={2} /> : 0}
    </span>
  );
};


const CaseStudySection = () => {
  const cases = [
        {
      logo: so,
      images: [sooth1, sooth2, sooth3],
      title: (
        <>
          How we increased Email Revenue by <strong>25%</strong> and boosted Click Rates by<strong>74%</strong> for the Soothie.
        </>
      ),
      problem:
        "Despite strong product-market fit and solid traffic, The Soothie wasn’t maximizing revenue from its email list, Campaigns lacked emotional positioning, segmentation was basic, and flows weren’t fully optimized for conversion.",
      result1: "81%",
      result1Text: "Average Open Rate.",
      result2: "40%",
      result2Text: "£15,854+ in MRR",
      check1: "Split-tested different subject lines weekly.",
      check2: "Segmented based on engagement and behaviour.",
      check3: "Built high-converting abandoned cart, post-purchase, & winback flows",
      description:
        "iScalable rebuilt lifecycle flows and implemented consistent weekly campaigns, increasing overall performance.",
    },
        {
      logo: dark,
      images: [dark1, dark2, dark3],
      title: (
        <>
          How We Unlocked <strong>£20,000</strong> in the First <strong>30</strong> Days from a List That Wasn’t Even Being Looked At...
        </>
      ),
      problem:
        "Darkstims were already doing over £250,000+ per month on TikTok Shop, so traffic and demand weren’t the issue. However, on Shopify, email was generating zero. Despite having a small list, there were no proper flows or campaign structure in place, meaning significant backend revenue was being left untapped.",
      result1: "62%",
      result1Text: "Campaign Revenue.",
      result2: "25%",
      result2Text: "£21,681+ in MRR.",
      check1: "Rebuilt the entire email infrastructure from scratch",
      check2: "Segmented the list properly — buyers, non-buyers, engaged, cold",
      check3: "Structured weekly campaigns around drops, urgency, payday angles & product education",
      description:
        "iScalable rebuilt lifecycle flows and implemented consistent weekly campaigns, increasing overall performance.",
    },
    {
      logo: se,
      images: [email1, email2, email3],
      title: (
        <>
          How We Unlocked <strong>$600,000+</strong> Without Increasing Ad Spend.
        </>
      ),
      problem:
        "Selene was driving strong paid traffic and generating consistent sales, but the email channel wasn’t built to scale. The foundational flows were under-leveraged, campaigns lacked clear strategic direction, and customer retention wasn’t being fully maximised. Revenue was coming in, but a significant portion of potential backend revenue simply wasn’t being captured.",
      result1: "65%",
      result1Text: "Average Open Rate.",
      result2: "$3k",
      result2Text: "Average Revenue Per Email Send (Non Promotional)",
      check1: "Behaviour-based segmentation to increase buyer intent.",
      check2: "Strategic weekly campaigns aligned with paid traffic.",
      check3: "Offer-driven promotions built for conversion, not just engagement.",
      description:
        "iScalable rebuilt lifecycle flows and implemented consistent weekly campaigns, increasing overall performance.",
    },
        {
      logo: wa,
      images: [wa1, wa2, wa3],
      title: (
        <>
          How We Unlocked <strong>$600,000+</strong> Without Increasing Ad Spend.
          From Zero Email Marketing to <strong>$250,000+</strong> Generated in <strong>120</strong> Days.
        </>
      ),
      problem:
        "Waistora was scaling aggressively through paid ads, with strong sales and consistent traffic coming in. However, there was no email marketing system in place. There was no backend structure, no retention engine, and no automated recovery flows. Every single sale depended entirely on paid advertising, meaning revenue stopped the moment ad spend slowed.",
      result1: "62%",
      result1Text: "Average Open Rate.",
      result2: "15%",
      result2Text: "Increase in online sales.",
      check1: "Built the entire backend from scratch",
      check2: "Structured high-converting abandoned cart & checkout recovery flows",
      check3: "Created offers designed for conversion, not just engagement",
      description:
        "iScalable rebuilt lifecycle flows and implemented consistent weekly campaigns, increasing overall performance.",
    },
    // {
    //   image: email2,
    //   title: "The Soothie — Sleep Health Device",
    //   problem:
    //     "Strong offer but poor pop-up and welcome flow execution limited conversions.",
    //   result1: "42%",
    //   result1Text: "Signup Increase",
    //   result2: "67%",
    //   result2Text: "Open Rate Growth",
    //   description:
    //     "We redesigned pop-ups and optimized welcome flows to improve revenue generation.",
    // },
    // {
    //   image: email3,
    //   title: "BlowBrusher — Beauty Tools",
    //   problem:
    //     "Needed major revenue spike during peak seasonal demand.",
    //   result1: "2X",
    //   result1Text: "Revenue Surge",
    //   result2: "35%",
    //   result2Text: "Campaign Lift",
    //   description:
    //     "Rebuilt flows, increased cadence, and aligned messaging with seasonal promotions.",
    // },
    // {
    //   image: emailz,
    //   title: "Unbreakable — Premium Umbrellas",
    //   problem:
    //     "Campaigns were underperforming despite consistent sends.",
    //   result1: "2X",
    //   result1Text: "Revenue Per Recipient",
    //   result2: "28%",
    //   result2Text: "Click Growth",
    //   description:
    //     "Repositioned brand messaging and rebuilt campaign calendar for authority positioning.",
    // },
    // {
    //   image: emailwest,
    //   title: "Fragrant Breeze — Personal Care",
    //   problem:
    //     "Over-reliance on campaigns, automation flows underperforming.",
    //   result1: "£120K",
    //   result1Text: "Incremental Revenue",
    //   result2: "60%",
    //   result2Text: "Flow Contribution",
    //   description:
    //     "Rebuilt automation ecosystem to rebalance revenue sources.",
    // },
    // {
    //   image: email4,
    //   title: "Conzuri — Height-Boosting Footwear",
    //   problem:
    //     "Strong open rates but weak downstream conversions.",
    //   result1: "35%",
    //   result1Text: "Conversion Lift",
    //   result2: "24%",
    //   result2Text: "CTR Growth",
    //   description:
    //     "Redesigned templates using mobile-first best practices.",
    // },
  ];

  return (
    <section className="case-wrapper">
      <div className="case-container">

        {/* HEADER (UNCHANGED) */}
        <div className="case-header">
          <span className="badge">Showcasing our work</span>
          <h2>
            Case <span>Studies</span>
          </h2>
          <p>
            Discover the strategies behind growing lists, driving engagement,
            and building customer loyalty through email marketing.
          </p>
        </div>

        {/* CASE CARDS */}
        {cases.map((item, index) => (
  <div className="case-block" key={index}>

    {/* LEFT SIDE - EMAIL MOCKUPS */}
    <div className="case-left">
  <img 
    src={item.logo} 
    alt="" 
    className={`case-logo case-logo-${index}`} 
  />
  <p className="case-heading">{item.title}</p>
  <div className="email-mockups">
    {item.images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt=""
        className={`mockup mockup-${i}`}
      />
    ))}
  </div>
</div>

    {/* RIGHT SIDE - CONTENT */}
    <div className="case-right">

      {/* PROBLEM BOX */}
      <div className="problem-box">
        <h4 className="problem-title-text">The Problem</h4>
        <p className="problem-description">{item.problem}</p>
      </div>

      {/* RESULTS */}
      <div className="results">
        <div className="result-card">
          <div className="result-value">
            <h2>
      <CountUpWrapper end={parseInt(item.result1)} />%
    </h2>
            <GrowthArrow />
          </div>
          <p>{item.result1Text}</p>
        </div>

        <div className="result-card">
  <div className="result-value">
    <h2>
      <CountUpWrapper end={parseInt(item.result2)} />%
    </h2>
    <GrowthArrow />
  </div>
  <p>{item.result2Text}</p>
</div>
      </div>

      <div className="points">
  <div className="point">
    <span className="check">✔</span>
    <p>{item.check1}</p>
  </div>

  <div className="point">
    <span className="check">✔</span>
    <p>{item.check2}</p>
  </div>

  <div className="point">
    <span className="check">✔</span>
    <p>{item.check3}</p>
  </div>
</div>

    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default CaseStudySection;
