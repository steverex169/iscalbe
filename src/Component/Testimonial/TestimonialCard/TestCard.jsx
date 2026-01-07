import React from "react";
import "../TestimonialCard/TestCard.css";
import { MdVerified } from "react-icons/md";

const TestCard = ({ name, quote }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="circle-logo">{name}</div>
        <div className="testimonial-title">
          <h3>{name}</h3>
          <MdVerified className="verify" />
          <p>Verified Client</p>
        </div>
      </div>

      <p className="testimonial-quote">
        “{quote}”
      </p>
    </div>
  );
};

export default TestCard;
