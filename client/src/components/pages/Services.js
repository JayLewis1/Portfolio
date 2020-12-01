import React , { useEffect, useRef } from 'react'
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
// Redux Actions
import { changeServiceType } from "../../redux/actions/services";
import { pageName } from "../../redux/actions/pageName";

// Services components
import Development from "./services/Development"
import Design from "./services/Design"
import Cms from "./services/Cms"

// Get in contact component
import GetInContact from "../components/GetInContact";

const Services = ({serviceType , changeServiceType, pageName}) => {
  // Declared serviceDisplay as new ref
  const serviceDisplay = useRef(null);

  useEffect(() => {
    // Scroll to the top when page has been changed
    // window.scrollTo(0, 0);
    // Update the document title using the browser API
    document.title = "Services - Jay Lewis";
    pageName("");
  });

  const changeService = (e) => {
    var type = e.target.value;
    // Pass the button's value to the redux function - set's the service state as the value
    changeServiceType(type)
    // Used ref to scroll to displat div into view when the service has been chosen - smooth scroll and center div in screen
   serviceDisplay.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

    // Depending on what service is set into state assign the active button class to the services buttons
    switch (serviceType.type) {
      case "development" :
              var develop =  "active-service";
              var devShadow = "0 2px 20px rgba(0,0,0,0.18)"
              break;
      case "design" :
              var design =  "active-service";
              var designShadow = "0 2px 20px rgba(0,0,0,0.18)";
              break;
      case "cms" :
              var cms =  "active-service";
              var cmsShadow = "0 2px 20px rgba(0,0,0,0.18)";
              break;
           default: 
              break;
    }
  
  

  return (
   <div className="services-container">
    <h4 className="page-title">My Services</h4>
      <div className="services-info-grid">
        <div className="info-con" style={{boxShadow: devShadow}}>
          <img src="/assets/icons/develop-icon.svg" alt="Development Illustration"/>
          <h4>Development</h4>
          <p>With the use of modern technologies, such as <span className="bold">React</span>, I can create a beautifully built website or web application that fits your needs.</p>
       
          {serviceType.type === "development" &&  <button value="development" id="development-btn" onClick={(e) => changeService(e)}>Scroll Down</button>}
          {serviceType.type !== "development" &&  <button value="design" id="design-btn" onClick={(e) => changeService(e)}>Learn More</button>}

        </div>
        <div className="info-con" style={{boxShadow: designShadow}}>
          <img src="/assets/icons/design-icon.svg" alt="Design Illustration"/>
          <h4>Design</h4>
          <p>With beautiful design we create a refreshing look for you on the internet.</p>

          {serviceType.type === "design" &&  <button  value="design" id="design-btn" onClick={(e) => changeService(e)}>Scroll Down</button>}
          {serviceType.type !== "design" &&  <button  value="design" id="design-btn" onClick={(e) => changeService(e)}>Learn More</button>}
         
        </div>
        <div className="info-con" style={{boxShadow: cmsShadow}}>
          <img src="/assets/icons/cms-icon.svg" alt="CMS Illustration"/>
          <h4>CMS</h4>
          <p>I supply a bespoke <span className="bold">Content Management System</span> for you to update your site as you please. I Also suppy the option of Wordpress</p>


          {serviceType.type === "cms" && <button value="cms" id="cms-btn" onClick={(e) => changeService(e)}>Scroll Down</button>}
          {serviceType.type !== "cms" && <button value="cms" id="cms-btn" onClick={(e) => changeService(e)}>Learn More</button>}

        </div>
      </div>
     
      <div className="services-display">
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
        <div className="background"></div>
        <div className="hex-left">
                <img src="/assets/watermarks/hexagon-left.svg" alt="Hexagon"/>
        </div>
        <div className="hex-right">
          <img src="/assets/watermarks/hexagon-right.svg" alt="Hexagon"/>
        </div>
        <div className="service-content">
        {serviceType.type === "development" && <Development />}
        {serviceType.type === "design" && <Design />}
        {serviceType.type === "cms" && <Cms />}
        </div>
      </div>
      <div  className="scroll-ref" ref={serviceDisplay}></div>
      <GetInContact />
   </div>
  )
}

Services.propTypes = {
  service : PropTypes.object,
  changeServiceType : PropTypes.func.isRequired
}

const mapStateToProps =  (state) => ({
  serviceType : state.service,
})

export default connect(mapStateToProps, {changeServiceType, pageName})(Services);