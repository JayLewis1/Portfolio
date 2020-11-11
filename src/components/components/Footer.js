import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
   <div className="footer">
     <div className="footer-nav">
       <h6>Site Navigation</h6>
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/services">Services</Link></li>
         <li><Link to="/portfolio">Portfolio</Link></li>
         <li><Link to="/about">About me</Link></li>
         <li><Link to="/contact">Contact me</Link></li>
       </ul>
     </div>
     <div className="footer-services">
     <h6>Services</h6>
       <ul>
          <li><Link to="/services">Web Devlopement</Link></li>
         <li><Link to="/services">Web Design</Link></li>
         <li><Link to="/services">CMS</Link></li>
       </ul>
     </div>
     <div className="footer-about">
    <p> We’re an independent design agency based in the Bristol area. Our main focus is you the client, we try to make every want and need of yours met to the best of our ability. Along the way we focus on stunning design with functionality which creates a memorable experience for the user.</p>
     </div>
   </div>
  )
}


export default Footer;