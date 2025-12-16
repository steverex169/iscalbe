import React from "react";
import "./LastPart.css";

const LastPart = () => {
  return (
    <footer className="lastPart">
      <div className="lastPart-left">
        <div className="lastPart-logo-box">
          <div className="lastPart-bar lastPart-bar1"></div>
          <div className="lastPart-bar lastPart-bar2"></div>
          <div className="lastPart-bar lastPart-bar3"></div>
          <h2 className="lastPart-brand-text">iscalable</h2>
        </div>

        <p className="lastPart-desc">
          A UK-based marketing agency, proudly helping over 300 clients worldwide
          elevate their brands since 2018.
        </p>
      </div>

      <div className="lastPart-right">
        <h4 className="lastPart-heading">QUICK LINKS</h4>
        <div className="lastPart-links-columns">
          <ul className="lastPart-list">
            <li>Home</li>
            <li>Case Studies</li>
            <li>Our Procedure</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul className="lastPart-list">
            <li>FAQs</li>
            <li>Blog posts</li>
            <li>Portfolio</li>
            <li>Reviews</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default LastPart;
