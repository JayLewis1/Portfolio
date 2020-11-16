import React from 'react'
import { Link } from 'react-router-dom'
export const About = () => {
  return (
   <div className="about-container">
        <div className="yellow-background">
        <img src="/assets/illustrations/page-background-yellow.svg" alt="Background Bubble Yellow"/>
      </div>
      <div className="red-background">
        <img src="/assets/illustrations/page-background-red.svg" alt="Background Bubble Red"/>
      </div>
      <h4>About Me</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh.</p>
      <p>Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi.</p>
      <div className='technologies-con'>
       <span><img src="/assets/icons/html.svg" alt="Html icon"/></span>
       <span><img src="/assets/icons/css.svg" alt="Css icon"/></span>
       <span><img src="/assets/icons/react.svg" alt="React icon"/>
       </span>
       <span><img src="/assets/icons/wordpress.svg" alt="Wordpress icon"/> </span>
      </div>
      <div className="follow-me-con">
        <h5>You can follow me here</h5>
        <span>
          <img src="/assets/icons/facebook.svg" alt="Facebook icon"/>
          <img src="/assets/icons/linkedin.svg" alt="Linkedin icon"/>
        </span>
      </div>
      <div className="located-con">
          <h5>Located Here</h5>
          <img src="/assets/map/map.svg" alt="Located in Chepstow/Bristol Area"/>
      </div>
   </div>
  )
}


export default About;