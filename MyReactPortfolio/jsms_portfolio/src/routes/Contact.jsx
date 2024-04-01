import React from 'react';


import NavBar from '../components/NavBar';

import Footer from '../components/Footer';

import Common from '../components/Common';


import Form from '../components/Form';

const Contact = () => {
  return (
    <div> 
      <NavBar/> 
    
    
     <Common heading = "CONTACT" text = "Let's have a chat" />
     <Form/>
    <Footer/>
 </div>
  )
}

export default Contact