import { motion } from "motion/react";
import { ArrowRight, Compass, Eye, Feather, Layers, Palette, Sparkles, Star, ChevronRight, Grid } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import PageBacklinks from "./PageBacklinks";

export default function ServiceBrand() {
  const customEase = [0.19, 1, 0.22, 1] as const;

  const brandPillars = [
    {
      icon: <Palette className="w-5 h-5 text-indigo-500" />,
      title: "Chromance Mechanics",
      desc: "Architecting high-contrast palettes and custom light/dark color coordinate maps that evoke precise human emotions and maintain contrast compliance.",
    },
    {
      icon: <Feather className="w-5 h-5 text-amber-500" />,
      title: "Elite Typographic Systems",
      desc: "Pairing distinct display typefaces (Space Grotesk, Outfit) with technical, readable monospaces (JetBrains Mono) for balanced digital layouts.",
    },
    {
      icon: <Compass className="w-5 h-5 text-emerald-500" />,
      title: "Visual Semantic Identity",
      desc: "Creating timeless vector seals, organic brand motifs, and high-fidelity assets that preserve their exact geometry at any scale.",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0070f3]" />,
      title: "Cohesive Design Token Handbooks",
      desc: "Compiling variables into comprehensive design system token files to guarantee visual uniformity across web and physical applications.",
    }
  ];

  const caseStudies = [
    {
      client: "Feelize Corporation",
      deliverable: "Dynamic Identity Suite",
      stat: "100% Brand Compliance",
      summary: "Created the official certifier seal and responsive marketing materials, marrying minimalist layout with strict partner guidelines."
    },
    {
      client: "Apex Quantum",
      deliverable: "Design System Guidelines",
      stat: "2.5x Dev Onboarding Speed",
      summary: "Constructed their typography rules and CSS token templates, allowing rapid construction of their technical dashboards."
    },
    {
      client: "Vesper Real Estate",
      deliverable: "Digital Brand Direction",
      stat: "+80% Engagement Index",
      summary: "Crafted high-fidelity editorial visual grids and custom photo templates, translating physical architectural elegance to high-end mobile viewports."
    }
  ];

  return (
    <div className="w-full bg-white text-black py-16 md:py-24" id="service-brand-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Breadcrumbs />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono text-indigo-700">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" />
              <span>Premium Graphic Designer & Brand Specialist</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-slate-950 leading-tight">
              Strategic Brand Systems <br />
              <span className="text-black/55">&amp; Premium Graphic Design</span>
            </h1>

            <p className="text-lg md:text-xl text-black/65 font-light leading-relaxed max-w-2xl">
              We translate brand coordinates into high-impact visual layouts. Our senior graphic designers build comprehensive digital visual identities, grid blueprints, and typographic systems that convey unmatched authority.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="/funnel/audit-request?ref=brand-strategy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold text-sm tracking-tight hover:bg-indigo-600 transition-all duration-300 shadow-sm active:scale-95"
              >
                Launch Brand Alignment
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

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl -z-10" />
            
            <div className="relative group">
              
              {/* Backing decorative frame resembling editorial canvas */}
              <div className="absolute inset-0 bg-slate-100 border border-black/[0.04] rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-6 group-hover:translate-y-6" />
              
              {/* Main Outer Card */}
              <div className="rounded-3xl border border-black/[0.06] bg-white p-5 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2 group-hover:shadow-2xl">
                
                {/* Embedded Brand Image Container */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-black/5 mb-6">
                  <img 
                    src="/src/assets/images/brand_identity_guide_1783050587913.jpg" 
                    alt="xnui Brand Identity Guide Typographic Architecture" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                  
                  {/* Overlay brand coordinates */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-mono font-bold text-indigo-950 uppercase shadow-xs border border-white/20">
                    <Star className="w-3 h-3 text-indigo-600 shrink-0" />
                    BRAND RATIO 1.618
                  </div>
                </div>

                {/* Sub-block typographic specs */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-black/5">
                    <div>
                      <h4 className="text-xs font-bold text-slate-950 font-sans">Strategic Typography Pairings</h4>
                      <p className="text-[9px] font-mono text-black/35">ACTIVE DESIGN SYSTEM SPECIFICATION</p>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 border border-indigo-500/10 px-2 py-0.5 rounded-full font-bold">
                      WCAG 2.1 PASS
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono text-[9px] text-slate-400 block uppercase">Display Heading</span>
                        <span className="text-sm font-sans font-bold text-slate-900 tracking-tight">Space Grotesk</span>
                      </div>
                      <span className="font-mono text-xs text-slate-500">Aa &middot; Bb &middot; Cc</span>
                    </div>

                    <div className="flex justify-between items-start pt-3 border-t border-black/5">
                      <div>
                        <span className="font-mono text-[9px] text-slate-400 block uppercase">Technical Code &amp; Data</span>
                        <span className="text-sm font-mono text-slate-800 font-semibold">JetBrains Mono</span>
                      </div>
                      <span className="font-mono text-xs text-slate-500">const layout = init()</span>
                    </div>
                  </div>

                  {/* Creative Color Token Swatches */}
                  <div className="pt-4 border-t border-black/5">
                    <span className="font-mono text-[9px] text-slate-400 block mb-2 uppercase tracking-wider">Visual Swatch Coordination</span>
                    <div className="flex gap-2">
                      <div className="group/swatch relative">
                        <div className="w-7 h-7 rounded-lg bg-black border border-black/10 shadow-xs" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-black/35 opacity-0 group-hover/swatch:opacity-100 transition-opacity whitespace-nowrap">#000</span>
                      </div>
                      <div className="group/swatch relative">
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 border border-black/10 shadow-xs" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-indigo-600 opacity-0 group-hover/swatch:opacity-100 transition-opacity whitespace-nowrap">#4f46e5</span>
                      </div>
                      <div className="group/swatch relative">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500 border border-black/10 shadow-xs" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-emerald-600 opacity-0 group-hover/swatch:opacity-100 transition-opacity whitespace-nowrap">#10b981</span>
                      </div>
                      <div className="group/swatch relative">
                        <div className="w-7 h-7 rounded-lg bg-slate-200 border border-black/10 shadow-xs" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-500 opacity-0 group-hover/swatch:opacity-100 transition-opacity whitespace-nowrap">#e2e8f0</span>
                      </div>
                      <div className="group/swatch relative">
                        <div className="w-7 h-7 rounded-lg bg-slate-50 border border-black/10 shadow-xs" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-400 opacity-0 group-hover/swatch:opacity-100 transition-opacity whitespace-nowrap">#f8fafc</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Absolute floating offset layout chip */}
              <div className="absolute -top-6 -right-6 bg-slate-900 text-white rounded-2xl p-4 shadow-xl border border-white/10 max-w-[170px] hidden md:block transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:translate-x-2">
                <div className="font-mono text-[9px] text-[#0070f3] font-bold mb-1 uppercase tracking-wider">EDITORIAL ALIGN</div>
                <p className="text-[10px] text-slate-300 leading-relaxed font-light">
                  Contrast health meets high authority. Grid padding perfectly calibrated to avoid visual friction.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Brand System Philosophy for SEO */}
        <div className="border-t border-black/5 pt-16 mb-24">
          <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-slate-900 mb-6">
                Why Strategic Visual Cohesion Triggers Organic Domain Growth
              </h2>
              <div className="space-y-6 text-black/75 font-light leading-relaxed text-base">
                <p>
                  In the digital ecosystem, brand identity is more than a simple logo mark. It is a unified language of spacing, color compliance, and typographic weight that operates seamlessly across all user touchpoints. 
                  When a startup website presents inconsistent spacing and chaotic font choices, users instantly sense visual discord, driving up exit rates.
                  By modeling layouts with strict <a href="/services/brand-strategy/typographic-geometry" className="text-indigo-600 hover:underline font-semibold decoration-2 decoration-indigo-600/30">Typographic Grid Geometry</a>, we keep proportions harmonious across multiple screens.
                </p>
                <p>
                  Our senior graphic design strategy targets high-fidelity consistency. We build strict visual guidelines that align with your business goals. 
                  Using <a href="/services/brand-strategy/chromatic-math" className="text-pink-600 hover:underline font-semibold decoration-2 decoration-pink-600/30">Chromatic Contrast Mathematics</a>, we ensure that all text and interface canvases adhere to strict, perceptual visual accessibility metrics (APCA) across light and dark settings.
                </p>
                <p>
                  This visual discipline guarantees robust session durations and high domain metrics, which major search crawlers explicitly reward with premium organic ranks.
                </p>
              </div>
            </div>

            {/* Layer 3 Nested Sub Index Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-black/[0.04] space-y-4">
              <div>
                <span className="text-[10px] font-mono text-black/45 tracking-wider uppercase block mb-1">NEIGHBORING BLUEPRINTS</span>
                <h3 className="text-sm font-sans font-bold text-slate-950">Brand Specialized Modules</h3>
                <p className="text-[11px] text-black/40 font-light mt-0.5 leading-normal">
                  Explore high-precision typographic mathematical grids and color coordinate calculators.
                </p>
              </div>

              <div className="space-y-2.5">
                <a 
                  href="/services/brand-strategy/typographic-geometry"
                  className="block p-4 rounded-xl bg-white border border-black/5 hover:border-[#0070f3]/30 hover:shadow-xs group transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
                      <Grid className="w-3.5 h-3.5 text-indigo-500" />
                      Typographic Geometry
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-black/35 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-black/50 font-light leading-normal">
                    Interactive golden ratio layout scaling and modular font sizing grids.
                  </p>
                </a>

                <a 
                  href="/services/brand-strategy/chromatic-math"
                  className="block p-4 rounded-xl bg-white border border-black/5 hover:border-pink-500/30 hover:shadow-xs group transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-950 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-pink-500" />
                      Chromatic Math
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-black/35 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-black/50 font-light leading-normal">
                    APCA perceptual contrast calculator and dynamic token swatches.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Competencies */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-sans font-medium tracking-tight text-slate-900">
              The xnui Strategic Pillars
            </h2>
            <p className="text-xs font-mono text-black/45 tracking-widest uppercase mt-2">
              Our professional design methodologies for digital dominance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {brandPillars.map((pillar, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-900/5 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-base font-sans font-semibold text-slate-950 tracking-tight mb-1">{pillar.title}</h3>
                  <p className="text-sm text-black/65 font-light leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies / Proof Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[#0070f3] tracking-widest uppercase block">Proven Performance</span>
            <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-slate-900 mt-1">
              Translating visual precision into business milestones.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-900/5 shadow-xs relative flex flex-col justify-between h-64 hover:border-indigo-500/30 transition-colors duration-300">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-black/45">{cs.client}</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-mono font-semibold">{cs.deliverable}</span>
                  </div>
                  <p className="text-sm text-black/65 font-light leading-relaxed mb-4">{cs.summary}</p>
                </div>
                <div>
                  <div className="font-mono text-lg font-bold text-indigo-600">{cs.stat}</div>
                  <span className="text-[10px] font-mono text-black/30 block uppercase mt-1">Measured Metric</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Callout */}
        <div className="p-8 md:p-12 rounded-3xl border border-indigo-100 bg-indigo-50/20 text-center max-w-3xl mx-auto">
          <Star className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
          <h3 className="text-2xl font-sans font-bold text-slate-900 mb-2">Ready to establish real brand authority?</h3>
          <p className="text-xs md:text-sm text-black/55 font-light leading-relaxed max-w-lg mx-auto mb-6">
            We offer bespoke brand direction packages customized to elite startups and technology teams. Review color accessibility maps, custom typeface sets, and logo specifications.
          </p>
          <a 
            href="/funnel/audit-request" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-full font-semibold text-xs md:text-sm hover:bg-black transition-colors duration-300 active:scale-95"
          >
            Initiate Alignment Consultation
          </a>
        </div>

        {/* Dynamic brand service network backlinks */}
        <PageBacklinks pageId="services-brand" />

      </div>
    </div>
  );
}
