import React, { useState, useEffect } from "react";
import "../Testimonial/Testimonial.css";
import TestCard from "../../Component/Testimonial/TestimonialCard/TestCard.jsx";

const testimonialsData = [
  {
    name: "Client 1",
    quote:
      "Working with iScalable felt like having an in-house email team rather than an agency. Communication was clear, execution was fast, and everything felt intentional. If you’re serious about scaling, you should be speaking to iScalable early."
  },
  {
    name: "Client 2",
    quote:
      "What stood out most about iScalable was how organised and proactive they were. Nothing slipped, nothing was rushed, and every decision was explained properly. If email is important to your growth, don’t wait — talk to iScalable."
  },
  {
    name: "Client 3",
    quote:
      "iScalable genuinely care about doing things the right way. From strategy to execution, everything felt structured and well thought out. If you’re scaling a Shopify brand and want peace of mind, iScalable are the team."
  },
  {
    name: "Client 4",
    quote:
      "The level of professionalism from iScalable was refreshing. They understood our brand quickly and communicated clearly throughout the entire process. If you’re on the fence, just book the call — it’s worth it."
  },
  {
    name: "Client 5",
    quote:
      "iScalable didn’t just “do email,” they actually thought about the bigger picture of our brand. Easy to work with, responsive, and very switched on. I’d recommend them to any Shopify founder looking to scale properly."
  },
  {
    name: "Client 6",
    quote:
      "We’ve worked with agencies before, but iScalable felt different from day one. Clear timelines, honest feedback, and strong execution. If your brand is growing, get in touch with iScalable sooner rather than later."
  },
  {
    name: "Client 7",
    quote:
      "The communication and attention to detail from iScalable were top tier. They took the time to understand our business and never felt rushed or generic. If email is part of your growth plan, iScalable are a no-brainer."
  },
  {
    name: "Client 8",
    quote:
      "iScalable are extremely professional and easy to work with. Everything was explained clearly and delivered on time, which made the entire process stress-free. If you’re scaling a Shopify store, they’re absolutely worth speaking to."
  },
  {
    name: "Client 9",
    quote:
      "From onboarding to execution, iScalable were sharp, organised, and genuinely invested in our success. It felt like a partnership, not a service. I’d strongly recommend booking a call if you’re growing your brand."
  },
  {
    name: "Client 10",
    quote:
      "What I appreciated most about iScalable was how hands-on and responsive they were. No chasing, no confusion — just solid work and clear communication. If you want email done properly, speak to iScalable."
  },
  {
    name: "Client 11",
    quote:
      "iScalable brought structure and clarity to something we were previously guessing at. Professional, reliable, and easy to trust. If you’re scaling and want things done right, get talking to iScalable."
  },
  {
    name: "Client 12",
    quote:
      "The team at iScalable are switched on, professional, and genuinely understand e-commerce. Everything felt well planned and aligned with our brand. I’d recommend them to any serious Shopify founder."
  },
  {
    name: "Client 13",
    quote:
      "Working with iScalable was smooth from start to finish. They were clear, confident, and knew exactly what they were doing. If your brand is scaling and email matters to you, don’t sleep on iScalable."
  }
];

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Show 4 cards at a time
  const visibleTestimonials = [];
  for (let i = 0; i < 4; i++) {
    visibleTestimonials.push(testimonialsData[(startIndex + i) % testimonialsData.length]);
  }

  return (
    <div className="main-testimonial">
      <h1>Hear It Straight From Our Partners</h1>
      <div className="row-test-card">
        {visibleTestimonials.map((item, idx) => (
          <TestCard key={idx} name={item.name} quote={item.quote} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
