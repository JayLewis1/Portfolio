import React , {useEffect} from 'react'
import PropTypes from 'prop-types';

// Redux
import { connect } from "react-redux";
// Redux Actions
import { pageName } from "../../redux/actions/pageName";


export const About = ({pageName}) => {
  useEffect(() => {
    document.title = "Services - Jay Lewis";
    pageName("about");
  });

  return (
   <div className="about-container">
        {/* <div className="yellow-background">
        <img src="/assets/illustrations/page-background-yellow.svg" alt="Background Bubble Yellow"/>
      </div>
      <div className="red-background">
        <img src="/assets/illustrations/page-background-red.svg" alt="Background Bubble Red"/>
      </div> */}

      <h4>About Me</h4>
      <div className="about-wrapper">
        <div className="img-portrait"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in </p>
      </div>
      {/* <div className='technologies-con'>
       <span><img src="/assets/icons/html.svg" alt="Html icon"/></span>
       <span><img src="/assets/icons/css.svg" alt="Css icon"/></span>
       <span><img src="/assets/icons/react.svg" alt="React icon"/>
       </span>
       <span><img src="/assets/icons/wordpress.svg" alt="Wordpress icon"/> </span>
      </div> */}
      <div className="follow-me-con">
        <h5>Follow me here</h5>
        <span>
          <a href="/">
            <img src="/assets/icons/facebook-circle.svg" alt="Facebook icon" className="facebook-icon" />
          </a>
          <a href="/">
             <img src="/assets/icons/linkedin-circle.svg" alt="Linkedin icon"/>
            </a>
        </span>
      </div>
      <div className="technologies">
      <div className="hex-left">
                <img src="/assets/watermarks/hexagon-left.svg" alt="Hexagon"/>
        </div>
        <div className="hex-right">
          <img src="/assets/watermarks/hexagon-right.svg" alt="Hexagon"/>
        </div>
        <div className="text-wrapper">
          <h4>Technologies</h4>
          <p>I’m experienced in a few technologies, my favourite to use for developing is <span className="bold">React</span> its modern and helps develop fast, easy to use web applications. For content management systems (cms) I use  <span className="bold">Wordpress</span> when requested and also bespoke cms alongside react applications.</p>
          <p>The Adobe creative Suite is used throughout the process for designing. <span className="bold">Adobe XD</span> is used to design the site structure and the majority of the content with <span className="bold">Abode Illustrator</span> for illustrations and icons.</p>
        </div>
        <div className="icons">
          <img src="/assets/illustrations/technologies.svg" alt="Technologies"/>
        </div>
      </div>
      <div className="located-con">
          <h5>Located Here</h5>
          <p>I’m located in the Bristol area but that does not limit me due to the use of video calling and messaging where I can keep in regular contact with you throughout the project and after for any tutorials or maintenance.  </p>
          <img src="/assets/map/map.svg" alt="Located in Chepstow/Bristol Area"/>
        </div>
      {/* <div className="located-con">
          <h5>Located Here</h5>
          <img src="/assets/map/map.svg" alt="Located in Chepstow/Bristol Area"/>
      </div> */}
   </div>
  )
}

About.propTypes = {
  pageName : PropTypes.func.isRequired
}


export default connect(null, {pageName})(About);