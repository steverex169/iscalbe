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


// ✅ COMPLETE DASHBOARD DATA (HAR CARD DIFFERENT)
const dashboardRows = [
  // ROW 1
  [
    {
      dateRange: "Sept 1, 2025 - Sept 30, 2025",
      totalRevenue: 505318.41,
      revenueChange: 33,
      attributedRevenue: 132487.26,
      attributedChange: 68,
      perRecipient: 0.21,
      campaigns: { amount: 84710.53, percent: 63.94 },
      flows: { amount: 47776.73, percent: 36.06 },
      email: { amount: 132487.26, percent: 100 },
      sms: { amount: 0, percent: 0 },
    },
    {
      dateRange: "Aug 1, 2025 - Aug 31, 2025",
      totalRevenue: 702914.33,
      revenueChange: 57,
      attributedRevenue: 239487.61,
      attributedChange: 387,
      perRecipient: 0.26,
      campaigns: { amount: 143701.28, percent: 60.01 },
      flows: { amount: 95786.33, percent: 39.99 },
      email: { amount: 239487.61, percent: 100 },
      sms: { amount: 0, percent: 0 },
    },
  ],

  // ROW 2
  [
    {
      dateRange: "Aug 1, 2025 - Aug 31, 2025",

      totalRevenue: 574381.91,
      revenueChange: 0,

      attributedRevenue: 169204.73,
      attributedChange: 0, // vs previous year

      perRecipient: 0.21,

      campaigns: {
        amount: 101683.28,
        percent: 60.09,
      },

      flows: {
        amount: 67521.45,
        percent: 39.91,
      },

      email: {
        amount: 169204.73,
        percent: 100,
      },

      sms: {
        amount: 0,
        percent: 0,
      },
    }
    ,
    {
      dateRange: "Aug 1, 2025 - Aug 31, 2025",

      totalRevenue: 1742918.77,
      revenueChange: 0,

      attributedRevenue: 517406.39,
      attributedChange: 0, // vs previous year

      perRecipient: 0.37,

      campaigns: {
        amount: 309844.71,
        percent: 59.87,
      },

      flows: {
        amount: 207561.68,
        percent: 40.13,
      },

      email: {
        amount: 517406.39,
        percent: 100,
      },

      sms: {
        amount: 0,
        percent: 0,
      },
    }
    ,
  ],

  // ROW 3
  [
    {
      dateRange: "Feb 1, 2025 - Jul 31, 2025",
      totalRevenue: 616986.78,
      revenueChange: 21,

      attributedRevenue: 123462.12,
      attributedChange: 21,

      perRecipient: 0.03,

      campaigns: { amount: 82085.0, percent: 66.49 },
      flows: { amount: 41377.12, percent: 33.51 },

      email: { amount: 123462.12, percent: 100 },
      sms: { amount: 0, percent: 0 },
    }
    ,
        {
      dateRange: "Feb 6, 2025 - Aug 5, 2025",
      totalRevenue: 596816.32,
      revenueChange: 50,

      attributedRevenue: 117236.65,
      attributedChange: 57,

      perRecipient: 0.03,

      campaigns: { amount: 79085.44, percent: 67.46 },
      flows: { amount: 38151.21, percent: 32.54 },

      email: { amount: 117236.65, percent: 100 },
      sms: { amount: 0, percent: 0 },
    }
  ],

  // ROW 4
  [

    {
      dateRange: "Jul 1, 2025 - Jul 31, 2025",
      totalRevenue: 55236.58,
      revenueChange: 13,

      attributedRevenue: 12805.85,
      attributedChange: 0,

      perRecipient: 0.02,

      campaigns: { amount: 10064.19, percent: 78.59 },
      flows: { amount: 2741.66, percent: 21.41 },

      email: { amount: 12805.85, percent: 100 },
      sms: { amount: 0, percent: 0 },
    }
    ,
        {
      dateRange: "Aug 24, 2024 - Sep 23, 2024",
      totalRevenue: 90518.99,
      revenueChange: 54,

      attributedRevenue: 22653.07,
      attributedChange: 47,

      perRecipient: 0.08,

      campaigns: { amount: 9008.03, percent: 39.77 },
      flows: { amount: 13645.04, percent: 60.23 },

      email: { amount: 22653.07, percent: 100 },
      sms: { amount: 0, percent: 0 },
    }
  ],

  // ROW 5
  [

    {
      dateRange: "Sep 16, 2024 - Sep 23, 2024",
      totalRevenue: 32959.82,
      revenueChange: 79,

      attributedRevenue: 8511.9,
      attributedChange: 115,

      perRecipient: 0.09,

      campaigns: { amount: 3601.84, percent: 42.32 },
      flows: { amount: 4910.06, percent: 57.68 },

      email: { amount: 8511.9, percent: 100 },
      sms: { amount: 0, percent: 0 },
    }
    ,
        {
      dateRange: "Feb 1, 2024 - Jul 25, 2024",
      totalRevenue: 771248.07,
      revenueChange: 536,

      attributedRevenue: 138081.54,
      attributedChange: 1367,

      perRecipient: 0.09,

      campaigns: { amount: 39987.07, percent: 28.96 },
      flows: { amount: 98094.47, percent: 71.04 },

      email: { amount: 138081.54, percent: 100 },
      sms: { amount: 0, percent: 0 },
    }
    
  ],

  // ROW 6
  [

    {
      dateRange: "Jul 1, 2024 - Jul 25, 2024",
      totalRevenue: 66042.03,
      revenueChange: 28,

      attributedRevenue: 16822.78,
      attributedChange: 20,

      perRecipient: 0.04,

      campaigns: { amount: 6571.59, percent: 39.06 },
      flows: { amount: 10251.19, percent: 60.94 },

      email: { amount: 16822.78, percent: 100 },
      sms: { amount: 0, percent: 0 },
    }
    ,
    {
  dateRange: "Jul 1, 2024 - Jul 24, 2024",
  totalRevenue: 27518.08,        // £27,518.08
  revenueChange: 30,             // 30% vs previous period
  attributedRevenue: 7953.45,    // £7,953.45
  attributedChange: 630,         // 630% vs previous period
  perRecipient: 0.19,            // £0.19 per recipient
  campaigns: { amount: 6764.50, percent: 85.05 }, // ▷ Campaigns
  flows: { amount: 1188.95, percent: 14.95 },    // Flows
  email: { amount: 7953.45, percent: 100 },       // Email
  sms: { amount: 0, percent: 0 },                 // SMS
}

  ],
  [
  {
    dateRange: "Jul 1, 2024 - Jul 24, 2024",

    totalRevenue: 27518.08,
    revenueChange: 30,

    attributedRevenue: 7953.45,
    attributedChange: 630,

    perRecipient: 0.19,

    campaigns: {
      amount: 6764.50,
      percent: 85.05
    },

    flows: {
      amount: 1188.95,
      percent: 14.95
    },

    email: {
      amount: 7953.45,
      percent: 100
    },

    sms: {
      amount: 0,
      percent: 0
    }
  },

  {
    dateRange: "Jul 1, 2024 - Jul 22, 2024",

    totalRevenue: 25379.13,
    revenueChange: 35,

    attributedRevenue: 7802.00,
    attributedChange: 616,

    perRecipient: 0.18,

    campaigns: {
      amount: 6764.50,
      percent: 86.70
    },

    flows: {
      amount: 1037.50,
      percent: 13.30
    },

    email: {
      amount: 7802.00,
      percent: 100
    },

    sms: {
      amount: 0,
      percent: 0
    }
  }
],
[
  {
    dateRange: "Oct 18, 2023 - Nov 29, 2023",

    totalRevenue: 577979.06,
    revenueChange: 27,

    attributedRevenue: 268870.33,
    attributedPercentOfTotal: 35.97,
    attributedChange: 6,

    // Per-recipient not shown in dashboard
    perRecipient: null,

    // Campaigns / Flows split not shown
    campaigns: {
      amount: 0,
      percent: 0
    },

    flows: {
      amount: 0,
      percent: 0
    },


    email: {
      amount: 268870.33,
      percent: 100
    },

    sms: {
      amount: 0,
      percent: 0
    }
  },

  {
    dateRange: "Oct 18, 2023 - Nov 28, 2023",

    totalRevenue: 7929.07,
    revenueChange: 25,

    attributedRevenue: 2870.33,
    attributedPercentOfTotal: 36.2,
    attributedChange: 3,

    perRecipient: 0.07,

    campaigns: {
      amount: 1907.40,
      percent: 66.45
    },

    flows: {
      amount: 962.93,
      percent: 33.55
    },

    email: {
      amount: 2870.33,
      percent: 100
    },

    sms: {
      amount: 0,
      percent: 0
    }
  }
],
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
          {dashboardRows.map((row, rowIndex) => (
            <div className="dashboard-card-row" key={rowIndex}>
              <DashboardCard {...row[0]} />
              <DashboardCard {...row[1]} />
            </div>
          ))}

        </section>

        <Footer data="Like what you see dont you 😊" />
      </div>
    </>
  );
};

export default Creative;
