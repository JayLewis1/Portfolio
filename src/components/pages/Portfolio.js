import React from 'react'
import { Link } from 'react-router-dom'
export const Portfolio = () => {
  return (
   <div class="portfolio-container">
      <div className="yellow-background">
        <img src="/assets/illustrations/page-background-yellow.svg" alt="Background Bubble Yellow"/>
      </div>
      <div className="red-background">
        <img src="/assets/illustrations/page-background-red.svg" alt="Background Bubble Red"/>
      </div>
  <h4 className="page-title">Pervious Work</h4>
  <div className="portfolio-grid">
    <div><img src="/assets/projects/logic/logic-display@2x.png" alt="Logic Home Page"/></div>
    <div><img src="/assets/projects/dirt/dirt-display@2x.png" alt="Dirt Home Page"/></div>
  </div>
   </div>
  )
}


export default Portfolio;