import React from 'react';
// Redux 
import { connect } from "react-redux";
// Redux Action
import {changeProject} from "../../../../redux/actions/portfolio";

const LogicInfo = ({changeProject}) => {
  return (
      <div className="project-info-con">
        <button onClick={() => changeProject("all")} className="back-btn"><img src="/assets/icons/arrow-left.svg" alt="Back To Projects"/></button>
        <h4 className="project-title">Logic</h4>
        <p className="project-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi. 
        </p>
        <a href="/">See the site</a>
      </div>
  )
}

export default connect(null, {changeProject})(LogicInfo);
