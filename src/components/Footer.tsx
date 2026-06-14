import Logo from "./Logo";
import { Star, BadgeCheck } from "lucide-react";
import React from "react";

export default function Footer() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // If we are on the homepage, we can scroll directly
    const currentHash = window.location.hash;
    const isHomepage = !currentHash || currentHash === "#/home" || currentHash === "#home" || currentHash === "" || currentHash.startsWith("#/services") || currentHash.startsWith("#/laboratory");
    
    if (isHomepage) {
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#/${targetId === 'lab' ? 'laboratory' : targetId}`);
      }
    }
  };

  return (
    <footer className="py-24 px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Logo size={32} />
            <p className="max-w-xs text-sm text-black/40 leading-relaxed">
              Elegant layout systems, interactive objects, and high-fidelity digital experiences crafted with simulated physical behavior.
            </p>
          </div>

          <div className="space-y-4">
            <a href="#/about" className="block text-xs font-semibold text-black/40 hover:text-electric-blue transition-colors w-fit uppercase tracking-wider font-mono">
              Studio
            </a>
            <div className="flex flex-col gap-2 text-sm text-black/60 font-light">
              <a href="#/services" onClick={(e) => handleScrollClick(e, "services")} className="hover:text-electric-blue transition-colors w-fit">Services</a>
              <a href="#/laboratory" onClick={(e) => handleScrollClick(e, "lab")} className="hover:text-electric-blue transition-colors w-fit">Laboratory</a>
              <a href="#/about" className="hover:text-electric-blue transition-colors w-fit">About us</a>
              <a href="#/faq" className="hover:text-electric-blue transition-colors w-fit">FAQ</a>
            </div>
          </div>

          <div className="space-y-4">
            <a href="#/contact" className="block text-xs font-semibold text-black/40 hover:text-electric-blue transition-colors w-fit uppercase tracking-wider font-mono">
              Connect
            </a>
            <div className="flex flex-col gap-3 text-sm text-black/60 font-light">
              <a href="https://www.linkedin.com/company/xnui/" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors w-fit">LinkedIn</a>
              <a 
                href="#/contact" 
                className="px-4 py-2 bg-black text-white hover:bg-[#0070f3] rounded-full text-xs font-semibold tracking-tight transition-all duration-300 text-center w-fit shadow-sm hover:shadow-md hover:shadow-[#0070f3]/10 active:scale-95"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* trust indicators, badge and partner box row */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-black/5 gap-6 mb-6">
          {/* Bridge.ws Rating Seal (Warm, Golden Certificate Pill Style) */}
          <a 
            href="https://bridge.ws" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-amber-200/70 bg-gradient-to-r from-amber-50/40 to-yellow-50/20 hover:border-amber-400 hover:bg-[#fffdf2] hover:shadow-[0_4px_16px_rgba(217,119,6,0.08)] transition-all duration-300 select-none cursor-pointer group active:scale-[0.98] shrink-0"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-sm shadow-amber-500/20 flex-shrink-0">
              <Star size={11} fill="currentColor" stroke="none" className="group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[8px] font-extrabold text-amber-700 tracking-[0.12em] uppercase leading-none mb-0.5">RATED 4.9/5</span>
              <span className="text-[12.5px] font-black text-amber-950 leading-tight">by BRIDGE.WS</span>
            </div>
          </a>

          {/* Feelize Partner Seal (Sleek, High-End Professional Certificate Popping out of a Folder Box) */}
          <a 
            href="#/partnership" 
            className="relative flex items-center justify-between gap-4 md:gap-8 pl-6 pr-8 md:pl-8 md:pr-10 py-6 rounded-2xl border border-slate-900/10 bg-gradient-to-br from-slate-50 to-slate-100/90 hover:bg-white transition-all duration-350 hover:shadow-[0_28px_55px_rgba(0,0,0,0.1)] select-none cursor-pointer group active:scale-[0.98] h-28 w-full md:w-auto md:min-w-[450px] overflow-visible"
          >
            {/* Subtle elegant ribbon corner flag for that authentic certificate stamp look */}
            <div className="absolute -top-[1px] -right-[1px] w-14 h-14 overflow-hidden pointer-events-none rounded-tr-2xl">
              <div className="absolute top-[12px] right-[-14px] w-20 bg-emerald-500 text-[7px] font-sans font-black text-white text-center rotate-45 tracking-widest py-0.5 shadow-sm uppercase">
                SEAL
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-5">
              {/* Interactive 3D Popout Certificate Assembly */}
              <div className="relative w-16 h-20 -mt-[36px] md:-mt-[44px] mb-1 flex-shrink-0">
                {/* Outer Presentation Box Holder (shadow behind) */}
                <div className="absolute inset-x-0.5 bottom-1 top-8 rounded-lg bg-slate-950 shadow-md border border-slate-900 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)] overflow-hidden">
                  {/* Visual opening bar */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-800 to-black" />
                  <span className="text-[5px] font-mono text-slate-500 tracking-[0.2em] font-black uppercase">SECURE</span>
                </div>

                {/* The Certificate Paper popping out of the folder box */}
                <div className="absolute inset-x-1 top-0 bottom-5 bg-white border border-slate-200 shadow-md rounded-t-[5px] flex flex-col items-center justify-center p-1 transition-all duration-350 transform translate-y-3 group-hover:translate-y-1 group-hover:-rotate-3">
                  {/* Guilloché Frame Border effect */}
                  <div className="absolute inset-[2px] border border-blue-500/20 rounded-t-[4px] pointer-events-none" />
                  {/* Tiny certificate logo container */}
                  <div className="w-8 h-8 rounded-md overflow-hidden shadow-2xs">
                    <img 
                      src="/feelize_logo.svg" 
                      className="w-full h-full object-cover scale-105" 
                      alt="Feelize Logo" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Tiny Gold Micro Seal ribbon at the bottom of the certificate paper */}
                  <div className="absolute bottom-[3px] right-[3px] w-2 h-2 rounded-full bg-amber-400 border border-amber-300 shadow-2xs flex items-center justify-center scale-110">
                    <div className="absolute -bottom-1 -left-[1px] w-[3px] h-2.5 bg-amber-500/50 rotate-12" />
                    <div className="absolute -bottom-1 -right-[1px] w-[3px] h-2.5 bg-amber-500/50 -rotate-12" />
                  </div>
                </div>
              </div>

              {/* Premium Typography details */}
              <div className="flex flex-col text-left">
                <span className="text-[8px] md:text-[9px] font-mono font-black text-[#0055ff] tracking-[0.2em] uppercase leading-none mb-1 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  PARTNERSHIP RECORD
                </span>
                <span className="text-[16px] md:text-[19px] font-black text-slate-800 tracking-tight leading-none group-hover:text-blue-600 transition-colors">FEELIZE PARTNER</span>
                <span className="text-[9px] text-slate-400 font-bold tracking-tight mt-1">LIC. #FLZ-2026-XNUI-CORP</span>
              </div>
            </div>

            {/* Secure Verified Hologram-like Emblem on the right */}
            <div className="flex flex-col items-center justify-center pr-1 border-l border-slate-200/80 pl-4 md:pl-6 shrink-0">
              <svg className="w-6 h-6 text-slate-350 group-hover:text-emerald-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[7px] font-mono text-slate-400 tracking-widest mt-2 uppercase font-black">VERIFIED</span>
            </div>
          </a>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center pt-6 border-t border-black/[0.03] gap-6 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 text-xs text-black/45 leading-relaxed">
            <span className="whitespace-nowrap">&copy; 2026 Tactile Studio. Designing elegant interfaces.</span>
            <span className="hidden lg:inline text-black/10">|</span>
            <div className="flex items-center gap-x-2.5 gap-y-2 flex-wrap justify-center lg:justify-start">
              <span className="font-mono text-[9px] text-black/35 select-none font-bold whitespace-nowrap">SITEMAP FORMATS:</span>
              <a href="#/sitemap" className="hover:text-electric-blue transition-colors font-semibold whitespace-nowrap">Visual HTML</a>
              <span className="text-black/15 font-light">·</span>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors font-mono text-[10px] whitespace-nowrap">XML Schema</a>
              <span className="text-black/15 font-light">·</span>
              <a href="/sitemap.json" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors font-mono text-[10px] whitespace-nowrap">JSON API</a>
              <span className="text-black/15 font-light">·</span>
              <a href="/sitemap.txt" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors font-mono text-[10px] whitespace-nowrap">TXT list</a>
            </div>
          </div>
          <div className="flex gap-6 text-xs text-black/45 leading-relaxed whitespace-nowrap">
            <a href="#/privacy" className="hover:text-black transition-colors">Privacy policy</a>
            <a href="#/terms" className="hover:text-black transition-colors">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

