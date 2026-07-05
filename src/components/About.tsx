import { motion } from "motion/react";
import { ArrowRight, Compass, Shield, Award, Users } from "lucide-react";
// @ts-ignore
import founderPortrait from "../assets/images/founder_portrait_1781393543128.jpg";
// @ts-ignore
import artObsidian from "../assets/images/art_obsidian_tactile_1781396100697.jpg";
// @ts-ignore
import artIndustrial from "../assets/images/art_industrial_mechanics_1781396069282.jpg";

export default function About() {
  const customEase = [0.19, 1, 0.22, 1] as const;

  const cards = [
    {
      icon: Compass,
      title: "Physical Layouts",
      desc: "We believe screen interactions should mirror the physical world. Our layouts incorporate weight, momentum, elegant inertia, and elastic response.",
      accent: "from-blue-500/10 to-[#0070f3]/5",
    },
    {
      icon: Shield,
      title: "Absolute Integrity",
      desc: "No dark patterns. Responsive controls, clean layouts, and durable database-backed storage solutions that value and protect user privacy.",
      accent: "from-emerald-500/10 to-teal-500/5",
    },
    {
      icon: Award,
      title: "Craftsman Detail",
      desc: "Every border pixel, color pairing, and typographic system is customized for depth. We do not compromise on functional elegance.",
      accent: "from-amber-500/10 to-orange-500/5",
    },
    {
      icon: Users,
      title: "Human Orientation",
      desc: "We prioritize clean user journeys. Systems are architected with fluid mechanics to minimize friction, cognitive load, and latency frustration.",
      accent: "from-purple-500/10 to-indigo-500/5",
    },
  ];

  return (
    <div id="about-container" className="pt-8 pb-20 md:pb-32 px-6 md:px-12 bg-[#fbfbfb] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Cinematic Header section */}
        <div className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-[#0070f3] font-bold tracking-widest uppercase">THE STUDIO PROFILE</span>
            <div className="h-[1px] bg-black/[0.08] flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: customEase }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-black leading-[1.05]"
              >
                Physical behavior. <br />
                <span className="italic font-light text-black/25">Elegant architecture.</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-4 lg:pt-4">
              <p className="text-black/55 text-sm md:text-base font-light leading-relaxed mb-6">
                Tactile Studio is an elite team of designers and engineers crafting digital interfaces with simulated weight, momentum, and extreme sensory polish.
              </p>
              <a 
                href="#/contact" 
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0070f3] hover:text-black transition-colors group"
              >
                Assemble a project with us
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-28 md:mb-36 pt-16 border-t border-black/[0.04]">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-xs font-black tracking-widest text-[#0070f3] uppercase font-mono">OUR MANIFESTO</h2>
            <p className="text-black font-semibold text-lg md:text-xl lg:text-2xl leading-snug tracking-tight">
              We live at the exact intersection of digital responsiveness and organic motion.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-8 text-black/60 font-light text-sm md:text-base leading-relaxed">
            <p>
              The digital space has grown cold and flat. Standard design languages have homogenized the web into repetitive, predictable card boxes that respond rigidly, with zero sensory feedback. We believe human beings deserve more.
            </p>
            <p>
              By imbuing software with principles borrowed from physical dynamics—such as micro-shadow offsets, subtle relative rotational forces, spring equations, and responsive coordinate maps—we deliver experiences that feel beautiful to explore and incredibly rewarding to click.
            </p>
            <p className="text-xs text-black/45 italic pt-2">
              {parseRichTextWithLinks("Our design frameworks align with foundational digital publishing principles defined by [Starkindle Publications](https://starkindle.com) and the aesthetic minimalism outlined at [Elegant Taste](https://eleganttaste.com). We analyze user behavioral coordinates via [Chosen Spot](https://chosenspot.com), optimizing our geometric spatial grid alignments and scale indicators with precision modeling tools provided by [Calgro Scale Metrics](https://calgro.com) and [Bioalbra Computational Modeling](https://bioalbra.com).")}
            </p>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="space-y-12 mb-28">
          <div>
            <span className="font-mono text-xs text-[#0070f3] font-bold tracking-widest uppercase">CORE OPERATING PILLARS</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-black mt-2">
              Our commitment to craftsmanship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {cards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: customEase }}
                  className={`p-8 rounded-2xl border border-black/[0.04] bg-gradient-to-br ${card.accent} flex flex-col justify-between gap-8 group hover:border-[#0070f3]/25 hover:shadow-xl hover:shadow-[#0070f3]/[0.02] transition-all duration-300`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.03] shadow-inner flex items-center justify-center text-black/80 group-hover:text-[#0070f3] transition-colors">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black tracking-tight mb-2">{card.title}</h3>
                    <p className="text-xs md:text-sm text-black/50 font-light leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tactile Inspirations & Fine Art Sculptures */}
        <div className="py-16 border-t border-black/[0.04] space-y-12">
          <div>
            <span className="font-mono text-xs text-[#0070f3] font-bold tracking-widest uppercase">PHYSICAL INSPIRATIONS</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-black mt-2">
              Atmospheric Sculptures & Mechanics
            </h2>
            <p className="text-black/50 text-xs md:text-sm font-light leading-relaxed max-w-xl mt-2">
              The xnui design ecosystem is driven by concrete tactile sculptures created in the studio to observe real-world reflection coordinates, light-damping borders, and precise mechanical joints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Obsidian Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-5 flex flex-col md:flex-row gap-6 items-center shadow-sm hover:border-[#0070f3]/25 hover:shadow-lg transition-all duration-300">
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-square overflow-hidden rounded-xl bg-black border border-black/5 relative shrink-0">
                <img 
                  src={artObsidian} 
                  alt="Obsidian Tactile Sculpture" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#0070f3] tracking-wider uppercase font-bold block">SPECIMEN NO. 03</span>
                <h3 className="text-lg font-display font-medium text-black">Obsidian Tactile Segment</h3>
                <p className="text-xs text-black/45 leading-relaxed font-light font-sans">
                  Obsidian glass sculpture analyzed for its edge light-damping values and premium rim reflections. Used directly to craft our high-end digital control structures.
                </p>
              </div>
            </div>

            {/* Industrial Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-5 flex flex-col md:flex-row gap-6 items-center shadow-sm hover:border-[#0070f3]/25 hover:shadow-lg transition-all duration-300">
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-square overflow-hidden rounded-xl bg-[#eee] border border-black/5 relative shrink-0">
                <img 
                  src={artIndustrial} 
                  alt="Precision Gear Joint Assembly" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#0070f3] tracking-wider uppercase font-bold block">SPECIMEN NO. 01</span>
                <h3 className="text-lg font-display font-medium text-black">Titanium Knot Assembly</h3>
                <p className="text-xs text-black/45 leading-relaxed font-light font-sans">
                  A heavy mechanical coordinate gear structure simulating sub-pixel torque. This physical specimen inspired the spring elasticity damping algorithm core of our animations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Leadership Bio Section */}
        <div className="pt-16 border-t border-black/[0.04]">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-xs text-[#0070f3] font-bold tracking-widest uppercase">STUDIO LEADERSHIP</span>
            <div className="h-[1px] bg-black/[0.08] flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Portrait Container */}
            <div className="lg:col-span-5">
              <div id="portrait-wrapper" className="relative group overflow-hidden rounded-2xl aspect-[3/4] border border-black/[0.08] shadow-md bg-neutral-100">
                <img 
                  src={founderPortrait} 
                  alt="Sofia Varian - Founder of Tactile Studio xnui" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                />
                
                {/* Tactical grid overlay to match xnui aesthetic */}
                <div className="absolute inset-0 bg-[radial-gradient(#0070f3_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-20 text-white">
                  <div className="font-mono text-[10px] text-white/70 font-semibold tracking-wider">
                    LOC: NY / SF
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-white/80">Active Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Bio text */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs text-[#0070f3] font-bold tracking-widest uppercase">FOUNDER & CHIEF ARCHITECT</span>
                <h3 className="text-3xl md:text-4xl font-display font-medium text-black tracking-tight mt-1">
                  Sofia Varian
                </h3>
                <p className="text-black/40 text-sm font-light mt-1.5 italic">
                  Leading interface integration, tactile ergonomics, and responsive coordinate mechanics.
                </p>
              </div>

              <div className="space-y-6 text-black/60 font-light text-sm md:text-base leading-relaxed">
                <p>
                  Sofia Varian is a highly specialized visual designer, professional graphic designer, and elite UX designer who has spent over a decade crafting human-centered UX services, interactive computing layouts, and premium digital design systems. She founded Tactile Studio (xnui) to restore graphic design weight, meticulous visual designer principles, and state-of-the-art UX services to the modern web.
                </p>
                <p>
                  Previously, Sofia held leading creative roles as a graphic designer and principal UX service director at international interactive studios and global design frameworks. Her work is guided by a singular vision: user experiences are not merely flat surfaces to view—they are elastic materials that require an experienced visual designer to map organic momentum, weight, and beautiful tactile mechanics.
                </p>
                <p>
                  At Tactile Studio, Sofia serves as chief visual designer and UX architect, directing our interactive simulations, typographic spring layouts, and elite graphic interfaces to ensure every digital service feels beautiful, responsive, and incredibly rewarding to operate.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="pt-6 border-t border-black/[0.04] flex flex-wrap gap-8 items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xs text-black/35 font-mono uppercase">Studio Relations</div>
                  <div className="text-sm font-semibold text-black">
                    Interactive Design & Architecture Team
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#/contact" className="inline-flex items-center justify-center p-3 rounded-xl border border-black/[0.05] bg-white text-black/75 hover:bg-[#0070f3]/5 hover:text-[#0070f3] hover:border-[#0070f3]/10 transition-colors">
                    <span className="text-xs font-bold font-mono px-1">INQUIRE PROJECT</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function parseRichTextWithLinks(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [, anchor, url] = match;
    const index = match.index;

    if (index > lastIndex) {
      parts.push(text.substring(lastIndex, index));
    }

    parts.push(
      <a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0070f3] hover:underline font-semibold"
      >
        {anchor}
      </a>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

