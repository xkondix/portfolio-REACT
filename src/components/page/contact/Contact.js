import React, {useEffect, useState} from "react";
import './Contact.css';


export default function Conteact({ title,id }) {

  const [visible, setvisible] = useState(false);


  useEffect(() => {

    const onHashChanged = () => {

      if(window.location.hash === '#contact')
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

    <div className={visible? "activeContact" : "hiddenContact"}>
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h1 >
          {title}</h1>
          
      </div>
    </div>
    </div>
  );
} 