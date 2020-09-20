import React, {useEffect, useState} from "react";
import { Player } from 'video-react';
import './Content.css'
import ResponsiveDialog from './DialogMaterial'
import git from './git2.png'



export default function Content({ title,content,link,src })
{

    
  
    return (
  
        <div className="con">
        <div className="video" align="center" valign="center"
        >
        <h2>{title}</h2>
        <Player
         playsInline
         poster="/assets/poster.png"
         src={src}
         fluid={false}
         width={380}
         height={210}
         className = 'player'
      />
      <div className='describe'>
      <a href={link}>
        <img src={git} alt = 'error' />
        </a>
        <ResponsiveDialog
        title = {title}
        content ={content}/>
      </div>
      </div>
      </div>
    )

}