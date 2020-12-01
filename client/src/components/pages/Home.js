import React, {useEffect} from 'react'
import { Link , withRouter, useHistory } from 'react-router-dom'
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
// Redux Actions
import { changeServiceType } from "../../redux/actions/services";
import { changeProject } from "../../redux/actions/portfolio";
import { pageName } from "../../redux/actions/pageName";

// Get in contact component
import GetInContact from "../components/GetInContact";

export const Home = ({ changeServiceType , changeProject, pageName}) => {
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Home - Jay Lewis";
    pageName("home");
  });

  const history = useHistory();

  const scrollDown = () => {
    var jump = document.getElementById("findOutMoreJump");
    
    if(window.width > 433) {
      jump.scrollIntoView({behavior: "smooth", block: "center",inline: "center"})
    } else {
      jump.scrollIntoView({behavior: "smooth", block: "start",inline: "center"})
    }

  }

  const changeService = (e) => {
    var serviceType =  e.target.value;
    changeServiceType(serviceType)
    history.push("/services")
  }

  const selectProject = (e) => {
    var projectSelected = e.target.getAttribute('data-value');
    changeProject(projectSelected);
  }

  return (
    <div>
      <div className="home-hero-container">
        <div className="background"></div>
    <div className="title-container">
      <h3>Create a beautiful responsive website</h3>
      <h5>With attracive design and modern development, I'm here to create the perfect website for you.</h5>
      <span className="button-container">
        <Link to="/contact" className="get-quote">Get a quote</Link>
        <span onClick={scrollDown}><p>Find out more</p><img src="/assets/icons/arrow-down.svg" alt="arrow down"/></span>
      </span>
    </div>
    </div>
    <h4  className="wwd-title">What I Offer</h4>
   <div  id="findOutMoreJump" className="wwd-container"> 
      <div className="info-container">
        <img src="/assets/icons/develop-icon.svg" alt="Developement Icon"/>
        <h5>Development</h5>
        <p>With the use of modern technologies, such as <span className="bold">React</span>, I can create a beautifully built website or web application that fits your needs.</p>
        <button value="development" onClick={(e) => changeService(e)}>
          Learn More
        </button>
      </div>
      <div className="info-container">
        <img src="/assets/icons/design-icon.svg" alt="Design Icon"/>
        <h5>Design</h5>
        <p>With beautiful design we create a refreshing look for you on the internet.</p>
        <button value="design" onClick={(e) => changeService(e)}>
          Learn More
        </button>
      </div>
      <div className="info-container" id="bottom-info">
        <img src="/assets/icons/cms-icon.svg" alt="CMS Icon"/>
        <h5>CMS</h5>
        <p>I supply a bespoke <span className="bold">Content Management System</span> for you to update your site as you please. I Also suppy the option of Wordpress</p>
        <button value="cms" onClick={(e) => changeService(e)}>
          Learn More
        </button>
      </div>
   </div>
   <div className="home-projects">
      <h4>My Projects</h4>
    <div className="projects-home-grid">
      <div className="container">
         <h6>Logic Trades</h6>
          <div className='img-con'>
            <Link className='project-link' to='/portfolio' data-value="logic" onClick={(e) => selectProject(e)}>See the project</Link>
          <img src="/assets/projects/logic/logic-site@2x.png" alt="Project one - Logic"/>
          </div>
          <a href="/">See the site</a>
      </div>
      <div className="container"> 
        <h6>DIRT</h6>
        <div className='img-con'>
              <Link className='project-link' to='/portfolio' data-value="dirt" onClick={(e) => selectProject(e)}>See the project</Link>
            <img src="/assets/projects/dirt/dirt-site@2x.png" alt="Project one - Logic"/>
            </div> 
         
          <a href="/">See the site</a>
      </div>
      <div className="container"> 
        <h6>Bouncing Borders</h6>
        <div className='img-con'>
              <Link className='project-link' to='/portfolio' data-value="dirt" onClick={(e) => selectProject(e)}>See the project</Link>
            <img src="/assets/projects/bouncing-borders/bb-site@2x.png" alt="Project one - Logic"/>
            </div> 
         
          <a href="/">See the site</a>
      </div>
      </div>
    </div>
    <GetInContact />
    {/* <div className="get-in-contact"> 
      <h4>Get in contact</h4>
      <span>
        <Link to="/services"> Learn more</Link>
        <Link to="/contact" className="contact-link">
        Contact
        </Link>
      </span>
    </div> */}
   </div>
  )
}

Home.propTypes = {
  service: PropTypes.object,
  project: PropTypes.object,
  changeServiceType : PropTypes.func.isRequired,
  changeProject : PropTypes.func.isRequired,
  pageName : PropTypes.func.isRequired,
}

export default connect(null,{ changeServiceType , changeProject, pageName})(withRouter(Home));