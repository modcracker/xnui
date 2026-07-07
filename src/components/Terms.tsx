import { FileText, Award, RefreshCw, AlertCircle } from "lucide-react";
import PageBacklinks from "./PageBacklinks";

export default function Terms() {
  const lastUpdated = "June 13, 2026";

  return (
    <div className="pt-8 pb-20 md:pb-32 px-6 md:px-12 bg-[#fbfbfb] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header segment */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-[#0070f3] mb-4">
            <FileText size={16} />
            <span className="font-mono text-xs font-bold tracking-widest uppercase">REGULATORY & SERVICE CHARTER</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-black tracking-tight leading-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-black/45 font-mono mt-3 uppercase flex items-center gap-1.5">
            <RefreshCw size={10} className="animate-spin-slow" />
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Narrative segments */}
        <div className="prose prose-slate max-w-none space-y-10 text-black/60 font-light text-sm md:text-base leading-relaxed">
          <p className="font-medium text-black">
            Welcome to the digital mechanics system of Tactile Studio (xnui). By accessing our website, design sandboxes, partners registry, or system portals, you agree to comply with the terms set forth in this service agreement.
          </p>

          <div className="space-y-4 pt-4 border-t border-black/[0.04]">
            <h2 className="text-base font-bold text-black font-display tracking-tight flex items-center gap-2">
              <Award size={16} className="text-[#0070f3]" />
              1. Intellectual Property & Sandbox License
            </h2>
            <p>
              All creative layouts, interactive simulations, custom physics scripts, and design tokens rendered within this domain are proprietary intellectual property of Tactile Studio. You are granted a limited, personal, non-transferable license to interact with and display our design assets for review and conceptual testing only.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-black/[0.04]">
            <h2 className="text-base font-bold text-black font-display tracking-tight flex items-center gap-2">
              <AlertCircle size={16} className="text-[#0070f3]" />
              2. Authorized Interactive Use
            </h2>
            <p>
              Any attempt to load, parse, scrape, or extract our custom physics equations or React components for unauthorized duplication is strictly prohibited. You agree not to execute automated scripts, scrapers, or bot telemetry agents inside our frame workspace.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-black/[0.04]">
            <h2 className="text-base font-bold text-black font-display tracking-tight">
              3. Partnership Registry Validity
            </h2>
            <p>
              All partner designations, seals, or certificate wrappers (such as the Feelize Partner record, bridge.ws rating pill) are legally bound to active registry licenses. Unauthorized emulation, placement, or modifications of these seals violate active trademark rules.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-black/[0.04]">
            <h2 className="text-base font-bold text-black font-display tracking-tight">
              4. Disclaimer & Liability Limits
            </h2>
            <p>
              We compile code to run securely, but we make no implicit warranties about constant 100% server state uptime. In no event shall Tactile Studio be liable for indirect, accidental, or consequential performance issues resulting from server-side updates or browser environment discrepancies.
            </p>
          </div>
        </div>

        {/* Dynamic legal & terms of service network backlinks */}
        <PageBacklinks pageId="terms" />

      </div>
    </div>
  );
}
