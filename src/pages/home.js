import React from 'react';
// import Header from '../components/header';
import Header from '../components/homepage/header';
import Home from '../components/homepage/homepage';
import { ReactElement } from 'react-dom/client';
import Homepage from '../components/homepage/homepage';
import Ankurlog from '../../src/assets/ANkurlogo1.jpg'
import '../components/homepage/homepage.css'
import codee from '../assets/coding.jpg';
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa';
import About from './about';
import Project from './project'
import Contact from './contact'

function Homee(){
    
    return(
        <>
        <div className='homee'id='homee'>
        <Header/>
        <div >
        <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            {/* <h2 className='nametext'>I'm Ankur Gour</h2> */}
            <span ></span>
            <Homepage/>
            
            <div>
                <img className='imageofcodee' src={codee} alt="" />
            </div>
           
        </div>
        
        <div className="timeps">
        
       <div className='skill-box'>
       <div className='skill-head'>
       <h1>SKills</h1>
       </div>
      <div className='home-box'>
      <p className = "paragraph"><div className='div1'>
        <div className='div11'>
            <h1>HTML</h1>
        </div>
      </div>
      {/* <div className='div2'>
        <p className = "paragraph"><span className='percentage'>90</span>%</p> */}
      {/* </div> */}
      </p>


      <p className = "paragraph"><div className='div1'>
        <div className='div11'>
            <h1>CSS</h1>
        </div>
      </div>
       
      </p>

      <p className = "paragraph"><div className='div1'>
        <div className='div11'>
            <h1>JAVASCRIPT</h1>
        </div>
      </div>
      {/* <div className='div2'>
        <p className = "paragraph"><span className='percentage'>90</span>%</p> */}
      {/* </div> */}
      </p>

      <p className = "paragraph"><div className='div1'>
        <div className='div11'>
            <h1>REACT(JS)</h1>
        </div>
      </div>
      {/* <div className='div2'>
        <p className = "paragraph"><span className='percentage'>90</span>%</p> */}
      {/* </div> */}
      </p>

      <p className = "paragraph"><div className='div1'>
        <div className='div11'>
            <h1>MONGOOSE</h1>
        </div>
      </div>
      {/* <div className='div2'>
        <p className = "paragraph"><span className='percentage'>90</span>%</p> */}
      {/* </div> */}
      </p>

      <p className = "paragraph"><div className='div1'>
        <div className='div11'>
            <h1>GIT/GITHUB</h1>
        </div>
      </div>
      {/* <div className='div2'>
        <p className = "paragraph"><span className='percentage'>90</span>%</p> */}
      {/* </div> */}
      </p>

      <p className = "paragraph"><div className='div1'>
        <div className='div11'>
            <h1>C</h1>
        </div>
      </div>
      {/* <div className='div2'>
        <p className = "paragraph"><span className='percentage'>90</span>%</p> */}
      {/* </div> */}
      </p>
  
      <p className = "paragraph"><div className='div1'>
        <div className='div11'>
            <h1>C++</h1>
        </div>
      </div>
      {/* <div className='div2'>
        <p className = "paragraph"><span className='percentage'>90</span>%</p> */}
      {/* </div> */}
      </p>




       
      </div>
       </div>
      </div>
        
        
       <hr />
        <About/>
        <hr />
        <Project/>
        
        <Contact/>

        </div>
        
        
            




        </>
    )
}

export default Homee;