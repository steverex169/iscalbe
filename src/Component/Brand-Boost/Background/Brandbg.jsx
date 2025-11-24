import React from 'react'
import "../Background/Brandbg.css"
import Brandcard from '../BrandCard.jsx/Brandcard'
import stack from "../Background/img/stack.png"
import vector from "../Background/img/Vector.png"
import Bar from "../Background/img/bar.png"
import Footer from '../../Footer/Footer'
const Brandbg = () => {
    return (
        <>
            <section className="main-brand">
                <h2>Unlock the <span>Full Power</span> of your Brand.</h2>
                <p>Take your campaigns beyond the basics. Our advanced email marketing tools help you grow subscribers, increase clicks, and turn readers into loyal customers—all while showcasing what makes your brand shine.</p>
                <section className="brand-row">
                    <Brandcard 
                        title="Audity"
                        icon={stack}
                        desc="A thorough review of your brand’s performance to spot gaps, refine delivery, and ensure every effort drives results."
                    />
                    <Brandcard 
                        title="Strategy"
                        icon={vector}
                        desc="A clear plan that guides how your brand delivers its message, connects with customers, and achieves lasting impact."
                    />
                    <Brandcard 
                        title="Execute"
                        icon={Bar}
                        desc="Turning your strategy into action—bringing ideas to life and delivering results that move your brand forward."
                    />
                </section>
                <Footer data="Maximize Your Revenue Possibilities" />
            </section>
        </>
    )
}

export default Brandbg