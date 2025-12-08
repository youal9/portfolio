import React from "react";
import './Skills.css';
import bv from "../../assets/bggg.mp4";
import cy from "../../assets/cy.webp";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGit,
  FaNode,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress
} from "react-icons/si"

function Skills() {
  return (
    <section className="skills">
      {/* Bakgrundsvideo */}
      <video 
        src={bv} 
        className="background-videoo" 
        autoPlay 
        loop 
        muted 
        playsInline 
        disablePictureInPicture 
        controlsList="nodownload nofullscreen noremoteplayback"
      />
      <div className="overlay"></div>

     
      <h1 className="sectionTitle">Skills</h1>
      <div className="skillList">
        <SkillIcon icon={<FaHtml5 className="icons iconHtml5" color="orange" />} skill="HTML" />
        <SkillIcon icon={<FaCss3Alt className="icons iconCss3" color="blue" />} skill="CSS" />
        <SkillIcon icon={<FaJsSquare className="icons iconJsSquare" color="yellow" />} skill="JavaScript" />
        <SkillIcon icon={<img src={cy} alt="Cypress" className="icons cypress-icon" />} skill="Cypress" 
/>

       
      </div>
      <hr />
      <div className="skillList">
        <SkillIcon icon={<FaReact className="icons iconReact" color="aqua" />} skill="React" />
        <SkillIcon icon={<FaGit className="icons iconGit" color="white" />} skill="Git" />
        <SkillIcon icon={<FaNode className="icons iconBootstraFaNode" color="green" />} skill="Node" />
        <SkillIcon icon={<SiMongodb className="icons iconFigma" color="green" />} skill="Mongodb" />
        <SkillIcon icon={<SiExpress className="icons iconFigma" color="yellow" />} skill="Express" />
      </div>
    </section>
  );
}

function SkillIcon({ icon, skill }) {
  return (
    <div className="skillItem">
      <div className="iconContainer">{icon}</div>
      <div>{skill}</div>
    </div>
  );
}

export default Skills;





