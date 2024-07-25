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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            ukkjkj jjkljkl jkjklj kjkj
           
          </p>

          <div className="linksContainer">
            <a href="https://github.com/youal9/webbshop" target="_blank" rel="noopener noreferrer" className="githubLink">hemsidan</a>
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
          <h1 className="projectTitle">Mat aplication</h1>
          <p className="projectDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            ukkjkj jjkljkl jkjklj kjkj
           
          </p>
          <div className="linksContainer">
            <a href="https://github.com/youal9/webbshop" target="_blank" rel="noopener noreferrer" className="githubLink">hemsidan</a>
            <a href="https://github.com/youal9/webbshop" target="_blank" rel="noopener noreferrer" className="githubLink">GitHub</a>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            ukkjkj jjkljkl jkjklj kjkj
           
          </p>
          <div className="linksContainer">
            <a href="https://github.com/youal9/webbshop" target="_blank" rel="noopener noreferrer" className="githubLink">hemsidan</a>
            <a href="https://github.com/youal9/webbshop" target="_blank" rel="noopener noreferrer" className="githubLink">GitHub</a>
          </div>
        </div>
      </div>


    </div>
    

    
  );
};

export default Project;


