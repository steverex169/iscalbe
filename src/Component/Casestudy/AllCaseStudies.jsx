import React from "react";
import Casecard from "./CaseCard/Casecard";
import brush from "./CaseCard/images/brush.png";
import women from "./CaseCard/images/women.png";

const AllCaseStudies = () => {
  const allCases = [
    {
      image: brush,
      title: "BlowBrusher — Beauty Tools",
      description:
        "BlowBrusher needed a major revenue spike during peak summer demand. iScalable rebuilt flows, increased campaign cadence, and aligned messaging to seasonal promotions to maximise Klaviyo performance.",
      fullInfo:
        "X% surge in email-attributed revenue, with email driving over X% of total seasonal revenue after iScalable’s optimisation."
    },
    {
      image: women,
      title: "Unbreakable — Premium Umbrellas",
      description:
        "Despite sending emails consistently, Unbreakable’s campaigns were underperforming. iScalable rebuilt the campaign calendar and creative to position the brand as a market authority and drive engagement.",
      fullInfo:
        "2× revenue per recipient, plus X% higher opens and X% higher clicks after iScalable rebuilt campaign strategy and creative."
    },
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

  return (
    <section className="wrap-case">
      <div className="main-case">
        <h2>All Case Studies</h2>

        <div className="bottom-case">
          {allCases.map((item, index) => (
            <Casecard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCaseStudies;
