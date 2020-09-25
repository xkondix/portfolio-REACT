import React, {useEffect, useState} from "react";
import './Contact.css';
import linkedlin from './linkedlin.png'
import github from './github.png'
import email from './email.png'
import cv from './cv.png'
import myPDF from './Konrad_Kowalczyk_CV.pdf';


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

          <div className="wrapper">
            <figure className = 'gallery1'>

            </figure>
            <figure className = 'gallery2'>
                <a href="konrad.kowalczyk.98@gmail.com">
                    <img src = {email} className='gallery__img' alt="error"></img>
                </a>
            </figure>
            <figure className = 'gallery3'>
              <a href="https://www.linkedin.com/in/konrad-kowalczyk-3a621218b/">
                  <img src = {linkedlin} className='gallery__img' alt="error"></img>
              </a>
            </figure>
            <figure className = 'gallery4'>
              <a href="https://www.github.com/xkondix">
                  <img src = {github}  className='gallery__img' alt="error"></img>
              </a>
            </figure>
            <figure className = 'gallery5'>
              <a href={myPDF} download="Konrad_Kowalczyk_CV.pdf">
                 <img src = {cv} className='gallery__img' alt="error" ></img>
              </a>
            </figure>

            </div>
          
      </div>
    </div>
    </div>
  );
} 