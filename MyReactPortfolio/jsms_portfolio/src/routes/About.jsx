import React from 'react';

import NavBar from '../components/NavBar';

import Footer from '../components/Footer';
import Common from '../components/Common';
import AboutContent from '../components/AboutContent';



const About = () => {
  return (
    <div>

    <NavBar/> 
    <Common heading = "ABOUT ME" text = "Your Friendly Low and Pro Code Developer "/>
   
    <AboutContent/>
    <Footer/>


    </div>
  )
}

export default About