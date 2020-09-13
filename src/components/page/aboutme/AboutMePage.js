import React from "react";
import './AboutMePage.css';


export default function AboutMe({ title,id }) {
  return (
    <div style={
      {
         backgroundImage: `url(${require("./bacground2.png")})`      
      }}  className={"section"}>
        
      <div className="section-content" id={id}>
        <h1>hellow</h1>
      </div>
    </div>
  );
} 