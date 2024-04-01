import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Common from '../components/Common';
import Certification from '../components/Certification';
import Skills from '../components/Skills';





const Project = () => {
  return (
    <div>
        <NavBar/> 
        <Common heading = "PROJECTS" text = "All of the projects I made are owned by a private company and cannot be put in my portfolio."/> 
     
        <Skills/>
        <Certification/>
        <Footer/>



    </div>
  )
}

export default Project