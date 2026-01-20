import React, { useEffect, useRef, useState } from "react";
import "../Header/Header.css";
import gsap from "gsap";

const Header = ({ refs }) => {
  const box1ref = useRef(null);
  const box2ref = useRef();
  const box3ref = useRef();
  const logoref = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      ease: "power1.inOut"
    });

    // reset all bars (same alignment)
    tl.set([box1ref.current, box2ref.current, box3ref.current], {
      height: 2
    });

    // 1️⃣ pehle 3rd bar move kare
    tl.to(box3ref.current, {
      height: 5,
      duration: 0.3
    });

    // 2️⃣ phir center (2nd)
    tl.to(box2ref.current, {
      height: 9,
      duration: 0.3
    });

    // 3️⃣ last me 1st bar
    tl.to(box1ref.current, {
      height: 13,
      duration: 0.3
    });

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
          <div className="signal">
            {/* LEFT → RIGHT */}
            <div className="box3" ref={box3ref}></div>  {/* SMALL */}
            <div className="box2" ref={box2ref}></div>  {/* MEDIUM */}
            <div className="box1" ref={box1ref}></div>  {/* BIG */}
          </div>

          <h1 ref={logoref}>iscalable</h1>
        </div>


      </div>

      <div className={`navlink ${open ? "open" : ""}`}>
        <a onClick={() => handleScroll('home')}>Home</a>
        <a onClick={() => handleScroll('creative')}>Result</a>
        <a onClick={() => handleScroll('work')}>What we do</a>
        {/* <a onClick={() => handleScroll('case')}>Case Study</a>
        <a onClick={() => handleScroll('review')}>Reviews</a>
        <a onClick={() => handleScroll('testimonial')}>Testimonials</a> */}
        <a onClick={() => handleScroll('last')} className="cta">Let’s Work</a>
      </div>
    </header>
  );
};

export default Header;
