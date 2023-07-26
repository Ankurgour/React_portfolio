import React from 'react';
import Droncall from '../../assets/Droncall.png';
import Foodyy from '../../assets/Fooody.png';
import HelpingHands from '../../assets/Helpinghands.png';
import Portfolio from '../../assets/Portfolio.png'

export default function Projectpage() {
  return (
    <div id='project' className='projects'>
        <div className='project-header'>
            <div className="project-heading">
                <h2>PROJECTS</h2>
            </div>

        </div>
        <div className='project-content'>
            <div className="project-desc">
                <div className='dr-heading'><div className="dr-head"><h2>Dr.onCall</h2></div></div>
                <img className='project-img' src={Droncall} alt="" />
                <p className='description'>
                Dr. OnCall sounds like an interesting web application that leverages a machine learning model to assist in providing medical reports to doctors based on patient symptoms. By registering patients and storing their information, the application aims to maintain a record of their medical history.
                </p>
                
            </div>
            <div className="project-desc"><div className='dr-heading'><div className="dr-head"><h2>Foodyy</h2></div></div>
                <img className='project-img' src={Foodyy} alt="" />
                <p className='description'>
                

The frontend of the Foodyy website has been meticulously designed to provide a seamless and engaging user experience. It offers an intuitive interface that allows customers to browse through the restaurant's menu, explore various food options, and make their selections effortlessly.              
  </p>
                </div>
            <div className='project-desc'><div className='dr-heading'><div className="dr-head"><h2>Helping-Hands</h2></div></div>
                <img className='project-img' src={HelpingHands} alt="" />
                <p className='description'>
                HelpingHands is a thoughtfully designed frontend for a donation webpage that aims to facilitate donations from people across the country. This user-friendly website provides a platform for individuals to contribute towards various causes and ensure that their donations reach NGOs and those in need.

{/* The HalpingHands frontend interface has been crafted to provide a seamless and engaging experience for users who want to make a difference through their donations. The design emphasizes simplicity, making it easy for visitors to navigate the website and understand how they can contribute */}
                </p></div>
            <div className="project-desc"><div className='dr-heading'><div className="dr-head"><h2>Portfolio</h2></div></div>
                <img className='project-img' src={Portfolio} alt="" />
                <p className='description'>
                This website  aims to provide visitors with a comprehensive understanding of who I am and what I have to offer. Through a thoughtfully designed interface, the website highlights my projects, achievements, and areas of expertise. It allows visitors to explore my work, learn about my skills and qualifications, and get a sense of my professional style and approach                </p></div>
        </div>
    </div>
  );
}