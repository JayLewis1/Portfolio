import React , { useEffect }from 'react'
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { changeProject } from "../../redux/actions/portfolio"

// Project Image Components
import DirtImg from "./portfolio/dirt/DirtImg";
import LogicImg from "./portfolio/logic/LogicImg";
import BBImg from "./portfolio/bouncing-borders/BBImg";
// Project Info Components
import DirtInfo from "./portfolio/dirt/DirtInfo";
import LogicInfo from "./portfolio/logic/LogicInfo";
import BBInfo from "./portfolio/bouncing-borders/BBInfo";

// Get in contact component
import GetInContact from "../components/GetInContact";

export const Portfolio = ({project, changeProject,}) => {
  
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
  if (project.type === "all" || project.type === "bouncing-borders") {
    // Push the component to the array if parameters are met
   whichProjects.push(<BBImg />);
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
    case "bouncing-borders" :
          whichProjects.push(<BBInfo />);
          break;
    default : 
          break;
  }

  // Change height of the project image when opened
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
      <h4 className="page-title">Previous Work</h4>
      <div className="portfolio-grid">
        {whichProjects.map((proj) => <li style={{height: height, transition : transition}} key={whichProjects.indexOf(proj)}>{proj}</li>)}
      </div>
      <GetInContact />
   </div>
  )
}

Portfolio.propTypes = {
  project : PropTypes.object.isRequired,
  changeProject : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  project: state.project
})


export default connect(mapStateToProps, {changeProject})(Portfolio);