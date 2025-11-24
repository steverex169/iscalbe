import React, { useEffect, useRef, useState } from 'react'
import logo from "../Header/logo/Iscable.svg"
import "../Header/Header.css"
import gsap from 'gsap'
const Header = () => {

    const box1ref = useRef(null);
    const box2ref = useRef();
    const box3ref = useRef();
    const logoref = useRef();

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(logoref.current,
            {
                y: 20,
                ease: "power1.inout",
                opacity: 0
            },
            {
                y: 0,      // ending values
                duration: 0.8,
                ease: "power1.inOut",
                opacity: 1,
                stagger: 0.5
            },0.3
        );
        tl.fromTo(
            [box1ref.current, box2ref.current, box3ref.current],
            { y: 20, opacity: 0 }, // starting values
            {
                y: 0,      // ending values
                duration: 0.8,
                ease: "power1.inOut",
                opacity: 1,
                stagger: 0.5
            }
        );
    }, []);


    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    }
    return (
        <>
            <header>
                <div className="logo">
                    <div className="box1" ref={box1ref}></div>
                    <div className="box2" ref={box2ref}></div>
                    <div className="box3" ref={box3ref}></div>
                    <h1 ref={logoref}>iscalable</h1>
                </div>
                <div className={`navlink ${open ? 'open' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#">Results</a>
                    <a href="#">What we do</a>
                    <a href="#" className='cta'>Let's Work</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
            </header>
        </>
    )
}

export default Header