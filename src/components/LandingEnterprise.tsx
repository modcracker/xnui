import { motion } from "motion/react";
import { ArrowRight, CheckCircle, Cpu, ShieldCheck, Star, Users, Zap } from "lucide-react";

export default function LandingEnterprise() {
  const customEase = [0.19, 1, 0.22, 1] as const;

  const enterpriseDeliverables = [
    {
      title: "Full Product Usability Deep Dive",
      desc: "Comprehensive heuristic audits of your enterprise application, mapping out tap-friction points, layout bottlenecks, and workflow retention leaks."
    },
    {
      title: "WCAG 2.2 AAA Accessibility Alignment",
      desc: "Comprehensive contrast, screen-reader semantic, and keyboard navigation testing to meet legal standards and optimize user inclusivity."
    },
    {
      title: "High-Performance CSS Token Migration",
      desc: "Replacing bloated CSS frameworks with clean, lightweight Tailwind coordinate tokens, increasing page load velocity and mobile crawl scores."
    },
    {
      title: "Structured Schema Integration",
      desc: "Writing search-optimized JSON-LD metadata mapping directly to your service models, unlocking immediate rich search display snippets."
    }
  ];

  return (
    <div className="w-full bg-white text-black py-16 md:py-24" id="landing-enterprise-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-black/45 mb-8">
          <a href="/" className="hover:text-black transition-colors">xnui</a>
          <span>&middot;</span>
          <span className="text-[#0070f3] font-semibold">Enterprise UX Audits</span>
        </div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono text-blue-700">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Enterprise-Grade UI/UX Security &amp; Usability</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-slate-950 leading-tight">
              Enterprise UX Audits <br />
              <span className="text-black/55">&amp; Consultation Strategy</span>
            </h1>

            <p className="text-lg md:text-xl text-black/65 font-light leading-relaxed max-w-3xl">
              Maximize complex dashboard retention, secure WCAG compliance, and establish absolute search engine authority. We provide senior-level visual and mechanical audits to turn complex digital portals into cohesive user experiences.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="/funnel/audit-request?ref=enterprise-landing"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0070f3] text-white rounded-full font-bold text-sm tracking-tight hover:bg-black transition-all duration-300 shadow-sm active:scale-95"
              >
                Inquire Enterprise Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-black rounded-full font-semibold text-sm tracking-tight transition-all duration-300"
              >
                Connect with Sofia Varian
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10" />
            
            <div className="relative group">
              
              {/* Backing structural wireframe mesh layout underlay */}
              <div className="absolute inset-0 bg-slate-100 border border-black/[0.04] rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-6 group-hover:translate-y-6" />
              
              {/* Main Outer Box */}
              <div className="rounded-3xl border border-black/[0.08] bg-white p-4 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2 group-hover:shadow-2xl">
                
                {/* Photo aspect wrapper */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border border-black/5 mb-6">
                  <img 
                    src="/src/assets/images/ux_layout_mockup_1783050576285.jpg" 
                    alt="xnui High Scale Enterprise UX Audit Screen Overview" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                  
                  {/* Floating Secure Badge inside Image */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-[9px] font-mono font-bold text-white uppercase border border-white/10 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    WCAG 2.2 AAA SYSTEM
                  </div>
                </div>

                {/* Overlapping Checklist Controls */}
                <div className="space-y-4 px-2 pb-2">
                  <div className="flex items-center justify-between pb-3 border-b border-black/5">
                    <div>
                      <h4 className="text-xs font-bold text-slate-950 font-sans">Corporate Alignment Indicators</h4>
                      <p className="text-[9px] font-mono text-black/35">COMPLIANCE &amp; ACCESSIBILITY ASSURANCE</p>
                    </div>
                    <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-500/10 px-2 py-0.5 rounded font-bold">
                      SECURE AUDIT
                    </span>
                  </div>

                  <ul className="grid grid-cols-2 gap-3">
                    <li className="flex gap-2 items-center text-xs text-black/75">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-light">ADA Title III Pass</span>
                    </li>
                    <li className="flex gap-2 items-center text-xs text-black/75">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-light">Lighthouse 100/100</span>
                    </li>
                    <li className="flex gap-2 items-center text-xs text-black/75">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-light">Tailwind Token Set</span>
                    </li>
                    <li className="flex gap-2 items-center text-xs text-black/75">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-light">Schema markup valid</span>
                    </li>
                  </ul>

                </div>

              </div>

              {/* Absolute floating telemetry overlay */}
              <div className="absolute -bottom-6 -left-6 bg-slate-950 text-white rounded-2xl p-4 shadow-xl border border-white/10 max-w-[170px] hidden md:block transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 group-hover:-translate-x-2">
                <div className="font-mono text-[9px] text-[#0070f3] font-bold mb-1 uppercase tracking-wider">RETENTION SHIELD</div>
                <p className="text-[10px] text-slate-300 font-light leading-relaxed">
                  Eliminating tap friction maps immediately increases team productivity by up to 34%.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Deep SEO Copy block */}
        <div className="border-t border-black/5 pt-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-black/45 tracking-widest uppercase block">The Strategy Matrix</span>
              <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-slate-900 mt-2">
                Why complex dashboards fail without strict UX discipline.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-black/75 font-light leading-relaxed text-base md:text-lg">
              <p>
                Enterprise platforms are often stuffed with rich features, nested navigations, and complex filters. 
                However, when user interaction is hindered by slow rendering rates, shifting elements, or nested menus, employee efficiency drops and bounce rates skyrocket. 
                User experience is not merely aesthetic—it is a critical driver of product adoptability and software lifespan.
              </p>
              <p>
                We conduct comprehensive, coordinate-based UX audits to analyze how information flows across your interface views. 
                By studying user cognitive steps, aligning with WCAG contrast ratios, and replacing legacy render-blocking scripts with lightweight layouts, we establish absolute design excellence. 
                Our handovers include clean, crawlable code structures and comprehensive CSS guidelines that allow your product teams to ship matching modules in days rather than months.
              </p>
            </div>
          </div>
        </div>

        {/* Process Map */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-sans font-medium tracking-tight text-slate-900">
              Enterprise Usability Audit Deliverables
            </h2>
            <p className="text-xs font-mono text-black/45 tracking-widest uppercase mt-2">
              Bespoke visual strategies engineered for scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseDeliverables.map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl border border-slate-900/5 bg-slate-50/40 hover:bg-white hover:shadow-xs hover:border-slate-900/10 transition-all duration-300 flex gap-4 items-start"
              >
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl font-mono text-xs font-bold select-none shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-sans font-bold text-slate-950 mb-1">{item.title}</h3>
                  <p className="text-sm text-black/55 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Trust Block */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden text-center lg:text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0070f3]/10 rounded-full blur-3xl -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-[#0070f3] tracking-widest uppercase block">Our Operational Promise</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium tracking-tight text-white leading-tight">
                Designed to interlock with complex corporate architectures.
              </h2>
              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed max-w-2xl">
                We work directly with engineering leaders, product managers, and marketing directors to translate custom UI audits into actionable, clean code guidelines. 
                Whether you utilize React, Angular, or micro-frontends, our design tokens fit right in.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left space-y-4 w-full max-w-[280px]">
                <div className="flex gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  &quot;Sofia Varian&apos;s UX audit resolved three critical navigation friction points on our financial console within two days.&quot;
                </p>
                <div className="text-[10px] font-mono text-slate-400">
                  - VP Product, Apex Capital
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Conversion Form CTA */}
        <div className="p-8 md:p-12 rounded-3xl border border-dashed border-slate-900/15 bg-slate-50/50 max-w-3xl mx-auto text-center">
          <Users className="w-10 h-10 text-slate-400 mx-auto mb-4" />
          <h3 className="text-2xl font-sans font-bold text-slate-900 mb-2">Schedule an Enterprise Alignment Call</h3>
          <p className="text-xs md:text-sm text-black/55 font-light leading-relaxed max-w-lg mx-auto mb-8">
            Review layout coordinates, WCAG contrast levels, and interactive speed targets directly with lead designer Sofia Varian.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href="/funnel/audit-request"
              className="px-6 py-3 bg-[#0070f3] text-white rounded-full font-bold text-xs md:text-sm hover:bg-black transition-colors duration-300 active:scale-95 w-full sm:w-auto"
            >
              Request Usability Audit Form
            </a>
            <a 
              href="/contact"
              className="px-6 py-3 bg-white border border-slate-900/10 text-slate-800 rounded-full font-semibold text-xs md:text-sm hover:bg-slate-50 transition-colors duration-300 active:scale-95 w-full sm:w-auto"
            >
              Inquire General Consultation
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
