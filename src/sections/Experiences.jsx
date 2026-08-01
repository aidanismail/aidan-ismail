import Items from "../components/Items";
import { experienceData } from "../data/experiences";

function Experiences() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 mt-8">
        {/* Page Heading */}
        <h2
          id="experiences-heading"
          className="text-xl font-bold underline decoration-4 decoration-black underline-offset-6 mb-4"
        >
          Experiences
        </h2>
        {/* The List */}
        <div>
          {experienceData.map((exp) => (
            <Items
              key={`${exp.company}-${exp.title}`}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              desc={exp.desc}
              tags={exp.tags}
            />
          ))}
        </div>
      </div>
      
    </>
  );
}

export default Experiences;
