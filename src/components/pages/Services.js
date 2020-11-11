import React , { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// Services components
import Development from "./services/Development"
import Design from "./services/Design"
import Cms from "./services/Cms"

export const Services = () => {
  const [service, setService] = useState("development");
  const serviceDisplay = useRef(null);

  const changeService = (e) => {
    var type = e.target.value;
    setService(type);
    serviceDisplay.current.scrollIntoView({ 
      behavior: "smooth", 
      block: "nearest"
   })
  }

    if(service === "development") {
      var develop =  "active-service";
    }
    if(service === "design") {
      var design =  "active-service";
    }
    if(service === "cms") {
      var cms =  "active-service";
    }

  return (
   <div className="services-container">
         <div className="yellow-background">
        <img src="/assets/illustrations/page-background-yellow.svg" alt="Background Bubble Yellow"/>
      </div>
      <div className="red-background">
        <img src="/assets/illustrations/page-background-red.svg" alt="Background Bubble Red"/>
      </div>
      <h4 className="page-title">My Services</h4>
      <div className="services-info-grid">
        <div className="info-con">
          <img src="/assets/illustrations/development.svg" alt="Development Illustration"/>
          <h4>Development</h4>
          <p>Lorem ipsum dolor sit amet,conctetur adipis Cras eleifend, risus ac </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button value="development" onClick={(e) => changeService(e)}>Learn More</button>
        </div>
        <div className="info-con">
          <img src="/assets/illustrations/design.svg" alt="Design Illustration"/>
          <h4>Design</h4>
          <p>Lorem ipsum dolor sit amet,conctetur adipis Cras eleifend, risus ac </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button  value="design" onClick={(e) => changeService(e)}>Learn More</button>
        </div>
        <div className="info-con">
          <img src="/assets/illustrations/cms.svg" alt="CMS Illustration"/>
          <h4>CMS</h4>
          <p>Lorem ipsum dolor sit amet,conctetur adipis Cras eleifend, risus ac </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button value="cms" onClick={(e) => changeService(e)}>Learn More</button>
        </div>
      </div>
      <div className="service-button-con">
        <button 
          className={develop} 
          value="development" 
          onClick={(e) => changeService(e)}>Development</button>
        <button
         className={design} 
         value="design" 
         onClick={(e) => changeService(e)}>Design</button>
        <button
        className={cms} 
         value="cms" 
         onClick={(e) => changeService(e)}>CMS</button>
      </div>
      {service === "development" && <Development />}
      {service === "design" && <Design />}
      {service === "cms" && <Cms />}
     <div class="scroll-ref" ref={serviceDisplay}></div>
   </div>
  )
}


export default Services;