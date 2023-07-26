import React from "react";
import '../homepage/homepage.css';
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa';

function Footer(){
    return(
        <div className='footer'>
        <div> <h3>It is made with love by Ankur!</h3></div>
         <div className='social-work'><ul className="social-mediadesktop">
       <li><a href="www.youtube.com"><FaFacebookSquare className="facebook"/></a></li>
       <li><a href="www.youtube.com"><FaInstagramSquare className="instagram"/></a></li>
       <li><a href="https://www.youtube.com/watch?v=RRVYpIET_RU&ab_channel=takeUforward"><FaYoutubeSquare className="youtube"/></a></li>

     </ul></div>
     </div>
    )
}

export default Footer;