import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projekt from "./Components/Projekt/Projekt";
import Contact from "./Components/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 8 sekunders loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    );
  }

  return (
    <div className="main-content">
      <Navbar />
      <Home />
      <Skills />
      <Projekt />
      <Contact />
    </div>
  );
}

export default App;
