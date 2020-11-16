import React , { useEffect }from 'react'
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { changeProject } from "../../redux/actions/portfolio"

// Project Image Components
import DirtImg from "./portfolio/dirt/DirtImg";
import LogicImg from "./portfolio/logic/LogicImg";
// Project Info Components
import DirtInfo from "./portfolio/dirt/DirtInfo";
import LogicInfo from "./portfolio/logic/LogicInfo";

export const Portfolio = ({project, changeProject}) => {
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Portfolio - Jay Lewis";
  });

  // Declare an array to hold the project components
  var whichProjects = [];

  // Project Images - if state has changed then show the selected project
  if(project.type === "all" || project.type === "dirt") {
    // Push the component to the array if parameters are met
    whichProjects.push(<DirtImg />);
  }
  if (project.type === "all" || project.type === "logic") {
     // Push the component to the array if parameters are met
    whichProjects.push(<LogicImg />);
  }

   // Project Info - if state has changed then show the selected project info
  switch(project.type) {
    case "dirt" :
       // Push the component to the array if parameters are   met
          whichProjects.push(<DirtInfo />);
          break;
    case "logic" :
          whichProjects.push(<LogicInfo />);
          break;
    default : 
          break ;
  }

  // Change height of the project image when 
  var height;
  var transition = "0.5s";
  if(project.type !== "all") {
    height = "100%";
    transition = "0.9s"
  } else {
    height = "260px";
    transition = "0s"
  }
  
  return (
   <div className="portfolio-container">
      <div className="yellow-background">
        <img src="/assets/illustrations/page-background-yellow.svg" alt="Background Bubble Yellow"/>
      </div>
      <div className="red-background">
        <img src="/assets/illustrations/page-background-red.svg" alt="Background Bubble Red"/>
      </div>
  <h4 className="page-title">Pervious Work</h4>
  <div className="portfolio-grid">
    {whichProjects.map((proj) => <li style={{height: height, transition : transition}} key={whichProjects.indexOf(proj)}>{proj}</li>)}
  </div>
   </div>
  )
}

Portfolio.propTypes = {
  project : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  project: state.project
})


export default connect(mapStateToProps, {changeProject})(Portfolio);