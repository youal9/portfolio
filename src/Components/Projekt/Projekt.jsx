import "./Projekt.css";
import projects from "../../assets/ProjectList.js";
import laptop from "../../assets/laptop.png";
import { motion } from "framer-motion";


const Project = () => (
  <div className="projects">
    <h1 className="projectsTitle">Projects</h1>

    {projects.map((project, index) => (
      <div key={index} className="project">
        <motion.div
          initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
        <div className="laptop">
          <img src={laptop} alt="Laptop" className="laptopImage" />
          <div className="laptopScreen">
            <img src={project.image} alt={project.title} className="shoppApp" />
          </div>
          
        </div>
        </motion.div>

        <div className="projectDetail">
          <h1 className="projectTitle">{project.title}</h1>
          <p className="projectDesc">{project.description}</p>
          <div className="linksContainer">
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <button className="linkButton">Website</button>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="linkButton">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Project;
