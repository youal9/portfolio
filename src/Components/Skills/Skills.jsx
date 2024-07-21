import React from 'react';
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import Bootstrap from "../../assets/Bootstrap.png";
import github from "../../assets/github.png";
import video from "../../assets/video.mp4"; // Importera videofilen
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills'>
            <video className='video-background' src={video} autoPlay loop muted />
            <h1>Skills</h1>
            <div className='skill-list'>
                <div className='skill-item html'>
                    <img src={html} alt="HTML logo" className='icon-react' />
                    <p>HTML</p>
                </div>
                <div className='skill-item css'>
                    <img src={css} alt="CSS logo" className='icon-react' />
                    <p>CSS</p>
                </div>
                <div className='skill-item javascript'>
                    <img src={javascript} alt="JavaScript logo" className='icon-react' />
                    <p>JavaScript</p>
                </div>
                <div className='skill-item react'>
                    <img src={react} alt="React logo" className='icon-react' />
                    <p>React</p>
                </div>
                <div className='skill-item github'>
                    <img src={github} alt="GitHub logo" className='icon-react' />
                    <p>GitHub</p>
                </div>
                <div className='skill-item bootstrap'>
                    <img src={Bootstrap} alt="bootstrap logo" className='icon-react' />
                    <p>Boostrap</p>
                </div>
              
            </div>
        </div>
    );
}

export default Skills;


