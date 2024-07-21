import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'


import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Projekt from './Components/Projekt/Projekt'


function App() {
 

  return (
    <>
     <Navbar/>
     <Home/>
     <Skills/>
     <Projekt/>
    </>
  )
}

export default App
