import React, {useEffect, useRef} from "react";
import {TweenMax, Power3} from 'gsap';


export default function Contact({ title,id }) {

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

    <div style={
      {
        // backgroundImage: `url(${require("./bacground2.png")})`      
      }}  className={"section"}>
        
      <div className="section-content" id={id}>
        <h1 id="about"
        ref={element => {aboutMe = element;}}>
          About Me</h1>
      </div>
    </div>
  );
} 