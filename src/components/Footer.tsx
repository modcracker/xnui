import Logo from "./Logo";
import { Star } from "lucide-react";
import React from "react";

export default function Footer() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const cleanPath = `/${targetId === "lab" ? "laboratory" : targetId}`;
    window.location.hash = "#" + cleanPath;
  };

  return (
    <footer className="py-24 px-6 md:px-12 border-t border-black/5 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Identity Column + Tabular Site Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Identity Block (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-5">
            <Logo size={28} />
            <p className="max-w-sm text-xs md:text-sm text-black/45 leading-relaxed font-light">
              xnui is a boutique visual design studio led by senior graphic architect & UX designer Sofia Varian. We craft high-fidelity responsive systems, tactile web layouts, and interactive spring-mechanic design systems.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-black/35 select-none pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>San Francisco Area &middot; Active Ecosystem</span>
            </div>
          </div>

          {/* Column A: Site Architecture */}
          <div className="space-y-4">
            <span className="block text-[10px] font-mono font-bold text-black/40 uppercase tracking-widest">
              Sitemap Links
            </span>
            <ul className="space-y-2.5 text-xs md:text-sm text-black/55 font-light list-none p-0 m-0">
              <li>
                <a href="/services" onClick={(e) => handleScrollClick(e, "services")} className="hover:text-electric-blue transition-colors block py-0.5">Services Offerings</a>
              </li>
              <li>
                <a href="/laboratory" onClick={(e) => handleScrollClick(e, "lab")} className="hover:text-electric-blue transition-colors block py-0.5">Laboratory Experiments</a>
              </li>
              <li>
                <a href="/about" className="hover:text-electric-blue transition-colors block py-0.5">About Specialist</a>
              </li>
              <li>
                <a href="/faq" onClick={(e) => handleScrollClick(e, "faq")} className="hover:text-electric-blue transition-colors block py-0.5">Global FAQ Support</a>
              </li>
              <li>
                <a href="/glossary" className="hover:text-[#0070f3] transition-colors block py-0.5 font-bold text-[#0070f3]">Interactive UI/UX Glossary</a>
              </li>
            </ul>
          </div>

          {/* Column B: System Sitemaps */}
          <div className="space-y-4">
            <span className="block text-[10px] font-mono font-bold text-black/40 uppercase tracking-widest">
              Developer Manifests
            </span>
            <ul className="space-y-2.5 text-xs md:text-sm text-black/55 font-light list-none p-0 m-0">
              <li>
                <a href="/sitemap" className="hover:text-electric-blue transition-colors block py-0.5 font-semibold">HTML Visual Sitemap</a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors block py-0.5 font-mono text-[11px]">Sitemap (XML)</a>
              </li>
              <li>
                <a href="/sitemap.json" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors block py-0.5 font-mono text-[11px]">Sitemap (JSON)</a>
              </li>
              <li>
                <a href="/sitemap.txt" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors block py-0.5 font-mono text-[11px]">Sitemap (TXT)</a>
              </li>
            </ul>
          </div>

          {/* Column C: Connection & Agents */}
          <div className="space-y-4">
            <span className="block text-[10px] font-mono font-bold text-black/40 uppercase tracking-widest">
              Studio Operations
            </span>
            <div className="space-y-3">
              <div className="flex flex-col gap-1.5">
                <a href="https://www.linkedin.com/company/xnui/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-black/55 hover:text-electric-blue transition-colors py-0.5 font-light block">
                  LinkedIn Profile
                </a>
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-black/55 hover:text-electric-blue transition-colors py-0.5 font-mono text-[11px] block">
                  Robots.txt Schema
                </a>
                <a href="/ai.txt" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-black/55 hover:text-electric-blue transition-colors py-0.5 font-mono text-[11px] block">
                  AI.txt Directive
                </a>
              </div>
              <div className="pt-1">
                <a 
                  href="/contact" 
                  className="inline-block px-5 py-2 bg-black text-white hover:bg-electric-blue rounded-full text-xs font-semibold tracking-tight transition-all duration-300 text-center shadow-xs active:scale-95"
                >
                  Consult Account
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Accreditations & Verified Partner Seals Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 border-t border-b border-black/[0.06] gap-6 mb-8 bg-[#f5f5f5]/60 px-6 rounded-2xl">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-extrabold text-[#0070f3] tracking-wider uppercase block">Verified Studio Accreditations</span>
            <p className="text-xs text-black/45 font-light">
              Authentic creative standing certification, verified score indexes, and enterprise licenses.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Bridge.ws Rating Seal */}
            <a 
              href="https://bridge.ws" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 px-5 py-3 rounded-xl border border-amber-200/50 bg-[#fffef5] hover:border-amber-400 hover:bg-[#fffdf2] hover:shadow-[0_4px_16px_rgba(217,119,6,0.04)] transition-all duration-300 select-none cursor-pointer group active:scale-[0.98] h-16 w-full sm:w-auto min-w-[210px]"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-xs flex-shrink-0">
                <Star size={13} fill="currentColor" stroke="none" className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-extrabold text-amber-700 tracking-[0.12em] uppercase leading-none mb-0.5">RATED 4.9/5</span>
                <span className="text-xs font-black text-amber-950 leading-tight">by BRIDGE.WS</span>
              </div>
            </a>

            {/* Feelize Partner Seal - Perfectly matching dimensions */}
            <a 
              href="/partnership" 
              className="relative flex items-center justify-between gap-6 px-5 py-3 rounded-xl border border-slate-900/10 bg-slate-100 hover:border-blue-500/30 hover:bg-white transition-all duration-300 select-none cursor-pointer group active:scale-[0.98] h-16 w-full sm:w-auto md:min-w-[280px] overflow-hidden"
            >
              {/* Subtle top-right ribbon indicator */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none rounded-tr-xl">
                <div className="absolute top-[4px] right-[-10px] w-12 bg-emerald-500 text-[5px] font-sans font-black text-white text-center rotate-45 tracking-widest py-0.2 shadow-xs uppercase">
                  SEAL
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Micro presentation component matching the clean badge height limit */}
                <div className="relative w-8 h-8 -mt-[8px] flex-shrink-0">
                  <div className="absolute inset-x-0.5 bottom-0 top-3 rounded bg-slate-950 shadow-xs border border-slate-900 flex items-center justify-center overflow-hidden">
                    <span className="text-[3px] font-mono text-slate-500 tracking-wider uppercase">SECURE</span>
                  </div>
                  <div className="absolute inset-x-1 top-0 bottom-1.5 bg-white border border-slate-200 shadow-xs rounded flex flex-col items-center justify-center p-0.5 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 group-hover:-rotate-3">
                    <div className="w-4 h-4 rounded overflow-hidden">
                      <img 
                        src="/feelize_logo.svg" 
                        className="w-full h-full object-cover scale-105" 
                        alt="Feelize Logo" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-mono font-bold text-[#0055ff] tracking-wider uppercase leading-none mb-0.5 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    PARTNER RECORD
                  </span>
                  <span className="text-xs font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">FEELIZE PARTNER</span>
                </div>
              </div>

              <div className="flex items-center justify-center pl-3 border-l border-slate-200 shrink-0">
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
            </a>
          </div>
        </div>


        {/* Clean Symmetrical Sitemaps and Copyright Base Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-6 gap-6 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs text-black/45 leading-relaxed">
            <span className="font-medium">&copy; 2026 Tactile Studio. Architectural UX & Visual Design.</span>
            <span className="hidden sm:inline text-black/10">|</span>
            <span className="font-light">Crafting organic coordinate layout systems.</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2 text-xs text-black/45">
            <a href="/privacy" className="hover:text-electric-blue transition-colors font-medium">Privacy Policy</a>
            <a href="/terms" className="hover:text-electric-blue transition-colors font-medium">Terms of Service</a>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-black/10" />
            <a href="/contact" className="hover:text-electric-blue transition-colors">Contact Support &middot; San Francisco</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

