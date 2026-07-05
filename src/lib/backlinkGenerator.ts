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
