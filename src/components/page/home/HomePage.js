import React, {useEffect, useRef} from "react";
import {TweenMax, Power3} from 'gsap';
import photo from './ja.jpg'; 
import java from './java.png'; 
import './HomePage.css';


export default function HomePage({ title,id}) {

  let imageMe = useRef(null);
  let imageJava = useRef(null);
  let text = useRef(null);
  

  useEffect(() => {
    
 // if(window.location === 'http://localhost:3000/#home'){
   console.log(window.location)
    TweenMax.to(imageMe, 2,
      {
        opacity : 1,
        y : -30,
        ease : Power3.easeInOut
      })

     TweenMax.to(imageJava, 4,
      {
        opacity : 1,
         y : -30,
         ease : Power3.easeInOut
       })

     TweenMax.to(text, 3,
        {
          opacity : 1,
          y : -30,
          ease : Power3.easeInOut
        })
      }
    
  //  else
    // {
    //   TweenMax.to(imageMe, 2,
    //     {
    //       opacity : 0,
    //       y : -30,
    //       ease : Power3.easeInOut
    //     })
  
    //    TweenMax.to(imageJava, 4,
    //     {
    //       opacity : 0,
    //        y : -30,
    //        ease : Power3.easeInOut
    //      })
  
    //    TweenMax.to(text, 3,
    //       {
    //         opacity : 0,
    //         y : -30,
    //         ease : Power3.easeInOut
    //       })
    //     }
    //   }
    
   
  ,[])



  return (

    <div  className={"section"}>
      <div className="section-content" id={id}>
          <div id="text-photo">
            <img img src={photo} alt="me" id="me"
            ref={element => {imageMe = element;}}/>
              <div id="java">
                <h1
                id="name"
                ref={element => {text = element;}}
                >Konrad Kowalczyk</h1>
                <img img src={java} alt="java" id="java"
                ref={element => {imageJava = element;}}/>
              </div>
          </div>
      </div>
    </div>
  );
} 