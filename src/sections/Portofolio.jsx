import { useEffect } from "react";
import PORTO from "../assets/PORTO.pdf";

function Portofolio() {
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
        src={PORTO}
        title="My Portofolio"
        className="w-full h-full border-none"
      />
    </div>
  );
}

export default Portofolio;
