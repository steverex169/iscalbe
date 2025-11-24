import React, { useState } from 'react'
import "../Dashboard/DashboardCard.css"
import icon1 from "../Dashboard/shopify.png"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowDown, FaCalendarDay } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaUsers, FaEnvelope, FaSms } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";
import Slider from 'react-slick';
const DashboardCard = ({ data }) => {
    const [open, setOpen] = useState(false)
    const dropdown = () => {
        setOpen(!open)
    }
    return (
        <>
                <section className="Dashboard">
                    <header>
                        <div className={`dropdown ${open ? "show" : ""}`}>
                            <img src={icon1} alt="" className="drop-icon" />
                            <h5>Placed Order</h5>
                            <MdOutlineKeyboardArrowDown className='drop-show' />
                            <ul>
                                <li>{data}</li>
                                <li>{data}</li>
                                <li>{data}</li>
                                <li>{data}</li>
                                <li>{data}</li>
                            </ul>
                        </div>
                        <div className='calendar'>
                            <FaCalendarDay className='calendar-logo' />
                            <h5>Time Period</h5>
                        </div>
                        <p>Jul 1, 2024 - Jul 24, 2024 compared to
                            previous period</p>
                    </header>

                    <main>
                        <section className="main-header">
                            <section className="main-header-left">
                                <h4>Business performance summary</h4>
                                <p>Jul 1, 2024 - July 24, 2024</p>
                            </section>
                            <a href="#">View Dashboard</a>
                        </section>
                        <div className="main-body">
                            <div className="main-left-body">
                                <h3 className='main-left-h3'>£27,518.08</h3>
                                <h5 className='main-left-h5'>Total revenue</h5>
                                <p className='main-left-p'><span className='innerspan-left-p'><FaArrowTrendDown className='innerlogo-left' />30%</span> vs.previous period</p>
                            </div>
                            <div className="main-right-body">
                                <h3 className='main-right-h3'>£7,953.45</h3>
                                <h5 className='main-right-h5'>Attributed revenue (28.90% of total )</h5>
                                <p className='main-right-p'><span className='innerspan-right-p'><FaArrowTrendUp className='innerlogo-right' />30%</span> vs.previous period</p>
                            </div>
                        </div>
                        <div className="revenue-container">
                            {/* Per recipient */}
                            <div className="revenue-box">
                                <FaUsers className="icon" />
                                <div>
                                    <p className="title">Per recipient</p>
                                    <h4>£0.19</h4>
                                </div>
                            </div>

                            {/* Campaigns */}
                            <div className="revenue-box">
                                <MdOutlineCampaign className="icon" />
                                <div>
                                    <p className="title">Campaigns</p>
                                    <h4>£6,764.50</h4>
                                    <span className="percent">85.05%</span>
                                </div>
                            </div>

                            {/* Flows */}
                            <div className="revenue-box">
                                <RiFlowChart className="icon" />
                                <div>
                                    <p className="title">Flows</p>
                                    <h4>£1,188.95</h4>
                                    <span className="percent">14.95%</span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="revenue-box">
                                <FaEnvelope className="icon" />
                                <div>
                                    <p className="title">Email</p>
                                    <h4>£7,953.45</h4>
                                    <span className="percent">100.00%</span>
                                </div>
                            </div>

                            {/* SMS */}
                            <div className="revenue-box">
                                <FaSms className="icon" />
                                <div>
                                    <p className="title">SMS</p>
                                    <h4>£0.00</h4>
                                    <span className="percent">0.00%</span>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
        </>
    )
}

export default DashboardCard