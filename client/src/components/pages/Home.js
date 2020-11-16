import React, {useEffect} from 'react'
import { Link , withRouter, useHistory } from 'react-router-dom'
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
// Redux Actions
import { changeServiceType } from "../../redux/actions/services";
// Redux Actions
import { changeProject } from "../../redux/actions/portfolio";


export const Home = ({ changeServiceType , changeProject}) => {
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Home - Jay Lewis";
  });

  const history = useHistory();

  const scrollDown = () => {
    var jump = document.getElementById("findOutMoreJump");
    jump.scrollIntoView({behavior: "smooth", block: "center",inline: "center"})
  }

  const changeService = (e) => {
    var serviceType =  e.target.value;
    console.log(serviceType);
    changeServiceType(serviceType)
    history.push("/services")
  }

  const selectProject = (e) => {
    var projectSelected = e.target.getAttribute('data-value');
    changeProject(projectSelected);
  }

  return (
    <div>
      <div className="yellow-background">
        <img src="/assets/illustrations/page-background-yellow.svg" alt="Background Bubble Yellow"/>
      </div>
      <div className="red-background">
        <img src="/assets/illustrations/page-background-red.svg" alt="Background Bubble Red"/>
      </div>
    <div className="home-hero-container">
   <div className="title-container">
    <h3>I Create fast modern websites for business and personal use</h3>
    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend</h5>
    <span className="button-container">
      <Link to="/contact" className="get-quote">Get a quote</Link>
      <span onClick={scrollDown}><p>Find out more</p><img src="/assets/icons/arrow-down.svg" alt="arrow down"/></span>
    </span>
   </div>
   </div>
   <div className="wwd-container" id="findOutMoreJump"> 
      <div className="info-container">
          <img src="/assets/illustrations/red-background.svg" alt="Background Bubble" className="development-background"/>
        <img src="/assets/illustrations/development.svg" alt="Developement Laptop"/>
        <h5>Development</h5>
        <p>Lorem ipsum dolor sit amet, conctetur adipis Cras eleifend, risus ac </p>
        <button value="development" onClick={(e) => changeService(e)}>
          Learn More
        </button>
      </div>
      <div className="info-container">
      <img src="/assets/illustrations/blue-background.svg" alt="Background Bubble" className="design-background"/>
        <img src="/assets/illustrations/design.svg" alt="Design Laptop"/>
        <h5>Design</h5>
        <p>Lorem ipsum dolor sit amet, conctetur adipis Cras eleifend, risus ac </p>
        <button value="design" onClick={(e) => changeService(e)}>
          Learn More
        </button>
      </div>
      <div className="info-container" id="bottom-info">
      <img src="/assets/illustrations/yellow-background.svg" alt="Background Bubble" className="cms-background"/>
        <img src="/assets/illustrations/cms.svg" alt="CMS Laptop"/>
        <h5>CMS</h5>
        <p>Lorem ipsum dolor sit amet, conctetur adipis Cras eleifend, risus ac </p>
        <button value="cms" onClick={(e) => changeService(e)}>
          Learn More
        </button>
      </div>
   </div>
   <div className="home-projects">
      <h4>Heres what I've done</h4>
    <div className="projects-home-grid">
      <div className="container">
          <div className='img-con'>
            <Link className='project-link' to='/portfolio' data-value="logic" onClick={(e) => selectProject(e)}>See the project</Link>
          <img src="/assets/projects/logic/logic-site@2x.png" alt="Project one - Logic"/>
          </div>
          <h6>Logic Trades</h6>
          <a href="/">See the site</a>
      </div>
      <div className="container"> 
      <div className='img-con'>
            <Link className='project-link' to='/portfolio' data-value="dirt" onClick={(e) => selectProject(e)}>See the project</Link>
          <img src="/assets/projects/dirt/dirt-site@2x.png" alt="Project one - Logic"/>
          </div> 
          <h6>DIRT</h6>
          <a href="/">See the site</a>
      </div>
      </div>
    </div>
    <div className="get-in-contact"> 
      <h4>Get in contact</h4>
      <span>
        <Link to="/services"> Learn more</Link>
        <Link to="/contact" className="contact-link">
        Contact
        </Link>
      </span>
    </div>
   </div>
  )
}

Home.propTypes = {
  service: PropTypes.object,
  project: PropTypes.object,
}

export default connect(null,{ changeServiceType , changeProject})(withRouter(Home));