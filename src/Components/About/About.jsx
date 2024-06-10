import React from 'react'
import video from "../../assets/video.mp4"
import './About.css'; 
const About = () => {
  return (
    <div className='About'>
        <video className='video'  src={video} autoPlay loop muted/>
       
       <div className="content">
        
       </div>
    </div>
  )
}

export default About
