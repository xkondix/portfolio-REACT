import React from "react";
import photo from './ja.jpg'; 
import './HomePage.css';


export default function HomePage({ title,id }) {
  return (
    <div style={
      {
         backgroundImage: `url(${require("./bacground1.jpg")})`      
      }}  className={"section"}>
        
      <div className="section-content" id={id}>
        <h1>Hi, I am Konrad</h1>
        <img img src={photo} alt="Logo"/>
      </div>
    </div>
  );
} 