import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projekt from "./Components/Projekt/Projekt";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      
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
