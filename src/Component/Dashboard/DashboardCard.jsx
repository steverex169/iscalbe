import React from "react";
import "../Dashboard/DashboardCard.css";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { FaUsers, FaEnvelope, FaSms } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";

const DashboardCard = ({
  totalRevenue,
  attributedRevenue,
  revenueChange,
  attributedChange,
  dateRange,
  perRecipient,
  campaigns,
  flows,
  email,
  sms,
}) => {
  const isRevenueUp = revenueChange >= 0;
  const isAttributedUp = attributedChange >= 0;

  return (
    <section className="Dashboard">
      <main>
        <section className="main-header">
          <section className="main-header-left">
            <h4>Business performance summary</h4>
            <p>{dateRange}</p>
          </section>
          <a href="#">View Dashboard</a>
        </section>

        <div className="main-body">
          <div className="main-left-body">
            <h3 className="main-left-h3">
              £{totalRevenue.toLocaleString()}
            </h3>
            <h5 className="main-left-h5">Total revenue</h5>
            <p className="main-left-p">
              <span className="innerspan-left-p">
                {isRevenueUp ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                {Math.abs(revenueChange)}%
              </span>{" "}
              vs.previous period
            </p>
          </div>

          <div className="main-right-body">
            <h3 className="main-right-h3">
              £{attributedRevenue.toLocaleString()}
            </h3>
            <h5 className="main-right-h5">Attributed revenue</h5>
            <p className="main-right-p">
              <span className="innerspan-right-p">
                {isAttributedUp ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                {Math.abs(attributedChange)}%
              </span>{" "}
              vs.previous period
            </p>
          </div>
        </div>

        {/* ✅ DYNAMIC REVENUE BOXES */}
        <div className="revenue-container">
          <div className="revenue-box">
            <FaUsers className="icon" />
            <div>
              <p className="title">Per recipient</p>
              <h4>£{perRecipient}</h4>
            </div>
          </div>

          <div className="revenue-box">
            <MdOutlineCampaign className="icon" />
            <div>
              <p className="title">Campaigns</p>
              <h4>£{campaigns.amount.toLocaleString()}</h4>
              <span className="percent">{campaigns.percent}%</span>
            </div>
          </div>

          <div className="revenue-box">
            <RiFlowChart className="icon" />
            <div>
              <p className="title">Flows</p>
              <h4>£{flows.amount.toLocaleString()}</h4>
              <span className="percent">{flows.percent}%</span>
            </div>
          </div>

          <div className="revenue-box">
            <FaEnvelope className="icon" />
            <div>
              <p className="title">Email</p>
              <h4>£{email.amount.toLocaleString()}</h4>
              <span className="percent">{email.percent}%</span>
            </div>
          </div>

          <div className="revenue-box">
            <FaSms className="icon" />
            <div>
              <p className="title">SMS</p>
              <h4>£{sms.amount.toLocaleString()}</h4>
              <span className="percent">{sms.percent}%</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default DashboardCard;
