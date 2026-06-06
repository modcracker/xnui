import { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Activity, Shield, Zap } from "lucide-react";

function getInteractiveSVG(id: string, hovered: boolean) {
  if (id === "01") {
    return (
      <svg viewBox="0 0 160 80" className={`w-full h-16 transition-all duration-500 transform-gpu ${hovered ? "scale-[1.02]" : ""} select-none`}>
        {/* Fine grid lines */}
        <line x1="20" y1="20" x2="140" y2="20" stroke="#0070f3" strokeWidth="0.3" strokeOpacity="0.15" strokeDasharray="2 4" />
        <line x1="20" y1="60" x2="140" y2="60" stroke="#0070f3" strokeWidth="0.3" strokeOpacity="0.15" strokeDasharray="2 4" />
        
        {/* Core networks connections */}
        <line x1="20" y1="40" x2="60" y2="25" stroke="#0070f3" strokeWidth="0.75" />
        <line x1="60" y1="25" x2="100" y2="55" stroke="#0070f3" strokeWidth="0.75" />
        <line x1="100" y1="55" x2="140" y2="44" stroke="#0070f3" strokeWidth="0.75" />
        <line x1="60" y1="25" x2="140" y2="44" stroke="#e63946" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="3 3" />
        <line x1="20" y1="40" x2="100" y2="55" stroke="#fcbf49" strokeWidth="0.5" strokeOpacity="0.3" />
        
        <circle cx="20" cy="40" r="3.5" fill="#0070f3" />
        <motion.circle 
          cx="60" cy="25" r={hovered ? 6 : 5} 
          fill="#e63946" 
          animate={hovered ? { r: [6, 9, 6], fill: ["#e63946", "#0070f3", "#e63946"] } : { r: [5, 7, 5], fill: ["#e63946", "#0070f3", "#e63946"] }} 
          transition={{ duration: hovered ? 1.5 : 4, repeat: Infinity, ease: "easeInOut" }} 
        />
        <circle cx="100" cy="55" r="3" fill="#fcbf49" />
        <motion.circle 
          cx="140" cy="44" r={hovered ? 7 : 5.5} 
          fill="#0070f3" 
          animate={{ opacity: hovered ? [0.6, 1, 0.6] : [0.4, 0.9, 0.4] }} 
          transition={{ duration: hovered ? 1.2 : 3, repeat: Infinity, ease: "easeInOut" }} 
        />
      </svg>
    );
  }

  if (id === "02") {
    return (
      <svg viewBox="0 0 160 80" className={`w-full h-16 transition-all duration-500 transform-gpu ${hovered ? "scale-[1.02]" : ""} select-none`}>
        {/* Clean dynamic waves */}
        <motion.path
          d="M 10,40 Q 30,10 50,40 T 90,40 T 130,40 T 150,40"
          fill="none"
          stroke="#f77f00"
          strokeWidth={hovered ? 1.8 : 1.4}
          animate={{ strokeDashoffset: [0, -120] }}
          transition={{ duration: hovered ? 6 : 15, repeat: Infinity, ease: "linear" }}
          style={{ strokeDasharray: "8 4" }}
        />
        <motion.path
          d="M 10,40 Q 30,70 50,40 T 90,40 T 130,40 T 150,40"
          fill="none"
          stroke="#fcbf49"
          strokeWidth={hovered ? 1.2 : 0.75}
          strokeOpacity={hovered ? 0.85 : 0.4}
          animate={{ strokeDashoffset: [0, 120] }}
          transition={{ duration: hovered ? 4 : 10, repeat: Infinity, ease: "linear" }}
          style={{ strokeDasharray: "4 4" }}
        />
        {/* Central measuring ticks */}
        <line x1="80" y1="15" x2="80" y2="65" stroke="#0070f3" strokeWidth="0.4" strokeOpacity="0.4" strokeDasharray="1 3" />
      </svg>
    );
  }

  if (id === "03") {
    return (
      <svg viewBox="0 0 160 80" className={`w-full h-16 transition-all duration-500 transform-gpu ${hovered ? "scale-[1.02]" : ""} select-none`}>
        {/* Beautiful high fidelity concentric compass widget */}
        <circle cx="80" cy="40" r="28" fill="none" stroke="#e63946" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="1 5" />
        <circle cx="80" cy="40" r="24" fill="none" stroke="#e63946" strokeWidth="0.5" strokeOpacity="0.15" />
        <motion.circle 
          cx="80" cy="40" r="18" 
          fill="none" stroke="#e63946" strokeWidth={hovered ? 1.6 : 1.2}
          animate={{ rotate: 360 }}
          style={{ transformOrigin: "80px 40px" }}
          transition={{ duration: hovered ? 5 : 12, repeat: Infinity, ease: "linear" }}
          strokeDasharray="16 6"
        />
        <motion.circle 
          cx="80" cy="40" r="12" 
          fill="none" stroke="#0070f3" strokeWidth="0.75" strokeOpacity={hovered ? 0.8 : 0.5}
          animate={{ rotate: -360 }}
          style={{ transformOrigin: "80px 40px" }}
          transition={{ duration: hovered ? 3 : 8, repeat: Infinity, ease: "linear" }}
          strokeDasharray="6 4"
        />
        <circle cx="80" cy="40" r="3.5" fill="#0070f3" />
      </svg>
    );
  }

  // id === "04" / user alignment
  return (
    <svg viewBox="0 0 160 80" className={`w-full h-16 transition-all duration-500 transform-gpu ${hovered ? "scale-[1.02]" : ""} select-none`}>
      {/* Clean data flow bus */}
      <line x1="15" y1="20" x2="145" y2="20" stroke="#fcbf49" strokeWidth="0.4" strokeOpacity="0.35" />
      <line x1="15" y1="40" x2="145" y2="40" stroke="#0070f3" strokeWidth="0.4" strokeOpacity="0.2" />
      <line x1="15" y1="60" x2="145" y2="60" stroke="#e63946" strokeWidth="0.4" strokeOpacity="0.2" />
      
      {/* Sliding logic packets */}
      <motion.rect 
        x="20" y="17" width="28" height="6" rx="3" 
        fill="#0070f3" 
        animate={{ x: [20, 110, 20] }} 
        transition={{ duration: hovered ? 3 : 7, repeat: Infinity, ease: "easeInOut" }} 
      />
      <motion.rect 
        x="90" y="37" width="36" height="6" rx="3" 
        fill="#fcbf49" 
        animate={{ x: [90, 20, 90] }} 
        transition={{ duration: hovered ? 2.2 : 5.5, repeat: Infinity, ease: "easeInOut" }} 
      />
      <motion.rect 
        x="35" y="57" width="22" height="6" rx="3" 
        fill="#e63946" 
        animate={{ opacity: hovered ? [0.6, 1, 0.6] : [0.3, 1, 0.3], x: [35, 120, 35] }} 
        transition={{ duration: hovered ? 2.5 : 6, repeat: Infinity, ease: "easeInOut" }} 
      />
    </svg>
  );
}

interface ServiceConfig {
  id: string;
  label: string;
  title: string;
  desc: string;
  icon: typeof Cpu;
  color: string;
  svg: React.ReactNode;
}

const services: ServiceConfig[] = [
  {
    id: "01",
    label: "Interface Design",
    title: "Warm & Logical Layouts",
    desc: "Intentionally crafted layouts concentrating on absolute clarity, generous negative spaces, and premium typography.",
    icon: Cpu,
    color: "#0070f3",
    svg: (
      <svg viewBox="0 0 160 80" className="w-full h-16 select-none opacity-50">
        <line x1="20" y1="20" x2="140" y2="20" stroke="#0070f3" strokeWidth="0.3" strokeOpacity="0.15" strokeDasharray="2 4" />
        <line x1="20" y1="60" x2="140" y2="60" stroke="#0070f3" strokeWidth="0.3" strokeOpacity="0.15" strokeDasharray="2 4" />
        <line x1="20" y1="40" x2="60" y2="25" stroke="#0070f3" strokeWidth="0.75" />
        <line x1="60" y1="25" x2="100" y2="55" stroke="#0070f3" strokeWidth="0.75" />
        <line x1="100" y1="55" x2="140" y2="44" stroke="#0070f3" strokeWidth="0.75" />
        <line x1="60" y1="25" x2="140" y2="44" stroke="#e63946" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="3 3" />
        <circle cx="20" cy="40" r="3.5" fill="#0070f3" />
        <circle cx="60" cy="25" r="5" fill="#e63946" />
        <circle cx="100" cy="55" r="3" fill="#fcbf49" />
        <circle cx="140" cy="44" r="5.5" fill="#0070f3" />
      </svg>
    )
  },
  {
    id: "02",
    label: "Motion & Feel",
    title: "Organic Choreography",
    desc: "Delightful transitions, tactile hover feedback, and micro-interactions that make navigation feel completely fluid.",
    icon: Activity,
    color: "#f77f00",
    svg: (
      <svg viewBox="0 0 160 80" className="w-full h-16 select-none opacity-50">
        <path
          d="M 10,40 Q 30,10 50,40 T 90,40 T 130,40 T 150,40"
          fill="none"
          stroke="#f77f00"
          strokeWidth="1.4"
          style={{ strokeDasharray: "8 4" }}
        />
        <path
          d="M 10,40 Q 30,70 50,40 T 90,40 T 130,40 T 150,40"
          fill="none"
          stroke="#fcbf49"
          strokeWidth="0.75"
          style={{ strokeDasharray: "4 4" }}
        />
        <line x1="80" y1="15" x2="80" y2="65" stroke="#0070f3" strokeWidth="0.4" strokeOpacity="0.4" strokeDasharray="1 3" />
      </svg>
    )
  },
  {
    id: "03",
    label: "Safety & Privacy",
    title: "Honest Security",
    desc: "Rigorous standards and data-isolation layers designed to ensure that keys and user logins remain safe and private.",
    icon: Shield,
    color: "#e63946",
    svg: (
      <svg viewBox="0 0 160 80" className="w-full h-16 select-none opacity-50">
        <circle cx="80" cy="40" r="28" fill="none" stroke="#e63946" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="1 5" />
        <circle cx="80" cy="40" r="24" fill="none" stroke="#e63946" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="80" cy="40" r="18" fill="none" stroke="#e63946" strokeWidth="1.2" strokeDasharray="16 6" />
        <circle cx="80" cy="40" r="12" fill="none" stroke="#0070f3" strokeWidth="0.75" strokeDasharray="6 4" />
        <circle cx="80" cy="40" r="3.5" fill="#0070f3" />
      </svg>
    )
  },
  {
    id: "04",
    label: "User Alignment",
    title: "Intuitive Flow",
    desc: "Clear layouts and step-by-step assistance that take the stress out of digital tasks and guide users naturally.",
    icon: Zap,
    color: "#fcbf49",
    svg: (
      <svg viewBox="0 0 160 80" className="w-full h-16 select-none opacity-50">
        <line x1="15" y1="20" x2="145" y2="20" stroke="#fcbf49" strokeWidth="0.4" strokeOpacity="0.35" />
        <line x1="15" y1="40" x2="145" y2="40" stroke="#0070f3" strokeWidth="0.4" strokeOpacity="0.2" />
        <line x1="15" y1="60" x2="145" y2="60" stroke="#e63946" strokeWidth="0.4" strokeOpacity="0.2" />
        <rect x="20" y="17" width="28" height="6" rx="3" fill="#0070f3" />
        <rect x="90" y="37" width="36" height="6" rx="3" fill="#fcbf49" />
        <rect x="35" y="57" width="22" height="6" rx="3" fill="#e63946" />
      </svg>
    )
  }
];


export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Premium staggered entries
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const }
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#ffffff] relative border-b border-b-black/[0.02]">
      {/* Structural geometric background lines */}
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 pointer-events-none border-y border-black/[0.02]">
        <div className="border-r border-black/[0.02]" />
        <div className="border-r border-black/[0.02]" />
        <div className="border-r border-black/[0.02]" />
        <div />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header block with refined, elegant copywriting */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-sans text-sm text-[#0070f3] font-semibold">Studio focus areas</span>
            <div className="flex-1 h-[1px] bg-black/[0.04]" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.08] max-w-2xl text-black">
                The Architecture <br />
                <span className="text-black/15 italic font-light">of Natural Interactions.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-black/45 text-sm md:text-base font-light leading-relaxed">
                We believe software should feel human, readable, and incredibly tactile. We build custom websites that respect user visual focus and attention.
              </p>
            </div>
          </div>
        </div>

        {/* Cohesive Bento / Horizontal Grid of Capabilities */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-10"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            const isHovered = hoveredCard === svc.id;

            return (
              <motion.div
                key={svc.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(svc.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative flex flex-col justify-between p-6 rounded-2xl md:rounded-[1.75rem] border border-black/[0.04] bg-[#fcfcfc] hover:border-black/15 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-black/5"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div 
                      className="p-3.5 rounded-xl bg-black/[0.02] text-black/50 transition-all duration-300 flex items-center justify-center shadow-inner group-hover:text-white"
                      style={{ 
                        backgroundColor: isHovered ? svc.color : undefined,
                      }}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span 
                      className="font-sans text-xs font-semibold block"
                      style={{ color: svc.color }}
                    >
                      {svc.label}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-medium leading-none tracking-tight text-black transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs md:text-sm text-black/45 font-light leading-relaxed transition-colors">
                      {svc.desc}
                    </p>
                  </div>
                </div>

                {/* Minimal, continuous vector visualizer at the bottom */}
                <div className="mt-8 pt-4 border-t border-black/[0.02] overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-sans text-xs text-black/45 font-medium">Interactive preview</span>
                  </div>
                  <div className="relative w-full opacity-70 group-hover:opacity-100 transition-opacity">
                    {getInteractiveSVG(svc.id, isHovered)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Boutique Studio Status */}
        <div className="mt-20 pt-12 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] md:text-xs text-black/35 font-light max-w-md text-center md:text-left">
            Carefully designed interfaces with a focus on tactile interaction. Have a unique interface mockup or custom responsive blueprint in mind? We'd love to chat.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#/contact" 
              className="px-5 py-2.5 bg-black text-white hover:bg-[#0070f3] rounded-full text-xs font-semibold tracking-tight transition-all duration-300 shadow-md shadow-black/5 hover:shadow-lg hover:shadow-[#0070f3]/10 active:scale-95"
            >
              Contact Us
            </a>
            <div className="flex gap-2">
              {["#0070f3", "#f77f00", "#e63946", "#fcbf49"].map((color, i) => (
                <motion.div 
                  key={i} 
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
