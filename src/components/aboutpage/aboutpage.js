import React from 'react'
// import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Ankurimg from '../../assets/Ankurimg.jpg';
import './aboutpage.css';


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <div className='about-content'>
            <div><h2 className='about-head' >ABOUT</h2></div>
            <div className="myimage">
                <img className='myimagee' src={Ankurimg} alt="" />
            </div>
            <div className='about-desc'>
                <h3>About Me</h3>
                <h6>


"Hello, everyone! I'm Ankur Gour, a self-taught front-end developer passionate about creating engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I've honed my skills through self-guided learning and hands-on projects. I thrive on bringing designs to life, meticulously crafting responsive layouts and implementing intuitive interactions. As a self-starter, I constantly explore new technologies and stay up-to-date with the latest trends in front-end development. With my dedication, attention to detail, and a commitment to delivering high-quality work, I strive to make a positive impact in the digital realm. Let's build captivating websites together!"




</h6>
            </div>
            </div>
        </div>
    )
}

export default Aboutpage;