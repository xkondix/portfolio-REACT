import React, {useEffect, useRef} from "react";
import {TweenMax, Power3} from 'gsap';
import './AboutMePage.css';
import { _colorStringFilter } from "gsap/gsap-core";


export default function AboutMe({ title,id }) {

  let aboutMe = useRef(null);

  useEffect(() => {
    
    TweenMax.to(aboutMe, 10,
      {
        opacity : 1,
        y : -30,
        ease : Power3.easeInOut
      })

   
  },[])



  return (

    <div className={"section"}>
        
      <div className="section-content" id={id}>
        <h1 id="about"
        ref={element => {aboutMe = element;}}>
          About Me</h1>
      </div>
    </div>
  );
} 