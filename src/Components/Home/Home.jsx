import React from 'react';
import video from "../../assets/video.mp4";

import logo from "../../assets/y1.png";
import './Home.css';
import cv from "../../assets/cv.pdf";

const Home = () => {
   

    return (
        <section className='About'>
            <video className='video' src={video} autoPlay loop muted/>
            <div className="about-content">
                <div className="about-title">
                    <h1>Hi i am <span>Youal</span></h1>
                    <p>Jag är en passionerad frontend-utvecklare och student som för närvarande
                     studerar frontend.
                     Min resa inom kodning började med en nyfikenhet på hur webbplatser fungerar,
                      och det har vuxit till en fullständig passion för att skapa dynamiska och responsiva webbapplikationer.


                    </p>
                    <a href={cv} download="Youal_CV.pdf">
                <button>Download CV</button>
            </a>
                </div>
                <img src={logo} alt="" className="about-image" />
                
            </div>
            
        </section>
    );
}

export default Home;
