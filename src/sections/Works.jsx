import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { projects } from "../data/projects";

function Works({ highlightedId }) {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 mt-8 ">
        <h3 className="text-xl font-bold underline decoration-4 decoration-black underline-offset-4 mb-4">
          Works
        </h3>

        {/* 2. Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            // Define the ID
            const projectId = project.id;

            return (
              <Card
                key={index}
                id={projectId}
                isHighlighted={highlightedId === projectId}
                title={project.title}
                desc={project.desc}
                img={project.img}
                link={project.link}
                alt={project.alt}
                github={project.github}
                tags={project.tags}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Works;
