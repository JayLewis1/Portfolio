import React , { Fragment }from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux";

const Background = ({page}) => {
    return (
    <Fragment>
          {
            page.page === "home" &&  <div className="home-background">
            </div>
          }
           {
            page.page === "services" &&  <div className="services-background">
            </div>
          }
           {
            page.page === "portfolio" &&  <div className="portfolio-background"></div>
          }
           {
            page.page === "about" &&  <div className="about-background"></div>
          }
    </Fragment>
  )
}


Background.propTypes = {
  page: PropTypes.object
}

const mapStateToProps = (state) => ({
  page : state.page
})


export default connect(mapStateToProps)(Background);