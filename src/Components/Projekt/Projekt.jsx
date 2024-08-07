import React from 'react';
import './Projekt.css';
import laptop from '../../assets/laptop.png';
import laptopApp from '../../assets/shopp.jpeg';
import Food from '../../assets/food.png';
import Port from '../../assets/portfolio.png';

const Project = () => {
  const projects = [
    {
      title: 'Webb Shop',
      description: 'A web shop offering a diverse range of fashion and sports products. Products are stored in a database and categorized into sections like men, women, kids, and home.',
      image: laptopApp,
      website: 'https://webbshop-athletx-m.vercel.app/Home',
      github: 'https://github.com/youal9/webbshop'
    },
    {
      title: 'Mat applikation',
      description: 'A recipe search application that uses TheMealDB API to retrieve and display data on various dishes. Users can search for recipes, view detailed ingredients, and get instructions.',
      image: Food,
      website: 'https://matapplikation-y.vercel.app/',
      github: 'https://github.com/youal9/mat-applikationer'
    },
    {
      title: 'Portfolio',
      description: 'My portfolio, where I showcase my skills and projects in frontend development.',
      image: Port,
      website: 'https://youalsportfolio.vercel.app/',
      github: 'https://github.com/youal9/portfolio'
    }
  ];

  return (
    <div className="projects">
      <h1 className="projectsTitle">Projects</h1>

      {projects.map((project, index) => (
        <div key={index} className="project">

          <div className="laptop">
            <img src={laptop} alt="Laptop" className="laptopImage" />
            <div className="laptopScreen">
              <img src={project.image} alt="Project" className="shoppApp" />
            </div>
          </div>

          <div className="projectDetail">
            <h1 className="projectTitle">{project.title}</h1>
            <p className="projectDesc">{project.description}</p>

            <div className="linksContainer">
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="githubLink">Website</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="githubLink">GitHub</a>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;



