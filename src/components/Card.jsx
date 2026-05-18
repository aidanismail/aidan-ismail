import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion as Motion } from "motion/react";

function Card({ id, isHighlighted, title, desc, img, link, alt, tags }) {
  return (
    <Motion.div
      id={id}
      className="flex flex-col h-full rounded-lg overflow-hidden"
      // 3. Define the Animation Logic
      animate={isHighlighted ? "active" : "inactive"}
      variants={{
        inactive: {
          scale: 1,
          boxShadow: "0px 0px 0px rgba(0,0,0,0)",
          borderColor: "transparent",
          y: 0
        },
        active: {
          scale: 1.02, // 1.05 can be too big/blurry, 1.02 is subtle
          y: -5, // Lift it up slightly
          boxShadow:
            "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)", // Tailwind 'shadow-xl' style
          borderColor: "#0ea5e9", // Sky Blue border to signal "Active"

          transition: {
            type: "spring",
            stiffness: 400, // Very snappy (high energy)
            damping: 25, // Stops quickly without too much wobble
            mass: 1 // Default weight
          }
        }
      }}
    >
      <div className="flex flex-col h-full rounded-lg overflow-hidden  bg-white">
        {/* Image Section */}
        <div className="h-64 overflow-hidden">
          <a className="cursor-pointer" href={link} target="_blank">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover  hover:scale-105 hover:brightness-75 transition-all duration-500 ease-in-out"
            />
          </a>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col grow">
          <h3 className="text-xl text-center font-bold mb-2">{title}</h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-600 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-black mb-4 text-sm leading-relaxed text-justify">
            {desc}
          </p>

          {/* Links */}
          <div className="flex gap-4 mt-auto">
            {link && (
              <a
                href={alt}
                target="_blank"
                className="flex items-center gap-2 text-sm font-bold hover:underline text-sky-700"
              >
                <FaExternalLinkAlt size={12} /> More
              </a>
            )}
          </div>
        </div>
      </div>
    </Motion.div>
  );
}

export default Card;
