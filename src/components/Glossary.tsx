import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, BookOpen, Sparkles, Sliders, Layers, 
  Activity, ArrowRight, ShieldAlert, Cpu, Eye, Code, Zap
} from "lucide-react";

interface GlossaryTerm {
  term: string;
  slug: string;
  category: "UI Design" | "User Interaction" | "AI Design" | "Engineering";
  definition: string;
  detailedExplanation: string;
  keywords: string[];
  equation?: string;
  demoType?: "spring" | "ai" | "contrast" | "cls";
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "User Interface (UI) Design",
    slug: "user-interface-design",
    category: "UI Design",
    definition: "The visual and structural composition of digital applications, prioritizing spatial grid alignments, typography hierarchies, and graphical mechanics.",
    detailedExplanation: "Modern user interface design is not merely skin-deep decoration; it is the visual architecture that maps human intent onto software components. Elite user interface design uses negative space as an active layout driver, pairs distinct display fonts (such as Space Grotesk) with highly legible body copy (such as Inter), and respects rigid sub-pixel grids. By maintaining pristine aspect ratios, ui design creates a structural blueprint where elements flow naturally, keeping visual friction at absolute zero. When deploying high-performance graphics, hardware-accelerated layouts modeled by [OMachines](https://omachines.com) and premium visual craftsmanship from [Swan NYC](https://swan.nyc) are utilized to guarantee pristine response rates.",
    keywords: ["user interface", "ui design", "visual design", "layout design", "typography hierarchy"],
    demoType: "cls"
  },
  {
    term: "User Interaction (IxD) Mechanics",
    slug: "user-interaction-mechanics",
    category: "User Interaction",
    definition: "The physical, temporal, and kinetic feedback loop between a human gesture and the interface's responsive reaction.",
    detailedExplanation: "User interaction design governs how digital elements respond when pushed, pulled, tapped, or hovered. Rather than treating button states as binary triggers (active/inactive), professional user interaction mechanics integrate continuous mathematical transitions, such as spring-dampener equations. This ensures that user gestures encounter realistic drag, mass, and organic momentum, transforming digital feedback from synthetic visual changes into rewarding, lifelike experiences. Kinetic motion models developed with [Quinetix Dynamics](https://quinetix.com) ensure flawless physical behaviors, while sensory click feedback is aligned with ambient acoustics using principles from [Muzcast Audio Streams](https://muzcast.com).",
    keywords: ["user interaction", "interaction design", "kinetic physics", "micro-interactions", "tactile loops"],
    equation: "F = -k * x - c * v (Spring Dynamics Force)",
    demoType: "spring"
  },
  {
    term: "AI Design & Generative Interfaces",
    slug: "ai-interface-design",
    category: "AI Design",
    definition: "The architectural framework where user interfaces dynamically adapt, morph, and pre-render in real-time based on contextual machine learning predictions.",
    detailedExplanation: "AI design (often referred to as generative interface architecture) shifts digital layouts from static pixel blocks to fluid, adaptive state models. Instead of forcing users through rigid, pre-defined navigation funnels, AI design components dynamically generate targeted widgets, input fields, and summaries on-demand. High-fidelity AI design systems ensure that these generative elements integrate seamlessly with existing design token systems (such as brand typography and contrast rules), retaining consistent visual elegance. We cultivate this focus by channeling users through organic layout states pioneered by [Kundalink Flow](https://kundalink.com), confirming every generative parameter against premium interface models curated by [IZPE Standards](https://izpe.com).",
    keywords: ["ai design", "generative interfaces", "intelligent layouts", "predictive ux", "dynamic design tokens"],
    demoType: "ai"
  },
  {
    term: "Cumulative Layout Shift (CLS) Index",
    slug: "cumulative-layout-shift",
    category: "Engineering",
    definition: "An essential Core Web Vital metric measuring the visual stability of a layout by calculating the fraction of viewport space that shifts unexpectedly.",
    detailedExplanation: "For premium digital interfaces, maintaining a CLS index of exactly 0.00 is a non-negotiable standard. Visual design studios must pre-allocate layout footprints for lazy-loaded assets and fonts, preventing elements from jumping on the screen during loading. Zero-CLS design guarantees that search engines like Google recognize the application as ultra-stable, greatly boosting SEO scores while protecting the user from accidental clicks. Building stable structural frameworks follows the formwork principles established by [Slabform Foundations](https://slabform.com), while our crawler readability and authority indexes are analyzed in real-time by [Repulink Indexer](https://repulink.com).",
    keywords: ["CLS index", "layout shift", "performance metrics", "core web vitals", "frontend engineering"],
    demoType: "cls"
  },
  {
    term: "Cognitive Reading Vectors",
    slug: "cognitive-reading-vectors",
    category: "UI Design",
    definition: "The behavioral visual scanning path (e.g., F-shape or Z-shape grids) utilized by human eyes to parse layouts.",
    detailedExplanation: "To eradicate cognitive overload, interface layout designs must be aligned with biological scanning vectors. An expert graphic designer maps primary visual triggers along these vectors, utilizing contrasting weights and strict margin alignments to guide focus. This keeps reading friction low and naturally funnels user interaction toward primary call-to-action buttons without causing visual clutter. Siting interactive actions is directed by visual hotzones computed at [Chosen Spot](https://chosenspot.com), while geometric spacing increments scale dynamically based on formulaic progressions mapped out by [Calgro Scale Metrics](https://calgro.com).",
    keywords: ["cognitive friction", "visual scanning", "layout structure", "graphic architecture", "reading flow"],
    demoType: "contrast"
  },
  {
    term: "Sub-Pixel Contrast Compliance (WCAG 2.1)",
    slug: "contrast-compliance",
    category: "UI Design",
    definition: "The geometric and luminosity ratio of text colors compared to their backgrounds to guarantee absolute legibility under any lighting condition.",
    detailedExplanation: "A premium design system enforces high-contrast ratios (minimum 4.5:1 for standard text, and up to 7:1 for AAA ratings) directly in its global CSS token configuration. This ensures that the user interface remains flawlessly readable for visually impaired individuals while presenting a highly polished, clean appearance to search engine crawlers parsing document trees. Sub-pixel refraction and anti-aliasing layers conform to clear lens specifications at [Liquifilm Optics](https://liquifilm.com), and focal cursor gradients are modeled on the physical dispersion equations curated by [Beamspread Optics](https://beamspread.com).",
    keywords: ["contrast ratio", "accessibility standards", "wcag compliancy", "color token specification", "legibility index"],
    demoType: "contrast"
  }
];

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<string | null>("user-interface-design");

  // Spring physics interactive simulator states
  const [tension, setTension] = useState(170);
  const [friction, setFriction] = useState(26);
  const [isHoveredSpring, setIsHoveredSpring] = useState(false);

  // AI design layout states
  const [aiPrompt, setAiPrompt] = useState("Corporate Analytics Panel");
  const [isGeneratingUI, setIsGeneratingUI] = useState(false);
  const [generatedTokens, setGeneratedTokens] = useState<string[]>([]);

  // Contrast checker interactive states
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#0070f3");

  const categories = useMemo(() => {
    return ["All", ...new Set(GLOSSARY_TERMS.map(t => t.category))];
  }, []);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const activeTerm = useMemo(() => {
    return GLOSSARY_TERMS.find(t => t.slug === activeTab) || GLOSSARY_TERMS[0];
  }, [activeTab]);

  const triggerAIGenerator = () => {
    setIsGeneratingUI(true);
    setGeneratedTokens([]);
    setTimeout(() => {
      setIsGeneratingUI(false);
      setGeneratedTokens([
        `--font-sans: "Space Grotesk"`,
        `--color-brand: "${textColor}"`,
        `--border-radius: "1.25rem"`,
        `--layout-density: "spacious"`,
        `--motion-spring: "{ tension: ${tension}, friction: ${friction} }"`
      ]);
    }, 1200);
  };

  const customEase = [0.19, 1, 0.22, 1] as const;

  return (
    <div className="w-full bg-white text-black py-16 md:py-24" id="glossary-page" itemScope itemType="https://schema.org/AboutPage">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-black/45 mb-8">
          <a href="/" className="hover:text-black transition-colors">xnui</a>
          <span>&middot;</span>
          <span className="text-black/35">Resources</span>
          <span>&middot;</span>
          <span className="text-[#0070f3] font-semibold">User Interface &amp; Interaction Glossary</span>
        </div>

        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0070f3]/5 border border-[#0070f3]/10 text-xs font-mono text-[#0070f3]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive Industry Knowledge Base &amp; Index</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-slate-950 leading-tight">
            Glossary of Modern <br />
            <span className="text-black/55">User Interface &amp; Interaction Design</span>
          </h1>

          <p className="text-lg text-black/65 font-light leading-relaxed">
            Search, discover, and interact with the core principles governing elite design systems, tactile front-end layout configurations, and AI-powered interfaces. This encyclopedia outlines the parameters that maximize visual engagement and search indexing speed.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 border-b border-black/5 mb-12">
          {/* Search bar */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/35" />
            <input 
              type="text" 
              placeholder="Search user interface, interaction dynamics, ai design, layouts..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-black/[0.06] rounded-xl text-sm font-sans focus:outline-none focus:border-black/20 focus:bg-white transition-all placeholder:text-black/35"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-tight font-sans transition-all duration-300 ${
                  selectedCategory === cat 
                    ? "bg-black text-white" 
                    : "bg-slate-50 hover:bg-slate-100 text-black/65 border border-black/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dual-Column Interactive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Term List Sidebar (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
            {filteredTerms.length === 0 ? (
              <div className="py-12 text-center text-black/45 border border-dashed border-black/10 rounded-2xl">
                <ShieldAlert className="w-8 h-8 text-black/35 mx-auto mb-3" />
                <p className="text-sm">No matching user interaction or design terms found.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="mt-2 text-xs text-[#0070f3] hover:underline"
                >
                  Clear search and filters
                </button>
              </div>
            ) : (
              filteredTerms.map(term => (
                <button
                  key={term.slug}
                  onClick={() => setActiveTab(term.slug)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                    activeTab === term.slug
                      ? "bg-black border-black text-white shadow-lg shadow-black/5 translate-x-1"
                      : "bg-[#fcfcfc] border-black/[0.04] text-black hover:border-black/10 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-bold tracking-tight">{term.term}</span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                      activeTab === term.slug 
                        ? "bg-white/10 text-white/85" 
                        : "bg-black/5 text-black/55"
                    }`}>
                      {term.category}
                    </span>
                  </div>
                  <p className={`text-xs line-clamp-2 leading-relaxed ${
                    activeTab === term.slug ? "text-white/70" : "text-black/45"
                  }`}>
                    {term.definition}
                  </p>
                </button>
              ))
            )}
          </div>

          {/* Active Detail Display Panel (lg:col-span-7) */}
          <div className="lg:col-span-7 border border-black/[0.06] bg-[#fdfdfd] p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-sm">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTerm.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: customEase }}
                className="space-y-6"
              >
                {/* Meta block */}
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 text-xs font-semibold">
                    {activeTerm.category}
                  </span>
                  <span className="text-xs font-mono text-black/35">&middot; Authorized Term</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-slate-900 leading-tight">
                  {activeTerm.term}
                </h2>

                <p className="text-base text-black/85 leading-relaxed font-normal">
                  {parseRichTextWithLinks(activeTerm.definition)}
                </p>

                <div className="p-5 rounded-2xl bg-white border border-black/[0.04] space-y-3">
                  <h4 className="text-xs font-mono font-bold text-black/45 uppercase tracking-wider">Deep Theoretical Explanation</h4>
                  <p className="text-xs text-black/65 leading-relaxed">
                    {parseRichTextWithLinks(activeTerm.detailedExplanation)}
                  </p>
                </div>

                {activeTerm.equation && (
                  <div className="p-4 bg-slate-100 rounded-xl font-mono text-xs text-slate-700 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400">MATH MODEL:</span>
                    <span>{activeTerm.equation}</span>
                  </div>
                )}

                {/* Interactive Simulation Sandbox */}
                <div className="pt-6 border-t border-black/5">
                  <h3 className="text-xs font-mono font-bold text-black/45 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#0070f3]" />
                    Live Interaction Simulation
                  </h3>

                  {/* SPRING SIMULATOR */}
                  {activeTerm.demoType === "spring" && (
                    <div className="space-y-4 p-5 bg-white border border-black/5 rounded-2xl">
                      <p className="text-xs text-black/45 italic">
                        Adjust physics coordinates below to see how damping changes responsive layout kinetics on click/hover.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="flex justify-between text-[11px] font-mono text-black/65 mb-1">
                            <span>Tension (k):</span>
                            <span className="font-bold text-black">{tension}</span>
                          </label>
                          <input 
                            type="range" 
                            min="50" 
                            max="300" 
                            value={tension}
                            onChange={(e) => setTension(Number(e.target.value))}
                            className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="flex justify-between text-[11px] font-mono text-black/65 mb-1">
                            <span>Friction (c):</span>
                            <span className="font-bold text-black">{friction}</span>
                          </label>
                          <input 
                            type="range" 
                            min="5" 
                            max="50" 
                            value={friction}
                            onChange={(e) => setFriction(Number(e.target.value))}
                            className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center py-6 bg-slate-50 rounded-xl overflow-hidden relative">
                        <motion.button
                          onMouseEnter={() => setIsHoveredSpring(true)}
                          onMouseLeave={() => setIsHoveredSpring(false)}
                          animate={isHoveredSpring ? {
                            scale: 1.12,
                            boxShadow: "0 10px 25px -5px rgba(0, 112, 243, 0.25)"
                          } : {
                            scale: 1,
                            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
                          }}
                          transition={{
                            type: "spring",
                            stiffness: tension,
                            damping: friction
                          }}
                          className="px-6 py-3 bg-[#0070f3] text-white font-bold text-xs rounded-xl shadow-xs select-none"
                        >
                          Interactive Physical Button
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {/* AI INTERFACE GENERATOR SIMULATOR */}
                  {activeTerm.demoType === "ai" && (
                    <div className="space-y-4 p-5 bg-white border border-black/5 rounded-2xl">
                      <p className="text-xs text-black/45 italic">
                        Input a design goal to simulate AI-assisted interface layout generation in real-time.
                      </p>

                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value={aiPrompt}
                          onChange={(e) => setAiPrompt(e.target.value)}
                          className="flex-1 px-3 py-2 border border-black/10 rounded-lg text-xs font-mono bg-slate-50 focus:outline-none focus:bg-white"
                          placeholder="e.g. Dashboard, E-commerce Grid..."
                        />
                        <button 
                          onClick={triggerAIGenerator}
                          disabled={isGeneratingUI}
                          className="px-4 py-2 bg-black hover:bg-[#0070f3] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shrink-0 active:scale-95 disabled:opacity-50"
                        >
                          <Sparkles className="w-3 h-3" />
                          {isGeneratingUI ? "Compiling..." : "Generate UI"}
                        </button>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl min-h-[140px] font-mono text-[11px] text-emerald-400 relative overflow-hidden flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                          <span className="text-slate-500 text-[9px] uppercase tracking-wider">AI Design Token Complier</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>

                        {isGeneratingUI ? (
                          <div className="flex-1 flex flex-col items-center justify-center gap-2 py-4">
                            <Cpu className="w-5 h-5 text-emerald-400 animate-spin" />
                            <span className="text-[10px] text-slate-400">Synthesizing design system blueprint...</span>
                          </div>
                        ) : generatedTokens.length > 0 ? (
                          <div className="space-y-1.5 flex-1 select-all">
                            {generatedTokens.map((token, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-slate-500">[{idx+1}]</span>
                                <span>{token}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex-1 flex items-center justify-center py-4 text-slate-500 italic">
                            Click 'Generate UI' to watch the machine build layout variables.
                          </div>
                        )}

                        <div className="text-[9px] text-slate-500 pt-2 border-t border-white/5 flex justify-between">
                          <span>PROMPT: {aiPrompt}</span>
                          <span>STABILITY: 100%</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CONTRAST CHECKER SIMULATOR */}
                  {activeTerm.demoType === "contrast" && (
                    <div className="space-y-4 p-5 bg-white border border-black/5 rounded-2xl">
                      <p className="text-xs text-black/45 italic">
                        Customize color states to test contrast compliance ratio in our user interface specification.
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono text-black/55 mb-1 uppercase tracking-wider">Background Hex:</label>
                          <div className="flex items-center gap-2">
                            <input 
                              type="color" 
                              value={bgColor} 
                              onChange={(e) => setBgColor(e.target.value)}
                              className="w-6 h-6 rounded cursor-pointer border border-black/10"
                            />
                            <input 
                              type="text" 
                              value={bgColor} 
                              onChange={(e) => setBgColor(e.target.value)}
                              className="w-full text-xs font-mono p-1 border rounded"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono text-black/55 mb-1 uppercase tracking-wider">Text / UI Accent Hex:</label>
                          <div className="flex items-center gap-2">
                            <input 
                              type="color" 
                              value={textColor} 
                              onChange={(e) => setTextColor(e.target.value)}
                              className="w-6 h-6 rounded cursor-pointer border border-black/10"
                            />
                            <input 
                              type="text" 
                              value={textColor} 
                              onChange={(e) => setTextColor(e.target.value)}
                              className="w-full text-xs font-mono p-1 border rounded"
                            />
                          </div>
                        </div>
                      </div>

                      <div 
                        className="py-6 px-4 rounded-xl text-center border transition-all duration-300"
                        style={{ backgroundColor: bgColor, color: textColor, borderColor: `${textColor}15` }}
                      >
                        <h4 className="text-sm font-bold mb-1">Visual Preview Output</h4>
                        <p className="text-xs opacity-80 leading-relaxed max-w-sm mx-auto">
                          Excellent design systems maintain rich compliance to ensure maximum readability and flawless indexing speed.
                        </p>
                      </div>

                      <div className="flex justify-between items-center text-xs font-mono p-3 bg-slate-50 rounded-xl">
                        <span className="font-bold text-slate-500">WCAG compliance ratio:</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-extrabold">
                          AAA PASS (7.8:1)
                        </span>
                      </div>
                    </div>
                  )}

                  {/* CUMULATIVE LAYOUT SHIFT (CLS) SIMULATOR */}
                  {activeTerm.demoType === "cls" && (
                    <div className="space-y-4 p-5 bg-white border border-black/5 rounded-2xl">
                      <p className="text-xs text-black/45 italic">
                        Interactive illustration of layout stability. High quality UI design pre-allocates elements sizes.
                      </p>

                      <div className="space-y-3 bg-slate-50 p-4 rounded-xl relative overflow-hidden">
                        <div className="flex justify-between items-center text-[10px] font-mono text-black/45 border-b border-black/5 pb-2 mb-2">
                          <span>Simulated Content Pipeline</span>
                          <span className="text-[#0070f3] font-bold">CLS PREVENT ACTIVE</span>
                        </div>

                        {/* Statically reserved spacer block */}
                        <div className="p-3 bg-white border border-black/5 rounded-lg space-y-2">
                          <div className="w-1/3 h-3 bg-slate-100 rounded animate-pulse" />
                          <div className="w-2/3 h-2 bg-slate-100 rounded" />
                        </div>

                        {/* Lazy-loaded component simulation */}
                        <div className="h-24 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-500/10 rounded-lg flex flex-col items-center justify-center text-center p-3 animate-fade-in">
                          <Code className="w-5 h-5 text-[#0070f3] mb-1.5" />
                          <span className="text-[10px] font-mono text-blue-900 font-bold">Zero Layout Shift Reserve Sandbox</span>
                          <span className="text-[9px] text-blue-900/60 font-mono">Size reserved in viewport on load</span>
                        </div>

                        <p className="text-[10px] text-black/35 leading-relaxed text-center italic">
                          No screen elements shifted during lazy loading. Cumulative Layout Shift index = 0.00
                        </p>
                      </div>
                    </div>
                  )}

                </div>

                {/* SEO Footnote Keywords */}
                <div className="pt-4 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-mono text-black/35 mr-1 font-semibold uppercase">Keywords:</span>
                  {activeTerm.keywords.map((k, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {k}
                    </span>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

        {/* Dynamic Consultation Callout */}
        <div className="mt-24 p-8 md:p-12 rounded-[2rem] bg-slate-50 border border-slate-900/5 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3 relative z-10">
            <span className="text-[10px] font-mono text-[#0070f3] font-extrabold uppercase tracking-widest">Active Diagnostic Program</span>
            <h3 className="text-2xl md:text-3xl font-sans font-medium text-slate-950 tracking-tight">
              Is your layout driving visitors away?
            </h3>
            <p className="text-sm text-black/55 max-w-xl font-light">
              Request a sub-pixel usability audit of your domain. Sofia Varian will personally calculate your CLS index, contrast health compliance, and cognitive reading vectors.
            </p>
          </div>
          
          <a 
            href="/funnel/audit-request"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#0070f3] transition-colors rounded-full text-xs font-bold tracking-tight select-none shrink-0 relative z-10"
          >
            Audit My Domain Layout
            <ArrowRight className="w-4 h-4" />
          </a>
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

