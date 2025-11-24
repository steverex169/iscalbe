import React from 'react'
import "../Top/Top.css"
import Logo1 from "../Top/images/logo1.svg"
import Logo2 from "../Top/images/logo2.png"
const Top = () => {
    return (
        <>
            <div className="top-hero">
                <h5 className='top-hero-h5'>We don’t just push send...</h5>
                <h2 className='top-hero-h2'>Grow <span>Revenue</span> with Data You Already Own.</h2>
                <p className='top-hero-p'>Not just another agency, we’re your e-commerce retention partner.</p>
                <a href="#" className='top-hero-cta'>Schedule Your Free Consultation</a>
                <span className='top-hero-span'>You're in Good Hands:</span>
                <div className="top-row-img">
                    <img src={Logo1} alt="" className='logo1' />
                    <img src={Logo2} alt="" className='logo2' />
                </div>
                <hr />
            </div>
        </>
    )
}

export default Top