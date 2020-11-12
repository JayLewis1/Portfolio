import React from 'react'
// Redux
import { connect } from "react-redux";
// Redux Action
import { changeProject } from "../../../../redux/actions/portfolio";

const LogicImg = ({changeProject}) => {

  const selectProject = (e) => {
    var project = e.target.parentNode.getAttribute("data-value");
    changeProject(project)
    console.log(project);
    document.body.scrollTop = 80; // For Safari
    document.documentElement.scrollTop = 80; // For Chrome
  }

  return (
    <div className="project-img-con" onClick={(e) => selectProject(e)} data-value="logic"><img src="/assets/projects/logic/logic-site@2x.png" alt="Logic Home Page"/></div>
  )
}

export default connect(null, {changeProject})(LogicImg);
