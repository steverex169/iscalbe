import React, { useState } from "react";
import "./Casecard.css";

const Casecard = ({ image, title, description, fullInfo }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`case-card ${flipped ? "flipped" : ""}`}>
      <div className="case-card-inner">

        {/* FRONT */}
        <div className="case-card-front">
          <img src={image} alt={title} className="case-image" />
          <div className="case-content">
            <h3 className="case-title">{title}</h3>
            <p className="case-desc">{description}</p>
            <button className="read-more" onClick={() => setFlipped(true)}>
              Read More
            </button>
          </div>
        </div>

        {/* BACK */}
        <div className="case-card-back">
          <h3>{title}</h3>
          <p>{fullInfo}</p>
          <button className="read-more" onClick={() => setFlipped(false)}>
            Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default Casecard;
