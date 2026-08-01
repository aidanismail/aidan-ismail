import Card from "../components/Card";
import { projects } from "../data/projects";

function Works({ highlightedId }) {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 mt-8 ">
        <h2
          id="works-heading"
          className="text-xl font-bold underline decoration-4 decoration-black underline-offset-4 mb-4"
        >
          Works
        </h2>

        {/* 2. Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            // Define the ID
            const projectId = project.id;

            return (
              <Card
                key={projectId}
                id={projectId}
                isHighlighted={highlightedId === projectId}
                title={project.title}
                desc={project.desc}
                img={project.img}
                imgSrcSet={project.imgSrcSet}
                link={project.link}
                alt={project.alt}
                github={project.github}
                tags={project.tags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Works;
