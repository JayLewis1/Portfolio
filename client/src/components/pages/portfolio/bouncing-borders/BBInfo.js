import React , { useEffect } from 'react';
// Redux 
import { connect } from "react-redux";
// Redux Action
import { changeProject } from "../../../../redux/actions/portfolio";
import { pageName } from "../../../../redux/actions/pageName";

const BBInfo = ({changeProject, pageName}) => {
  
  useEffect(() => {
    pageName("portfolio");
  })

  const backToProjects = () => {
    changeProject("all");
    document.body.scrollTop = 80; // For Safari
    document.documentElement.scrollTop = 80; // For Chrome
  }

  return (
      <div className="project-info-con">
        <div className="text-top">
          <h4 className="project-title">Bouncing Borders</h4>
          <p className="project-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi. 
          </p>
          <span>
            <button onClick={() => backToProjects()} className="back-btn"><img src="/assets/icons/arrow-left.svg" alt="Back To Projects"/></button> 
            <a href="/">See the site</a>
          </span>
        </div>
        <div className="text-bottom">  
        <div className="hex-left">
              <img src="/assets/watermarks/hexagon-left.svg"  alt="Hexagon"/>
            </div>
            <div className="hex-right">
              <img src="/assets/watermarks/hexagon-right.svg" alt="Hexagon"/>
            </div> 
            <h4 className="question-title">Like what you see?</h4> 
          <p className="question-p">
          Get in contact with me for chat, I’m very happy to answer any questions and quote up a reasonable price for your project.
            </p>
            <a href="/contact">Get in contact</a>
          </div>
      </div>
  )
}

export default connect(null, {changeProject, pageName})(BBInfo);
