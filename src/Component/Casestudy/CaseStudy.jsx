import React from 'react';
import "../Casestudy/Casestudy.css"; // single CSS file
import women from './CaseCard/images/women.png';
import brush from './CaseCard/images/brush.png';
import { IoIosArrowForward } from "react-icons/io";

const CaseStudy = () => {

    const cases = [
        {
            image: brush,
            title: "Nano Brush",
            description: "How we scaled an oral-care business from modest beginnings to impressive growth by building targeted email flows, boosting retention, and increasing revenue."
        },
        {
            image: women,
            title: "Waist Trainers",
            description: "Discover how we helped a waist trainer company grow its reach and revenue by building data-driven email marketing systems that kept customers engaged."
        }
    ];

    return (
        <section className="wrap-case-content">
            <div className="main-case">
                <div className="top-case">
                    <h2>Case Studies</h2>
                    <p>Discover the strategies behind growing lists, driving engagement, and building customer loyalty through email marketing.</p>
                </div>
                <div className="bottom-case">
                    {cases.map((item, index) => (
                        <div key={index} className="case-card">
                            <img src={item.image} alt={item.title} className="case-image" />
                            <div className="case-content">
                                <h3 className="case-title">{item.title}</h3>
                                <p className="case-desc">{item.description}</p>
                                <button className="read-more">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <ul className="number-slider">
                        <li id='n-1'>1</li>
                        <li id='n-2'>2</li>
                        <li id='n-3'>3</li>
                    </ul>
                    <button><IoIosArrowForward className='next'/></button>
                </div>
            </div>
        </section>
    );
}

export default CaseStudy;
