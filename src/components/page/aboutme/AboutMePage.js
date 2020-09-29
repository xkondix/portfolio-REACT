import React, {useEffect, useState} from "react";
import './AboutMePage.css';
import ChangeImage from './ChangeImage';
import Text from "./Text";

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
        <div className="wrapperAboutMe">
            <figure className = 'galleryAboutMe1'>
                <Text/>
            </figure>

            <figure className = 'galleryAboutMe2'>
                <ChangeImage/>
            </figure>

          </div>
          
      </div>
    </div>
    </div>
  );
} 