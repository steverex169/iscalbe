import React from 'react'
import colorbg from "../HelpBackground/colorbg.png"
import "../HelpBackground/Backhelp.css"
import img1 from "../HelpBackground/images/imgcard1.png"
import img2 from "../HelpBackground/images/imgcard2.png"
import img3 from "../HelpBackground/images/imgcard3.png"
import img4 from "../HelpBackground/images/imgcard4.png"
import Footer from "../../Footer/Footer.jsx"
const Backhelp = () => {
  return (
    <>
      <div className="main-bg">
        <section className="main-content">
          <section className="main-top">
            <h1>Brand’s we’ve helped increase their revenue.</h1>
            <hr />
            <p>We Boost sales and maximise customer value with our revenue-driving Email & SMS systems.</p>
          </section>
          <div className="imgcard-main">
              <img src={img1} alt="" className='imgcard'/>
              <img src={img2} alt=""className='imgcard' />
              <img src={img3} alt="" className='imgcard'/>
              <img src={img4} alt="" className='imgcard'/>
          </div>
        </section>
        <Footer data="F**k it book me to a call"/>
      </div>
    </>
  )
}

export default Backhelp