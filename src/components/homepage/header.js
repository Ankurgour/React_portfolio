import React from "react";
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare,FaLinkedin } from 'react-icons/fa';
import "./header.css";
// import Ankurlogo from '../'
import Ankurlogo from '../../assets/Ankurlogo.jpg';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from "react";
import Homee from "../../pages/home";





function Header(){
  const [showMediaIcons,setShowMediaIcons]=useState(false);
  



  return (
    <>
    <div className="Header" id="Header">
       <nav className="main-nav">   
           {/*1st part  */}
       {/* <div className="logo"><h2><img className="logoimg" src={Ankurlogo} alt="img" /></h2></div> */}
       <div className="logo"><h2><span>Portfolio</span></h2></div>

       {/* //2nd list part */}
       <div className={showMediaIcons?"menu-link mobile-menu-link":"menu-link"}>
        <ul>
        <li ><a href="#homee">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#Contacts">Contact</a></li>

        </ul>
       </div>
       {/* ?3rd social media part */}
       <div className="social-media">
        <ul className="social-mediadesktop">
          <li><a href="https://www.instagram.com/__ankur_07/"><FaFacebookSquare className="facebook"/></a></li>
          <li><a href="https://www.instagram.com/__ankur_07/"><FaInstagramSquare className="instagram"/></a></li>
          <li><a href="https://www.linkedin.com/in/ankurgour07/"><FaLinkedin  className="youtube"/></a></li>

        </ul>
        {/* hamburger menu start */}
        <div className="hamburger-menu">
          <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu/>
           
          </a>
        </div>

       </div>


       </nav>

       </div>
      {/* //  hero section */}
     
     </>
  )
}
export default Header;