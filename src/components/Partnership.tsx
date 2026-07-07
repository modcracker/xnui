import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, BadgeCheck, ShieldAlert, Sparkles, Layers, Cpu } from "lucide-react";
import PageBacklinks from "./PageBacklinks";

// @ts-ignore
import artBlueprint from "../assets/images/art_parametric_blueprint_1781396116015.jpg";

export default function Partnership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] } as any,
    },
  };

  return (
    <div id="partnership-page" className="min-h-screen bg-[#fcfcfc] text-[#0f172a] pt-24 pb-32 px-6 relative overflow-hidden">
      {/* High-fidelity full-screen artistic mechanical blueprint backdrop */}
      <div className="absolute left-0 right-0 top-0 h-[650px] pointer-events-none opacity-[0.038] select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fcfcfc] z-10" />
        <img 
          src={artBlueprint} 
          alt="" 
          className="w-full h-full object-cover filter saturate-50 contrast-125"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Decorative Blueprint/Grid Backgrounds to reinforce tactile tech theme */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <a
            href="#/home"
            className="inline-flex items-center gap-2.5 text-xs font-semibold text-slate-500 hover:text-black transition-colors group select-none"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO EXPERIMENTAL LABORATORY
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          
          {/* Header Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              <BadgeCheck size={13} className="animate-pulse" />
              Verified Strategic Alliance
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight font-black leading-none bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 bg-clip-text text-transparent">
              Synergizing Physical Touch & Digital Design.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600/90 font-light leading-relaxed max-w-2xl">
              XNUI is officially partnered with Feelize to develop revolutionary sensory design models. We blend advanced spatial algorithms with responsive layout paradigms.
            </p>
          </motion.div>

          {/* Connected Logos Interactive Display */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-5 items-center gap-8 bg-white border border-slate-200/80 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative"
          >
            {/* Connection Line */}
            <div className="absolute left-1/2 top-1/2 w-48 h-[1px] bg-gradient-to-r from-blue-500 to-slate-400 -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-40 border-t border-dashed border-spacing-1" />

            <div className="col-span-2 flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-2xl font-black tracking-tighter mb-4 text-slate-800 flex items-center gap-1 select-none">
                <span className="w-2.5 h-2.5 rounded bg-blue-600" />
                xnui
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">TACTILE LABS</span>
            </div>

            <div className="col-span-1 flex justify-center text-slate-300 text-2xl font-semibold">
              &times;
            </div>

            <div className="col-span-2 flex flex-col items-center p-6 bg-[#f0f4ff] rounded-xl border border-blue-100/50">
              <div className="w-12 h-12 rounded-xl overflow-hidden mb-3 shadow-md border border-blue-100">
                <img 
                  src="/feelize_logo.svg" 
                  className="w-full h-full object-cover" 
                  alt="Feelize Logo" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest">FEELIZE CORP</span>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="bg-white p-6 rounded-xl border border-slate-100 space-y-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <Cpu size={16} />
              </div>
              <h3 className="font-bold text-base text-slate-900">Tactile Modeling API</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                Utilizing state-of-the-art interactive micro-physics engines to simulate authentic material reactions inside clean viewport coordinates. Feelize empowers XNUI mechanics to reach unparalleled feedback speed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 space-y-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Layers size={16} />
              </div>
              <h3 className="font-bold text-base text-slate-900">Fluid Grid Layouts</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                Collaborative interface paradigms configured to respond instantly to physical user actions. We eliminate static boundaries with elastic components anchored in reliable mechanical feedback modules.
              </p>
            </div>
          </motion.div>

          {/* Verified Official Seal Callout Banner */}
          <motion.div 
            variants={itemVariants} 
            className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm border border-blue-100 flex-shrink-0">
              <Sparkles size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-base">Direct Integration Protocol</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                All laboratory widgets hosted in this space comply with the standards set forth by the official Feelize Partnership Directorate. Certified safe, fast, and accessible.
              </p>
            </div>
          </motion.div>

          {/* Giant External Call to Action Button */}
          <motion.div variants={itemVariants} className="flex flex-col items-center pt-8 border-t border-slate-200/60">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-400 mb-6 uppercase">
              VISIT THE SYSTEM REGISTRY
            </span>
            <a
              href="https://feelize.com/go"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-[480px] h-24 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-sans text-xl font-extrabold flex items-center justify-between px-8 gap-4 shadow-[0_10px_35px_rgba(37,99,235,0.25)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] transition-all duration-350 select-none transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] overflow-hidden"
            >
              {/* Shine highlight animation on hover */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              <div className="flex flex-col text-left">
                <span className="text-[10px] tracking-widest text-blue-200/80 font-mono font-bold uppercase mb-0.5">LAUNCH OFFICIAL PORTAL</span>
                <span>FEELIZE.COM</span>
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-white/15 group-hover:bg-white/20 transition-colors flex items-center justify-center text-white flex-shrink-0">
                <ExternalLink size={20} className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              </div>
            </a>
          </motion.div>

          {/* Subtly embedded partner registry backlink coordinates */}
          <PageBacklinks pageId="partnership" />

        </motion.div>
      </div>
    </div>
  );
}
