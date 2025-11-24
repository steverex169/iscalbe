import React from 'react'
import "../Testimonial/Testimonial.css"
import Marquee from "../Marquee/Marquee.jsx"
import TestCard from "../../Component/Testimonial/TestimonialCard/TestCard.jsx"
const Testimonial = () => {
  return (
    <>
        <div className="main-testimonial">
            <h1>Hear It Straight From Our Partners</h1>
            <div className="row-test-card">
                <TestCard/>
                <TestCard/>
                <TestCard/>
                <TestCard/>
            </div>
        </div>
        <Marquee/>
    </>
  )
}

export default Testimonial