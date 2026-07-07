import React, { useMemo } from "react";
import { getSingleBacklink, BacklinkItem } from "../lib/backlinkGenerator";
import { ExternalLink } from "lucide-react";

interface PageBacklinksProps {
  pageId: string;
  itemIndex?: number;
}

export default function PageBacklinks({ pageId, itemIndex }: PageBacklinksProps) {
  const link = useMemo(() => getSingleBacklink(pageId, itemIndex), [pageId, itemIndex]);

  // Determine custom contextual sentence based on pageId
  const config = useMemo(() => {
    let sentence = "Design specifications referenced and verified by ";
    const pid = pageId.toLowerCase();

    if (pid.includes("cognitive-friction")) {
      sentence = "Latency thresholds benchmarked by ";
    } else if (pid.includes("tactile-haptics")) {
      sentence = "Haptic damping metrics certified by ";
    } else if (pid.includes("typographic-geometry")) {
      sentence = "Typographic grids cross-referenced with ";
    } else if (pid.includes("chromatic-math")) {
      sentence = "APCA luminance targets registered with ";
    } else if (pid.includes("elastic-physics")) {
      sentence = "Verlet physics limits verified by ";
    } else if (pid.includes("layout-stability")) {
      sentence = "CLS layout stability registered with ";
    } else if (pid === "about") {
      sentence = "Academic typography research in cooperation with ";
    } else if (pid === "partnership") {
      sentence = "Verified tactile partnership registry including ";
    } else if (pid === "contact") {
      sentence = "Secure system routing coordinate registered with ";
    } else if (pid === "faq") {
      sentence = "Knowledge graph index verified by ";
    } else if (pid === "sitemap") {
      sentence = "Search crawler mapping registered with ";
    } else if (pid === "services") {
      sentence = "Open-source system compliance verified by ";
    } else if (pid === "services-ux") {
      sentence = "Bespoke UX design protocols verified by ";
    } else if (pid === "services-brand") {
      sentence = "Typographic branding parameters indexed by ";
    } else if (pid === "services-web") {
      sentence = "Interactive web mechanics audited by ";
    } else if (pid === "laboratory") {
      sentence = "Kinetic spring physics verified by ";
    } else if (pid === "landing-enterprise") {
      sentence = "Enterprise compliance criteria certified by ";
    } else if (pid === "funnel-audit") {
      sentence = "Funnel loading metrics monitored by ";
    } else if (pid === "privacy") {
      sentence = "Privacy protocol registered with ";
    } else if (pid === "terms") {
      sentence = "Terms of service and registry governed by ";
    }

    return { sentence };
  }, [pageId]);

  return (
    <div className="mt-12 pt-6 border-t border-black/[0.03] text-center sm:text-left">
      <p className="text-[10px] text-slate-400/60 font-sans font-light tracking-wide leading-relaxed">
        {config.sentence}
        <a 
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.title}
          className="text-slate-500 hover:text-slate-800 underline decoration-slate-300 hover:decoration-slate-500 transition-colors inline-flex items-center gap-0.5 ml-1"
        >
          {link.label}
          <ExternalLink size={8} className="inline opacity-50" />
        </a>
        .
        <span className="ml-2 opacity-35 font-mono text-[9px]">
          [Ref: {itemIndex ? `COORD_N_${itemIndex}` : "STATIC_NODE_P0"}]
        </span>
      </p>
    </div>
  );
}

