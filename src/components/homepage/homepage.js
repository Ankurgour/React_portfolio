import React from "react";
import './homepage.css'
import Ankurlog from '../../assets/ANkurlogo1.jpg';

import Typewriter from "typewriter-effect";



function Homepage(){
   
    return(
        <>
        {/* <div className="main-home" id="main-home">
        
            
            <div className="hero-section">
<h1 className="typewriterheading">
<Typewriter
 
 onInit={(typewriter) => {
     typewriter
         .typeString("Hi,I am Ankur Gour ")
         .pauseFor(2000)
         .deleteAll()
         .typeString("I am a web developer")
         .deleteAll()
         
         

         .start();
 }}
 
/>
<Typewriter
      options={{
        strings: [
          "I Am Ankur Gour",
          "Front End Developer(REACT JS)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
</h1> 
</div>


      
      
      
      </div> */}
      <Typewriter
      options={{
        strings: [
          "I Am Ankur Gour",
          "Front End Developer(REACT JS)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
        </>
    )
}
export default Homepage;
