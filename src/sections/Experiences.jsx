import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Items from "../components/Items";
import { experienceData } from "../data/experiences";

function Experiences() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 mt-8">
        {/* Page Heading */}
        <h3 className="text-xl font-bold underline decoration-4 decoration-black underline-offset-6 mb-4">
          Experiences
        </h3>
        {/* The List */}
        <div>
          {experienceData.map((exp, index) => (
            <Items
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              desc={exp.desc}
              tags={exp.tags}
            />
          ))}
        </div>
      </main>
      
    </>
  );
}

export default Experiences;
