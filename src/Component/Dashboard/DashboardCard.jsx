import React from "react";
import "../Dashboard/DashboardCard.css";

const DashboardCard = ({ image }) => {
  return (
    <section className="Dashboard">
      <img
        src={image}
        alt="Dashboard"
        className="dashboard-full-img"
      />
    </section>
  );
};

export default DashboardCard;
