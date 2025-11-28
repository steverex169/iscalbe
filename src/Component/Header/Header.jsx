import React, { useEffect, useRef, useState } from "react";
import "../Header/Header.css";
import gsap from "gsap";

const Header = ({ refs }) => {
  const box1ref = useRef(null);
  const box2ref = useRef();
  const box3ref = useRef();
  const logoref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      logoref.current,
      { y: 20, opacity: 0 },
      { y: 0, duration: 0.8, opacity: 1, ease: "power1.inOut" },
      0.3
    );
    tl.fromTo(
      [box1ref.current, box2ref.current, box3ref.current],
      { y: 20, opacity: 0 },
      { y: 0, duration: 0.8, opacity: 1, ease: "power1.inOut", stagger: 0.3 }
    );
  }, []);

  const [open, setOpen] = useState(false);

  const handleScroll = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close mobile menu
  };

  return (
    <header>
      <div className="left-container">
        <div className="hamburger" onClick={() => setOpen(!open)}>
          &#9776;
        </div>

        <div className="logo">
          <div className="box1" ref={box1ref}></div>
          <div className="box2" ref={box2ref}></div>
          <div className="box3" ref={box3ref}></div>
          <h1 ref={logoref}>iscalable</h1>
        </div>
      </div>

      <div className={`navlink ${open ? "open" : ""}`}>
        <a onClick={() => handleScroll('creative')}>Creative</a>
        <a onClick={() => handleScroll('work')}>What we do</a>
        <a onClick={() => handleScroll('case')}>Case Study</a>
        <a onClick={() => handleScroll('review')}>Reviews</a>
        <a onClick={() => handleScroll('testimonial')}>Testimonials</a>
        <a onClick={() => handleScroll('last')} className="cta">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
