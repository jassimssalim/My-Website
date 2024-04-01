import React from 'react';
import './Skills_Style.css';
import HTML_img from '../assets/skills/html.png';
import CSS_img from '../assets/skills/CSS.png';
import JavaScript_img from '../assets/skills/JS.png';
import Outsystems_img from '../assets/skills/Outsystems.png';
import ReactJS_img from '../assets/skills/Reactjs.png';

import Git_img from '../assets/skills/git.png';
import GitHub_img from '../assets/skills/github.png';
import NodeJS_img from '../assets/skills/nodejs.png';
import MYSQL_img from '../assets/skills/mysql.png';
import PostMan_img from '../assets/skills/postman.png';

import Figma_img  from '../assets/skills/figma.png';
import NPM_img  from '../assets/skills/npm.png';
import BlockChain_img  from '../assets/skills/blockchain.png';





const Skills = () => {
  return (
    <div className='main-container'>
      <h1 className='skills-heading'>MY EXPERTISE</h1>
      <div className='skills-container'>
          <div className='skills-card'>
              <img src={HTML_img} alt='image'/>
              <h2 className='skills-title'>HTML 5</h2>
             
          </div>
          <div className='skills-card'>
              <img src={CSS_img} alt='image'/>
              <h2 className='skills-title'>CSS</h2>
             
          </div>
          <div className='skills-card'>
              <img src={JavaScript_img} alt='image'/>
              <h2 className='skills-title'>JavaScript</h2>
             
          </div>
          <div className='skills-card'>
              <img src={Outsystems_img} alt='image'/>
              <h2 className='skills-title'>OutSystems</h2>
             
          </div>
          <div className='skills-card'>
              <img src={ReactJS_img} alt='image'/>
              <h2 className='skills-title'>ReactJS</h2>
             
          </div>


          <div className='skills-card'>
              <img src={Git_img} alt='image'/>
              <h2 className='skills-title'>GIT</h2>
             
          </div>

          <div className='skills-card'>
              <img src={GitHub_img} alt='image'/>
              <h2 className='skills-title'>GitHub</h2>
             
          </div>

          <div className='skills-card'>
              <img src={NodeJS_img} alt='image'/>
              <h2 className='skills-title'>NodeJS</h2>
             
          </div>


          <div className='skills-card'>
              <img src={MYSQL_img} alt='image'/>
              <h2 className='skills-title'>MySQL</h2>
             
          </div>


          <div className='skills-card'>
              <img src={PostMan_img} alt='image'/>
              <h2 className='skills-title'>PostMan</h2>
             
          </div>

          <div className='skills-card'>
              <img src={Figma_img} alt='image'/>
              <h2 className='skills-title'>Figma</h2>
             
          </div>

          <div className='skills-card'>
              <img src={NPM_img} alt='image'/>
              <h2 className='skills-title'>NPM</h2>
             
          </div>

          <div className='skills-card'>
              <img src={BlockChain_img} alt='image'/>
              <h2 className='skills-title'>Blockchain</h2>
             
          </div>


        

          


         

      </div>
      


    </div>
  )
}

export default Skills