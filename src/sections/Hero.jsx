import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aidan from "../assets/aidan.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Hero({ onHighlightProject }) {
  const handleScrollToProject = (e) => {
    e.preventDefault(); // Stop the default jump

    // 1. Find the ID we set in Works.jsx
    const targetId = "titra-sims";
    const element = document.getElementById(targetId);

    if (element) {
      // 2. Scroll to it
      element.scrollIntoView({ behavior: "smooth", block: "center" });

      // 3. Trigger the Highlight in App.jsx
      onHighlightProject(targetId);
    } else {
      console.error("Could not find element with id:", targetId);
    }
  };
  return (
    <>
      <main className="max-w-3xl mx-auto p-4 mt-20">
        {/* hero */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <div className="flex flex-col sm:pr-8 text-center sm:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-cal tracking-tighter">
              Aidan Ismail
            </h1>
            <p className="text-lg text-gray-700 mt-2">
              Aspiring Digital Craftsman (Developer / Designer)
            </p>
            <p className="text-sm text-gray-700 ">
              Based in Bandung, Indonesia
            </p>
          </div>

          <img
            src={aidan}
            className="w-30 h-30 mt-6 md:mt-0  md:w-36 md:h-36 rounded-full object-cover border-2 border-white shrink-0"
            alt="Aidan's Profile"
          />
        </div>

        <div className="flex text-center justify-center mt-6 bg-white/35 py-4 rounded-xl">
          <h5>
            Open for Work! Currently finished{" "}
            <a
              href="#titra-sims"
              onClick={handleScrollToProject}
              className="hover:underline text-sky-700"
            >
              TITRA SIMS
            </a>
          </h5>
        </div>

        {/* bio */}
        <div className="mt-8 justify">
          <h3 className="text-xl font-bold underline decoration-4 decoration-black underline-offset-4 mb-4">
            Bio
          </h3>

          <h4 className="text-justify leading-normal">
            I am a Computer Science undergraduate at Universitas Padjadjaran
            with a deep curiosity for AI, software development (anything), and
            mathematics. I thrive in collaborative environments, where I love
            tackling real-world problems and building innovative solutions.
            Passionate about knowledge sharing, I believe that we grow faster
            when we learn together.
          </h4>

          <div className="mt-6 text-justify leading-relaxed">
            <div>
              <div className="flex gap-4 mb-2">
                <span className="font-bold font-cal w-24 shrink-0">2005</span>
                <span>Born in Bandung, Indonesia.</span>
              </div>

              <div className="flex gap-4 mb-2">
                <span className="font-bold font-cal w-24 shrink-0">
                  2020&ndash;2023
                </span>
                <span>Completed High School at SMAN 5 Bandung.</span>
              </div>

              <div className="flex gap-4 mb-2">
                <span className="font-bold font-cal w-24 shrink-0">
                  2023&ndash;
                </span>
                <span>
                  Started <strong>Computer Science</strong> degree at Unpad.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* on the internet */}
        <div className="mt-8">
          <h3 className="text-xl font-bold underline decoration-4 decoration-black underline-offset-4 mb-4">
            Links
          </h3>

          <div className="flex flex-col gap-2 text-sky-700">
            <a
              href="https://www.linkedin.com/in/aidanismail12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit px-4 py-2 rounded-lg hover:bg-sky-100  font-bold transition-colors"
            >
              <FaLinkedin size={24} />
              <span>Aidan Ismail</span>
            </a>

            <a
              href="https://github.com/aidanismail"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit px-4 py-2 rounded-lg hover:bg-sky-100  font-bold transition-colors"
            >
              <FaGithub size={24} />
              <span>@aidanismail</span>
            </a>

            <a
              href="mailto:aidanismail12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit px-4 py-2 rounded-lg hover:bg-sky-100  font-bold transition-colors"
            >
              <FaEnvelope size={24} />
              <span>aidanismail12@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/aidanismail12/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-fit px-4 py-2 rounded-lg hover:bg-sky-100  font-bold transition-colors"
            >
              <FaInstagram size={24} />
              <span>@aidanismail12</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
