import React, { Component } from 'react'
import axios from 'axios';

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

  // On entry of form inputs, fill state with input value
  onChange(e) {
    this.setState( { ...this.state, [e.target.name] : e.target.value})
  }

  onSubmit(e) {
    // Preveny page refresh
    e.preventDefault();
    console.log(this.state);
    // POST form data which is held in the state
    // axois({
    //   method: 'POST',
    //   url : "/send",
    //   data : this.state,
    // }).then((res) => {
    //   // If Success, alert user and set state to empty
    //   if(res.data.status === "success") {
    //     console.log("Message Sent!");
    //     // Empty state
    //     this.setState({
    //       name: "",
    //       email: "",
    //       company : "",
    //       message : "",
    //     });
    //   } else if (res.data.status === "fail") {
    //     // If Fail, alert user and throw validation
    //     console.log("Message Failed To Send!");
    //   }
    // }).catch((err) => {
    //   // Catch errors and log them in console
    //   console.log(err);
    // })
    let axiosConfig = {
      headers: {
        'Content-Type' : 'application/json',
          "Access-Control-Allow-Origin": "*",
    
      }
    };


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

  render() {
  return (
   <div className="contact-container">
      <div className="yellow-background">
        <img src="/assets/illustrations/page-background-yellow.svg" alt="Background Bubble Yellow"/>
      </div>
      <div className="red-background">
        <img src="/assets/illustrations/page-background-red.svg" alt="Background Bubble Red"/>
      </div>
      <h4 className="page-title">Contact Me</h4>
      <div className="contact-flex">
     <div className="contact-left">
       <form onSubmit={(e) => this.onSubmit(e)}>
         <h5>Get In Contact</h5>
         <span>
           <label htmlFor="name">Name</label>
           <input type="text" id="name" name="name" placeholder="John Smith"  onChange={(e) => this.onChange(e)}/>
         </span>
         <span>
           <label htmlFor="email">Email</label>
           <input type="text" id="email" name="email"placeholder="Johnsmtih@example.com"  onChange={(e) => this.onChange(e)}/>
         </span>
         <span>
           <label htmlFor="company">Company</label>
           <input type="text" id="company" name="company" placeholder="JohnSmithLTD" onChange={(e) => this.onChange(e)}/>
         </span>
         <span>
           <label htmlFor="message">Message</label>
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
            <img src="/assets/icons/facebook.svg" alt="Facebook Icon"/>
            </a>
            <a href="/">
            <img src="/assets/icons/linkedin.svg" alt="LinkedIn Icon"/>
            </a>
          </span>
       </div>
       </div>
     </div>
   </div>
  )
}
}


export default Contact;