import "./App.css";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import Experiences from "./sections/Experiences";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  const [highlightedProject, setHighlightedProject] = useState(null);

  const triggerHighlight = (id) => {
    setHighlightedProject(id);

  
    setTimeout(() => {
      setHighlightedProject(null);
    }, 1500);
  };

  return (
    <>
      <div className="main-content min-h-screen">
        <Navbar></Navbar>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <section id="hero" className="scroll-mt-100">
            <Hero onHighlightProject={triggerHighlight}></Hero>
          </section>
          <section id="experiences" className="scroll-mt-20">
            <Experiences></Experiences>
          </section>
          <section id="works" className="scroll-mt-20">
            <Works highlightedId={highlightedProject}></Works>
          </section>
        </motion.div>
        <Footer></Footer>
       
      </div>
    </>
  );
}

export default App;
