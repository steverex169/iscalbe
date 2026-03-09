
import React from "react";
import { Widget } from "@typeform/embed-react";
import foo1 from "../Bottom/images/foo1.png";
import foo2 from "../Bottom/images/foo2.png";
import foo3 from "../Bottom/images/foo3.png";
import "../../assets/Css/main.css";


import "./LastPart.css";

const LastPart = () => {
  return (
    <section className="lastPart">

      {/* LEFT SIDE */}
      <div className="lastPart-left">

        <div className="logoRow">
          <div className="lastPart-logo-box">
            <div className="lastPart-bar lastPart-bar1"></div>
            <div className="lastPart-bar lastPart-bar2"></div>
            <div className="lastPart-bar lastPart-bar3"></div>
            <h2 className="lastPart-brand-text">iscalable</h2>
          </div>
        </div>

        <p className="mainText">
  To move things forward efficiently, answer a few quick
  questions so we can see if you're the right fit for our agency.
</p>

<button className="ctaBtn">
  Book Your FREE Audit →
</button>
<div className="promoCards">

  <div className="promoCard">
    <img className="img1" src={foo1} alt="card1" />
  </div>

  <div className="promoCard">
    <img className="img2" src={foo2} alt="card2" />
  </div>

  <div className="promoCard">
    <img className="img3" src={foo3} alt="card3" />
  </div>

</div>

      </div>

      {/* RIGHT SIDE - TYPEFORM */}
      <div className="lastPart-right">
  <Widget
    id="ahBNT9"
    style={{ width: "100%", height: "500px", borderRadius: "20px" }}
    className="typeformBox"
  />
</div>

    </section>
  );
};

export default LastPart;
