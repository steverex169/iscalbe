import React from 'react'
import "../Footer/Footer.css"
const Footer = ({data,style}) => {
  return (
    <>
      <footer style={{style}}>
        <div className="footer-box">
          <p>{data}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer