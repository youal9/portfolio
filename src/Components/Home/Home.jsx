import logo from "../../assets/yyyy.png";
import "./Home.css";
import cv from "../../assets/cv.pdf";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="Home">
      <div className="about-content">
      
        <div className="about-title">
        <motion.div
            initial={{ y: '-100vw' }}  // Starta från vänster utanför skärmen
            animate={{ y: 0 }}         // Sluta på sin ursprungliga position
            transition={{ duration: 2, ease: "easeOut" }} // Animera under 1 sekund
        >
          <h1 className="text-h1">
            Hi, I am Youal
          </h1> 
          </motion.div>

          <motion.div
            initial={{ x: '-100vw' }}  // Starta från vänster utanför skärmen
            animate={{ x: 0 }}         // Sluta på sin ursprungliga position
            transition={{ duration: 2, ease: "easeOut" }} 
        >
          <p>
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
             initial={{ x: '60vw', opacity: 0 }}  // Startar utanför skärmen och osynlig
             animate={{ x: 0, opacity: 1 }}       // Flyttar till sin ursprungliga position och blir synlig
             transition={{ duration: 2, ease: "easeOut" }}  // Animera under 1 sekund
        >
        <img src={logo} alt="" className="about-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
