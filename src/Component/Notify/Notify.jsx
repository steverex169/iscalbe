import React from 'react'
import "../Notify/Notify.css"
const Notify = ({logo,title,desc,time}) => {
    return (
        <div className="notification-card">
            <div className="notif-left">
                {logo && <img src={logo} alt="logo" className="notif-logo" />}
                <div>
                    <p className="notif-title">{title}</p>
                    {desc && <p className="notif-desc">{desc}</p>}
                </div>
            </div>
            {time && <span className="notif-time">{time}</span>}
        </div>
    );
}

export default Notify