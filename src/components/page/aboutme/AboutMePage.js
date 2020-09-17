import React, {useEffect, useState} from "react";
import './AboutMePage.css';


export default function AboutMe({ title,id }) {

  const [visible, setvisible] = useState(false);


  useEffect(() => {

    const onHashChanged = () => {

      console.log(visible)
      if(window.location.hash === '#aboutme')
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

    <div className={visible? "activeAbout" : "hiddenAbout"}>
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h1 id="about">
          About Me</h1>
      </div>
    </div>
    </div>
  );
} 