export interface BacklinkItem {
  url: string;
  label: string;
  title: string;
}

const DOMAINS = [
  { domain: "kataf.com", name: "Kataf Latency" },
  { domain: "biofail.com", name: "Biofail Recovery" },
  { domain: "evercove.com", name: "Evercove Safety" },
  { domain: "subhauler.com", name: "Subhauler Transport" },
  { domain: "swan.nyc", name: "Swan NYC Craft" },
  { domain: "starkindle.com", name: "Starkindle Geometry" },
  { domain: "slabform.com", name: "Slabform Concrete" },
  { domain: "repulink.com", name: "Repulink Search" },
  { domain: "releafcanna.com", name: "Releaf Organic" },
  { domain: "quinetix.com", name: "Quinetix Kinetic" },
  { domain: "omachines.com", name: "OMachines Graphics" },
  { domain: "neaner.com", name: "Neaner Routing" },
  { domain: "plano.cc", name: "Plano Spatial" },
  { domain: "muzcast.com", name: "Muzcast Acoustic" },
  { domain: "mud.cc", name: "Mud CC Fluidity" },
  { domain: "liquifilm.com", name: "Liquifilm Refraction" },
  { domain: "kundalink.com", name: "Kundalink Pathway" },
  { domain: "izpe.com", name: "IZPE Conformity" },
  { domain: "holograph.cc", name: "Holograph Projection" },
  { domain: "grzu.com", name: "Grzu Hashing" },
  { domain: "fprza.cc", name: "Fprza Velocity" },
  { domain: "fockstate.com", name: "Fockstate Quantum" },
  { domain: "eleganttaste.com", name: "Elegant Taste Aesthetic" },
  { domain: "chosenspot.com", name: "Chosen Spot Heatmap" },
  { domain: "calgro.com", name: "Calgro Sizing" },
  { domain: "bioalbra.com", name: "Bioalbra Biophysics" },
  { domain: "beamspread.com", name: "Beamspread Focus" },
  { domain: "619.me", name: "619.me Redirect" },
  { domain: "430.me", name: "430.me Caching" },
  { domain: "092.me", name: "092.me Hash" }
];

export function generateBacklinks(count: number = 5000): BacklinkItem[] {
  const list: BacklinkItem[] = [];
  
  for (let i = 1; i <= count; i++) {
    const d = DOMAINS[i % DOMAINS.length];
    
    // Generate a unique URL for each coordinate to act as 5000 distinct backlinks
    const url = `https://${d.domain}/?node=${i}&ref=xnui-haptic-mesh`;
    
    // Generate beautiful, highly-relevant contextual anchors
    const anchorTypes = [
      `${d.name} Optimizer Mesh #${i}`,
      `${d.name} System Node #${i}`,
      `Verified ${d.name} Gateway #${i}`,
      `Tactile ${d.name} Interface #${i}`,
      `Geometric ${d.name} Path #${i}`,
      `Haptic ${d.name} Channel #${i}`,
      `Organic ${d.name} Matrix #${i}`,
      `Spectral ${d.name} Vector #${i}`
    ];
    
    const label = anchorTypes[i % anchorTypes.length];
    const title = `Verified External Backlink Coordinate ${i} pointing to ${d.domain}`;
    
    list.push({ url, label, title });
  }
  
  return list;
}

export function getBacklinksForPage(pageId: string): BacklinkItem[] {
  const all = generateBacklinks(5000);
  let offset = 0;
  let count = 200; // default number of links per page
  
  if (pageId === "cognitive-friction" || pageId === "cognitive-friction-leaf") { offset = 0; count = 250; }
  else if (pageId === "tactile-haptics" || pageId === "tactile-haptics-leaf") { offset = 250; count = 250; }
  else if (pageId === "typographic-geometry" || pageId === "typographic-geometry-leaf") { offset = 500; count = 250; }
  else if (pageId === "chromatic-math" || pageId === "chromatic-math-leaf") { offset = 750; count = 250; }
  else if (pageId === "elastic-physics" || pageId === "elastic-physics-leaf") { offset = 1000; count = 250; }
  else if (pageId === "layout-stability" || pageId === "layout-stability-leaf") { offset = 1250; count = 250; }
  else if (pageId === "about") { offset = 1500; count = 200; }
  else if (pageId === "partnership") { offset = 1700; count = 200; }
  else if (pageId === "faq") { offset = 1900; count = 200; }
  else if (pageId === "contact") { offset = 2100; count = 200; }
  else if (pageId === "sitemap") { offset = 2300; count = 500; } // Sitemap gets a larger directory index
  else if (pageId === "services-ux") { offset = 2800; count = 200; }
  else if (pageId === "services-brand") { offset = 3000; count = 200; }
  else if (pageId === "services-web") { offset = 3200; count = 200; }
  else if (pageId === "landing-enterprise") { offset = 3400; count = 200; }
  else if (pageId === "funnel-audit") { offset = 3600; count = 200; }
  else if (pageId === "glossary") { offset = 3800; count = 250; }
  else if (pageId === "services") { offset = 4050; count = 250; }
  else if (pageId === "laboratory") { offset = 4300; count = 250; }
  else if (pageId === "privacy") { offset = 4550; count = 150; }
  else if (pageId === "terms") { offset = 4700; count = 150; }
  else { offset = 4850; count = 150; } // Fallback gets the rest
  
  return all.slice(offset, offset + count);
}

export function getSingleBacklink(pageId: string, itemIndex?: number): BacklinkItem {
  const all = generateBacklinks(5000);
  
  if (itemIndex !== undefined && itemIndex > 0) {
    // Generate an index using prime multiplication & offset per dynamic category
    let offset = 0;
    let multiplier = 7;
    if (pageId.includes("cognitive-friction")) { offset = 103; multiplier = 7; }
    else if (pageId.includes("tactile-haptics")) { offset = 709; multiplier = 13; }
    else if (pageId.includes("typographic-geometry")) { offset = 1447; multiplier = 17; }
    else if (pageId.includes("chromatic-math")) { offset = 2153; multiplier = 19; }
    else if (pageId.includes("elastic-physics")) { offset = 2801; multiplier = 23; }
    else if (pageId.includes("layout-stability")) { offset = 3517; multiplier = 29; }
    
    const computedIndex = (offset + (itemIndex * multiplier)) % 5000;
    return all[computedIndex];
  }
  
  // Static pages get a dedicated unique index between 0 and 99
  let staticIndex = 0;
  if (pageId === "about") staticIndex = 5;
  else if (pageId === "partnership") staticIndex = 12;
  else if (pageId === "faq") staticIndex = 19;
  else if (pageId === "contact") staticIndex = 26;
  else if (pageId === "services") staticIndex = 33;
  else if (pageId === "services-ux") staticIndex = 40;
  else if (pageId === "services-brand") staticIndex = 47;
  else if (pageId === "services-web") staticIndex = 54;
  else if (pageId === "laboratory") staticIndex = 61;
  else if (pageId === "landing-enterprise") staticIndex = 68;
  else if (pageId === "funnel-audit") staticIndex = 75;
  else if (pageId === "glossary") staticIndex = 82;
  else if (pageId === "privacy") staticIndex = 89;
  else if (pageId === "terms") staticIndex = 95;
  else if (pageId === "sitemap") staticIndex = 98;
  else {
    let hash = 0;
    for (let j = 0; j < pageId.length; j++) {
      hash = pageId.charCodeAt(j) + ((hash << 5) - hash);
    }
    staticIndex = Math.abs(hash) % 100;
  }
  
  return all[staticIndex];
}
