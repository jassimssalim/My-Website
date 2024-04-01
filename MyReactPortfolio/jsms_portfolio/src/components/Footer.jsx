import React from 'react';
import "./Footer_style.css";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub,  FaBitcoin,  FaReact, FaDiscord, FaInstagram } from "react-icons/fa";






const Footer = () => {
  return (
    <div className='footer'>
     <div className='footer-container'>
    <div className='left'>
          <div className='location'>
                <FaHome size={17} style={{color: "#fff", marginRight: "2rem"}} />
           
                <h4> Hagonoy Bulacan,  Philippines
                </h4>
              
            </div>
          <div className='phone'>
            <h4> 
                <FaPhone size={17} style={{color: "#fff", marginRight: "2rem"}}/>
                +639-9055-242-652
            </h4>

          </div>
        <div className='email'>
            <h4> 
                <FaMailBulk size={17} style={{color: "#fff", marginRight: "2rem"}}/>
            jsmohammedsalim@gmail.com
            </h4>
         </div>

       
                
            

      </div>
        <div className='right'>
            <h4> 
                About Portfolio
            </h4>
            <p>
            Developing a portfolio website for professional use is a critical undertaking to establish a 
            strong online presence and effectively showcase one's expertise, accomplishments, and professional capabilities. In today's competitive landscape, a well-crafted portfolio website serves as a testament 
            to an individual's commitment to professionalism and excellence in their field.
            </p>
            <div className='social'>
                
                <a href="https://www.linkedin.com/in/jassimssalim" target="_blank" rel="noopener noreferrer" >
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} className="socMed" />
                    
                 </a>
                 <a href="https://github.com/jassimssalim" target="_blank" rel="noopener noreferrer" >
                     <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} className="socMed"/>
                 </a>
                 
                 <a href="https://www.instagram.com/http.med__/" target="_blank" rel="noopener noreferrer" >
                     <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} className="socMed"/>
                 </a>
                
           

            </div>
            
         </div>


    </div>



    </div>


  )
}

export default Footer