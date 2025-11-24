import React from 'react'
import "../Review/Review.css"
import star from "../Review/images/Star.png"
const Review = () => {
    return (
        <>
            <div className="wrapper-review">
                <div className="main-review">
                    <div className="star-row">
                        <img src={star} alt="" className="star" />
                        <img src={star} alt="" className="star" />
                        <img src={star} alt="" className="star" />
                        <img src={star} alt="" className="star" />
                        <img src={star} alt="" className="star" />
                    </div>
                    <h2>Like What you see?</h2>
                    <p>If we don't fulfil our promise, you pay nothing and we will let you keep everything we have installed</p>
                    <div className="review-footer">
                        Maximize Your Revenue Possibilities →
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review