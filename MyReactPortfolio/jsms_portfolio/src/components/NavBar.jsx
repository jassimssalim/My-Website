import "./NavBar_Style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";


const NavBar = () => {
/* handles hamburger*/
const[click, setClick] = useState(false);
const handleCLick = () => setClick(!click);

/*handles color*/
const[color, setColor] = useState(false);


const changeColor = () => {
 if(window.scrollY >= 100){
    setColor(true);
 
 }else {
    setColor(false);
 }
}

window.addEventListener("scroll", changeColor);


  return (
    <div className = {color ? "header header-bg": "header"}>

        <Link to= "/">
            <h1 > <span >JS</span>
          
            <span style={{color:"#cdafee"}}>MS</span>
            .
           </h1>
        </Link>
        <ul className= {click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to = "/">Home</Link>
            
            </li>  
            <li>   
                <Link to = "/about">About</Link>
            </li>   
            <li>  
                <Link to = "/skills">MyCareer</Link>
            </li> 
            <li>    
                <Link to = "/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleCLick}>

        {click ? (
            <FaTimes size={20}
            style={{color:"#fff"}}/>) : (
            
            <FaBars size={20}
            style={{color:"#fff"}}/>)
}


         


        </div>


    </div>
  )
}

export default NavBar