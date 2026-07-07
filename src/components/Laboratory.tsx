import { useRef, useState, MouseEvent, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Beaker, Layers, Eye } from "lucide-react";
import PageBacklinks from "./PageBacklinks";

// @ts-ignore
import artIndustrial from "../assets/images/art_industrial_mechanics_1781396069282.jpg";
// @ts-ignore
import artObsidian from "../assets/images/art_obsidian_tactile_1781396100697.jpg";

const experiments = [
  {
    id: "01",
    title: "Fluid Layouts",
    description: "A gorgeous spatial grid designed with comfortable padding, warm alignment guidelines, and organic response timers.",
    category: "Typography",
    tag: "Layout Canvas",
  },
  {
    id: "02",
    title: "Interactive Feeds",
    description: "Delightful motion structures carrying fast physics simulation, responsive touch boundaries, and vector illustrations.",
    category: "Animation",
    tag: "Fluid Motion",
  },
  {
    id: "03",
    title: "Adaptive Workspace",
    description: "Custom user settings that automatically scale buttons, content density, and fonts for accessibility and comfort.",
    category: "Accessibility",
    tag: "Human Touch",
  }
];

function VectorBlueprint({ activeId }: { activeId: string }) {
  const blueprintEase = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        {activeId === "01" && (
          <motion.div
            key="01"
            initial={{ opacity: 0, scale: 0.88, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.88, rotate: 15 }}
            transition={{ duration: 0.6, ease: blueprintEase }}
            className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center"
          >
            {/* Spinning Torus Knot representation: Intersecting elliptical pathways */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center transform-gpu will-change-transform"
            >
              <svg viewBox="0 0 100 100" className="w-[115%] h-[115%] text-[#0070f3]">
                {/* Advanced engineering blueprint styling with primary-colored lines */}
                <ellipse cx="50" cy="50" rx="44" ry="15" fill="none" stroke="#0070f3" strokeWidth="0.8" transform="rotate(30 50 50)" />
                <ellipse cx="50" cy="50" rx="44" ry="15" fill="none" stroke="#e63946" strokeWidth="0.8" transform="rotate(90 50 50)" strokeDasharray="3 3" />
                <ellipse cx="50" cy="50" rx="44" ry="15" fill="none" stroke="#fcbf49" strokeWidth="0.8" transform="rotate(150 50 50)" />
                <ellipse cx="50" cy="50" rx="44" ry="15" fill="none" stroke="#2a9d8f" strokeWidth="0.8" transform="rotate(210 50 50)" strokeDasharray="1 2" strokeOpacity="0.6" />
                <ellipse cx="50" cy="50" rx="44" ry="15" fill="none" stroke="#0070f3" strokeWidth="0.8" transform="rotate(270 50 50)" />
                <ellipse cx="50" cy="50" rx="44" ry="15" fill="none" stroke="#fcbf49" strokeWidth="0.8" transform="rotate(330 50 50)" />
                
                {/* Secondary compass indicators */}
                <circle cx="50" cy="50" r="28" fill="none" stroke="#e63946" strokeWidth="0.4" strokeDasharray="5 5" strokeOpacity="0.5" />
                <circle cx="50" cy="50" r="16" fill="none" stroke="#0070f3" strokeWidth="0.6" strokeDasharray="2 1" />
                <circle cx="50" cy="50" r="4.5" fill="#fcbf49" />
                
                {/* Coordinates labels dots */}
                <circle cx="50" cy="6" r="1.5" fill="#e63946" />
                <circle cx="50" cy="94" r="1.5" fill="#0070f3" />
              </svg>
            </motion.div>
          </motion.div>
        )}

        {activeId === "02" && (
          <motion.div
            key="02"
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: -15 }}
            transition={{ duration: 0.6, ease: blueprintEase }}
            className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center"
          >
            {/* Crystalline Icosahedron Lattice */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center transform-gpu will-change-transform"
            >
              <svg viewBox="0 0 100 100" className="w-[105%] h-[105%] text-[#f77f00]">
                {/* Complex mathematical triangulation nodes with warm aesthetic */}
                <polygon points="50,10 90,32 90,68 50,90 10,68 10,32" fill="none" stroke="#f77f00" strokeWidth="0.9" />
                <polygon points="50,10 50,90" fill="none" stroke="#fcbf49" strokeWidth="0.5" strokeDasharray="3 3" />
                <polygon points="10,32 90,32" fill="none" stroke="#e63946" strokeWidth="0.5" strokeOpacity="0.4" />
                <polygon points="10,68 90,68" fill="none" stroke="#0070f3" strokeWidth="0.5" strokeOpacity="0.4" />
                
                <polygon points="50,10 90,68 10,68" fill="none" stroke="#fcbf49" strokeWidth="0.5" strokeOpacity="0.3" />
                <polygon points="50,90 90,32 10,32" fill="none" stroke="#0070f3" strokeWidth="0.5" strokeOpacity="0.3" />

                {/* Sub-structures */}
                <circle cx="50" cy="50" r="22" fill="none" stroke="#e63946" strokeWidth="0.5" strokeDasharray="1 4" />

                {/* Outer corner node pointers */}
                <circle cx="50" cy="10" r="3" fill="#e63946" />
                <circle cx="90" cy="32" r="3" fill="#0070f3" />
                <circle cx="90" cy="68" r="3" fill="#fcbf49" />
                <circle cx="50" cy="90" r="3" fill="#0070f3" />
                <circle cx="10" cy="68" r="3" fill="#f77f00" />
                <circle cx="10" cy="32" r="3" fill="#fcbf49" />
              </svg>
            </motion.div>
          </motion.div>
        )}

        {activeId === "03" && (
          <motion.div
            key="03"
            initial={{ opacity: 0, scale: 0.88, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.88, rotate: -15 }}
            transition={{ duration: 0.6, ease: blueprintEase }}
            className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center"
          >
            {/* Synthetics Concentric Ring Feed */}
            <div className="absolute inset-0 flex items-center justify-center transform-gpu will-change-transform">
              <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] text-white/90 transform-gpu">
                {/* Outer high-precision track */}
                <motion.circle 
                  cx="50" cy="50" r="44" 
                  fill="none" stroke="#0070f3" strokeWidth="0.75"
                  strokeDasharray="12 4 4 4"
                  animate={{ rotate: 360 }}
                  style={{ transformOrigin: '50px 50px' }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Middle vector structure */}
                <motion.circle 
                  cx="50" cy="50" r="32" 
                  fill="none" stroke="#fcbf49" strokeWidth="0.9" strokeOpacity="0.25"
                  animate={{ rotate: -360 }}
                  style={{ transformOrigin: '50px 50px' }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  strokeDasharray="2 6"
                />

                {/* Inner alignment circle */}
                <motion.circle 
                  cx="50" cy="50" r="20" 
                  fill="none" stroke="#e63946" strokeWidth="1" strokeOpacity="0.5"
                  strokeDasharray="6 3"
                  animate={{ rotate: 180 }}
                  style={{ transformOrigin: '50px 50px' }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                <circle cx="50" cy="50" r="8" fill="none" stroke="#0070f3" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="3" fill="#0070f3" />

                {/* Orbital nodes */}
                <motion.circle
                  cx="50" cy="6" r="3"
                  fill="#e63946"
                  animate={{ rotate: 360 }}
                  style={{ transformOrigin: '50px 50px' }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="50" cy="18" r="2.5"
                  fill="#fcbf49"
                  animate={{ rotate: -360 }}
                  style={{ transformOrigin: '50px 50px' }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Laboratory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState("01");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#/laboratory' || hash === '#laboratory' || hash === '#/lab' || hash === '#lab') {
      setTimeout(() => {
        const el = document.getElementById('lab');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);

  const activeExp = experiments.find(e => e.id === activeId) || experiments[0];

  // Tactical Tilt setup for immersive parallax effect
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs soften the tracking
  const springX = useSpring(x, { damping: 20, stiffness: 180 });
  const springY = useSpring(y, { damping: 20, stiffness: 180 });

  // Map to rotations
  const rotateX = useTransform(springY, [-150, 150], [8, -8]);
  const rotateY = useTransform(springX, [-150, 150], [-8, 8]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const customEase = [0.19, 1, 0.22, 1] as const;

  return (
    <section id="lab" className="py-20 md:py-28 bg-[#fbfbfb] relative border-t border-black/[0.02] overflow-hidden" ref={containerRef}>
      {/* Subtle titanium mechanics background underlay */}
      <div className="absolute left-0 bottom-0 top-0 w-full md:w-1/2 pointer-events-none opacity-[0.03] select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfb] via-transparent to-[#fbfbfb] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfb] via-transparent to-[#fbfbfb] z-10" />
        <img 
          src={artIndustrial} 
          alt="" 
          className="w-full h-full object-cover filter saturate-50 contrast-125 rotate-90"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Beaker className="text-[#0070f3]" size={16} />
              <span className="font-sans text-sm text-[#0070f3] font-semibold">Creative lab</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.08] text-black">
              Experimental <br />
              <span className="italic font-light text-black/15">Visual Gallery.</span>
            </h2>
          </div>
          <p className="text-black/45 text-sm md:text-base font-light max-w-sm leading-relaxed">
            Experimental web projects exploring real-world typography pairings, physical movement models, and responsive touch mechanics.
          </p>
        </div>

        {/* Unified Experimental Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
          
          {/* Left Column: Interactive Experiment list rows */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="divide-y divide-black/[0.04] border-y border-black/[0.04]">
              {experiments.map((exp) => {
                const isActive = activeId === exp.id;

                return (
                  <div 
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className={`group grid grid-cols-1 md:grid-cols-12 items-center py-6 md:py-8 gap-6 cursor-pointer transition-all duration-500 first:pt-4 last:pb-4 pr-4 relative overflow-hidden ${
                      isActive ? "bg-black/[0.015] pl-6 rounded-2xl border-none" : "hover:bg-black/[0.005]"
                    }`}
                  >
                    {/* Active dynamic slide-in indicators */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute left-0 top-0 bottom-0 w-1 bg-[#0070f3] origin-left"
                          transition={{ duration: 0.4, ease: customEase }}
                        />
                      )}
                    </AnimatePresence>
                    
                    <div className="md:col-span-4">
                      <span className="font-sans text-xs text-[#0070f3] font-medium block mb-1">
                        {exp.category}
                      </span>
                      <h3 className={`text-lg md:text-xl font-display font-medium tracking-tight leading-none transition-colors ${
                        isActive ? "text-[#0070f3]" : "text-black group-hover:text-[#0070f3]"
                      }`}>
                        {exp.title}
                      </h3>
                    </div>
                    
                    <div className="md:col-span-5">
                      <p className={`text-xs md:text-sm font-light leading-relaxed transition-colors ${
                        isActive ? "text-black/60" : "text-black/45 group-hover:text-black/65"
                      }`}>
                        {exp.description}
                      </p>
                    </div>
                    
                    <div className="md:col-span-3 flex justify-end items-center gap-3 shrink-0">
                      <span className="px-3 py-1.5 rounded-full bg-black/[0.03] text-xs font-sans text-black/50 font-medium whitespace-nowrap">
                        {exp.tag}
                      </span>
                      <div className={`w-8 h-8 rounded-full border border-black/5 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        isActive ? "bg-black text-white" : "text-black/35 group-hover:border-black/20 group-hover:text-black"
                      }`}>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Elegant Caption instead of status bar */}
            <div className="mt-8 text-xs text-black/40 font-light flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-red animate-pulse" />
              <span>Select any laboratory item to view its interactive geometry rendering.</span>
            </div>
          </div>

          {/* Right Column: Dynamic Spatial Parallax Vector Preview Window (Col span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 perspective-1000">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY }}
              className="w-full h-full rounded-2xl md:rounded-[1.75rem] border border-black/[0.05] bg-black text-white p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group/preview min-h-[420px] shadow-2xl shadow-black/10 transform-gpu"
            >
              {/* Highly textured Obsidian Monument artwork background inside deep sandbox */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.16] group-hover/preview:opacity-[0.24] transition-opacity duration-700 select-none z-0">
                <img 
                  src={artObsidian} 
                  alt=""
                  className="w-full h-full object-cover filter mix-blend-lighten scale-105 group-hover/preview:scale-100 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px]" />
              
              {/* Intelligent scanline tracking */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-[#0070f3]/45 animate-scanline pointer-events-none" />

              <div className="flex items-start justify-between z-10 w-full">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs text-white/50 font-medium">Interactive sandbox</span>
                  </div>
                  <h4 className="text-lg font-display font-medium tracking-tight text-white/95">{activeExp.title}</h4>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                  <Layers className="text-[#fcbf49]" size={11} />
                  <span className="font-sans text-xs text-white/70 font-medium font-mono">active connection</span>
                </div>
              </div>

              {/* Viewport area displaying active render */}
              <div className="relative flex-1 w-full my-5 bg-white/[0.01] rounded-xl border border-white/5 overflow-hidden flex items-center justify-center min-h-[220px]">
                <VectorBlueprint activeId={activeId} />

                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/5 pointer-events-none select-none">
                  <Eye size={10} className="text-[#fcbf49] animate-pulse" />
                  <span className="font-sans text-xs text-white/80 font-medium animate-pulse">Active view</span>
                </div>
              </div>

              {/* Interactive status footer line */}
              <div className="flex justify-between items-center pt-3 border-t border-white/10 z-10 text-white/40 font-sans text-xs font-medium">
                <span>Illustration</span>
                <span>Active projection</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Nav Hint */}
        <div className="mt-14 flex justify-center">
          <div className="flex items-center gap-3 group cursor-pointer leading-none">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-red animate-ping" />
            <span className="text-[11px] md:text-xs font-light text-black/35 group-hover:text-black transition-colors">
              View more work in our design archives
            </span>
          </div>
        </div>

        {/* Dynamic design laboratory network backlinks */}
        <PageBacklinks pageId="laboratory" />

      </div>
    </section>
  );
}
