import "./HeroImg_Style.css";
import React, { useEffect, useState } from 'react';
import IntroImg from '../assets/intro-bg.jpg'; 
import MyResumePdf from '../assets/Mohammed Salim, Jassim S. - Resume.pdf'; 
import { Link } from "react-router-dom";

const HeroImg = () => {
  /* Array text */

  const [typedText, setTypedText] = useState("");
  const textArray = ["Hello there!", "Nice to meet you!", "I'm Jassim S. Salim", "You can check my portfolio", "My Discord username is http.med","Have a nice day ahead!"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const speed = 200; // Set the typing speed (in milliseconds)
  const loopDelay = 1000; // Set the delay between loops (in milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText((prevText) => {
        const currentWord = textArray[currentIndex];
        const nextText = currentWord.substring(0, prevText.length + 1);
        if (nextText === currentWord) {
          setTimeout(() => {
            setTypedText("");
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          }, loopDelay);
          clearInterval(interval);
        }
        return nextText;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex]);

  /* download cv */ 

  const handleDownload = () => { 
    const link = document.createElement('a');
    link.href = MyResumePdf;
    link.setAttribute('download', 'Mohammed Salim, Jassim S. - Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  }

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="content">
        <p>{typedText}</p>
        <h1>Software Engr/Developer</h1>
        <div>
          <button className="btn" onClick={handleDownload}>My RESUME</button>
          <Link to="/about" className="btn btn-light">ABOUT</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
