import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Preloader from "../src/components/Pre";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project"
import Contact from "./Pages/Contact";


function App() {
  const [load, updateLoad] = useState(true)
  const [mousePosition, setMousePosition] = useState({
    x: 0, y: 0
  })

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX, y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);




  return (
    <div className="App">
      
      <Router>
        <Preloader load={load} />

        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path='/Portfolio' element={<Home />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>

          </Routes>

        </div>
      </Router>
      
      
      
    </div>
  );
}

export default App;
