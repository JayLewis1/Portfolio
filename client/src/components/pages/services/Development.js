import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Development = ()  => {
  return (
    <Fragment >
      <div className="left-con">
      <h5>React</h5>
          <p>Using Technologies like React I create websites that fit your every need. Working along side you to achieve the best results, I create anything from Portfolios, Blogs to web applications you  may need for your business.</p>
      </div>
      <div className="divder-line"></div>
        <div className="right-con">
          <h5>Blogs</h5>
          <p>If you’re wanting to start putting your thoughts or updates of your business on the internet in a centralised hub under your name, I’m here to create a perfect outlet for you providing a bespoke Content Management System where you can update, delete and choose the right content for you.</p>
        </div>
        <div className="service-watermark">
        <img src="/assets/watermarks/develop.svg" alt="Cms Watermark"/>
      </div>
      </Fragment>
  )
}


export default Development;
