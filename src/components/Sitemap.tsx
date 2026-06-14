import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  FileCode, 
  MapPin, 
  ArrowUpRight, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Network, 
  Grid3X3, 
  FileJson, 
  Globe 
} from "lucide-react";

interface SitemapNode {
  path: string;
  name: string;
  category: "core" | "laboratory" | "legal";
  description: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
}

const sitemapData: SitemapNode[] = [
  {
    path: "#/home",
    name: "Homepage",
    category: "core",
    description: "Launch index containing main interactive modules, services summary & tactical experience gates.",
    lastmod: "2026-06-13",
    changefreq: "daily",
    priority: "1.0",
  },
  {
    path: "#/services",
    name: "Studio Services",
    category: "core",
    description: "Core operating offering covering elastic dynamics, custom viewport physics, and web sensory mechanics.",
    lastmod: "2026-06-13",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "#/laboratory",
    name: "Interactive Laboratory",
    category: "laboratory",
    description: "Simulation cluster showcasing modular web experimentations, kinetic behaviors, and real-time state models.",
    lastmod: "2026-06-13",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "#/about",
    name: "About Studio",
    category: "core",
    description: "Our philosophy, operating pillars, and core leadership profile featuring founder Sofia Varian.",
    lastmod: "2026-06-13",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "#/partnership",
    name: "Feelize Partnership",
    category: "laboratory",
    description: "Active high-fidelity certification partnership details & licensed verification system.",
    lastmod: "2026-06-13",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "#/faq",
    name: "Studio FAQ",
    category: "core",
    description: "Tactical answers regarding spring resistance math, licensing, support and custom builds.",
    lastmod: "2026-06-13",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "#/contact",
    name: "Inquiry Center",
    category: "core",
    description: "Secure submission tunnel for project commissions, integration requests, and studio relations.",
    lastmod: "2026-06-13",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "#/privacy",
    name: "Privacy Protocol",
    category: "legal",
    description: "Data encryption mandates, browser state safety records, and local persistence consent guidelines.",
    lastmod: "2026-06-13",
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    path: "#/terms",
    name: "Terms of Engagement",
    category: "legal",
    description: "Licensing parameters, design system guidelines, and user interactive engagement parameters.",
    lastmod: "2026-06-13",
    changefreq: "monthly",
    priority: "0.5",
  },
];

export default function Sitemap() {
  const [downloadFormat, setDownloadFormat] = useState<"xml" | "json" | "txt">("xml");
  const [copiedText, setCopiedText] = useState(false);
  const [pingStates, setPingStates] = useState<Record<string, number>>({});

  useEffect(() => {
    // Generate organic simulated ping offsets to represent live coordinates responsive nature
    const initialPings: Record<string, number> = {};
    sitemapData.forEach(item => {
      initialPings[item.name] = Math.floor(Math.random() * 12) + 4;
    });
    setPingStates(initialPings);
  }, []);

  const handleDownload = (format: "xml" | "json" | "txt") => {
    let content = "";
    let mimeType = "text/plain";
    let filename = `sitemap.${format}`;

    if (format === "xml") {
      mimeType = "application/xml";
      content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData.map(node => `  <url>
    <loc>${window.location.origin}/${node.path}</loc>
    <lastmod>${node.lastmod}</lastmod>
    <changefreq>${node.changefreq}</changefreq>
    <priority>${node.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
    } else if (format === "json") {
      mimeType = "application/json";
      content = JSON.stringify({
        origin: window.location.origin,
        timestamp: new Date().toISOString(),
        nodes: sitemapData.map(node => ({
          name: node.name,
          url: `${window.location.origin}/${node.path}`,
          lastmod: node.lastmod,
          changefreq: node.changefreq,
          priority: parseFloat(node.priority)
        }))
      }, null, 2);
    } else {
      mimeType = "text/plain";
      content = sitemapData.map(node => `${window.location.origin}/${node.path}`).join("\n");
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const customEase = [0.19, 1, 0.22, 1] as const;

  return (
    <div id="sitemap-page" className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      
      {/* Upper Breadcrumbs & Header Section */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-xs text-[#0070f3] font-bold tracking-widest uppercase">STRUCTURE DIRECTORY</span>
          <div className="h-[1px] bg-black/[0.08] flex-1" />
          <span className="font-mono text-[10px] text-black/35">MAP_VER: 2026.06.13</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-black max-w-3xl">
          Unified Site Architecture Map
        </h1>
        <p className="text-black/55 font-light text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
          Traverse our coordinate layout registry. Below you can crawl our structural coordinates, interactively jump to specific modules, or index alternatives for crawling engines.
        </p>
      </div>

      {/* Dynamic Formats Segment Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Format Selector and Manual Generators */}
        <div className="lg:col-span-4 space-y-8 bg-neutral-50/70 border border-black/[0.04] p-8 rounded-2xl">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-black/45 font-semibold tracking-wider uppercase block">FORMAT CHANNELS</span>
            <h3 className="text-lg font-display font-medium text-black">Available Alternative Formats</h3>
            <p className="text-xs text-black/45 leading-relaxed font-light">
              We provide fully serialized indices matching standard indexing protocols. Select a layout schema format to download.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { id: "xml", label: "XML Sitemap File", desc: "For google, bing and general web indexation crawlers.", icon: Globe, path: "/sitemap.xml" },
              { id: "json", label: "JSON Manifest", desc: "For dynamic headless applications & developer API consumption.", icon: FileJson, path: "/sitemap.json" },
              { id: "txt", label: "Plaintext URL Registry", desc: "Simple line-separated absolute URL lists for easy curls.", icon: FileCode, path: "/sitemap.txt" }
            ].map((formatItem) => {
              const Icon = formatItem.icon;
              return (
                <div 
                  key={formatItem.id} 
                  className={`p-4 rounded-xl border transition-all duration-300 relative group flex justify-between items-center cursor-pointer ${
                    downloadFormat === formatItem.id 
                      ? "bg-white border-black/10 shadow-sm" 
                      : "bg-black/[0.02] border-transparent hover:bg-black/[0.04]"
                  }`}
                  onClick={() => setDownloadFormat(formatItem.id as any)}
                >
                  <div className="flex gap-3 items-start">
                    <div className={`p-2 rounded-lg ${downloadFormat === formatItem.id ? 'bg-[#0070f3]/10 text-[#0070f3]' : 'bg-black/5 text-black/45'}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-black tracking-tight">{formatItem.label}</div>
                      <div className="text-[10px] text-black/40 font-light mt-0.5 leading-tight">{formatItem.desc}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {/* Live Server link */}
                    <a 
                      href={formatItem.path} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View live feed"
                      className="p-1 px-1.5 rounded-md hover:bg-black/5 text-black/35 hover:text-black transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-black/[0.04] space-y-3">
            <button 
              onClick={() => handleDownload(downloadFormat)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-black hover:bg-[#0070f3] text-white text-xs font-semibold font-mono tracking-tight shadow-sm hover:shadow-lg hover:shadow-[#0070f3]/10 transition-all duration-300"
            >
              <Download size={14} />
              DOWNLOAD SITEMAP.{downloadFormat.toUpperCase()}
            </button>
            <div className="text-center">
              <span className="font-mono text-[9px] text-black/35 font-light">
                * All alternative files are regenerated coordinates real-time
              </span>
            </div>
          </div>
        </div>

        {/* The Map visual rendering */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center bg-black/5 flex-wrap gap-2 p-3 px-4 rounded-xl text-xs text-black/55 font-mono">
            <div className="flex items-center gap-2">
              <Network size={14} className="text-[#0070f3]" />
              <span>CRAWL INDEX STATUS: </span>
              <span className="font-bold text-[#0070f3]">ACTIVE [200 OK]</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#0070f3]" /> Core</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-teal-500" /> Lab</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Legal</span>
            </div>
          </div>

          <div className="space-y-3">
            {sitemapData.map((node, i) => {
              const colorClass = node.category === "core" 
                ? "border-[#0070f3]/15 bg-[#0070f3]/2" 
                : node.category === "laboratory" 
                ? "border-emerald-500/15 bg-emerald-500/2" 
                : "border-slate-500/15 bg-slate-500/2";

              const badgeColor = node.category === "core" 
                ? "bg-[#0070f3]/10 text-[#0070f3]" 
                : node.category === "laboratory" 
                ? "bg-emerald-500/10 text-emerald-600" 
                : "bg-slate-500/10 text-slate-600";

              return (
                <motion.div
                  key={node.path}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: customEase }}
                  className={`border ${colorClass} rounded-2xl p-5 hover:shadow-md hover:border-black/10 transition-all duration-300 relative group`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono tracking-wider font-extrabold opacity-35 bg-neutral-100 px-1.5 py-0.5 rounded uppercase">
                          {node.priority} Priority
                        </span>
                        <span className={`text-[9px] font-mono tracking-wider font-bold uppercase rounded px-1.5 py-0.5 ${badgeColor}`}>
                          {node.category}
                        </span>
                        <span className="text-[10px] font-mono text-black/35">
                          ping: {pingStates[node.name] || 4}ms
                        </span>
                      </div>
                      <h4 className="text-base font-display font-medium text-slate-900 flex items-center gap-1.5">
                        {node.name}
                        <span className="text-black/35 font-mono text-xs font-light">({node.path})</span>
                      </h4>
                      <p className="text-xs text-black/55 leading-relaxed font-light max-w-xl">
                        {node.description}
                      </p>
                    </div>

                    <a 
                      href={node.path}
                      className="inline-flex items-center gap-1.5 py-2 px-3 rounded-lg bg-black/[0.03] text-black hover:bg-black text-xs font-mono font-semibold hover:text-white transition-all duration-250 self-end sm:self-center shrink-0 border border-black/5"
                    >
                      NAVIGATE
                      <ArrowUpRight size={12} />
                    </a>
                  </div>

                  {/* Crawl Technical metadata row */}
                  <div className="mt-3 pt-3 border-t border-black/[0.02] flex flex-wrap justify-between items-center text-[10px] font-mono text-black/35">
                    <div>
                      Last modified: <span className="font-bold text-black/50">{node.lastmod}</span>
                    </div>
                    <div>
                      Change Frequency: <span className="font-bold text-black/50">{node.changefreq}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
