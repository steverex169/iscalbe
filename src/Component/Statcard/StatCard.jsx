import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Statcard/Statcard.css"

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ number, label, color }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    if (!number || !numberRef.current) return;

    const rawNum = String(number).replace(/[^0-9]/g, "");
    const finalValue = parseInt(rawNum, 10) || 0;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: finalValue,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        let formatted = Math.floor(obj.val).toLocaleString();
        const isMoney = String(number).includes("$");
        const hasPlus = String(number).includes("+");

        let prefix = isMoney ? "$" : "";
        let suffix = "";

        if (hasPlus) {
          // only make green plus if it's money
          suffix = isMoney
            ? `<span class="plus green">+</span>`
            : `<span class="plus">+</span>`;
        }

        numberRef.current.innerHTML = prefix + formatted + suffix;
      },
    });
  }, [number]);

  return (
    <div className={`stat-card ${color ? "highlight" : ""}`}>
      <h2 ref={numberRef} className="stat-number"></h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default StatCard;
