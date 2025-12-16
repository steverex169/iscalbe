import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Bottom/Bottom.css";
import Notify from "../Notify/Notify.jsx";
import Selene from "../Bottom/images/Sel.png";
import StatCard from "../Statcard/StatCard.jsx";
import Jnbreakable from "../Bottom/images/Js.png"
import Fragrant from "../Bottom/images/Fra.png"
import Conzuri from "../Bottom/images/Co.png"
import Selene_black from "../Bottom/images/Se.png"
import Soothe from "../Bottom/images/So.png"
import Blowbrusher from "../Bottom/images/Blo.png"

gsap.registerPlugin(ScrollTrigger);

export default function BottomHero({ number }) {
  const numberRef = useRef(null);

  useEffect(() => {
    if (!number) return; // 🚨 prevent "undefined.replace"

    // Always treat as string
    const rawNum = String(number).replace(/[^0-9]/g, "");
    const finalValue = parseInt(rawNum, 10) || 0;

    gsap.fromTo(
      { val: 0 },
      {
        val: finalValue,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: function () {
          let formatted = Math.floor(this.targets()[0].val).toLocaleString();

          if (String(number).includes("$")) formatted = "$" + formatted;
          if (String(number).includes("+")) formatted = formatted + "+";

          numberRef.current.innerText = formatted;
        },
      }
    );
  }, [number]);
  return (
    <section className="bottom-hero">
      <div className="row-card">
        <Notify
          logo={Selene}
          title="Over $500k generated in their first year"
        />
        <Notify
          logo="https://cdn.worldvectorlogo.com/logos/shopify.svg"
          title="Order #85220"
          desc="$29.99, 1 item from Online Store"
          time="15m ago"
        />
      </div>
      {/* Stat cards */}
      <div className="hero-grid">
        <StatCard number="83+" label="Brands Partnered With" />
        <StatCard
          number="$7,698,870+"
          label="Total revenue Generated"
          color={true}
        />
      </div>
      {/* Brand logos */}
      <div className="brand-logos">
        <img src={Jnbreakable} alt="Unbreakable" />
        <img src={Fragrant} alt="Fragrant Breeze" />
        <img src={Conzuri} alt="Conzuri" />
        <img src={Selene_black} alt="Selene" />
        <img src={Soothe} alt="Soothie" />
        <img src={Blowbrusher} alt="Blowbrusher" />
      </div>
    </section>
  );
}
