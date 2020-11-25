import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from "prop-types"
 
// Redux
import { connect } from "react-redux";
// Redux Actions
import { pageName } from "../../redux/actions/pageName";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      company : '',
      message : '',
    }
    this.onChange.bind(this);
    this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.pageName("");
  }

  // On entry of form inputs, fill state with input value
  onChange(e) {
    this.setState( { ...this.state, [e.target.name] : e.target.value});

    if(this.state.name !== '') {
      document.getElementById("name").removeAttribute("class","input-incorrect");
      document.getElementById("name").setAttribute("class","input-correct");
      document.getElementById("name-validation").removeAttribute("class");
      document
      .getElementById("name-validation").setAttribute("class","validation");
    }
    if(this.state.email !== '') {
      document.getElementById("email").removeAttribute("class","input-incorrect");
      document.getElementById("email").setAttribute("class","input-correct");
      document.getElementById("email-validation").removeAttribute("class");
      document
      .getElementById("email-validation").setAttribute("class","validation");
    }
    if(this.state.company !== '') {
      document.getElementById("company").setAttribute("class","input-correct");
    }
    if(this.state.message !== '') {
      document.getElementById("message").removeAttribute("class","input-incorrect");
      document.getElementById("message").setAttribute("class","input-correct");
      document.getElementById("message-validation").removeAttribute("class");
      document
      .getElementById("message-validation").setAttribute("class","validation");
    }
  }

  onSubmit(e) {
    // Preveny page refresh
    e.preventDefault();
  
    if(this.state.name === '') {
      document
        .getElementById("name")
        .removeAttribute("class", "input-correct");
      document.getElementById("name").setAttribute("class","input-incorrect");
      document
      .getElementById("name-validation").setAttribute("class","show-validation");
    }
    if(this.state.email === '' || this.state.email.length < 5) {
      document
      .getElementById("email")
      .removeAttribute("class", "input-correct");
      document.getElementById("email").setAttribute("class","input-incorrect");
      document
      .getElementById("email-validation").setAttribute("class","show-validation");
    }
    if(this.state.message === '' || this.state.message.length < 5) {
      document
      .getElementById("message")
      .removeAttribute("class", "input-correct");
      document.getElementById("message").setAttribute("class","input-incorrect");
      document
      .getElementById("message-validation").setAttribute("class","show-validation");
    }
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.message !== "" &&
      this.state.name.length < 3 &&
      this.state.email.length < 5 &&
      this.state.message.length < 5
    ) {
    axios({
      method: "POST", 
      url:"/contact", 
      data: this.state
  }).then((response)=>{
      if (response.data.msg === 'success'){
          alert("Email sent, awesome!"); 
          this.resetForm()
      }else if(response.data.msg === 'fail'){
          alert("Oops, something went wrong. Try again")
      }
  })
    }
  }

  render() {
  return (
   <div className="contact-container">
      <h4 className="page-title">Contact Me</h4>
      <div className="contact-flex">
     <div className="contact-left">
       <form onSubmit={(e) => this.onSubmit(e)}>
         <h5>Get In Contact</h5>
         <span>
           <span className="label-wrapper"><label htmlFor="name">Name</label><p className="validation" id="name-validation">Must be above 3 Characters</p><p className="asterix">*</p></span>
           <input type="text" id="name" name="name" placeholder="John Smith"  onChange={(e) => this.onChange(e)}/>
         </span>
         <span>
           <span className="label-wrapper"><label htmlFor="email">Email</label><p className="validation" id="email-validation">Must be above 5 Characters</p><p className="asterix">*</p></span>
           <input type="text" id="email" name="email"placeholder="Johnsmtih@example.com"  onChange={(e) => this.onChange(e)}/>
         </span>
         <span>
         <span className="label-wrapper"><label htmlFor="company">Company</label></span>
           <input type="text" id="company" name="company" placeholder="JohnSmithLTD" onChange={(e) => this.onChange(e)}/>
         </span>
         <span>
         <span className="label-wrapper"><label htmlFor="message">Message</label><p className="validation" id="message-validation">Must be above 5 Characters</p><p className="asterix">*</p></span>
           <textarea name="message" id="message" placeholder="Hey I was wondering how much a static website would be?"  onChange={(e) => this.onChange(e)}></textarea>
         </span>
         <input type="submit" value="Send Message" id="submit"/>
       </form>
     </div>
     <div className="contact-right">
       <div className="contact-info">
        <h5>My Contact Infomation</h5>  
        <div className="info-wrapper">
          <span><img src="/assets/icons/email.svg" alt="Email Icon"/><p>Jr_lewis@outlook.com</p></span>
          <span><img src="/assets/icons/phone.svg" alt="Phone Icon"/><p>07592831246</p></span>
        </div>
        <h5>My Socials</h5> 
          <span className="social-wrapper">
            <a href="/">
            <img src="/assets/icons/facebook-circle.svg" alt="Facebook Icon"/>
            </a>
            <a href="/">
            <img src="/assets/icons/linkedin-circle.svg" alt="LinkedIn Icon"/>
            </a>
          </span>
       </div>
       </div>
     </div>
   </div>
  )
}
}

Contact.propTypes = {
  pageName: PropTypes.func.isRequired
}

export default connect(null, {pageName})(Contact);