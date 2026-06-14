import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Cpu, Terminal, ArrowDownRight } from "lucide-react";

// @ts-ignore
import artObsidian from "../assets/images/art_obsidian_tactile_1781396100697.jpg";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  meta: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "What is xnui's design philosophy?",
    answer: "Our design philosophy represents physical, responsive user experiences. Instead of static tabs and cookie-cutter grids, we build fluid screens and responsive coordinate maps that make visiting, dragging, and interacting feel completely natural and satisfying.",
    meta: "Our Philosophy"
  },
  {
    id: "02",
    question: "Technical stack requirements?",
    answer: "We adapt to whatever tools you already use. On the front-end, we use highly reliable frameworks like React, Tailwind, and Framer, backed by secure, standard server endpoints. We build clean, modular codebases that integrate easily with your existing databases.",
    meta: "Reliable Tech"
  },
  {
    id: "03",
    question: "How do you handle model latency?",
    answer: "We design software to make wait times feel short and seamless. By using instant state updates, smooth transitions, and tactile animations, we make sure that the system always feels active and responsive to clicks, even during complex data tasks.",
    meta: "Performance"
  },
  {
    id: "04",
    question: "Security and Privacy?",
    answer: "Your safety and data privacy are core elements of our code. We follow clear, well-tested security practices, ensuring that your keys, user logins, and personal accounts are stored safely and securely with transparent user control.",
    meta: "User Freedom"
  }
];

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    setDisplayedText("");
    let currentIdx = 0;
    
    // Fast typewriter: 2-3 characters at a time for high technical fidelity
    const interval = setInterval(() => {
      if (currentIdx < text.length) {
        currentIdx += Math.min(3, text.length - currentIdx);
        setDisplayedText(text.slice(0, currentIdx));
      } else {
        clearInterval(interval);
      }
    }, 12);
    
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayedText}
      {displayedText.length < text.length && (
        <span className="inline-block w-[6px] h-3.5 ml-1 bg-[#fcbf49] animate-pulse" />
      )}
    </span>
  );
}

export default function FAQ() {
  const [selectedId, setSelectedId] = useState("01");
  const activeFaq = faqs.find(f => f.id === selectedId) || faqs[0];

  const customEase = [0.19, 1, 0.22, 1] as const;

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#ffffff] relative overflow-hidden border-t border-black/[0.02]">
      {/* High-fidelity full-screen artistic mechanical backdrop */}
      <div className="absolute left-0 bottom-0 top-0 w-full md:w-1/3 pointer-events-none opacity-[0.025] select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" />
        <img 
          src={artObsidian} 
          alt="" 
          className="w-full h-full object-cover filter saturate-0 contrast-125"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Invisible semantic metadata for search engines and AI crawl systems (FAQPage Schema) */}
      <div className="hidden" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq) => (
          <div key={faq.id} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <meta itemProp="name" content={faq.question} />
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <meta itemProp="text" content={faq.answer} />
            </div>
          </div>
        ))}
      </div>

      {/* Structural accent background grids */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-black/[0.02] pointer-events-none" />
      <div className="absolute left-12 bottom-12 w-64 h-64 border border-black/[0.015] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
         
         {/* Header Block */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-sans text-sm text-[#0070f3] font-semibold">Frequently asked questions</span>
            <div className="flex-1 h-[1px] bg-black/[0.04]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.08] max-w-2xl text-black">
                Transparent <br />
                <span className="italic font-light text-black/15">Design Thinking.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-black/45 text-sm md:text-base font-light leading-relaxed">
                Honest answers about how we design, how we think, and how we build software with people in mind.
              </p>
            </div>
          </div>
        </div>

        {/* Board Interactive Dialogue Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
          
          {/* Left panel: Bullet questions (Col span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              {faqs.map((faq) => {
                const isSelected = selectedId === faq.id;

                return (
                  <button
                    key={faq.id}
                    onClick={() => setSelectedId(faq.id)}
                    className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-500 flex items-center justify-between gap-4 group relative outline-none cursor-pointer ${
                      isSelected 
                        ? "border-black bg-black text-white shadow-xl shadow-black/10 scale-[1.01]" 
                        : "border-black/[0.04] bg-[#fcfcfc] text-black hover:border-black/15 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="pr-2">
                        <h3 className="text-sm md:text-base font-display font-medium leading-tight tracking-tight">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isSelected ? "border-white/15 text-[#0070f3] bg-white/5" : "border-black/5 text-black/20 group-hover:border-black/20 group-hover:text-black"
                    }`}>
                      <MessageSquare size={11} strokeWidth={2} />
                    </div>

                    {/* Smooth bottom active highlight pill */}
                    {isSelected && (
                      <motion.div 
                        layoutId="activeFaqLine"
                        className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#0070f3]" 
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Elegant dialogue state capsule */}
            <div className="p-5 md:p-6 rounded-2xl border border-black/[0.04] bg-[#fcfcfc] flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2 text-[#0070f3]">
                <Terminal size={12} />
                <span className="font-sans text-xs font-semibold">Information desk</span>
              </div>
              <p className="text-xs text-black/45 font-light leading-normal">
                Click on any question on the left to see our detailed design perspective.
              </p>
            </div>
          </div>

          {/* Right panel: Safe sandbox workspace rendering answer block (Col span 7) */}
          <div className="lg:col-span-12 xl:col-span-7 rounded-2xl md:rounded-[1.75rem] border border-black/[0.04] bg-[#fcfcfc] p-6 md:p-8 flex flex-col justify-between gap-6 relative overflow-hidden group">
            
            {/* Workspace status bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs text-black/55 font-medium">Detail view</span>
              </div>
              
              <div className="px-3.5 py-1.5 rounded-full bg-white border border-black/5 flex items-center gap-2 shadow-sm font-sans text-xs text-black/65 font-medium">
                <MessageSquare className="text-[#0070f3]" size={11} />
                <span>Response perspective</span>
              </div>
            </div>

            {/* Output screen container with blueprint feel */}
            <div className="relative flex-1 w-full p-6 md:p-8 bg-black text-white rounded-xl border border-white/5 overflow-hidden flex flex-col justify-between min-h-[280px]">
              {/* Scanline simulation */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:15px_15px]" />
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: customEase }}
                  className="space-y-5 z-10"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-sans text-xs text-[#fcbf49] bg-[#fcbf49]/10 px-2 py-0.5 rounded font-semibold mt-1">
                      Question
                    </span>
                    <div className="font-display text-base md:text-lg font-medium text-white/95 tracking-tight leading-normal">
                      {activeFaq.question}
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-white/10 border-dashed" />

                  <div className="flex items-start gap-4">
                    <span className="font-sans text-xs text-[#0070f3] bg-[#0070f3]/15 px-2 py-0.5 rounded font-semibold mt-1.5">
                      Answer
                    </span>
                    
                    <div className="font-display text-sm md:text-[15px] font-light text-white/70 leading-relaxed tracking-tight text-justify">
                      <TypewriterText text={activeFaq.answer} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Clean human visualizer footer info */}
              <div className="bottom-0 pt-4 border-t border-white/15 flex justify-between items-center z-10 text-xs font-sans text-white/50 font-medium">
                <span>Ref: {activeFaq.meta}</span>
                <span className="flex items-center gap-1">
                  Ready <span className="w-1.5 h-1.5 rounded-full bg-[#fcbf49]" />
                </span>
              </div>
            </div>

            {/* Bottom active explanation block */}
            <div className="p-4 rounded-xl bg-white border border-black/[0.02] flex items-center justify-between font-sans text-xs text-black/55 z-10 leading-none shadow-inner font-medium">
              <span className="text-[#0070f3]">Get in touch</span>
              <a 
                href="#/contact"
                className="flex items-center gap-1 text-black hover:text-[#0070f3] transition-colors cursor-pointer font-bold"
              >
                Let's discuss your project <ArrowDownRight size={10} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
