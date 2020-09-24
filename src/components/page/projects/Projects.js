import React, {useEffect, useState} from "react";
import './Projects.css';
import PagerComponent from './Pager.js'


export default function Projects({ title,id }) {

  const [visible, setvisible] = useState(false);


  useEffect(() => {

    const onHashChanged = () => {

      if(window.location.hash === '#projects')
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

    <div className={visible? "activeProjects" : "hiddenProjects"}>
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h1 >
          {title}
        </h1>
          <PagerComponent />
  
      </div>
    </div>
    </div>
  );
} 