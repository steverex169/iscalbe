import React from 'react'
import "../CaseCard/Casecard.css"
const Casecard = ({
    image, 
    title, 
    description
}) => {
    return (
        <>
            <div className="case-card">
                <img src={image} alt={title} className="case-image" />
                <div className="case-content">
                    <h3 className="case-title">{title}</h3>
                    <p className="case-desc">{description}</p>
                    <button className="read-more">Read More</button>
                </div>
            </div>
        </>
    )
}

export default Casecard