import React from 'react';
import logo from "../../assets/y1.png";
import './Home.css';
import cv from "../../assets/Frontend cv.pdf";

const Home = () => {
    return (
        <section className='Home'>
            <div className="about-content">
                <div className="about-title">
                    <h1>Hi, I am <span>Youal</span></h1>
                    <p>
                        I’m a frontend developer and student with a strong passion
                        for building user-friendly and responsive web applications.
                        Currently studying frontend development, I am constantly
                        seeking new opportunities to enhance my knowledge and skills in the field.
                    </p>
                    <a href={cv} download="Youal cv.pdf">
                        <button>Download CV</button>
                    </a>
                </div>
                <img src={logo} alt="" className="about-image" />
            </div>
        </section>
    );
}

export default Home;

