import { motion } from "motion/react";
import { ArrowRight, Eye, Layers, Monitor, Shuffle, Sliders, Sparkles, Zap, ChevronRight, Target } from "lucide-react";

export default function ServiceUX() {
  const customEase = [0.19, 1, 0.22, 1] as const;

  const methodologySteps = [
    {
      num: "01",
      title: "Interactive Cognitive Mapping",
      desc: "Analyzing visual reading patterns, user intent coordinates, and visual reading friction to eliminate cognitive overload before wireframing.",
    },
    {
      num: "02",
      title: "Micro-Response Prototyping",
      desc: "Creating interactive tactile systems directly in browser state models to simulate real friction, drag, and kinetic responsiveness.",
    },
    {
      num: "03",
      title: "Elastic Grid Orchestration",
      desc: "Developing custom viewport layouts using spring dynamics and Tailwind grids, ensuring pristine typography hierarchy on any desktop size.",
    },
    {
      num: "04",
      title: "Sub-pixel Usability Auditing",
      desc: "Rigorous testing of tap targets, contrast indices, layout shifting, and screen-reader semantics to achieve a flawless technical build.",
    }
  ];

  const packages = [
    {
      name: "Strategic Blueprint Core",
      price: "From $8,500",
      description: "Ideal for startups looking to define core visual systems and interactive user flows.",
      features: [
        "Dynamic high-fidelity wireframes",
        "Interactive component library framework",
        "Core UX research & intent mapping",
        "Responsive CSS layout specifications",
        "Up to 8 custom page templates",
        "2 rounds of comprehensive alignment audits"
      ],
      tag: "Best for Seed Stage"
    },
    {
      name: "Tactile Product Architecture",
      price: "From $18,000",
      description: "Comprehensive end-to-end UX system including motion kinetics, fully functional prototyping, and design systems.",
      features: [
        "Full-scope multi-screen user journey design",
        "Vapor-fast responsive web prototypes",
        "Physics-based spring dynamic styling token sheets",
        "Detailed SEO & content architecture optimization",
        "Custom interaction system engineering guidelines",
        "Up to 20 custom views & state configurations",
        "Dedicated alignment and handover workshops"
      ],
      tag: "Most Popular",
      featured: true
    }
  ];

  return (
    <div className="w-full bg-white text-black py-16 md:py-24" id="service-ux-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-black/45 mb-8">
          <a href="/" className="hover:text-black transition-colors">xnui</a>
          <span>&middot;</span>
          <a href="/services" className="hover:text-black transition-colors">Services</a>
          <span>&middot;</span>
          <span className="text-[#0070f3] font-semibold">Bespoke UI/UX Design</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-900/5 text-xs font-mono text-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-[#0070f3]" />
              <span>Premium UX Service Portfolio Specialist</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-slate-950 leading-tight">
              Bespoke UI/UX Design <br />
              <span className="text-black/55">&amp; Tactile Prototyping</span>
            </h1>

            <p className="text-lg md:text-xl text-black/65 font-light leading-relaxed max-w-2xl">
              We engineer interface architectures that combine strict cognitive layouts with tactile feedback physics. 
              By utilizing responsive viewport ratios and spring mechanics, our design structures feel exceptionally lightweight 
              and visually elite, maximizing engagement and conversion.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="/funnel/audit-request"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold text-sm tracking-tight hover:bg-[#0070f3] transition-all duration-300 shadow-sm active:scale-95"
              >
                Request Custom UX Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-black rounded-full font-semibold text-sm tracking-tight transition-all duration-300"
              >
                Inquire Directly
              </a>
            </div>
          </div>

          {/* Interactive/Visual Floating Card on Right - Overlapping styled photo */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="absolute -top-16 -left-16 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl -z-10" />
            
            {/* Main Outer Container */}
            <div className="relative group">
              
              {/* Back Decorative Underlay Grid/Shadow representing wireframe layers */}
              <div className="absolute inset-0 bg-slate-900/[0.02] border border-black/[0.04] rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-6 group-hover:translate-y-6" />
              
              {/* Main Overlapping Photo Frame */}
              <div className="rounded-3xl border border-black/[0.08] bg-white p-4 shadow-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2 group-hover:shadow-2xl">
                
                {/* Photo Container with subtle rotation */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-black/5 mb-6">
                  <img 
                    src="/src/assets/images/ux_layout_mockup_1783050576285.jpg" 
                    alt="xnui UI/UX High Fidelity Prototyping Grid Mockup" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono font-bold text-white tracking-wider uppercase border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3] animate-pulse" />
                    Interactive Workspace v1.12
                  </div>
                </div>

                {/* Overlapping Interactive Controls & Metadata */}
                <div className="space-y-4 px-2 pb-2">
                  <div className="flex items-center justify-between pb-3 border-b border-black/5">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Sofia Varian Prototyping System</h4>
                      <p className="text-[10px] font-mono text-black/35">CALCULATED COORDINATES &amp; VISUAL FRICTION</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-600 font-extrabold bg-emerald-50 border border-emerald-500/10 px-2 py-0.5 rounded-md">
                      -42.8% FRICTION
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-black/[0.03] space-y-1">
                      <span className="text-[9px] font-mono text-black/35 uppercase block">Spring Response</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-slate-950 font-mono">t_0 = 1.04s</span>
                        <span className="text-[9px] text-[#0070f3] font-bold">Stable</span>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-black/[0.03] space-y-1">
                      <span className="text-[9px] font-mono text-black/35 uppercase block">Crawlability Index</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-slate-950 font-mono">100/100</span>
                        <span className="text-[9px] text-purple-600 font-bold">Perfect</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-orange-200/50 bg-orange-50/40 text-orange-800 text-[11px] flex gap-2.5 items-start">
                    <Zap className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <p className="font-light leading-relaxed">
                      <strong>Conversion Advantage:</strong> Dynamic UI/UX structures drive immediate dwell-time growth, directly triggering Google organic search rankings.
                    </p>
                  </div>
                </div>

              </div>

              {/* Absolute floating physical coordinate card overlapping the main photo */}
              <div className="absolute -bottom-6 -left-6 bg-slate-950 text-white rounded-2xl p-4 shadow-xl border border-white/10 max-w-[200px] hidden md:block transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:-translate-x-2">
                <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-white/10">
                  <span className="text-[9px] font-mono text-slate-400 font-bold">GRID CALIBRATION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <p className="text-[10px] font-mono text-slate-300 leading-normal">
                  sub_pixel_align: <span className="text-emerald-400 font-bold">true</span><br />
                  aspect_ratio: <span className="text-emerald-400 font-bold">1.618</span><br />
                  motion_friction: <span className="text-amber-400">26</span>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Detailed UX Philosophy Copy for deep SEO ranking */}
        <div className="border-t border-black/5 pt-16 mb-24">
          <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-slate-900 mb-6">
                Our Professional UX Philosophy: Dynamic Sensory Layouts
              </h2>
              <div className="space-y-6 text-black/75 font-light leading-relaxed text-base">
                <p>
                  In standard digital portfolios, user experience design is often reduced to basic templates and uninspired visual flows. 
                  At xnui, we treat the web as an elastic, three-dimensional space where user interaction matters. 
                  Every coordinate, spring constant, and hover duration is calculated to create a sense of tactile inertia and weight.
                  Our team utilizes <a href="/services/ux-design/cognitive-friction" className="text-[#0070f3] hover:underline font-semibold decoration-2 decoration-[#0070f3]/30">Cognitive Friction Optimization</a> to eliminate millisecond barriers in tap recognition.
                </p>
                <p>
                  By engineering the underlying front-end components to match human cognitive habits, we achieve near-instantaneous 
                  action recognition. Users don't just navigate the site; they feel the responsive physical feedback of every 
                  drag, swipe, and expansion. Through the integration of <a href="/services/ux-design/tactile-haptics" className="text-indigo-600 hover:underline font-semibold decoration-2 decoration-indigo-600/30">Tactile Viewport Haptics</a>, we replicate physical weight on flat glass.
                </p>
                <p>
                  Furthermore, our systems are pre-rendered with zero runtime hydration lag. Search crawlers receive semantic, 
                  rich schema markup immediately upon page request, guaranteeing that your custom visual architectures rank 
                  remarkably higher across major search engines.
                </p>
              </div>
            </div>

            {/* Layer 3 Nested Sub Index Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-black/[0.04] space-y-4">
              <div>
                <span className="text-[10px] font-mono text-black/45 tracking-wider uppercase block mb-1">NEIGHBORING BLUEPRINTS</span>
                <h3 className="text-sm font-sans font-bold text-slate-950">UX Specialized Modules</h3>
                <p className="text-[11px] text-black/40 font-light mt-0.5 leading-normal">
                  Explore specialized, interactive layout physics models engineered to optimize client session times.
                </p>
              </div>

              <div className="space-y-2.5">
                <a 
                  href="/services/ux-design/cognitive-friction"
                  className="block p-4 rounded-xl bg-white border border-black/5 hover:border-[#0070f3]/30 hover:shadow-xs group transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#0070f3]" />
                      Cognitive Friction
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-black/35 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-black/50 font-light leading-normal">
                    Fitts's Law timing test and adaptive tap-target optimization vectors.
                  </p>
                </a>

                <a 
                  href="/services/ux-design/tactile-haptics"
                  className="block p-4 rounded-xl bg-white border border-black/5 hover:border-indigo-600/30 hover:shadow-xs group transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-indigo-500" />
                      Tactile Haptics
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-black/35 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-black/50 font-light leading-normal">
                    Spring-damper physics modelling and inertia feedback sliders.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Steps Layout */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-sans font-medium tracking-tight text-slate-900">
              The xnui Core UX Service Blueprint
            </h2>
            <p className="text-xs font-mono text-black/45 tracking-widest uppercase mt-2">
              Four sequential steps toward elite interface deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-slate-900/5 bg-slate-50/40 hover:bg-white hover:border-slate-900/10 hover:shadow-xs transition-all duration-300 group"
              >
                <div className="text-3xl font-mono font-bold text-slate-300 group-hover:text-[#0070f3] transition-colors duration-300 mb-4">
                  {step.num}
                </div>
                <h3 className="text-sm font-sans font-bold text-slate-900 tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-black/55 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Capabilities Block */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-slate-400 tracking-widest uppercase block">Expert Capabilities</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium tracking-tight text-white leading-tight">
                Crafted to optimize user retention and search indices.
              </h2>
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                Our user experience templates undergo rigid viewport and physics stress tests to maintain structural stability, ensuring beautiful visual cohesion at any aspect ratio.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[120px]">
                <Monitor className="w-5 h-5 text-[#0070f3]" />
                <div>
                  <span className="text-xs font-mono text-slate-400 block mt-2">Elastic Layouts</span>
                  <span className="text-sm font-sans font-semibold text-white">Full Responsive Viewports</span>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[120px]">
                <Layers className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-xs font-mono text-slate-400 block mt-2">Durable Systems</span>
                  <span className="text-sm font-sans font-semibold text-white">Componentized Styling Tokens</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[120px]">
                <Sliders className="w-5 h-5 text-purple-400" />
                <div>
                  <span className="text-xs font-mono text-slate-400 block mt-2">Physics Controls</span>
                  <span className="text-sm font-sans font-semibold text-white">Spring Dynamics Tuning</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[120px]">
                <Shuffle className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-xs font-mono text-slate-400 block mt-2">Intent Mapping</span>
                  <span className="text-sm font-sans font-semibold text-white">Cognitive Journey Audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing/Packages Layout */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-sans font-medium tracking-tight text-slate-900">
              Pricing structures scaled to your goals
            </h2>
            <p className="text-xs font-mono text-black/45 tracking-widest uppercase mt-2">
              Bespoke visual architecture models with direct consultant hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-3xl border flex flex-col justify-between relative ${
                  pkg.featured 
                    ? 'border-[#0070f3] bg-white shadow-lg shadow-blue-500/5' 
                    : 'border-slate-900/5 bg-slate-50/30'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#0070f3] text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                    {pkg.tag}
                  </span>
                )}
                
                <div>
                  <h3 className="text-xl font-sans font-bold text-slate-900 mb-1">{pkg.name}</h3>
                  <div className="text-2xl font-mono font-bold text-slate-950 mb-3">{pkg.price}</div>
                  <p className="text-xs md:text-sm text-black/55 font-light mb-6 leading-relaxed">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-2.5 items-start text-xs md:text-sm text-black/75">
                        <span className="text-emerald-500 font-bold select-none shrink-0">&#x2713;</span>
                        <span className="font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`/funnel/audit-request?package=${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`w-full py-3 rounded-xl text-center text-xs md:text-sm font-semibold tracking-tight transition-all duration-300 ${
                    pkg.featured 
                      ? 'bg-[#0070f3] text-white hover:bg-blue-600 active:scale-98' 
                      : 'bg-black text-white hover:bg-slate-800 active:scale-98'
                  }`}
                >
                  Initiate Alignment Discussion
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Lead/Conversion Panel */}
        <div className="p-8 md:p-12 rounded-3xl border border-dashed border-slate-900/15 bg-slate-50/50 text-center max-w-3xl mx-auto">
          <Eye className="w-10 h-10 text-slate-400 mx-auto mb-4" />
          <h3 className="text-2xl font-sans font-bold text-slate-900 mb-2">Want to see our physics in action?</h3>
          <p className="text-xs md:text-sm text-black/55 font-light leading-relaxed max-w-lg mx-auto mb-6">
            Schedule a real-time coordinates screenshare with Sofia Varian. We will live-audit your current responsive framework and map immediate speed-efficiency boosts.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full font-semibold text-xs md:text-sm hover:bg-[#0070f3] transition-colors duration-300 active:scale-95"
          >
            Schedule Free 15-Min Consultation
          </a>
        </div>

      </div>
    </div>
  );
}
