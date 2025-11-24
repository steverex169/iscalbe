import React from 'react'
import "../TestimonialCard/TestCard.css"
import { MdVerified } from "react-icons/md";
const TestCard = () => {
  return (
    <>
      <div className="testimonial-card">
        <div className="testimonial-header">
          <div className="circle-logo">SELENE</div>
          <div className="testimonial-title">
            <h3>Selene</h3>
            <MdVerified className='verify'/> 
            <p>Verified Client</p>
          </div>
        </div>

        <p className="testimonial-quote">
          “Working with <strong>iScalable</strong> has been a{" "}
          <span className="highlight">game-changer</span> for Selene. Their email
          strategies helped us grow Nano Brush sales faster than we imagined.”
        </p>
      </div>
    </>
  )
}

export default TestCard