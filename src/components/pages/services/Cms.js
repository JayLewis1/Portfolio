import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Cms = ()  => {
  return (
    <Fragment>
        <div className="left-con">
          <img src="/assets/illustrations/cms.svg" alt="Service Illustration"/>
        </div>
        <div className="right-con">
          <h5>Cms</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi.</p>
          <Link to="/contact" className="get-qoute">Get a quote</Link>
        </div>
    </Fragment>
  )
}


export default Cms;