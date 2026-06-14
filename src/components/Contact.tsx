import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Copy, RefreshCw, ArrowLeft, Mail, ShieldCheck, HelpCircle } from "lucide-react";

// @ts-ignore
import artBlueprint from "../assets/images/art_parametric_blueprint_1781396116015.jpg";

export default function Contact() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Generate a random math problem
  const generateProblem = () => {
    const n1 = Math.floor(Math.random() * 8) + 2; // 2 to 9
    const n2 = Math.floor(Math.random() * 8) + 2; // 2 to 9
    setNum1(n1);
    setNum2(n2);
    setUserAnswer("");
    setIsCorrect(false);
    setErrorMessage("");
    setCopied(false);
  };

  // Generate prime numbers or simple integers on mount
  useEffect(() => {
    generateProblem();
  }, []);

  const handleVerify = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer.trim(), 10) === correctAnswer) {
      setIsCorrect(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Hmm, that is not correct. Try again!");
    }
  };

  const emailUser = "info";
  const emailDomain = "xnui.com";
  const fullEmail = `${emailUser}@${emailDomain}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDirectMail = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${fullEmail}`;
  };

  const customEase = [0.19, 1, 0.22, 1] as const;

  return (
    <div className="py-12 md:py-24 px-6 relative w-full flex flex-col items-center justify-center min-h-[75vh] overflow-hidden">
      {/* High-fidelity full-screen artistic mechanical blueprint backdrop */}
      <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none opacity-[0.038] select-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-transparent to-[#ffffff] z-10" />
        <img 
          src={artBlueprint} 
          alt="" 
          className="w-full h-full object-cover filter saturate-50 contrast-125"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Structural Minimal Grid Background specifically for the contact page */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="max-w-2xl w-full relative z-10">
        
        {/* Top return navigation link */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: customEase }}
          className="mb-8 flex justify-start"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-xs text-black/50 hover:text-black transition-colors font-sans font-semibold group py-1.5"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Return to studio</span>
          </a>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isCorrect ? (
            <motion.div
              key="verification-card"
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.5, ease: customEase }}
              className="bg-white border border-black/[0.04] p-8 md:p-12 rounded-[2rem] shadow-xl shadow-black/[0.015] w-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0070f3]/[0.06] flex items-center justify-center text-[#0070f3]">
                  <ShieldCheck size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-xl font-display font-medium text-black">Human Verification</h2>
                  <p className="text-[11px] text-black/40 font-sans">Keeping communication spam-free</p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-black mb-4 leading-snug">
                Let's reveal the email.
              </h3>
              
              <p className="text-black/50 text-xs md:text-sm font-light leading-relaxed mb-8">
                We've ditched complicated multi-field forms and database servers. To protect our address from automated web scrapers, solve this quick addition:
              </p>

              <form onSubmit={handleVerify} className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-[#fbfbfb] border border-black/[0.03]">
                  
                  {/* The math dynamic question display */}
                  <div className="flex items-center gap-3 text-lg font-mono font-medium text-black/80 px-2 sm:border-r sm:border-black/[0.05] sm:pr-6 py-1">
                    <HelpCircle size={16} className="text-[#0070f3] opacity-70" />
                    <span>{num1}</span>
                    <span>+</span>
                    <span>{num2}</span>
                    <span>=</span>
                  </div>

                  {/* Dynamic user sum input box */}
                  <div className="relative flex-1 w-full sm:w-auto">
                    <input 
                      required
                      type="number"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      value={userAnswer}
                      onChange={(e) => {
                        setUserAnswer(e.target.value);
                        setErrorMessage("");
                      }}
                      className="w-full bg-white border border-black/[0.06] rounded-xl px-4 py-2.5 font-mono text-base text-black placeholder-black/25 focus:outline-none focus:border-[#0070f3] focus:ring-1 focus:ring-[#0070f3]/10 transition-all text-center sm:text-left"
                      placeholder="Your answer"
                    />
                  </div>

                  {/* Refresh problem trigger */}
                  <button
                    type="button"
                    onClick={generateProblem}
                    title="Change question"
                    className="p-2.5 rounded-xl text-black/45 hover:text-black hover:bg-black/[0.03] active:scale-95 transition-all outline-none"
                  >
                    <RefreshCw size={14} className="stroke-[2.2]" />
                  </button>
                </div>

                {errorMessage && (
                  <motion.p 
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 font-sans font-medium bg-red-50 px-4 py-2 rounded-lg border border-red-100"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                <button
                  type="submit"
                  className="w-full h-12 bg-black text-white hover:bg-[#0070f3] active:scale-[0.99] rounded-xl flex items-center justify-center gap-2 font-sans text-xs md:text-sm font-semibold transition-all ease-out duration-300 shadow-md shadow-black/5 hover:shadow-lg hover:shadow-[#0070f3]/10 cursor-pointer"
                >
                  <span>Verify answer & reveal email</span>
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="reveal-card"
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: customEase }}
              className="bg-white border border-black/[0.04] p-8 md:p-12 rounded-[2rem] shadow-xl shadow-black/[0.015] w-full text-center relative overflow-hidden"
            >
              {/* Confetti-style background accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#0070f3]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6 border border-green-100 shadow-sm">
                  <Check size={24} strokeWidth={2.5} />
                </div>

                <h2 className="text-sm font-sans font-bold text-[#0070f3] tracking-widest uppercase mb-1.5">Verification Successful</h2>
                <h3 className="text-xl md:text-2xl font-display font-medium text-black mb-8">Here is our direct inbox address</h3>

                {/* Email Display Plate */}
                <div className="w-full bg-[#fbfbfb] border border-black/[0.03] rounded-2xl p-5 md:p-6 mb-8 flex flex-col items-center justify-center relative group">
                  <span className="text-xs font-sans text-black/35 mb-2 font-semibold">DIRECT EMAIL</span>
                  <span className="text-xl sm:text-2xl md:text-3.5xl font-mono tracking-tight font-semibold text-black select-all">
                    {emailUser}@{emailDomain}
                  </span>
                </div>

                {/* Direct CTA Panel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  <button
                    onClick={handleCopyEmail}
                    className={`h-11 px-5 rounded-xl border flex items-center justify-center gap-2 font-sans text-xs md:text-sm font-semibold transition-all ease-out duration-300 pointer-events-auto cursor-pointer ${
                      copied 
                        ? "bg-green-500 border-green-500 text-white" 
                        : "bg-white border-black/[0.08] text-black hover:bg-black/[0.03]"
                    }`}
                  >
                    {copied ? <Check size={14} /> : <Copy size={13} />}
                    <span>{copied ? "Copied address!" : "Copy to clipboard"}</span>
                  </button>

                  <button
                    onClick={handleDirectMail}
                    className="h-11 px-5 rounded-xl bg-black hover:bg-[#0070f3] text-white flex items-center justify-center gap-2 font-sans text-xs md:text-sm font-semibold transition-all ease-out duration-300 shadow-md shadow-black/5 cursor-pointer"
                  >
                    <Mail size={13} />
                    <span>Send email directly</span>
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.03] w-full flex justify-between items-center text-[11px] text-black/40">
                  <span>General respond time: Under 24h</span>
                  <button 
                    onClick={generateProblem}
                    className="hover:text-black flex items-center gap-1 transition-colors"
                  >
                    <RefreshCw size={10} />
                    <span>Lock section</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
