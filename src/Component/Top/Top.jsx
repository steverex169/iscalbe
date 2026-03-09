import React from 'react'
import "../Top/Top.css"
import Logo1 from "../Top/images/logo1.svg"
import Logo2 from "../Top/images/logo2.png"
import "../../assets/Css/main.css";
// Brand logos
import Jnbreakable from "../Bottom/images/Js.png";
import Fragrant from "../Bottom/images/Fra.png";
import Conzuri from "../Bottom/images/Co.png";
import Selene_black from "../Bottom/images/Se.png";
import Soothe from "../Bottom/images/So.png";
import Blowbrusher from "../Bottom/images/Blo.png";
import li from "../Bottom/images/l1.png";
import l2 from "../Bottom/images/l2.png";
import l4 from "../Bottom/images/l4.png";
import l11 from "../Bottom/images/l11.png";
import l12 from "../Bottom/images/l12.png";
import l13 from "../Bottom/images/l13.png";
import l14 from "../Bottom/images/l14.png";
import l22 from "../Bottom/images/l22.png";
import l33 from "../Bottom/images/l33.png";
import l44 from "../Bottom/images/l44.png";
import fimg1 from "../Bottom/images/fimg1.png";
import fimg2 from "../Bottom/images/fimg2.png";
import img111 from "../Bottom/images/fimg333.png";
import img1112 from "../Bottom/images/fimg44.png";
import img1113 from "../Bottom/images/fimg22.png";
import img1114 from "../Bottom/images/fimg11.png";
import img114 from "../Bottom/images/fimg33.png";
import CountUp from "react-countup";


const Top = () => {
    return (
        <>
            <div className="top-hero">
                {/* <h5 className='top-hero-h5'>Add <strong>$30,000–$250,000</strong> MRR</h5> */}
                <h2 className='top-hero-h2'>
                Add <strong>$30,000–$250,000</strong> MRR <br />
                Without Increasing Ad <br />
                Spend.
                </h2>
                {/* <h2 className='top-hero-h2'>Spend.</h2> */}
                <p className='top-hero-p'>Most brands see results within 
                    60 days or less.</p>
                <a href="https://calendly.com/moheearum7/30min" className='top-hero-cta'>Schedule Your Free Consultation</a>
                <span className='top-hero-span'>10+ Years Experience with </span>
                <div className="top-row-img">
                    <img src={Logo1} alt="" className='logo1' />
                    <img src={Logo2} alt="" className='logo2' />
                </div>
                      {/* stats */}
      <div className="stats-section">

        <div className="stat-box">
  <h3>
    <CountUp start={0} end={83} duration={2} />+
  </h3>
  <p>Brands Partnered With</p>
</div>

<div className="stat-box">
  <h3>
    $<CountUp start={0} end={7698870} duration={3} separator="," />
    <span className="green">+</span>
  </h3>
  <p>Total revenue Generated</p>
</div>

      </div>
      
      <div className="mainspark">
              <div className="sparkle-container">
      
                <div className="brand-slider-wrapper">
                  <div className="brand-slider">
                    <img src={Jnbreakable} style={{ height: "40px" }} alt="" />
                    <img src={Fragrant} style={{ height: "40px" }} alt="" />
                    <img src={Conzuri} style={{ height: "32px" }} alt="" />
                    <img src={Selene_black} style={{ height: "32px" }} alt="" />
                    <img src={Soothe} style={{ height: "32px" }} alt="" />
                    <img src={Blowbrusher} style={{ height: "32px" }} alt="" />
                    <img src={li} style={{ height: "100px", marginTop: "-34px" }} alt="" />
                    <img src={l2} style={{ height: "40px" }} alt="" />
                    <img src={l4} style={{ height: "40px" }} alt="" />
                    <img src={l11} style={{ height: "40px" }} alt="" />
                    <img src={l12} style={{ height: "40px" }} alt="" />
                    <img src={l13} style={{ height: "40px" }} alt="" />
                    <img src={l14} style={{ height: "40px" }} alt="" />
                    <img src={l22} style={{ height: "40px" }} alt="" />
                    <img src={l33} style={{ height: "40px" }} alt="" />
                    <img src={l44} style={{ height: "40px" }} alt="" />
                  </div>
                </div>
              </div>
              <div className="testmask w-full h-[200px] bg-red-500"></div>
            </div>
      
            </div>
        </>
    )
}

export default Top
