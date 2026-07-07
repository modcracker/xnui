import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, ChevronRight, ClipboardCheck, Code, Globe, HelpCircle, Laptop, RefreshCw, Send, Sparkles, AlertCircle } from "lucide-react";
import PageBacklinks from "./PageBacklinks";

export default function FunnelAudit() {
  const [step, setStep] = useState(1);
  const [domain, setDomain] = useState("");
  const [goal, setGoal] = useState<string[]>([]);
  const [techStack, setTechStack] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Diagnostic scores dynamically generated based on user input
  const [calculatedScores, setCalculatedScores] = useState({
    seoScore: 85,
    usabilityFriction: 45,
    speedLoadTime: "1.8s",
    layoutShiftIndex: 0.12
  });

  const goalsList = [
    { id: "conversion", label: "Boost User Conversions", desc: "Minimize drop-offs and optimize calls-to-action." },
    { id: "accessibility", label: "WCAG & ADA Compliance", desc: "Ensure contrast compliance & keyboard navigation." },
    { id: "performance", label: "Core Web Vitals & Loading Speed", desc: "Replace heavy assets with modern utility code." },
    { id: "brand", label: "High-Fidelity Visual Refresh", desc: "Establish elite typographic hierarchy & visuals." }
  ];

  const techStacks = [
    { id: "react", label: "React / Next.js / Vite" },
    { id: "webflow", label: "Webflow" },
    { id: "wordpress", label: "WordPress" },
    { id: "html", label: "Custom HTML & Tailwind CSS" },
    { id: "other", label: "Other / Legacy Framework" }
  ];

  const toggleGoal = (id: string) => {
    if (goal.includes(id)) {
      setGoal(goal.filter(g => g !== id));
    } else {
      setGoal([...goal, id]);
    }
  };

  const handleNext = () => {
    if (step === 1 && !domain) return;
    if (step === 2 && goal.length === 0) return;
    if (step === 3 && !techStack) return;
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    // Simulate high-fidelity design algorithm scanning the domain
    setTimeout(() => {
      // Calculate a highly realistic diagnostic based on their selected stack and goals
      let seo = 84;
      let friction = 48;
      let loadTime = "2.2s";
      let shift = 0.15;

      if (techStack === "react" || techStack === "html") {
        seo = 92;
        friction = 35;
        loadTime = "1.2s";
        shift = 0.05;
      } else if (techStack === "wordpress") {
        seo = 76;
        friction = 55;
        loadTime = "3.4s";
        shift = 0.22;
      }

      if (goal.includes("accessibility")) {
        friction += 10;
      }

      setCalculatedScores({
        seoScore: Math.min(100, seo),
        usabilityFriction: friction,
        speedLoadTime: loadTime,
        layoutShiftIndex: parseFloat(shift.toFixed(2))
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full bg-white text-black py-16 md:py-24" id="funnel-audit-page">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-black/45 mb-8 justify-center">
          <a href="/" className="hover:text-black transition-colors">xnui</a>
          <span>&middot;</span>
          <span className="text-[#0070f3] font-semibold">Fast-Track Usability Audit</span>
        </div>

        {/* Funnel Box */}
        <div className="rounded-3xl border border-slate-900/10 bg-slate-50/70 p-8 md:p-12 shadow-sm backdrop-blur-md relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.div
                key="funnel-form-wrapper"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Visual Progress Bar */}
                <div className="w-full bg-slate-200 h-1 rounded-full mb-8 overflow-hidden">
                  <div 
                    className="bg-[#0070f3] h-full transition-all duration-500 ease-out"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>

                <div className="text-center mb-8">
                  <span className="text-[10px] font-mono text-[#0070f3] font-bold tracking-widest uppercase">FAST-TRACK DIAGNOSTIC</span>
                  <h1 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-slate-950 mt-1">
                    Configure Your Visual Audit
                  </h1>
                  <p className="text-xs md:text-sm text-black/45 font-light mt-1">
                    Get an instant diagnostic report and custom guidelines from Sofia Varian.
                  </p>
                </div>

                {/* Step 1: Website URL */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-mono text-black/65 tracking-wider uppercase mb-2">
                        Enter Your Business Domain URL
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-black/30">
                          <Globe className="w-4 h-4" />
                        </div>
                        <input 
                          type="text"
                          required
                          value={domain}
                          onChange={(e) => setDomain(e.target.value)}
                          placeholder="example.com"
                          className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-900/10 rounded-xl focus:border-[#0070f3] focus:outline-none font-sans text-sm md:text-base text-slate-950 shadow-xs"
                        />
                      </div>
                      <p className="text-[11px] text-black/45 mt-2 font-mono">
                        E.g., enterprise portal, landing layouts, or mobile application paths.
                      </p>
                    </div>

                    <button
                      type="button"
                      disabled={!domain}
                      onClick={handleNext}
                      className="w-full py-3.5 bg-black text-white hover:bg-[#0070f3] disabled:bg-slate-300 disabled:cursor-not-allowed rounded-xl text-xs md:text-sm font-bold tracking-tight transition-all duration-300 flex items-center justify-center gap-2 active:scale-98"
                    >
                      Analyze Domain Metrics
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Step 2: Main Goals */}
                {step === 2 && (
                  <div className="space-y-6">
                    <span className="block text-xs font-mono text-black/65 tracking-wider uppercase mb-2 text-center">
                      Select Your Target UX Goals (Select All That Apply)
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {goalsList.map((g) => {
                        const isSelected = goal.includes(g.id);
                        return (
                          <button
                            type="button"
                            key={g.id}
                            onClick={() => toggleGoal(g.id)}
                            className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-36 ${
                              isSelected 
                                ? 'border-[#0070f3] bg-blue-50/20 shadow-xs' 
                                : 'border-slate-900/5 bg-white hover:border-slate-900/15'
                            }`}
                          >
                            <div className="flex justify-between items-start w-full">
                              <span className="text-sm font-sans font-bold text-slate-900 leading-tight">{g.label}</span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-[#0070f3] bg-[#0070f3] text-white' : 'border-slate-900/20 bg-white'
                              }`}>
                                {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                              </div>
                            </div>
                            <p className="text-xs text-black/55 font-light leading-relaxed mt-2">{g.desc}</p>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs md:text-sm font-semibold transition-colors duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        disabled={goal.length === 0}
                        onClick={handleNext}
                        className="flex-1 py-3.5 bg-black text-white hover:bg-[#0070f3] disabled:bg-slate-300 disabled:cursor-not-allowed rounded-xl text-xs md:text-sm font-bold tracking-tight transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Proceed to Technology
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Technology Stack */}
                {step === 3 && (
                  <div className="space-y-6">
                    <span className="block text-xs font-mono text-black/65 tracking-wider uppercase mb-2 text-center">
                      Select Your Underlying Front-End Stack
                    </span>

                    <div className="space-y-3">
                      {techStacks.map((stack) => {
                        const isSelected = techStack === stack.id;
                        return (
                          <button
                            type="button"
                            key={stack.id}
                            onClick={() => setTechStack(stack.id)}
                            className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex justify-between items-center ${
                              isSelected 
                                ? 'border-[#0070f3] bg-blue-50/20' 
                                : 'border-slate-900/5 bg-white hover:border-slate-900/15'
                            }`}
                          >
                            <span className="text-sm font-sans font-semibold text-slate-900">{stack.label}</span>
                            <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-[#0070f3] bg-[#0070f3] text-white' : 'border-slate-900/20 bg-white'
                            }`}>
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs md:text-sm font-semibold transition-colors duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        disabled={!techStack}
                        onClick={handleNext}
                        className="flex-1 py-3.5 bg-black text-white hover:bg-[#0070f3] disabled:bg-slate-300 disabled:cursor-not-allowed rounded-xl text-xs md:text-sm font-bold tracking-tight transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Proceed to Contact Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Details & Submit */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <span className="block text-xs font-mono text-black/65 tracking-wider uppercase mb-2 text-center">
                      Where should we send your custom report?
                    </span>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-sans text-slate-700 font-semibold mb-1">Your Full Name</label>
                        <input 
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Sofia Varian"
                          className="w-full px-4 py-3 bg-white border border-slate-900/10 rounded-xl focus:border-[#0070f3] focus:outline-none font-sans text-sm text-slate-950 shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-sans text-slate-700 font-semibold mb-1">Corporate Email Address</label>
                        <input 
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sofia@example.com"
                          className="w-full px-4 py-3 bg-white border border-slate-900/10 rounded-xl focus:border-[#0070f3] focus:outline-none font-sans text-sm text-slate-950 shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={handleBack}
                        className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs md:text-sm font-semibold transition-colors duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!name || !email || isSubmitting}
                        className="flex-1 py-3.5 bg-[#0070f3] text-white hover:bg-black disabled:bg-slate-300 disabled:cursor-not-allowed rounded-xl text-xs md:text-sm font-bold tracking-tight transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-blue-500/10"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            Analyzing Layout Nodes...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Submit Fast-Track Audit
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

              </motion.div>
            ) : (
              // Success Screen with instant diagnostic report
              <motion.div
                key="funnel-success-wrapper"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-sans font-bold text-slate-950">Usability Audit Triggered!</h2>
                  <p className="text-xs md:text-sm text-black/55 font-light leading-relaxed max-w-lg mx-auto mt-1">
                    Thank you, <strong>{name}</strong>. Sofia Varian will review your parameters at <strong>{domain}</strong> and compile your bespoke visual recommendations within 24 hours.
                  </p>
                </div>

                {/* Live Simulated Report Scores based on the submitted details */}
                <div className="border border-slate-900/10 rounded-2xl bg-white p-6 shadow-sm">
                  <span className="text-[10px] font-mono text-[#0070f3] font-bold tracking-widest uppercase block mb-4">
                    PRELIMINARY DIAGNOSTIC MODEL ({domain})
                  </span>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center pb-6 border-b border-black/5">
                    <div>
                      <div className="font-mono text-2xl font-bold text-slate-900">{calculatedScores.seoScore}%</div>
                      <span className="text-[10px] font-mono text-black/45 block mt-1 uppercase">SEO Readiness</span>
                    </div>
                    <div>
                      <div className="font-mono text-2xl font-bold text-orange-600">{calculatedScores.usabilityFriction}%</div>
                      <span className="text-[10px] font-mono text-black/45 block mt-1 uppercase">Friction Index</span>
                    </div>
                    <div>
                      <div className="font-mono text-2xl font-bold text-slate-900">{calculatedScores.speedLoadTime}</div>
                      <span className="text-[10px] font-mono text-black/45 block mt-1 uppercase">Estimated LCP</span>
                    </div>
                    <div>
                      <div className="font-mono text-2xl font-bold text-slate-900">{calculatedScores.layoutShiftIndex}</div>
                      <span className="text-[10px] font-mono text-black/45 block mt-1 uppercase">CLS Index</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex gap-3 items-start text-xs text-black/75">
                      <AlertCircle className="w-4.5 h-4.5 text-[#0070f3] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-sans font-semibold text-slate-950">Next Step: Coordinate Consultation</strong>
                        <p className="font-light leading-relaxed text-black/55 mt-0.5">
                          A detailed PDF report containing the full layout audit, accessibility compliance mappings, and lightweight code suggestions is being structured and will be delivered to <strong>{email}</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="/"
                    className="px-6 py-2.5 bg-black text-white hover:bg-[#0070f3] rounded-full text-xs font-semibold tracking-tight transition-colors duration-300"
                  >
                    Return to Homepage
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Dynamic conversion funnel network backlinks */}
        <PageBacklinks pageId="funnel-audit" />

      </div>
    </div>
  );
}
