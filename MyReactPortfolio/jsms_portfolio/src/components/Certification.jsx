
import './Certification_style.css';
import React from 'react';
import { Link } from "react-router-dom";
import Cert from '../assets/Certification.png';




const Certification = () => {
  return (
    <div className='cert'>
       
      <h1 className='cert-heading'>CERTIFICATION</h1>
      <div className='card-container'>
        <div className='card'>
          <h3>Associate Traditional Web Developer</h3>
          <img className='btc' src={Cert} /> 
          <h1><span  style={{color:"red"}}>O</span>utSystems</h1>
          <p>Successfully completed the certification process to be
            officially recognized as ATWD.
          </p>
         
         <Link to = "https://www.outsystems.com" target='_blank' className='btn-card'>VISIT OUTSYSTEMS</Link>
        </div>


        <div className='card'>
          <h3>Associate Traditional Web Developer</h3>
          <img className='btc' src={Cert} /> 
          <h1><span  style={{color:"red"}}>O</span>utSystems</h1>
          <p>Successfully completed the certification process to be
            officially recognized as ATWD.
          </p>
         
         <Link to = "https://www.outsystems.com" target='_blank' className='btn-card'>VISIT OUTSYSTEMS</Link>
        </div>


        <div className='card'>
          <h3>Associate Traditional Web Developer</h3>
          <img className='btc' src={Cert} /> 
          <h1><span  style={{color:"red"}}>O</span>utSystems</h1>
          <p>Successfully completed the certification process to be
            officially recognized as ATWD.
          </p>
         
         <Link to = "https://www.outsystems.com" target='_blank' className='btn-card'>VISIT OUTSYSTEMS</Link>
        </div>
      </div>


      
 
    </div>
  )
}

export default Certification