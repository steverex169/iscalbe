import React, { useState, useEffect, useRef } from 'react'
import first_img from '../Background/images/img3.png'
import second_img from '../Background/images/img6.png'
import third_img from '../Background/images/img1.png'
import fourth_img from '../Background/images/img2.png'
import fifth_img from '../Background/images/img5.png'
import sixth_img from '../Background/images/img3.png'
import gsap from 'gsap'
import "../Background/Back.css"
import Top from '../Top/Top.jsx'
import BottomHero from '../Bottom/Bottom.jsx'
import Marquee from '../Marquee/Marquee.jsx'
import Creative from '../Section/Creative'
import Brandbg from '../Brand-Boost/Background/Brandbg.jsx'
import Backhelp from '../Helping/HelpBackground/Backhelp.jsx'
import Work from '../Work/Work.jsx'
import CaseStudy from '../Casestudy/CaseStudy.jsx'
import Review from '../Review/Review.jsx'
import Testimonial from '../Testimonial/Testimonial.jsx'
import LastPart from '../LastPart/LastPart.jsx'
const Background = () => {
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();
    const img5 = useRef();
    const img6 = useRef();
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            [img1.current, img2.current, img3.current, img4.current, img5.current, img6.current],
            { y: 1000, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 } // each starts 0.1s after the previous
        );
    }, [])
    return (
        <>
            <section className="hero">
                <img src={first_img} alt="" className='hero-img-1' ref={img1} />
                <img src={second_img} alt="" className='hero-img-2' ref={img2} />
                <img src={third_img} alt="" className='hero-img-3' ref={img3} />
                <img src={fourth_img} alt="" className='hero-img-4' ref={img4} />
                <img src={fifth_img} alt="" className='hero-img-5' ref={img5} />
                <img src={sixth_img} alt="" className='hero-img-6' ref={img6} />
                <Top/>
            </section>
            <BottomHero/>
            <Marquee/>
            <Creative/>
            <Brandbg/>
            <Backhelp/>
            <Work/>
            <CaseStudy/>
            <Review/>
            <Testimonial/>
            <LastPart/>
        </>
    )
}

export default Background