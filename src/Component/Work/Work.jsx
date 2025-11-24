import React from 'react'
import "../Work/Work.css"
import workdes from "../Work/images/work-img.png"
import WorkCard from "../Work/WorkCard/WorkCard.jsx"
import phone from "../Work/images/phone.png"
const Work = () => {
  return (
    <>
      <div className="main-work">
        <div className="work-logo">
          <div className="work-box1"></div>
          <div className="work-box2"></div>
          <div className="work-box3"></div>
          <h1>iscalable</h1>
        </div>
        <h1>What we do.</h1>
        <img src={workdes} alt="" className="work-des" />
        <div className="work-card-main">
          <WorkCard
            title="Analyze"
            date="Day 1 - 7"
            desc="Kickstart with audits and deliverability checks, uncover insights on your product, brand, customers, and competitors, then map out a clear 60-day success plan built for growth."
            list={[
              "Audity",
              "Deliverability Optimization",
              "Product, Brand, Customer, and Competitor Research",
              "Construct 60 Day Success Roadmap"
            ]}
          />
          <WorkCard
            title="Create"
            date="Day 7 - 30"
            desc="We’ll launch sign-up forms, design and build 8 automated flows, execute campaigns, and deliver weekly progress reports to keep growth on track."
            list={[
              "Sign-Up Form Implementation",
              "Write, Design, and Build Out 8 Flows",
              "Campaign Execution",
              "Weekly Progress Reports"

            ]}
          />
        </div>
        <div className="work-card-main">
          <WorkCard
            title="Elevate"
            date="Day 30+"
            desc="Scale growth with ramped-up campaigns, fresh form and flow tests each week, bold new angle experiments, and consistent weekly progress reports."
            list={[
              "Ramp Up Campaigns",
              "New Form + Flow Tests Weekly",
              "Experiment With New Angles",
              "Weekly Progress Reports"
            ]}
          />
          <WorkCard
            title="Here's *Exactly* What You Get"
            list={[
              "Pop-up form creation and management",
              "Minimum of 3-4 email campaigns per week",
              "Minimum 8 automated flows setup with 40-60 emails within them",
              "Ongoing Klaviyo management",
              "Ongoing testing and optimizations",
              "Cross-channel marketing calendar creation",
              "Unlimited e-commerce marketing consulting"
            ]}
            color='#6DFB9F'
            textcolor="#000"
          />
        </div>



        <section className="promo-section">
          <div className="promo-left">
            <h1>
              Your Next <br />
              <span>31 Days</span> Could <br />
              Be Profitable
            </h1>
            <button className="promo-btn">
              Book a Free Strategy Call Today →
            </button>
          </div>

          <div className="promo-right">
            {/* Replace with your actual image */}
            <img src={phone} alt="Phone Mockup" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Work