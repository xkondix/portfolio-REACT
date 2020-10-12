import React, {useEffect, useState} from "react";
import ReactPlayer from 'react-player'
import './Content.css'
import ResponsiveDialog from './DialogMaterial'
import git from './git2.png'



export default function Content({ title,content,link,src })
{

    
  
    return (
  
        <div className="video" align="center" valign="center"
        >
        <h2 className = "h2Class">{title}</h2>

        <div className='player-wrapper'>
        <ReactPlayer
         playsinline = {true}
         controls = {true}
         style={{ border: '4px solid black' }}
         url={src}
         width='90%'
         height='90%'
         className = 'react-player' 
      />
      </div>
      <div className='describe'>
      <a href={link}>
        <img src={git} alt = 'error' />
        </a>
        <ResponsiveDialog
        title = {title}
        content ={content}/>
      </div>
      </div>
    )

}