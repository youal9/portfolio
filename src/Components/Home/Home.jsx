import React from "react";
import logo from "../../assets/youal.png";
import cv from "../../assets/CV..pdf";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section className="Home"> 

      <div className="about-content">
        <div className="about-title">
          <motion.div
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h1 className="text-h1">Hi, I am <span className="name">Youal</span></h1>
          </motion.div>

          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <p className="p-text">
              I’m a frontend developer with a strong passion for building user-friendly and
               responsive web applications. I recently graduated in frontend development and am 
               now looking for new opportunities to grow and contribute in the tech industry
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
