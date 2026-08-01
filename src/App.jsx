import "./App.css";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import Experiences from "./sections/Experiences";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./sections/NotFound";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import ResumePage from "./sections/Resume";
import PortoPage from "./sections/Portofolio";

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
    <div className="main-content min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Motion.main
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <section
                  id="hero"
                  className="scroll-mt-100"
                  aria-labelledby="intro-heading"
                >
                  <Hero onHighlightProject={triggerHighlight} />
                </section>
                <section
                  id="experiences"
                  className="scroll-mt-20"
                  aria-labelledby="experiences-heading"
                >
                  <Experiences />
                </section>
                <section
                  id="works"
                  className="scroll-mt-20"
                  aria-labelledby="works-heading"
                >
                  <Works highlightedId={highlightedProject} />
                </section>
              </Motion.main>
              <Footer />
            </>
          }
        />
        <Route path="/portofolio" element={<PortoPage />}></Route>
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
