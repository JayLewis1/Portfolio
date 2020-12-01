import React from 'react'
import { Link } from 'react-router-dom';

const GetInContact = () => {
  return (
    <div className="get-in-contact"> 
    <h4>Get in contact</h4>
    <span>
      <Link to="/services"> Learn more</Link>
      <Link to="/contact" className="contact-link">
      Contact
      </Link>
    </span>
  </div>
  )
}

export default GetInContact;