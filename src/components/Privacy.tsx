import { Shield, Eye, Lock, RefreshCw } from "lucide-react";
import PageBacklinks from "./PageBacklinks";

export default function Privacy() {
  const lastUpdated = "June 13, 2026";

  return (
    <div className="pt-8 pb-20 md:pb-32 px-6 md:px-12 bg-[#fbfbfb] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header segment */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-[#0070f3] mb-4">
            <Shield size={16} />
            <span className="font-mono text-xs font-bold tracking-widest uppercase">SECURITY & PRIVACY PROFILE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-black tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-black/45 font-mono mt-3 uppercase flex items-center gap-1.5">
            <RefreshCw size={10} className="animate-spin-slow" />
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Narrative segments */}
        <div className="prose prose-slate max-w-none space-y-10 text-black/60 font-light text-sm md:text-base leading-relaxed">
          <p className="font-medium text-black">
            At Tactile Studio (xnui), we value details, precision, and complete transparent control over your data. This Privacy Policy details how we handle user data across our interactive design systems, services, and official partner integrations.
          </p>

          <div className="space-y-4 pt-4 border-t border-black/[0.04]">
            <h2 className="text-base font-bold text-black font-display tracking-tight flex items-center gap-2">
              <Eye size={16} className="text-[#0070f3]" />
              1. Information We Collect
            </h2>
            <p>
              We prioritize data minimization. We only collect the minimal information necessary to deliver our high-fidelity experiences, such as contact details provided directly by you through our project intake queries and official integration registry forms. Web diagnostics (browser type, anonymous session layout performance statistics) are stored locally to prevent server telemetry noise.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-black/[0.04]">
            <h2 className="text-base font-bold text-black font-display tracking-tight flex items-center gap-2">
              <Lock size={16} className="text-[#0070f3]" />
              2. Data Protection Practices
            </h2>
            <p>
              Your contact data is encrypted both in transit and at rest using standard modern configurations. We maintain robust Cloud Run sandbox protocols, preventing third-party trackers or unsafe pixel scripts from executing within physical frames. Access is strictly limited to verified studio directors.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-black/[0.04]">
            <h2 className="text-base font-bold text-black font-display tracking-tight flex items-center gap-2">
              <Shield size={16} className="text-[#0070f3]" />
              3. Partner Integrations & Seals
            </h2>
            <p>
              Our application links directly to our official corporate verified partner registers (including Feelize Partner Registry, bridge.ws rating system). In transit, these integrations do not transmit user cookie profiles or unencrypted identifiers unless authorized through strict OAuth popup dialogs.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-black/[0.04]">
            <h2 className="text-base font-bold text-black font-display tracking-tight">
              4. Your Digital Rights
            </h2>
            <p>
              You maintain full authority over your logs. You may ask to view, edit, or purge any personal profile details or partner registrations by reaching out directly to our info desk at <a href="#/contact" className="text-[#0070f3] hover:underline">contact us</a>.
            </p>
          </div>
        </div>

        {/* Dynamic legal & privacy network backlinks */}
        <PageBacklinks pageId="privacy" />

      </div>
    </div>
  );
}
