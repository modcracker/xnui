import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-24 px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Logo size={32} />
            <p className="max-w-xs text-sm text-black/40 leading-relaxed">
              Elegant layout systems, interactive objects, and high-fidelity digital experiences crafted with simulated physical behavior.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-black/40">Studio</h4>
            <div className="flex flex-col gap-2 text-sm text-black/60 font-light">
              <a href="#/services" className="hover:text-electric-blue transition-colors w-fit">Services</a>
              <a href="#/faq" className="hover:text-electric-blue transition-colors w-fit">Info</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-black/40">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-black/60 font-light">
              <a href="https://www.linkedin.com/company/xnui/" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors w-fit">LinkedIn</a>
              <a 
                href="#/contact" 
                className="px-4 py-2 bg-black text-white hover:bg-[#0070f3] rounded-full text-xs font-semibold tracking-tight transition-all duration-300 text-center w-fit shadow-sm hover:shadow-md hover:shadow-[#0070f3]/10 active:scale-95"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-4">
          <span className="text-xs text-black/45">
            &copy; 2026 Tactile Studio. Designing elegant interfaces.
          </span>
          <div className="flex gap-6 text-xs text-black/45">
            <a href="#" className="hover:text-black transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

