import { motion } from "motion/react";
import { ArrowRight, Code, Cpu, ExternalLink, HardDrive, Layout, RefreshCw, Sparkles, Terminal, ChevronRight, Activity } from "lucide-react";

export default function ServiceWeb() {
  const customEase = [0.19, 1, 0.22, 1] as const;

  const stackFeatures = [
    {
      title: "React 19 & Vite ESM Build Flow",
      desc: "Zero-bloat, custom-bundled production compilation. No massive runtime libraries, ensuring near-instantaneous interactivity benchmarks.",
    },
    {
      title: "Tailwind CSS Layout Engine",
      desc: "Pure utility compilation resulting in ultra-small CSS assets, avoiding complex styling rules and layout shifting.",
    },
    {
      title: "Spring & Mass-Particle Physics",
      desc: "Integration of lightweight physical movement formulas directly in client-side state models, providing beautiful kinetic layouts.",
    },
    {
      title: "Semantic HTML5 Schema Structure",
      desc: "Meticulous inclusion of unique IDs, structural ARIA declarations, and dynamic JSON-LD structured data to maximize SEO index health.",
    }
  ];

  return (
    <div className="w-full bg-white text-black py-16 md:py-24" id="service-web-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-black/45 mb-8">
          <a href="/" className="hover:text-black transition-colors">xnui</a>
          <span>&middot;</span>
          <a href="/services" className="hover:text-black transition-colors">Services</a>
          <span>&middot;</span>
          <span className="text-[#0070f3] font-semibold">Web Mechanics</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-mono text-emerald-700">
              <Cpu className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>Interactive Engineering & UI Mechanics</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-slate-950 leading-tight">
              Interactive Web Mechanics <br />
              <span className="text-black/55">&amp; Front-End Engineering</span>
            </h1>

            <p className="text-lg md:text-xl text-black/65 font-light leading-relaxed max-w-2xl">
              We translate custom design files into ultra-responsive web experiences. By combining React with custom coordinate calculations, we build high-performance front-end systems that load instantly and rank perfectly.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="/funnel/audit-request?ref=web-mechanics"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold text-sm tracking-tight hover:bg-emerald-600 transition-all duration-300 shadow-sm active:scale-95"
              >
                Launch Technical Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/laboratory"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-black rounded-full font-semibold text-sm tracking-tight transition-all duration-300"
              >
                Enter Sandbox Lab
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl -z-10" />
            
            <div className="relative group">
              
              {/* Decorative engineering underlay frame */}
              <div className="absolute inset-0 bg-slate-900/[0.03] border border-black/[0.04] rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-6 group-hover:translate-y-6" />
              
              {/* Main Outer Frame */}
              <div className="rounded-3xl border border-black/[0.08] bg-white p-4 shadow-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2 group-hover:shadow-2xl">
                
                {/* Image Container */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 mb-6">
                  <img 
                    src="/src/assets/images/web_mechanics_performance_1783050599023.jpg" 
                    alt="xnui Web Mechanics & Front-End Performance Engineering" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  
                  {/* Performance metric badge on image */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/90 backdrop-blur-md text-[10px] font-mono font-bold text-emerald-400 border border-emerald-500/20 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    INP RESPONSIVENESS &lt; 12ms
                  </div>
                </div>

                {/* Performance Code / Stats Overlay */}
                <div className="space-y-4 px-2 pb-2">
                  <div className="flex items-center justify-between pb-3 border-b border-black/5">
                    <div>
                      <h4 className="text-xs font-bold text-slate-950 font-sans">Spring &amp; Mass Kinetics Engine</h4>
                      <p className="text-[9px] font-mono text-black/35">DAMPING CODES &amp; COGNITIVE MOTION</p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-500/10 px-2 py-0.5 rounded font-bold">
                      CLS: 0.000s
                    </span>
                  </div>

                  {/* Tiny Interactive Math Simulation display */}
                  <div className="p-3 bg-slate-950 text-slate-300 rounded-xl font-mono text-[10px] leading-relaxed border border-white/5 relative">
                    <div className="absolute top-2.5 right-3 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-emerald-400 block mb-1 font-bold">SpringPhysics.ts</span>
                    <p className="text-slate-400">
                      damping = Math.sqrt(4 * mass * tension);<br />
                      dampingRatio = friction / damping; <span className="text-[#0070f3]">// 0.72 (Underdamped)</span>
                    </p>
                  </div>

                  {/* Core Web Vital indicators */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-black/[0.03] flex items-center justify-between">
                      <span className="text-[9px] font-mono text-black/45 uppercase">LCP Speed</span>
                      <span className="text-xs font-bold text-slate-950 font-mono">0.48s</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-black/[0.03] flex items-center justify-between">
                      <span className="text-[9px] font-mono text-black/45 uppercase">Speed Index</span>
                      <span className="text-xs font-bold text-slate-950 font-mono">100/100</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Absolute floating telemetry block */}
              <div className="absolute -bottom-6 -right-6 bg-slate-950 text-white rounded-2xl p-4 shadow-xl border border-white/10 max-w-[190px] hidden md:block transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:translate-x-2">
                <div className="font-mono text-[9px] text-emerald-400 font-extrabold mb-1">LIGHTHOUSE BENCHMARK</div>
                <p className="text-[10px] text-slate-300 font-light leading-relaxed">
                  No layout shifting, no heavy JS imports, pure utility-first rendering. Built to last and rank.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Technical Strategy & SEO */}
        <div className="border-t border-black/5 pt-16 mb-24">
          <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-slate-900 mb-6">
                Why Zero-Lag Interactive Architecture Dominates Organic Search Ranks
              </h2>
              <div className="space-y-6 text-black/75 font-light leading-relaxed text-base">
                <p>
                  Modern search engine ranking systems have evolved far beyond standard metadata insertion. 
                  With Core Web Vitals, algorithms directly track Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). 
                  If a user clicks your site and encounters layout stutter or delayed button feedback, your organic domain health falls instantly.
                  That is why we develop utilizing rigid <a href="/services/web-mechanics/layout-stability" className="text-emerald-600 hover:underline font-semibold decoration-2 decoration-emerald-600/30">Zero Layout Shift Mechanics</a> to achieve absolute structural layout stability.
                </p>
                <p>
                  Our front-end engineering strategy is built to prevent performance issues. 
                  By utilizing compiled React structures and keeping kinetic simulations inside low-overhead canvas wrappers modeled on <a href="/services/web-mechanics/elastic-physics" className="text-[#0070f3] hover:underline font-semibold decoration-2 decoration-[#0070f3]/30">Elastic Motion Physics</a>, we guarantee zero hydration delays. 
                  Users get immediate, fluid visual responses, while search bots receive clean, highly structured, pre-rendered markup. 
                  This elite architectural standard keeps your site performant, beautiful, and exceptionally well-ranked.
                </p>
              </div>
            </div>

            {/* Layer 3 Nested Sub Index Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-black/[0.04] space-y-4">
              <div>
                <span className="text-[10px] font-mono text-black/45 tracking-wider uppercase block mb-1">NEIGHBORING BLUEPRINTS</span>
                <h3 className="text-sm font-sans font-bold text-slate-950">Web Specialized Modules</h3>
                <p className="text-[11px] text-black/40 font-light mt-0.5 leading-normal">
                  Explore specialized Verlet particles and layout shift core vital simulators.
                </p>
              </div>

              <div className="space-y-2.5">
                <a 
                  href="/services/web-mechanics/elastic-physics"
                  className="block p-4 rounded-xl bg-white border border-black/5 hover:border-[#0070f3]/30 hover:shadow-xs group transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-[#0070f3]" />
                      Elastic Physics
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-black/35 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-black/50 font-light leading-normal">
                    Interactive Verlet mass-spring particle canvas and physical constraint modelers.
                  </p>
                </a>

                <a 
                  href="/services/web-mechanics/layout-stability"
                  className="block p-4 rounded-xl bg-white border border-black/5 hover:border-emerald-500/30 hover:shadow-xs group transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
                      <Layout className="w-3.5 h-3.5 text-emerald-500" />
                      Layout Stability (CLS)
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-black/35 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-black/50 font-light leading-normal">
                    Lighthouse CLS layout shift emulator and responsive skeleton guards.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stack Highlights */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-sans font-medium tracking-tight text-slate-900">
              The xnui Engineering Stack
            </h2>
            <p className="text-xs font-mono text-black/45 tracking-widest uppercase mt-2">
              High-performance technologies tuned for SEO supremacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {stackFeatures.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-900/5 bg-slate-50/30 hover:border-emerald-500/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <h3 className="text-base font-sans font-bold text-slate-950 tracking-tight">{feat.title}</h3>
                </div>
                <p className="text-sm text-black/65 font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Stats Block */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-800/55">
            <div className="py-4 md:py-0">
              <div className="font-mono text-4xl md:text-5xl font-bold text-emerald-400">100/100</div>
              <span className="text-xs font-mono text-emerald-200 uppercase tracking-widest mt-2 block">Lighthouse Speed</span>
            </div>
            <div className="py-4 md:py-0">
              <div className="font-mono text-4xl md:text-5xl font-bold text-emerald-400">&lt; 0.1s</div>
              <span className="text-xs font-mono text-emerald-200 uppercase tracking-widest mt-2 block">Interactive Response</span>
            </div>
            <div className="py-4 md:py-0">
              <div className="font-mono text-4xl md:text-5xl font-bold text-emerald-400">0.000s</div>
              <span className="text-xs font-mono text-emerald-200 uppercase tracking-widest mt-2 block">Cumulative Layout Shift</span>
            </div>
          </div>
        </div>

        {/* Technical Callout */}
        <div className="p-8 md:p-12 rounded-3xl border border-dashed border-emerald-900/20 bg-emerald-50/20 text-center max-w-3xl mx-auto">
          <Code className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-2xl font-sans font-bold text-slate-900 mb-2">Want to audit your site's core web vitals?</h3>
          <p className="text-xs md:text-sm text-black/55 font-light leading-relaxed max-w-lg mx-auto mb-6">
            We will run a high-fidelity visual and technical sweep of your current front-end setup, mapping out actionable code optimizations to boost load velocities and crawling health.
          </p>
          <a 
            href="/funnel/audit-request?ref=web-performance" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white hover:bg-emerald-600 rounded-full font-semibold text-xs md:text-sm transition-colors duration-300 active:scale-95"
          >
            Request Instant Usability Audit
          </a>
        </div>

      </div>
    </div>
  );
}
