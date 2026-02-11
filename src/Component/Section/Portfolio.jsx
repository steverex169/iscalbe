import React, { useState } from "react";
import "../Section/Portfolio.css";

import img1 from "../Bottom/images/Email1.gif";
import img2 from "../Bottom/images/email2.jpg";
import img3 from "../Bottom/images/email3.png";
import imgwes from "../Bottom/images/emailwest.png";
import imgdark from "../Bottom/images/emaildark.png";
import imgred from "../Bottom/images/emailred.png";
import img4 from "../Bottom/images/email4.jpg";
import img5 from "../Bottom/images/email11.png";
import img6 from "../Bottom/images/email12.png";
import img7 from "../Bottom/images/email13.jpg";
import img8 from "../Bottom/images/email21.gif";
import img9 from "../Bottom/images/email22.png";
import img10 from "../Bottom/images/email23.jpg";
import img11 from "../Bottom/images/email24.png";
import img12 from "../Bottom/images/email30.png";
import img13 from "../Bottom/images/email31.png";
import img14 from "../Bottom/images/email32.png";
import img15 from "../Bottom/images/email33.png";
import img16 from "../Bottom/images/email34.png";
import img17 from "../Bottom/images/email40.png";
import img18 from "../Bottom/images/email41.png";
import img19 from "../Bottom/images/email42.png";
import img20 from "../Bottom/images/email43.png";
import img21 from "../Bottom/images/email44.jpg";
import img22 from "../Bottom/images/email111.jpg";
import img23 from "../Bottom/images/email114.png";
import img24 from "../Bottom/images/email222.png";


// Add more images as needed
const images = [imgred, img3, img2, imgwes, imgdark, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24];

const Portfolio = () => {
    const getCardsPerView = () => {
        if (window.innerWidth <= 480) return 2;
        return 4;
    };

    const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        const handleResize = () => {
            setCardsPerView(getCardsPerView());
            setCurrentIndex(0); // reset on resize
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Move 4 cards at a time
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - cardsPerView < 0 ? 0 : prev - cardsPerView
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + cardsPerView >= images.length
                ? images.length - cardsPerView
                : prev + cardsPerView
        );
    };

    // Go to a group of 4 cards via dot click
    const goToSlide = (index) => {
        setCurrentIndex(index * cardsPerView);
    };

    return (
        <section className="portfolio-section">
            <div className="portfolio-overlay">
                <div className="portfolio-header">
                    <div className="tag">
                        <span>What we do?</span>
                    </div>
                    <h2>Brand’s we’ve helped increase their revenue.</h2>
                    <p>
                        We boost sales and maximise customer value with our revenue-driving Email & SMS systems.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="portfolio-slider-wrapper">
                    <button className="slider-btns prev" onClick={prevSlide}>
                        &#10094;
                    </button>

                    <div
                        className="portfolio-slider"
                        style={{
                            transform: `translateX(-${currentIndex * (cardsPerView === 2 ? 190 : 306)
                                }px)`
                        }}

                    >
                        {images.map((img, index) => (
                            <div className="email-card" key={index}>
                                <div className="email-scroll">
                                    <img src={img} alt="Email Template" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="slider-btns next" onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>

                {/* Dots: one per group of 4 cards */}
                <div className="slider-dots">
                    {Array.from(
                        { length: Math.ceil(images.length / cardsPerView) },
                        (_, index) => (
                            <span
                                key={index}
                                className={`dot ${Math.floor(currentIndex / cardsPerView) === index
                                        ? "active-dot"
                                        : ""
                                    }`}
                                onClick={() => setCurrentIndex(index * cardsPerView)}
                            ></span>
                        )
                    )}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;