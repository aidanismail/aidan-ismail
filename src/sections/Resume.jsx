import { useEffect } from "react";
import CV from "../assets/CV.pdf";

function Resume() {
  // Opsional: Sembunyikan scrollbar body bawaan React agar tidak ada double-scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full h-screen m-0 p-0 bg-stone-900">
      <iframe
        src={CV}
        title="My Resume"
        className="w-full h-full border-none"
      />
    </div>
  );
}

export default Resume;
