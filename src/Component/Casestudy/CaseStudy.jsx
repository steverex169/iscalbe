import React from 'react'
import "../Casestudy/Casestudy.css"
import Casecard from './CaseCard/Casecard'
import women from '../Casestudy/CaseCard/images/women.png'
import bursh from '../Casestudy/CaseCard/images/brush.png'
import { IoIosArrowForward } from "react-icons/io";
const CaseStudy = () => {
    return (
        <>
            <section className="wrap-case-content">
                <div className="main-case">
                    <div className="top-case">
                        <h2>Case Studies</h2>
                        <p>Discover the strategies behind growing lists, driving engagement, and building customer loyalty through email marketing.</p>
                    </div>
                    <div className="bottom-case">
                        <Casecard
                            image={bursh}
                            title="Nano Brush"
                            description="How we scaled an oral-care business from modest beginnings to impressive growth by building targeted email flows, boosting retention, and increasing revenue."
                        />
                        <Casecard
                            image={women}
                            title="Waist Trainers"
                            description="Discover how we helped a waist trainer company grow its reach and revenue by building data-driven email marketing systems that kept customers engaged."
                        />
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
        </>
    )
}

export default CaseStudy