import React from "react";
import logo from "../../assets/yyyy.png";
import cv from "../../assets/cv.pdf";
import bv from "../../assets/bg.mp4"
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section className="Home">
      {/* Bakgrundsvideo */}
      <video src={bv} className="background-video" autoPlay loop muted playsInline disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback" >
      
      </video>

      <div className="about-content">
        <div className="about-title">
          <motion.div
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h1 className="text-h1">Hi, I am Youal</h1>
          </motion.div>

          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <p className="p-text">
              I’m a frontend developer and student with a strong passion for
              building user-friendly and responsive web applications. Currently
              studying frontend development, I am constantly seeking new
              opportunities to enhance my knowledge and skills in the field.
            </p>
            <a href={cv} download="Youal cv">
              <button>Download CV</button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: "60vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img src={logo} alt="" className="about-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
