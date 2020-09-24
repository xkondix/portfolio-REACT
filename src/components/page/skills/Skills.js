import React, {useEffect, useState} from "react";
import './Skills.css';
import java from './java.png'
import android from './android.png'
import git from './git.png'
import hibernate from './hibernate.png'
import linux from './linux.png'
import mongoDB from './mongoDB.png'
import mySQL from './mySQL.png'
import python from './python.png'
import spring from './spring.png'
import sqlLite from './sqlLITE.png'
import firebase from './firebase.png'



export default function Skills({ title,id }) {

  const [visible, setvisible] = useState(false);


  useEffect(() => {

    const onHashChanged = () => {

      if(window.location.hash === '#skills')
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

    <div className={visible? "activeSkills" : "hiddenSkills"}>
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h1 >
          {title}</h1>
          <div className="wrapper">
            <figure className = 'gallery1'>
               <img src = {java} className='gallery__img' alt="error"></img>
            </figure>
            <figure className = 'gallery2'>
               <img src = {spring} className='gallery__img' alt="error"></img>
            </figure>
            <figure className = 'gallery3'>
               <img src = {android} className='gallery__img' alt="error"></img>
            </figure>
            <figure className = 'gallery4'>
               <img src = {hibernate}  className='gallery__img' alt="error"></img>
            </figure>
            <figure className = 'gallery5'>
               <img src = {sqlLite} className='gallery__img' alt="error" ></img>
            </figure>
            <figure className = 'gallery6'>
               <img src = {mySQL}  className='gallery__img' alt="error"></img>
            </figure>
            <figure className = 'gallery7'>
               <img src = {firebase}  className='gallery__img' alt="error"></img>
            </figure>
            <figure className = 'gallery8'>
              <img src = {mongoDB} className='gallery__img' alt="error"></img>
            </figure>
            <figure className = 'gallery9'>
              <img src = {git} className='gallery__img' alt="error"></img>
            </figure>
            <figure className = 'gallery10'>
              <img src = {linux} className='gallery__img' alt="error"></img>
            </figure>
            <figure className = 'gallery11'>
              <img src = {python} className='gallery__img' alt="error"></img>
            </figure>

          </div>
          
      </div>
    </div>
    </div>
  );
} 