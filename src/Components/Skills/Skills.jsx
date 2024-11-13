import React from "react";
import './Skills.css';
import bv from "../../assets/bggg.mp4";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaGit,
  FaNode,
  FaFigma,
} from "react-icons/fa";

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
       
      </div>
      <hr />
      <div className="skillList">
        <SkillIcon icon={<FaReact className="icons iconReact" color="aqua" />} skill="React" />
        <SkillIcon icon={<FaGit className="icons iconGit" color="white" />} skill="Git" />
        <SkillIcon icon={<FaBootstrap className="icons iconBootstrap" color="purple" />} skill="Bootstrap" />
        <SkillIcon icon={<FaFigma className="icons iconFigma" color="blue" />} skill="Figma" />
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





