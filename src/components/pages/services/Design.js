import React from 'react';
import { Link } from "react-router-dom"

const Design = ()  => {
  return (
    <div className="services-display">
        <div class="left-con">
          <img src="/assets/illustrations/design.svg" alt="Service Illustration"/>
        </div>
        <div class="right-con">
          <h5>Design</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi.</p>
          <Link className="get-qoute">Get a quote</Link>
        </div>
      </div>
  )
}


export default Design;