import React, {useEffect, useState} from "react";
import photo from './ja.jpg'; 
import java from './java.png'; 
import './HomePage.css';


export default function HomePage({ title,id}) {

 
  const [visible, setvisible] = useState(false);
  const [number, setnumber] = useState(0);
  
  
  useEffect(() => {


    if(number === 0)
    {
      setnumber(1);
      setvisible(true);
    }

    const onHashChanged = () => {

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

    <div className = "container">
    <div  className={"section"}>
      <div className="section-content" id={id}>
      <div className="wrapperHome">
            <figure className = 'galleryHome1'>
                <img img src={photo} alt="me" id="me"/>
            </figure>

              <figure className = 'galleryHome2'>
                <h1 id="name"> Konrad Kowalczyk</h1>            
              </figure>

            <figure className = 'galleryHome3'>
                <img img src={java} alt="java" id="java"/>
            </figure>
                     
          </div>
      </div>
    </div>
    </div>
   </div>
  );
} 