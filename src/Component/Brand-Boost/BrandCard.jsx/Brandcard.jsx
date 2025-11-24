import React from 'react'
import "../BrandCard.jsx/Brandcard.css"
import { FiAlignJustify } from "react-icons/fi";
const Brandcard = ({ title, icon, desc }) => {
    return (
        <>
            <div className="Brand-card">
                <div className="Header-brand-card">
                    <h2>{title}</h2>
                    <img src={icon} alt="" className='Header-icon' />
                </div>
                <div className="Footer-brand-card">
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Brandcard