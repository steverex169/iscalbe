import React, { useState, useEffect } from "react";
import "../Testimonial/Testimonial.css";
import TestCard from "../../Component/Testimonial/TestimonialCard/TestCard.jsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../assets/Css/main.css";



const testimonialsData = [
  {
    name: "Cleen",
    quote:
      "Working with iScalable felt like having an in-house email team rather than an agency. Communication was clear, execution was fast, and everything felt intentional. If you’re serious about scaling, you should be speaking to iScalable early."
  },
  {
    name: "Talki",
    quote:
      "What stood out most about iScalable was how organised and proactive they were. Nothing slipped, nothing was rushed, and every decision was explained properly. If email is important to your growth, don’t wait — talk to iScalable."
  },
  {
    name: "Lemora",
    quote:
      "The level of professionalism from iScalable was refreshing. They understood our brand quickly and communicated clearly throughout the entire process. If you’re on the fence, just book the call — it’s worth it."
  },
  {
    name: "Frangrant",
    quote:
      "iScalable didn’t just “do email,” they actually thought about the bigger picture of our brand. Easy to work with, responsive, and very switched on. I’d recommend them to any Shopify founder looking to scale properly."
  },
  {
    name: "Cuddli",
    quote:
      "We’ve worked with agencies before, but iScalable felt different from day one. Clear timelines, honest feedback, and strong execution. If your brand is growing, get in touch with iScalable sooner rather than later."
  },
  {
    name: "PUR",
    quote:
      "The communication and attention to detail from iScalable were top tier. They took the time to understand our business and never felt rushed or generic. If email is part of your growth plan, iScalable are a no-brainer."
  },
  {
    name: "NovaBar",
    quote:
      "iScalable are extremely professional and easy to work with. Everything was explained clearly and delivered on time, which made the entire process stress-free. If you’re scaling a Shopify store, they’re absolutely worth speaking to."
  },
  {
    name: "SELENE",
    quote:
      "From onboarding to execution, iScalable were sharp, organised, and genuinely invested in our success. It felt like a partnership, not a service. I’d strongly recommend booking a call if you’re growing your brand."
  },
  {
    name: "SANRA",
    quote:
      "What I appreciated most about iScalable was how hands-on and responsive they were. No chasing, no confusion — just solid work and clear communication. If you want email done properly, speak to iScalable."
  },
  {
    name: "SOOTHIE",
    quote:
      "iScalable brought structure and clarity to something we were previously guessing at. Professional, reliable, and easy to trust. If you’re scaling and want things done right, get talking to iScalable."
  },
  {
    name: "PawTree",
    quote:
      "The team at iScalable are switched on, professional, and genuinely understand e-commerce. Everything felt well planned and aligned with our brand. I’d recommend them to any serious Shopify founder."
  }
];

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  // 🔥 RESPONSIVE CARD COUNT
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 480) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + cardsToShow >= testimonialsData.length ? 0 : prev + cardsToShow
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - cardsToShow < 0
        ? testimonialsData.length - cardsToShow
        : prev - cardsToShow
    );
  };

  const visibleTestimonials = testimonialsData.slice(
    startIndex,
    startIndex + cardsToShow
  );

  return (
    <div className="main-testimonial">
      <h1>Hear It Straight From Our Partners</h1>

      <div className="testimonial-wrapper">
        <button className="nav-btn left" onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        <div className="row-test-card">
          {visibleTestimonials.map((item, idx) => (
            <TestCard key={idx} name={item.name} quote={item.quote} />
          ))}
        </div>

        <button className="nav-btn right" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
