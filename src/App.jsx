import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import './index.css'; // Importera globala stilar

import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Projekt from './Components/Projekt/Projekt'
import Contact from './Components/Contact/Contact'
import video from "./assets/video.mp4";

function App() {
 

  return (
    <div className="main-content">
    <video className="video-background" src={video} autoPlay loop muted playsInline controls={false}  />
    <Navbar/>
    <Home />
    <Skills />
    <Projekt />
    <Contact/>
  </div>
  )
}

export default App
