import React from 'react'
import "../WorkCard/WorkCard.css"
const WorkCard = ({
    title,
    date,
    desc,
    list=[],
    color,
    textcolor
}) => {
    return (
        <>
            <div className="analyze-card" style={color ? {background:color} : {}}>
                <div className="analyze-header">
                    <h2 style={textcolor ? {color:textcolor} : {}}>{title}</h2>
                    {date && <span className="day-tag">{date}</span>}
                </div>

                <p className="description">
                    {desc}
                </p>

                <ul className="checklist">
                    {list.map((item, index) => (
                        <li key={index} style={textcolor ? {color:textcolor} : {}}>
                            <span className="check-icon" style={textcolor ? {color:textcolor} : {}}>✔</span> {item}
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default WorkCard