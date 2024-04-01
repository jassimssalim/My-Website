import './AboutContent_Style.css';

import reactBG from '../assets/react-bg.png';
import osBG from '../assets/OS-BG.jpg';
import React from 'react';
import { Link } from "react-router-dom";






const AboutContent = () => {


  return (
  
    
   
  <div className='about'>
  
      <div className='left'>
    
        <h1>Who am I?</h1>
        <p>
          Hi, I'm Jassim S. Salim, a Computer Engineering graduate from Bulacan State University in 2020. My passion lies in creating websites and applications that cater to user needs and satisfaction. I have extensive knowledge of HTML/HTML5, CSS, JavaScript, and various libraries like ReactJS, Tailwind, and Bootstrap. Additionally, I am proficient in handling APIs through 3rd-party tools like Postman, and I have experience in backend development using Node.js and MySQL.
        </p>
        <br />
        <p>
          Currently, I am working as an application developer in a bank, where OutSystems is the main platform for software development. Focusing on creating fast, reliable, and secure applications using Agile Methodology as the core approach.
        </p>
        <br />
        <p>
          Furthermore, I have a keen interest in blockchain and web 3 technologies, which I am actively learning to broaden my skill set and explore new possibilities in the world of web development.
        </p>
        <Link to="/contact">
          <button className='btn-about'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={osBG} alt="bg" className='img' />
          </div>
          <div className='img-stack bottom'>
            <img src={reactBG} alt="bg" className='img' />
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default AboutContent;