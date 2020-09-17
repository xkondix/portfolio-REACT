import React, {useEffect, useState} from "react";
import photo from './ja.jpg'; 
import java from './java.png'; 
import './HomePage.css';


export default function HomePage({ title,id}) {

 
  const [visible, setvisible] = useState(true);
  
  
  useEffect(() => {

    const onHashChanged = () => {

      console.log(visible)
      if(window.location.hash === '#home')
      {
        setvisible(true)
      }
      else
      {
        setvisible(false)
      }
     
    }

    window.addEventListener('hashchange', onHashChanged)
    return () => window.removeEventListener('hashchange', onHashChanged)
},[visible])





  return (
    <div className={visible? "activeHome" : "hiddenHome"}>

    <div  className={"section"}>
      <div className="section-content" id={id}>
          <div id="text-photo">
            <img img src={photo} alt="me" id="me"/>
              <div id="java">
                <h1
                id="name">
                    Konrad Kowalczyk</h1>
                <img img src={java} alt="java" id="java"/>
              </div>
          </div>
      </div>
    </div>
   </div>
  );
} 