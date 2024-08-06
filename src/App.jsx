import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './index.css'; // Importera globala stilar

import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projekt from './Components/Projekt/Projekt';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <div className="background-image"></div> {/* Bakgrundsbild */}
      <div className="main-content">
        <Navbar />
        <Home />
        <Skills />
        <Projekt />
        <Contact />
      </div>
    </div>
  );
}

export default App;

