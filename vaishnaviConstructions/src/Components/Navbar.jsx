// import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import  Logo  from '../assets/vaishnaviLogo.png'
const Navbar = () => {

    function activeNav(){
        let navItems = document.getElementsByClassName('navItem');
        console.log('navClicked',navItems);
    }

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
            <img src={Logo} alt="" width={250} height={90}/>
        </div>
        <div className="navbar-right">
            <Link to='/'><span  className="active-nav navItem" onClick={activeNav}>Home</span></Link>
          <Link to="/aboutus"><span  className="navItem" onClick={activeNav}>About Us</span></Link>
          <Link to="/services"><span  className="navItem" onClick={activeNav}>Services</span></Link>

          <Link to="/media"><span  className="navItem" onClick={activeNav}>Media</span></Link>

          <Link to="/contactus"><span  className="navItem" onClick={activeNav}>Contact Us</span></Link>

          <Link to="/brochure"><button>Download Brochure</button></Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
