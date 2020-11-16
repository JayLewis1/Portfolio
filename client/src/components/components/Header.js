import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'

var counter;
const Header = () => {

  // State Variables : 
  //  Nav menu height
  //  Burger img src 
  //  Burger img width
  const [height, setHeight] = useState("0px");
  const [burgerSrc, setSrc] = useState("/assets/icons/burger.svg");
  const [burgerWidth, setWidth] = useState("100%");
  const [display, setDisplay] = useState("flex");


  useEffect(() => {
      // If window width is beyond the width the burger menu is used 
      // set the Nav menu height to 0px so it is still displayed on screen
      // when the dropdown menu is open - also set the burger img src back to
      // the burger menu
      const widowResize = () => {
      if(window.innerWidth > 768 ) {
        setHeight("80px");
        setDisplay("flex");
        setSrc("/assets/icons/burger.svg");
        counter = 0;
       
      }
      if(window.innerWidth <= 768 ) {
        setHeight("0px");
        // setDisplay("none");
        setSrc("/assets/icons/burger.svg");
        counter = 0;
      }
  } 
      // Listen to window resize to call our function
      window.addEventListener('resize', widowResize )
    })
    

  const openMenu = (e) => { 
    // If counter is 0 or undefined then open the dropdown menu 
    // by setting the height state to 300px - also changing the burger
    // img and height to display a close cross for the menu 
    if(counter === undefined ||counter === 0) {
      setHeight("300px");
      setDisplay("flex");
      setSrc("/assets/icons/cross.svg");
      setWidth("80%")
      counter = 1;
    } else if(counter === 1){
      // When the menu is open and cross has been clicked, meaning counter is 
      // set to 1, set the height state back to 0px to close menu - also 
      // changig the bruger img src and width
      setHeight("0px");
      setSrc("/assets/icons/burger.svg");
      setWidth("100%")
      counter = 0;
    }
  }

  return (
   <header>
     <span className="logo">
       <Link to="/">
       <h2>Jay Lewis</h2>
       </Link>
     </span>
     <span className="burger-con">
     <img src={burgerSrc} alt="Burger Menu - Open Navigation"    className="burger-menu"
     onClick={openMenu}
    style={{width: burgerWidth}}
    />
          </span>
     <nav style={{height : height, display : display } }>
       <ul>
       <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
         <li><NavLink exact to="/services" activeClassName="active-link">Services</NavLink></li>
         <li><NavLink exact to="/portfolio" activeClassName="active-link">Portfolio</NavLink></li>
         <li><NavLink exact to="/about" activeClassName="active-link">About</NavLink></li>
         <li><NavLink exact to="/contact" id="contact-button">Contact</NavLink></li>
       </ul>
     </nav>
   </header>
  )
}


export default Header;