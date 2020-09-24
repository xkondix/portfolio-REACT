import React, {useEffect, useState} from "react";
import './AboutMePage.css';
import ChangeImage from './ChangeImage';


export default function AboutMe({ title,id }) {

  const [visible, setvisible] = useState(false);


  useEffect(() => {

    const onHashChanged = () => {

      if(window.location.hash === '#aboutMe')
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
        {title}</h1>
          <div id='describe'>
            <p>text</p>
        <div className="images">
          <ChangeImage/>

          </div>
          </div>
      </div>
    </div>
    </div>
  );
} 