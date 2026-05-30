import logo from "../assets/logo.png";
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion as Motion } from "motion/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // store where we want to scroll AFTER the mobile menu is fully closed
  const [pendingTargetId, setPendingTargetId] = useState(null);

  const navRef = useRef(null);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // account for sticky navbar height
    const navH = navRef.current?.offsetHeight ?? 0;
    const y = el.getBoundingClientRect().top + window.scrollY - navH - 8;

    window.scrollTo({ top: y, behavior: "smooth" });

    // optional: update hash without causing a jump
    window.history.replaceState(null, "", `#${id}`);
  };

  const handleMobileNavClick = (e, id) => {
    e.preventDefault();
    setPendingTargetId(id);
    setIsOpen(false);
  };

  const handleDesktopNavClick = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <nav
      ref={navRef}
      className="bg-[#ffffff]/40 backdrop-blur-xl w-full sticky top-0 z-50"
    >
      <div className="flex flex-wrap justify-between items-center py-2 px-4 max-w-4xl mx-auto">
        {/* logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            scrollToId("hero");
          }}
          className="flex flex-row items-center justify-center group"
        >
          <img
            className="-mr-2 w-12 transition-transform duration-300 ease-in-out group-hover:rotate-15"
            src={logo}
            alt="aidan's logo"
          />
          <p className="font-bold font-cal text-xl tracking-tighter">
            Aidan Ismail
          </p>
        </a>

        {/* hamburger */}
        <div className="sm:hidden mt-2">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>

        {/* desktop links */}
        <div className="hidden sm:flex gap-6 text-xl">
          {/* <a
            href="#hero"
            onClick={(e) => handleDesktopNavClick(e, "hero")}
            className="hover:underline"
          >
            Home
          </a> */}
          <a
            href="#experiences"
            onClick={(e) => handleDesktopNavClick(e, "experiences")}
            className="hover:underline"
          >
            Experiences
          </a>
          <a
            href="#works"
            onClick={(e) => handleDesktopNavClick(e, "works")}
            className="hover:underline"
          >
            Works
          </a>
        </div>

        {/* mobile menu */}
        <AnimatePresence
          onExitComplete={() => {
            if (!pendingTargetId) return;

            // wait 1 frame so layout is fully settled
            requestAnimationFrame(() => {
              scrollToId(pendingTargetId);
              setPendingTargetId(null);
            });
          }}
        >
          {isOpen && (
            <Motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
              className="w-full flex flex-col items-start gap-6 text-xl sm:hidden border-t border-gray-500"
            >
              <div className="pt-4 pb-4 flex flex-col gap-6 w-full">
                {/* <a
                  href="#hero"
                  onClick={(e) => handleMobileNavClick(e, "hero")}
                >
                  Home
                </a> */}
                <a
                  href="#experiences"
                  onClick={(e) => handleMobileNavClick(e, "experiences")}
                >
                  Experiences
                </a>
                <a
                  href="#works"
                  onClick={(e) => handleMobileNavClick(e, "works")}
                >
                  Works
                </a>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
