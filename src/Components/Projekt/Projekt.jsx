import React from 'react';
import './Projekt.css';
import laptop from '../../assets/laptop.png';
import laptopApp from '../../assets/shopp.jpeg';
import Food from '../../assets/food.png';
import Port from '../../assets/portfolio.png';

const Project = () => {
  return (
    <div className="projects">
      <h1 className="projectsTitle">Projects</h1>

      <div className="project">
        <div className="laptop">
          <img src={laptop} alt="Laptop" className="laptopImage"  />
          <div className="laptopScreen">
            <img src={laptopApp} alt="Laptop App" className="shoppApp" />
          </div>
        </div>

        <div className="projectDetail">
          <h1 className="projectTitle">Webb Shop</h1>
          <p className="projectDesc">
          A web shop offering a diverse range of fashion and sports products.
           Products are stored in a database and categorized into sections
            like men, women, kids, and home.
          </p>

          <div className="linksContainer">
            <a href="https://webbshop-athletx-m.vercel.app/Home" target="_blank" rel="noopener noreferrer" className="githubLink">Website  </a>
            <a href="https://github.com/youal9/webbshop" target="_blank" rel="noopener noreferrer" className="githubLink">GitHub</a>
          </div>

        </div>
      </div>

      <div className="project">
        <div className="laptop">
          <img src={laptop} alt="Laptop" className="laptopImage"  />
          <div className="laptopScreen">
            <img src={Food} alt="Laptop App" className="shoppApp" />
          </div>
        </div>
         
        <div className="projectDetail">
          <h1 className="projectTitle">Mat applikation</h1>
          <p className="projectDesc">
          A recipe search application that uses TheMealDB API to retrieve and 
          display data on various dishes. Users can search for recipes,
           view detailed ingredients, and get instruction
           
          </p>
          <div className="linksContainer">
            <a href="https://matapplikation-y.vercel.app/" target="_blank" rel="noopener noreferrer" className="githubLink">Website  </a>
            <a href="https://github.com/youal9/mat-applikationer" target="_blank" rel="noopener noreferrer" className="githubLink">GitHub</a>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="laptop">
          <img src={laptop} alt="Laptop" className="laptopImage"  />
          <div className="laptopScreen">
            <img src={Port} alt="Laptop App" className="shoppApp" />
          </div>
        </div>
         
        <div className="projectDetail">
          <h1 className="projectTitle">Portfolio</h1>
          <p className="projectDesc">
          my portfolio, where I showcase my skills and projects in frontend development.
           
          </p>
          <div className="linksContainer">
            <a href="https://youalsportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="githubLink"> Website </a>
            <a href="https://github.com/youal9/portfolio" target="_blank" rel="noopener noreferrer" className="githubLink">GitHub</a>
          </div>
        </div>
      </div>


    </div>
    

    
  );
};

export default Project;


