import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import MachineCore from "./MachineCore";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Dynamic scroll displacement horizontal range based on screen width
  const [scrollRangeX, setScrollRangeX] = useState(380);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScrollRangeX(110); // Subtle shift on mobile with ample screen margin
      } else if (window.innerWidth < 1024) {
        setScrollRangeX(240);
      } else {
        setScrollRangeX(380); // Full luxurious sliding offset on wide desktop monitors
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const yTranslate = useTransform(scrollY, [0, 500], [0, 80]);
  
  // Custom synced coordinate projections for parallax mapping
  const xMachine = useTransform(scrollY, [0, 600], [0, scrollRangeX]);
  const yMachine = useTransform(scrollY, [0, 600], [0, -45]);
  const scaleMachine = useTransform(scrollY, [0, 600], [1, 0.84]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.98]);

  // Premium transitions easing
  const customEase = [0.19, 1, 0.22, 1] as const;

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 py-12 md:py-20 overflow-hidden bg-[#fbfbfb]">
      {/* Structural Minimal Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-black/[0.015] pointer-events-none" />
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-black/[0.015] pointer-events-none" />
      <div className="absolute inset-x-0 top-1/3 h-[1px] bg-black/[0.015] pointer-events-none" />

      {/* Ambient Radial Soft Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: customEase }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[600px] md:h-[600px] bg-electric-blue/[0.04] blur-[100px] md:blur-[140px] rounded-full pointer-events-none z-0" 
      />

      {/* Dynamic Multi-layered Billowing Chiffon Sheets representing fluid folds */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 md:opacity-60 mix-blend-multiply">
        <svg className="absolute top-[5%] left-0 w-full h-[90%] min-h-[550px]" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chiffonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0070f3" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#0070f3" stopOpacity="0.015" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chiffonGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e63946" stopOpacity="0.02" />
              <stop offset="40%" stopColor="#0070f3" stopOpacity="0.03" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chiffonGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fcbf49" stopOpacity="0.015" />
              <stop offset="60%" stopColor="#0070f3" stopOpacity="0.035" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Underlay layer: Back fold */}
          <motion.path
            animate={{
              d: [
                "M-100,250 C150,150 450,420 750,220 C1050,20 1200,320 1540,150 L1540,650 L-100,650 Z",
                "M-100,210 C180,320 400,120 700,350 C1000,580 1250,120 1540,240 L1540,650 L-100,650 Z",
                "M-100,290 C120,200 480,320 720,180 C960,40 1300,220 1540,110 L1540,650 L-100,650 Z",
                "M-100,250 C150,150 450,420 750,220 C1050,20 1200,320 1540,150 L1540,650 L-100,650 Z"
              ],
              y: [0, -15, 10, 0]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            fill="url(#chiffonGrad1)"
          />

          {/* Middle layer: Silky flowing drape fold */}
          <motion.path
            animate={{
              d: [
                "M-100,320 C200,450 500,180 800,380 C1100,580 1300,220 1540,320 L1540,650 L-100,650 Z",
                "M-100,380 C150,220 450,400 850,220 C1250,40 1200,380 1540,280 L1540,650 L-100,650 Z",
                "M-100,290 C250,380 550,240 750,420 C950,600 1350,180 1540,350 L1540,650 L-100,650 Z",
                "M-100,320 C200,450 500,180 800,380 C1100,580 1300,220 1540,320 L1540,650 L-100,650 Z"
              ],
              y: [0, 10, -12, 0]
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            fill="url(#chiffonGrad2)"
          />

          {/* Foreground active layer: Elegant micro ripples */}
          <motion.path
            animate={{
              d: [
                "M-100,420 C300,320 600,480 900,320 C1200,160 1300,450 1540,400 L1540,650 L-100,650 Z",
                "M-100,400 C250,480 620,300 880,450 C1140,600 1320,320 1540,450 L1540,650 L-100,650 Z",
                "M-100,440 C350,250 580,500 920,280 C1260,60 1280,480 1540,380 L1540,650 L-100,650 Z",
                "M-100,420 C300,320 600,480 900,320 C1200,160 1300,450 1540,400 L1540,650 L-100,650 Z"
              ],
              x: [0, 8, -8, 0],
              y: [0, -5, 12, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            fill="url(#chiffonGrad3)"
          />
        </svg>
      </div>

      {/* Immersive 3D Interactive Waving Flag Canvas filling up the whole page backdrop */}
      <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center overflow-hidden pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1], // Soft majestic fade and scale entry
          }}
          className="w-full h-full max-w-full max-h-full flex items-center justify-center overflow-visible select-none"
        >
          <motion.div 
            style={{ x: xMachine, y: yMachine, scale: scaleMachine, opacity }} 
            className="w-full h-full flex items-center justify-center overflow-visible pointer-events-auto hover:scale-[1.005] transition-transform duration-300"
          >
            <MachineCore />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating text content layer overlayed elegantly in front of the waving flag background */}
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 z-20 max-w-sm w-[calc(100%-3rem)] text-left flex flex-col items-start pointer-events-none">
        {/* Elegant typography header */}
        <div className="pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: customEase }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-[-0.03em] leading-[1.15] text-black text-balance"
          >
            Tactile <span className="italic text-[#0070f3] font-serif">interfaces</span>.
          </motion.h1>
        </div>

        {/* Subtitle wording with clean spacing with matching ease */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: customEase }}
          className="text-xs md:text-sm text-black/60 max-w-xs text-left font-light mt-3 mb-6 tracking-tight leading-relaxed text-balance pointer-events-auto font-sans"
        >
          Digital design with simulated physical behavior.
        </motion.p>

        {/* Streamlined Call to Action button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: customEase }}
          className="flex justify-start pointer-events-auto"
        >
          <button 
            onClick={() => { window.location.hash = "#/contact"; }}
            aria-label="Navigate to contact page to start a project"
            className="group relative flex items-center gap-4 px-6 py-3.5 bg-black text-white rounded-full transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/15 overflow-hidden cursor-pointer outline-none hover:shadow-2xl hover:shadow-[#0070f3]/10"
          >
            <span className="relative z-10 text-xs md:text-sm font-semibold tracking-tight font-sans">Start a project</span>
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0070f3] transition-colors relative z-10">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-45 transition-transform duration-300">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Sliding lighting sheen background element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0070f3]/30 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer pointer-events-none" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
