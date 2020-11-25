import React from 'react'
// Redux
import { connect } from "react-redux";
// Redux Action
import { changeProject } from "../../../../redux/actions/portfolio";

const BBImg = ({changeProject}) => {

  const selectProject = (e) => {
    var value= e.target.parentNode.getAttribute("data-value");
    changeProject(value)
    document.body.scrollTop = 80; // For Safari
    document.documentElement.scrollTop = 80; // For Chrome
  }
  return (
    <div 
       className="project-img-con" 
       onClick={(e) => selectProject(e)} data-value="bouncing-borders"
       >
      <img src="/assets/projects/bouncing-borders/bb-site@2x.png" alt="Dirt Home Page" /> 
      </div>
  )
}

export default connect(null, {changeProject})(BBImg);