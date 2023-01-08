import React from 'react'

import {Link} from "react-router-dom"

const Navbar = () => {
 
    
function toggleMenu(){
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    navbarLinks.classList.toggle('active')
}
   
  return (
    <div>
      <nav className="navbar">
        <div className="brand-title">Brand Name</div>
        <a href="#" className="toggle-button" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <div><li><button className='btn-register'><Link to="/form">REGISTER</Link></button></li></div>
            <div><li><button className='btn-login'><a href="#">LOGIN</a></button></li></div>
            </ul>
            </div>
          </nav>
  
        </div>
  )
}

export default Navbar;