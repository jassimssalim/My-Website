import React from "react";
import { Route, Routes } from "react-router-dom";
  
/*Routes from routes component */
import Home from"./routes/Home";
import About from"./routes/About";
import Contact from "./routes/Contact";
import Project from"./routes/Project";


function App() {
  

  return (
    <>
    <Routes> 
      <Route path = "/" element={<Home/>}/>
      <Route path = "/skills" element={<Project/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/contact" element={<Contact/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
