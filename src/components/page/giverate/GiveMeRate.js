import React, {useEffect, useState} from "react";
import './GiveMeRate.css';


export default function YourOpinion({ title,id }) {

  const [visible, setvisible] = useState(false);


  useEffect(() => {

    const onHashChanged = () => {

      console.log(visible)
      if(window.location.hash === '#yourOpinion')
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

    <div className={visible? "activeOpinion" : "hiddenOpinion"}>
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h1 >
          {title}</h1>
          
      </div>
    </div>
    </div>
  );
} 