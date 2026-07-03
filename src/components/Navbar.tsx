import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import Logo from "./Logo";
import React from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 30);
    });
  }, [scrollY]);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const currentPath = window.location.pathname;
    const isHomepage = currentPath === "/" || currentPath === "/services" || currentPath === "/laboratory" || currentPath === "/lab" || currentPath === "/faq";
    
    if (isHomepage) {
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        const cleanPath = `/${targetId === "lab" ? "laboratory" : targetId}`;
        window.history.pushState(null, "", cleanPath);
      }
    } else {
      e.preventDefault();
      const cleanPath = `/${targetId === "lab" ? "laboratory" : targetId}`;
      window.history.pushState(null, "", cleanPath);
      window.dispatchEvent(new Event("popstate"));
    }
  };

  const customEase = [0.19, 1, 0.22, 1] as const;

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: customEase }}
      aria-label="Primary Navigation"
      className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.03] py-4 shadow-sm" 
          : "bg-transparent py-7"
      }`}
    >
      <Logo onClick={() => {
        window.history.pushState(null, "", "/");
        window.dispatchEvent(new Event("popstate"));
      }} />
      
      <div className="flex items-center gap-7 md:gap-9 text-xs md:text-sm font-medium text-black/45">
        <a 
          href="/services" 
          onClick={(e) => handleScrollClick(e, "services")}
          aria-label="Our Services" 
          className="relative hover:text-black transition-colors duration-300 py-1 group hidden sm:block"
        >
          <span>Services</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0070f3] group-hover:w-full transition-all duration-300 ease-out" />
        </a>
        <a 
          href="/laboratory" 
          onClick={(e) => handleScrollClick(e, "lab")}
          aria-label="Selected Work" 
          className="relative hover:text-black transition-colors duration-300 py-1 group hidden sm:block"
        >
          <span>Laboratory</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0070f3] group-hover:w-full transition-all duration-300 ease-out" />
        </a>
        <a 
          href="/about" 
          aria-label="About Tactile Studio" 
          className="relative hover:text-black transition-colors duration-300 py-1 group hidden sm:block"
        >
          <span>About</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0070f3] group-hover:w-full transition-all duration-300 ease-out" />
        </a>
        <a 
          href="/faq" 
          onClick={(e) => handleScrollClick(e, "faq")}
          aria-label="Information and FAQ" 
          className="relative hover:text-black transition-colors duration-300 py-1 group hidden sm:block"
        >
          <span>FAQ</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0070f3] group-hover:w-full transition-all duration-300 ease-out" />
        </a>
        <a 
          href="/contact" 
          aria-label="Initiate Contact"
          className="px-5 py-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] font-sans text-xs md:text-sm font-bold tracking-tight outline-none bg-black text-white hover:bg-[#0070f3] hover:shadow-lg hover:shadow-[#0070f3]/15 hover:scale-[1.02] active:scale-[0.98]"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
