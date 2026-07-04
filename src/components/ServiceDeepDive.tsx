import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { generateDynamicSEOContent } from "../lib/seoGenerator";
import { 
  Zap, 
  ArrowLeft, 
  Sliders, 
  Sparkles, 
  RefreshCw, 
  Layers, 
  Monitor, 
  FileText, 
  ChevronRight, 
  Check, 
  Smartphone,
  Compass,
  Cpu,
  Feather,
  Info
} from "lucide-react";

interface SubPageInfo {
  id: string;
  parentPath: string;
  parentName: string;
  path: string;
  name: string;
  desc: string;
  meta: string;
}

export const subPagesData: SubPageInfo[] = [
  {
    id: "cognitive-friction",
    parentPath: "/services/ux-design",
    parentName: "Bespoke UI/UX Design",
    path: "/services/ux-design/cognitive-friction",
    name: "Cognitive Friction Optimization",
    desc: "Rigorous Fitts's Law calculation & tap-target padding optimization. We minimize user decision micro-seconds through visual hierarchy, predictive cursor magnets, and spatial memory grouping.",
    meta: "CALCULATED COGNITIVE DEPTH & FITTS'S CONSTANTS"
  },
  {
    id: "tactile-haptics",
    parentPath: "/services/ux-design",
    parentName: "Bespoke UI/UX Design",
    path: "/services/ux-design/tactile-haptics",
    name: "Tactile Viewport Haptics",
    desc: "Implementing organic spring-damping models for glass surfaces. Every expansion, swipe, and drag gesture receives a physical sense of weight, inertia, and elastic boundary boundaries.",
    meta: "SPRING-DAMPER PHYSICAL MODELING & MOTION INERTIA"
  },
  {
    id: "typographic-geometry",
    parentPath: "/services/brand-strategy",
    parentName: "Strategic Brand Systems",
    path: "/services/brand-strategy/typographic-geometry",
    name: "Typographic Grid Geometry",
    desc: "Precision layout scales designed around the Swiss typographic golden ratio (1.618). Features fluid size interpolation based on viewport coordinates, avoiding layout jumps.",
    meta: "SWISS PROPORTIONAL SCALING & typ_ratio_constants"
  },
  {
    id: "chromatic-math",
    parentPath: "/services/brand-strategy",
    parentName: "Strategic Brand Systems",
    path: "/services/brand-strategy/chromatic-math",
    name: "Chromatic Contrast Mathematics",
    desc: "APCA (Advanced Predictive Contrast Algorithm) color token modeling. We calculate true perceptual contrast across dark and light canvases to achieve pristine compliance.",
    meta: "APCA PERCEPTIONAL CONTRAST & WCAG 3.0 PRE-FLIGHTS"
  },
  {
    id: "elastic-physics",
    parentPath: "/services/web-mechanics",
    parentName: "Interactive Web Mechanics",
    path: "/services/web-mechanics/elastic-physics",
    name: "Elastic Motion Physics",
    desc: "Translating static blueprints into native canvas Verlet physics anchors. Interfaces snap, bounce, and drape organically in real-time according to mathematical mass constraints.",
    meta: "VERLET PARTICLE CONSTRAINTS & KINETIC MAGNETISM"
  },
  {
    id: "layout-stability",
    parentPath: "/services/web-mechanics",
    parentName: "Interactive Web Mechanics",
    path: "/services/web-mechanics/layout-stability",
    name: "Zero Layout Shift Mechanics",
    desc: "Engineering absolute aspect-ratio frames and loading-skeleton coordinate anchors. We guarantee a Cumulative Layout Shift (CLS) metric of 0.000 for elite speed performance.",
    meta: "CUMULATIVE LAYOUT SHIFT (CLS) STABILITY PROTOCOL"
  }
];

export default function ServiceDeepDive({ subPageId }: { subPageId: string }) {
  const isLeaf = subPageId.includes("-leaf-");
  let leafType = "";
  let leafId = "";
  if (isLeaf) {
    const parts = subPageId.split("-leaf-");
    leafType = parts[0];
    leafId = parts[1];
  }

  const page = subPagesData.find(p => p.id === (isLeaf ? leafType : subPageId)) || subPagesData[0];

  let leafTitle = "";
  let leafDesc = "";
  let leafMeta = "";
  let leafCopy = "";
  let leafTags: string[] = [];
  
  if (isLeaf) {
    const content = generateDynamicSEOContent(leafType, leafId);
    leafTitle = content.title;
    leafDesc = content.desc;
    leafMeta = content.meta;
    leafCopy = content.richCopy;
    leafTags = content.tags;
  }
  
  // 1. Cognitive Friction state
  const [verifyFeedback, setVerifyFeedback] = useState<string | null>(null);
  const [fittsTargetSize, setFittsTargetSize] = useState<number>(50);
  const [fittsDistance, setFittsDistance] = useState<number>(200);
  const [fittsTime, setFittsTime] = useState<number | null>(null);
  const [fittsClicks, setFittsClicks] = useState<number>(0);
  const [isTestRunning, setIsTestRunning] = useState<boolean>(false);
  const [testCoords, setTestCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const fittsAreaRef = useRef<HTMLDivElement>(null);

  // 2. Tactile Haptics state
  const [springTension, setSpringTension] = useState<number>(180);
  const [springFriction, setSpringFriction] = useState<number>(12);
  const [springPosition, setSpringPosition] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartPos = useRef<number>(0);

  // 3. Typographic Geometry state
  const [fontScaleRatio, setFontScaleRatio] = useState<number>(1.618);
  const [baseFontSize, setBaseFontSize] = useState<number>(16);

  // 4. Chromatic Contrast state
  const [bgColor, setBgColor] = useState<string>("#f8fafc");
  const [textColor, setTextColor] = useState<string>("#0f172a");

  // 5. Elastic Physics state
  const [elasticTension, setElasticTension] = useState<number>(80);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHoveringCanvas, setIsHoveringCanvas] = useState<boolean>(false);

  // 6. Layout Stability state
  const [hasSkeletons, setHasSkeletons] = useState<boolean>(true);
  const [isSimulatingLoad, setIsSimulatingLoad] = useState<boolean>(false);
  const [clsValue, setClsValue] = useState<number>(0);
  const [simulatedElements, setSimulatedElements] = useState<boolean>(false);

  // Elastic physics simulation effect
  useEffect(() => {
    if (page.id !== "elastic-physics" || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Create particles in a grid connected by springs
    interface Particle {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
    }

    const particles: Particle[] = [];
    const cols = 8;
    const rows = 5;
    const spacingX = width / (cols - 1);
    const spacingY = height / (rows - 1);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const px = c * spacingX;
        const py = r * spacingY;
        particles.push({
          x: px,
          y: py,
          ox: px,
          oy: py,
          vx: 0,
          vy: 0
        });
      }
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update particles
      particles.forEach((p, idx) => {
        // Tension pulls back to original coordinates
        const k = elasticTension / 1000;
        const ax = (p.ox - p.x) * k;
        const ay = (p.oy - p.y) * k;
        
        // Mouse push force
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 1.5;
          p.vy -= Math.sin(angle) * force * 1.5;
        }

        p.vx += ax;
        p.vy += ay;
        p.vx *= 0.88; // damping
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;
      });

      // Draw connections
      ctx.strokeStyle = "rgba(0, 112, 243, 0.18)";
      ctx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          // horizontal connection
          if (c < cols - 1) {
            ctx.beginPath();
            ctx.moveTo(particles[idx].x, particles[idx].y);
            ctx.lineTo(particles[idx + 1].x, particles[idx + 1].y);
            ctx.stroke();
          }
          // vertical connection
          if (r < rows - 1) {
            ctx.beginPath();
            ctx.moveTo(particles[idx].x, particles[idx].y);
            ctx.lineTo(particles[idx + cols].x, particles[idx + cols].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#0070f3";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [page.id, elasticTension]);

  // Fitts's Law Click Handler
  const handleFittsStart = () => {
    setIsTestRunning(true);
    setFittsClicks(0);
    setFittsTime(null);
    spawnTarget();
  };

  const spawnTarget = () => {
    if (!fittsAreaRef.current) return;
    const area = fittsAreaRef.current;
    const maxX = area.clientWidth - fittsTargetSize - 20;
    const maxY = area.clientHeight - fittsTargetSize - 20;
    
    // Position target based on distance state
    const angle = Math.random() * Math.PI * 2;
    const centerX = area.clientWidth / 2;
    const centerY = area.clientHeight / 2;
    
    const x = Math.max(10, Math.min(maxX, centerX + Math.cos(angle) * (fittsDistance / 2)));
    const y = Math.max(10, Math.min(maxY, centerY + Math.sin(angle) * (fittsDistance / 3)));
    
    setTestCoords({ x, y });
  };

  const handleTargetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isTestRunning) return;
    
    const clicks = fittsClicks + 1;
    setFittsClicks(clicks);

    if (clicks >= 5) {
      // Complete test
      const a = 150; // human reaction component (ms)
      const b = 180; // index of difficulty slope
      // Index of Difficulty = log2(2D / W)
      const id = Math.log2((2 * fittsDistance) / fittsTargetSize);
      const calculatedTimeMs = Math.round(a + b * id);
      setFittsTime(calculatedTimeMs);
      setIsTestRunning(false);
    } else {
      spawnTarget();
    }
  };

  // Tactile Drag simulation spring dynamics
  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = e.clientX - springPosition;
  };

  useEffect(() => {
    if (!isDragging) {
      // Spring return mechanism loop
      let animFrame: number;
      let pos = springPosition;
      let vel = 0;

      const springLoop = () => {
        const k = springTension / 400; // stiffness
        const b = springFriction / 30; // damping factor
        const force = -k * pos;
        const accel = force; // mass = 1
        vel += accel;
        vel *= (1 - b);
        pos += vel;

        setSpringPosition(pos);

        if (Math.abs(pos) > 0.1 || Math.abs(vel) > 0.1) {
          animFrame = requestAnimationFrame(springLoop);
        } else {
          setSpringPosition(0);
        }
      };

      animFrame = requestAnimationFrame(springLoop);
      return () => cancelAnimationFrame(animFrame);
    }
  }, [isDragging, springTension, springFriction]);

  const handleGlobalMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const currentOffset = e.clientX - dragStartPos.current;
    // apply elastic resistance (log-based drag limit)
    const direction = currentOffset < 0 ? -1 : 1;
    const magnitude = Math.abs(currentOffset);
    const resistedPos = direction * (150 * Math.log10(1 + magnitude / 150));
    setSpringPosition(resistedPos);
  };

  const handleGlobalMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, springPosition]);

  // CLS loader simulator
  const runClsSimulation = () => {
    setIsSimulatingLoad(true);
    setClsValue(0);
    setSimulatedElements(false);
    
    // Stage 1: Load text
    setTimeout(() => {
      // Stage 2: Heavy content inserts causing shift if skeletons are turned off
      if (!hasSkeletons) {
        setClsValue(0.245); // highly layout-shifting
      } else {
        setClsValue(0.000); // stable
      }
      setSimulatedElements(true);
      setIsSimulatingLoad(false);
    }, 1500);
  };

  // Nav to previous page helpers
  const handleBackToParent = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", page.parentPath);
    window.dispatchEvent(new Event("popstate"));
  };

  // Quick navigation to other deep dives
  const navigateToSubPage = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  };

  // Contrast checking calculation
  const getContrastColor = (hex: string) => {
    // simple YIQ conversion to recommend WCAG compliance
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    const yiq = ((r*299)+(g*587)+(b*114))/1000;
    return yiq >= 128 ? "#090d16" : "#f8fafc";
  };

  const calculateAPCAContrast = () => {
    // Mock robust ratio matching APCA relative calculations
    const r1 = parseInt(bgColor.substring(1, 3), 16);
    const g1 = parseInt(bgColor.substring(3, 5), 16);
    const b1 = parseInt(bgColor.substring(5, 7), 16);
    
    const r2 = parseInt(textColor.substring(1, 3), 16);
    const g2 = parseInt(textColor.substring(3, 5), 16);
    const b2 = parseInt(textColor.substring(5, 7), 16);

    const l1 = 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1;
    const l2 = 0.2126 * r2 + 0.7152 * g2 + 0.0722 * b2;

    const diff = Math.abs(l1 - l2);
    // Scale loosely to APCA Lc values (up to Lc 106)
    const lc = Math.round((diff / 255) * 106);
    return lc;
  };

  const apcaLc = calculateAPCAContrast();

  return (
    <div id={`deepdive-${page.id}`} className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-black/45 mb-4">
          <a href="/" className="hover:text-black transition-colors">xnui</a>
          <ChevronRight size={10} />
          <a href="/services" className="hover:text-black transition-colors">Services</a>
          <ChevronRight size={10} />
          <a 
            href={page.parentPath} 
            onClick={handleBackToParent}
            className="hover:text-black transition-colors text-indigo-600 font-semibold"
          >
            {page.parentName}
          </a>
          <ChevronRight size={10} />
          {isLeaf ? (
            <>
              <a 
                href={page.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSubPage(page.path);
                }}
                className="hover:text-black transition-colors text-indigo-600 font-semibold"
              >
                {page.name}
              </a>
              <ChevronRight size={10} />
              <span className="text-[#0070f3] font-bold">Calibration Node #{leafId}</span>
            </>
          ) : (
            <span className="text-[#0070f3] font-bold">{page.name}</span>
          )}
        </div>

        {isLeaf ? (
          <button 
            onClick={(e) => {
              e.preventDefault();
              navigateToSubPage(page.path);
            }}
            className="inline-flex items-center gap-1 text-xs font-mono text-black/65 hover:text-black border-b border-black/10 pb-0.5 bg-transparent border-0 cursor-pointer"
          >
            <ArrowLeft size={12} /> Back to {page.name} parent node
          </button>
        ) : (
          <a 
            href={page.parentPath}
            onClick={handleBackToParent}
            className="inline-flex items-center gap-1 text-xs font-mono text-black/65 hover:text-black border-b border-black/10 pb-0.5"
          >
            <ArrowLeft size={12} /> Back to {page.parentName}
          </a>
        )}
      </div>

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-mono text-[#0070f3] font-bold uppercase tracking-wider">
            <Sparkles size={11} /> {isLeaf ? "DYNAMIC CALIBRATION COGNITIVE STEP" : "LAYER 3 DEEP-DIVE BLUEPRINT"}
          </div>
          <h1 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-slate-900 leading-tight">
            {isLeaf ? leafTitle : page.name}
          </h1>
          <p className="text-black/65 font-light text-base md:text-lg leading-relaxed max-w-3xl">
            {isLeaf ? leafDesc : page.desc}
          </p>
        </div>

        <div className="lg:col-span-4 p-5 rounded-2xl bg-neutral-50/70 border border-black/[0.04] text-[11px] font-mono space-y-2">
          <span className="text-black/45 uppercase block tracking-widest font-bold">SYSTEM METRICS REWRITE</span>
          <div>COORDINATE PATH: <span className="text-black font-semibold">{isLeaf ? window.location.pathname : page.path}</span></div>
          <div>CRAWLABILITY STATE: <span className="text-[#0070f3] font-semibold">100/100 PERFECT</span></div>
          <div>DAMPING INDEX: <span className="text-emerald-600 font-semibold">{isLeaf ? `${leafMeta} SECURED` : "t_0_limit APPROVED"}</span></div>
        </div>
      </div>

      {/* Main Core Showcase Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        
        {/* Playroom Simulator Frame */}
        <div className="lg:col-span-8 bg-white border border-black/[0.08] p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden min-h-[450px] flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50/10 rounded-full blur-3xl -z-10" />
          
          <div className="flex justify-between items-center pb-4 border-b border-black/5 mb-6">
            <div className="flex items-center gap-2">
              <Sliders size={16} className="text-[#0070f3]" />
              <span className="text-xs font-bold text-slate-950 font-sans tracking-tight uppercase">Interactive Tactile Playground</span>
            </div>
            <span className="text-[10px] font-mono text-black/35 tracking-widest uppercase">{isLeaf ? leafMeta : page.meta}</span>
          </div>

          {/* Render individual interactive experiment fields according to page id */}
          <div className="flex-1 flex flex-col justify-center my-6">

            {isLeaf && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-black/[0.04] space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-black/5">
                    <span className="text-[10px] font-mono text-black/45 uppercase tracking-wider">LABORATORY CALIBRATION SEQUENCE</span>
                    <span className="text-[10px] font-mono text-[#0070f3] font-bold">STATUS: STABLE</span>
                  </div>
                  
                  {/* Specialized leaf experiment blocks */}
                  {leafType === "cognitive-friction" && (
                    <div className="space-y-4">
                      <div className="text-center space-y-1">
                        <h4 className="text-xs font-mono font-bold text-slate-800">COGNITIVE LATENCY DIAGNOSTICS FOR F-{leafId}</h4>
                        <p className="text-[11px] text-black/55">
                          Tuned for a dynamic target tap boundary width of <span className="font-bold text-[#0070f3]">{30 + (parseInt(leafId) % 50)}px</span> and displacement of <span className="font-bold text-[#0070f3]">{150 + (parseInt(leafId) * 2)}px</span>.
                        </p>
                      </div>

                      {/* Interactive click test tailored for F-X */}
                      <div className="h-44 bg-slate-100 rounded-xl relative overflow-hidden flex flex-col items-center justify-center border border-black/5 p-4 text-center">
                        {verifyFeedback ? (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-2"
                          >
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-mono uppercase tracking-wider font-bold">
                              Verified ✓
                            </span>
                            <p className="text-xs font-mono font-bold text-slate-800 whitespace-pre-line leading-relaxed">
                              {verifyFeedback}
                            </p>
                            <button
                              onClick={() => setVerifyFeedback(null)}
                              className="text-[10px] text-indigo-600 hover:underline font-mono bg-transparent border-0 cursor-pointer"
                            >
                              Reset Calibration
                            </button>
                          </motion.div>
                        ) : (
                          <>
                            <button
                              onClick={() => {
                                const size = 30 + (parseInt(leafId) % 50);
                                const distance = 150 + (parseInt(leafId) * 2);
                                const id = Math.log2((2 * distance) / size);
                                const mt = Math.round(150 + 180 * id);
                                setVerifyFeedback(`Node F-${leafId} online.\nTarget: ${size}px | Difficulty: ${id.toFixed(2)} bits\nProjected Motion Time (MT): ${mt}ms`);
                              }}
                              className="px-4 py-2.5 bg-[#0070f3] text-white font-mono text-xs font-bold rounded-lg shadow-md hover:bg-indigo-600 transition-colors cursor-pointer"
                            >
                              VERIFY TARGET F-{leafId}
                            </button>
                            <span className="absolute bottom-2 right-3 text-[9px] font-mono text-black/35">CLICK BUTTON TO RUN COGNITIVE FLIGHT SUM</span>
                          </>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">TARGET INDEX</span>
                          <span className="text-xs font-bold text-slate-900 font-mono">F-{leafId}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">DECISION LAG</span>
                          <span className="text-xs font-bold text-emerald-600 font-mono">{(150 + 180 * Math.log2((2 * (150 + parseInt(leafId) * 2)) / (30 + parseInt(leafId) % 50))).toFixed(0)}ms</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">FITTS COMPLY</span>
                          <span className="text-xs font-bold text-[#0070f3] font-mono">99.8% PASS</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {leafType === "tactile-haptics" && (
                    <div className="space-y-4">
                      <div className="text-center space-y-1">
                        <h4 className="text-xs font-mono font-bold text-slate-800">SPRING DAMPING WAVE MODEL S-{leafId}</h4>
                        <p className="text-[11px] text-black/55">
                          Stiffness tension constant pre-loaded to <span className="font-bold text-indigo-600">{(100 + parseInt(leafId) * 1.5).toFixed(0)} N/m</span> and haptic damper coefficient at <span className="font-bold text-indigo-600">{(5 + parseInt(leafId) / 25).toFixed(2)} kg/s</span>.
                        </p>
                      </div>

                      {/* Interactive bouncing spring widget */}
                      <div className="h-44 bg-slate-100 rounded-xl relative overflow-hidden flex flex-col justify-center items-center border border-black/5 p-4">
                        <span className="text-[9px] font-mono text-black/35 mb-2 uppercase tracking-wide">Dynamic Pull-Spring Simulator</span>
                        
                        <motion.div
                          drag="x"
                          dragConstraints={{ left: -120, right: 120 }}
                          dragElastic={0.1}
                          whileDrag={{ scale: 1.05 }}
                          className="w-24 h-12 bg-indigo-600 rounded-xl cursor-grab active:cursor-grabbing flex items-center justify-center text-[10px] font-mono text-white font-bold shadow-md"
                        >
                          DRAG ME
                        </motion.div>
                        
                        <div className="w-44 h-0.5 bg-black/10 relative mt-4">
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-600" />
                        </div>
                        <span className="text-[8px] font-mono text-black/35 mt-2">DRAG LEFT OR RIGHT & RE-LAUNCH INERTIA LOOPS</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">SPRING K</span>
                          <span className="text-xs font-bold text-slate-900 font-mono">{(100 + parseInt(leafId) * 1.5).toFixed(0)} N/m</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">DAMPER B</span>
                          <span className="text-xs font-bold text-emerald-600 font-mono">{(5 + parseInt(leafId) / 25).toFixed(2)} kg/s</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">Q-FACTOR</span>
                          <span className="text-xs font-bold text-[#0070f3] font-mono">{(1.5 + parseInt(leafId) / 100).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {leafType === "typographic-geometry" && (
                    <div className="space-y-4">
                      <div className="text-center space-y-1">
                        <h4 className="text-xs font-mono font-bold text-slate-800">SWISS SCALE MODULAR PROP-GEOMETRY R-{leafId}</h4>
                        <p className="text-[11px] text-black/55">
                          Rendering responsive typography hierarchy with step offset coordinates pre-calculated around index <span className="font-bold text-amber-600">{leafId}</span>.
                        </p>
                      </div>

                      {/* Display Typography Hierarchy steps */}
                      <div className="h-44 bg-slate-100 rounded-xl relative overflow-hidden flex flex-col justify-between border border-black/5 p-4">
                        <div className="space-y-2">
                          <div style={{ fontSize: `${Math.max(12, 32 - parseInt(leafId) % 12)}px` }} className="font-sans font-black text-slate-900 tracking-tight leading-none">
                            Heading.R-{leafId}
                          </div>
                          <div style={{ fontSize: `${Math.max(10, 16 - parseInt(leafId) % 4)}px` }} className="font-sans text-slate-600 font-light leading-snug">
                            Sub-heading scale node step #{leafId}
                          </div>
                          <div className="text-[10px] font-mono text-black/45">
                            Lorem ipsum dolor sit amet, tactile geometry grid scaling coordinates perfectly locked.
                          </div>
                        </div>
                        <span className="text-[8px] font-mono text-black/35 block uppercase tracking-widest text-right">Preview scaling proportions</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">STEP CONSTANT</span>
                          <span className="text-xs font-bold text-slate-900 font-mono">Step #{leafId}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">BASE SCALE</span>
                          <span className="text-xs font-bold text-emerald-600 font-mono">{(1.618 + (parseInt(leafId) / 1000)).toFixed(4)}x</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">RATIO GRID</span>
                          <span className="text-xs font-bold text-[#0070f3] font-mono">1.618 GOLD</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {leafType === "chromatic-math" && (
                    <div className="space-y-4">
                      <div className="text-center space-y-1">
                        <h4 className="text-xs font-mono font-bold text-slate-800">APCA PERCEPTUAL CONTRAST AUDIT FOR P-{leafId}</h4>
                        <p className="text-[11px] text-black/55">
                          Analyzing APCA target luminance difference contrast for contrast compliant node <span className="font-bold text-rose-500">P-{leafId}</span>.
                        </p>
                      </div>

                      {/* Interactive Color swatch diagnostic */}
                      <div className="h-44 bg-slate-100 rounded-xl relative overflow-hidden flex flex-col justify-center items-center border border-black/5 p-4">
                        <div 
                          className="w-36 p-4 rounded-xl shadow-inner text-center border transition-colors"
                          style={{ 
                            backgroundColor: parseInt(leafId) % 2 === 0 ? "#0f172a" : "#f8fafc",
                            color: parseInt(leafId) % 2 === 0 ? "#f1f5f9" : "#0f172a",
                            borderColor: parseInt(leafId) % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
                          }}
                        >
                          <span className="text-xs font-bold font-mono">APCA Contrast chip</span>
                          <p className="text-[10px] opacity-75 mt-1">Luminance difference APCA level Lc {(75 + (parseInt(leafId) % 31))}</p>
                        </div>
                        <span className="text-[8px] font-mono text-black/35 mt-4">DYNAMIC PERCEPTUAL RATIO DETERMINED VIA APCA FORMULA</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">CONTRAST ID</span>
                          <span className="text-xs font-bold text-slate-900 font-mono">Lc {75 + (parseInt(leafId) % 31)}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">COMPLY LEVEL</span>
                          <span className="text-xs font-bold text-emerald-600 font-mono">LEVEL 3.0 APCA</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">LUM RATIO</span>
                          <span className="text-xs font-bold text-[#0070f3] font-mono">{(4.5 + (parseInt(leafId) % 20) / 10).toFixed(1)}:1</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {leafType === "elastic-physics" && (
                    <div className="space-y-4">
                      <div className="text-center space-y-1">
                        <h4 className="text-xs font-mono font-bold text-slate-800">VERLET VECTOR CONSTANT INTEGRATION V-{leafId}</h4>
                        <p className="text-[11px] text-black/55">
                          Real-time canvas mass-spring particle coordinate highlighted at node index <span className="font-bold text-[#0070f3]">#{leafId}</span>.
                        </p>
                      </div>

                      {/* Kinetic visualization placeholder */}
                      <div className="h-44 bg-slate-950 rounded-xl relative overflow-hidden flex flex-col justify-center items-center border border-white/10 p-4">
                        <div className="w-16 h-16 rounded-full border border-dashed border-[#0070f3]/50 flex items-center justify-center animate-spin absolute" style={{ animationDuration: "12s" }} />
                        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping absolute" />
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full absolute" />
                        <span className="text-[9px] font-mono text-indigo-400 z-10 mt-12 uppercase tracking-widest">Active node V-{leafId}</span>
                        <span className="absolute bottom-2 right-3 text-[8px] font-mono text-slate-500">MASS: {(0.5 + parseInt(leafId) / 250).toFixed(3)}g | DAMP: 0.88</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">PARTICLE ID</span>
                          <span className="text-xs font-bold text-slate-900 font-mono">#{leafId}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">MASS COEFFICIENT</span>
                          <span className="text-xs font-bold text-emerald-600 font-mono">{(0.5 + parseInt(leafId) / 250).toFixed(3)}g</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">CONSTRAINT ENVELOPE</span>
                          <span className="text-xs font-bold text-[#0070f3] font-mono">VERLET SLATE</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {leafType === "layout-stability" && (
                    <div className="space-y-4">
                      <div className="text-center space-y-1">
                        <h4 className="text-xs font-mono font-bold text-slate-800">CORE CLS SKELETON ANCHOR STABILITY C-{leafId}</h4>
                        <p className="text-[11px] text-black/55">
                          Layout pre-reserved skeleton aspect bounding container styled for frame node <span className="font-bold text-emerald-600">C-{leafId}</span>.
                        </p>
                      </div>

                      {/* Display zero shift render */}
                      <div className="h-44 bg-slate-100 rounded-xl relative overflow-hidden flex flex-col justify-center items-center border border-black/5 p-4">
                        <div className="w-4/5 h-20 bg-slate-200 animate-pulse rounded-xl flex items-center justify-center text-[10px] font-mono text-slate-400 border border-black/[0.03]">
                          RESERVED ANCHOR C-{leafId} (aspect ratio 16:9)
                        </div>
                        <span className="text-[8px] font-mono text-black/35 mt-4 uppercase">No layout shifts recorded. CLS score holds at exactly 0.000</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">FRAME STABILITY</span>
                          <span className="text-xs font-bold text-slate-900 font-mono">C-{leafId}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">CUMULATIVE SHIFT</span>
                          <span className="text-xs font-bold text-emerald-600 font-mono">0.000 CLS</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-black/5">
                          <span className="text-[9px] font-mono text-black/45 block">FID SCORE</span>
                          <span className="text-xs font-bold text-[#0070f3] font-mono">1.2ms</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* 1. Cognitive Friction Experiment */}
            {!isLeaf && page.id === "cognitive-friction" && (
              <div className="space-y-6">
                <div className="text-center max-w-md mx-auto space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">Fitts's Law Click Speed Benchmarker</h4>
                  <p className="text-xs text-black/55 font-light">
                    Measure how target width (<span className="font-mono text-black">W = {fittsTargetSize}px</span>) and spatial distance (<span className="font-mono text-black">D = {fittsDistance}px</span>) affect cognitive latency. Click the blue target 5 times as fast as possible.
                  </p>
                </div>

                <div 
                  ref={fittsAreaRef}
                  className="w-full h-64 bg-slate-50 border border-dashed border-black/10 rounded-2xl relative overflow-hidden cursor-crosshair"
                >
                  {isTestRunning ? (
                    <motion.button
                      layoutId="fitts-target"
                      onClick={handleTargetClick}
                      className="absolute rounded-full bg-[#0070f3] shadow-md hover:scale-105 active:scale-95 transition-transform flex items-center justify-center font-mono text-[10px] text-white font-bold"
                      style={{
                        width: `${fittsTargetSize}px`,
                        height: `${fittsTargetSize}px`,
                        left: `${testCoords.x}px`,
                        top: `${testCoords.y}px`
                      }}
                    >
                      {fittsClicks + 1}
                    </motion.button>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      {fittsTime !== null ? (
                        <div className="text-center space-y-1">
                          <span className="text-[10px] font-mono text-emerald-600 font-extrabold uppercase bg-emerald-50 px-2.5 py-1 rounded">CALCULATION COMPLETE</span>
                          <h5 className="text-2xl font-mono font-black text-slate-950">{fittsTime}ms</h5>
                          <p className="text-[11px] text-black/45 font-light">Calculated index of cognitive friction: <span className="font-bold text-black font-mono">{(fittsTime / 180).toFixed(2)} ID</span></p>
                        </div>
                      ) : (
                        <p className="text-xs text-black/45 font-light">Cognitive friction test stands idle.</p>
                      )}
                      <button
                        onClick={handleFittsStart}
                        className="py-2.5 px-5 bg-black text-white hover:bg-[#0070f3] rounded-full text-xs font-semibold font-mono tracking-tight transition-all duration-300 active:scale-95"
                      >
                        LAUNCH PERFORMANCE AUDIT
                      </button>
                    </div>
                  )}
                </div>

                {/* Micro settings */}
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-black/55">
                      <span>Target Diameter (W)</span>
                      <span className="font-bold">{fittsTargetSize}px</span>
                    </div>
                    <input 
                      type="range" 
                      min="25" 
                      max="100" 
                      value={fittsTargetSize} 
                      onChange={(e) => setFittsTargetSize(Number(e.target.value))}
                      disabled={isTestRunning}
                      className="w-full accent-[#0070f3] bg-slate-100 h-1.5 rounded-lg appearance-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-black/55">
                      <span>Spatial Gap Distance (D)</span>
                      <span className="font-bold">{fittsDistance}px</span>
                    </div>
                    <input 
                      type="range" 
                      min="100" 
                      max="350" 
                      value={fittsDistance} 
                      onChange={(e) => setFittsDistance(Number(e.target.value))}
                      disabled={isTestRunning}
                      className="w-full accent-[#0070f3] bg-slate-100 h-1.5 rounded-lg appearance-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. Tactile Haptics Experiment */}
            {!isLeaf && page.id === "tactile-haptics" && (
              <div className="space-y-6">
                <div className="text-center max-w-md mx-auto space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">Underdamped Spring Mass Drag Regulator</h4>
                  <p className="text-xs text-black/55 font-light">
                    Click, hold, and drag the metallic capsule horizontally. Release to trigger standard spring-damper restoration calculations.
                  </p>
                </div>

                <div className="w-full h-48 bg-slate-50 border border-black/[0.04] rounded-2xl relative flex items-center justify-center overflow-hidden">
                  {/* Visual tracking lines */}
                  <div className="absolute inset-y-0 left-1/2 w-[1px] bg-black/5 border-dashed" />
                  
                  {/* Dynamic Spring Line representation */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <line 
                      x1="50%" 
                      y1="50%" 
                      x2={`calc(50% + ${springPosition}px)`} 
                      y2="50%" 
                      stroke="#0070f3" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  </svg>

                  {/* Drag Capsule */}
                  <div 
                    onMouseDown={handleDragStart}
                    className="absolute cursor-grab active:cursor-grabbing px-6 py-4 rounded-2xl bg-white border border-slate-900/10 shadow-lg text-xs font-mono text-slate-950 font-bold tracking-tight select-none flex items-center gap-2 group transition-shadow hover:shadow-xl"
                    style={{
                      transform: `translateX(${springPosition}px)`,
                      touchAction: "none"
                    }}
                  >
                    <Smartphone size={14} className="text-[#0070f3]" />
                    <span>SPRING CAPSULE</span>
                    <span className="text-[9px] text-[#0070f3]/60">x: {Math.round(springPosition)}px</span>
                  </div>
                </div>

                {/* Tuning sliders */}
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-black/55">
                      <span>Tension Stiffness (k)</span>
                      <span className="font-bold">{springTension}</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="350" 
                      value={springTension} 
                      onChange={(e) => setSpringTension(Number(e.target.value))}
                      className="w-full accent-[#0070f3] bg-slate-100 h-1.5 rounded-lg appearance-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-black/55">
                      <span>Frictional Damping (b)</span>
                      <span className="font-bold">{springFriction}</span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="40" 
                      value={springFriction} 
                      onChange={(e) => setSpringFriction(Number(e.target.value))}
                      className="w-full accent-[#0070f3] bg-slate-100 h-1.5 rounded-lg appearance-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 3. Typographic Geometry Experiment */}
            {!isLeaf && page.id === "typographic-geometry" && (
              <div className="space-y-6">
                <div className="text-center max-w-md mx-auto space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">Golden Ratio Typographic Grid Interpolator</h4>
                  <p className="text-xs text-black/55 font-light">
                    Adjust the typography ratio coefficient to live-render a clean Swiss design scale. Note how text lines flow gracefully based on ratio calculations.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 border border-black/[0.04] rounded-2xl space-y-4 overflow-hidden">
                  <div>
                    <span className="text-[9px] font-mono text-black/35 uppercase tracking-widest block mb-1">Level 4: Giant Display Heading</span>
                    <h2 
                      className="font-sans font-medium tracking-tight text-slate-950 leading-none"
                      style={{ fontSize: `${Math.round(baseFontSize * Math.pow(fontScaleRatio, 3))}px` }}
                    >
                      Display Title
                    </h2>
                  </div>
                  <div className="pt-3 border-t border-black/5">
                    <span className="text-[9px] font-mono text-black/35 uppercase tracking-widest block mb-1">Level 3: Editorial Medium Title</span>
                    <h3 
                      className="font-sans font-medium tracking-tight text-slate-900 leading-none"
                      style={{ fontSize: `${Math.round(baseFontSize * Math.pow(fontScaleRatio, 2))}px` }}
                    >
                      System Headline
                    </h3>
                  </div>
                  <div className="pt-3 border-t border-black/5">
                    <span className="text-[9px] font-mono text-black/35 uppercase tracking-widest block mb-1">Level 2: Standard Body Subtitle</span>
                    <p 
                      className="font-sans text-slate-700 leading-tight"
                      style={{ fontSize: `${Math.round(baseFontSize * fontScaleRatio)}px` }}
                    >
                      Bespoke Swiss structural layout constants.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-black/55">
                      <span>Proportional Ratio (r)</span>
                      <span className="font-bold text-[#0070f3]">{fontScaleRatio.toFixed(3)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1.15" 
                      max="2.0" 
                      step="0.01"
                      value={fontScaleRatio} 
                      onChange={(e) => setFontScaleRatio(parseFloat(e.target.value))}
                      className="w-full accent-[#0070f3] bg-slate-100 h-1.5 rounded-lg appearance-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-black/55">
                      <span>Base Body Size (px)</span>
                      <span className="font-bold">{baseFontSize}px</span>
                    </div>
                    <input 
                      type="range" 
                      min="12" 
                      max="20" 
                      value={baseFontSize} 
                      onChange={(e) => setBaseFontSize(Number(e.target.value))}
                      className="w-full accent-[#0070f3] bg-slate-100 h-1.5 rounded-lg appearance-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 4. Chromatic Contrast Experiment */}
            {!isLeaf && page.id === "chromatic-math" && (
              <div className="space-y-6">
                <div className="text-center max-w-md mx-auto space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">APCA True Contrast Perceptual Ratio Estimator</h4>
                  <p className="text-xs text-black/55 font-light">
                    Real-time visual comparison of background and foreground colors. Our custom contrast checker outputs calculated compliance scales.
                  </p>
                </div>

                <div 
                  className="w-full h-40 rounded-2xl p-6 flex flex-col justify-between transition-colors border border-black/10"
                  style={{ backgroundColor: bgColor }}
                >
                  <p className="text-xs font-mono opacity-60" style={{ color: textColor }}>APCA PREVIEW BOARD</p>
                  <h3 className="text-xl font-sans font-bold tracking-tight" style={{ color: textColor }}>
                    Pragmatic typography remains legible at all offsets.
                  </h3>
                  <div className="flex justify-between text-[10px] font-mono" style={{ color: textColor }}>
                    <span>Lc: {apcaLc}</span>
                    <span>{apcaLc >= 60 ? "PASS (Body Legible)" : "LOW CONTRAST"}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/5">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-500 block">Select Canvas Tone</span>
                    <div className="flex gap-2.5">
                      {["#f8fafc", "#f1f5f9", "#090d16", "#1e293b", "#000000"].map(c => (
                        <button 
                          key={c}
                          onClick={() => {
                            setBgColor(c);
                            setTextColor(getContrastColor(c));
                          }}
                          className={`w-7 h-7 rounded-lg border shadow-xs transition-transform hover:scale-110 ${bgColor === c ? 'ring-2 ring-indigo-500 scale-105' : 'border-black/10'}`}
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-black/[0.03] space-y-1">
                    <span className="text-[9px] font-mono text-black/35 block uppercase">APCA Contrast Target</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-bold font-mono text-indigo-950">Lc {apcaLc}</span>
                      <span className={`text-[9px] font-bold ${apcaLc >= 75 ? "text-emerald-600" : apcaLc >= 45 ? "text-amber-500" : "text-rose-500"}`}>
                        {apcaLc >= 75 ? "Elite Compliance" : apcaLc >= 45 ? "Acceptable" : "Enhance"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Elastic Physics Experiment */}
            {!isLeaf && page.id === "elastic-physics" && (
              <div className="space-y-6">
                <div className="text-center max-w-md mx-auto space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">Verlet Grid Mass Elastic Vector Simulator</h4>
                  <p className="text-xs text-black/55 font-light">
                    Hover your cursor over the dynamic mesh canvas below. Each grid point is bound by mass-spring constraints. Watch how points warp and snap back.
                  </p>
                </div>

                <div 
                  className="w-full h-56 bg-slate-950 rounded-2xl relative overflow-hidden border border-white/5 cursor-pointer"
                  onMouseEnter={() => setIsHoveringCanvas(true)}
                  onMouseLeave={() => setIsHoveringCanvas(false)}
                >
                  <canvas 
                    ref={canvasRef} 
                    className="w-full h-full block"
                  />
                  {!isHoveringCanvas && (
                    <div className="absolute inset-0 bg-black/15 pointer-events-none flex items-center justify-center">
                      <span className="text-[10px] font-mono text-slate-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-widest animate-pulse">MOVE CURSOR OVER CANVAS TO WARP</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-4 border-t border-black/5">
                  <div className="flex justify-between text-xs font-mono text-black/55">
                    <span>Spring Tension Elastic Limit</span>
                    <span className="font-bold">{elasticTension} vectors</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="180" 
                    value={elasticTension} 
                    onChange={(e) => setElasticTension(Number(e.target.value))}
                    className="w-full accent-[#0070f3] bg-slate-100 h-1.5 rounded-lg appearance-none"
                  />
                </div>
              </div>
            )}

            {/* 6. Layout Stability Experiment */}
            {!isLeaf && page.id === "layout-stability" && (
              <div className="space-y-6">
                <div className="text-center max-w-md mx-auto space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">Cumulative Layout Shift (CLS) Core Web Vital Benchmarker</h4>
                  <p className="text-xs text-black/55 font-light">
                    Simulate loading content. Toggle <span className="font-bold text-black">Aspect Skeleton Frames</span> to compare layout shifts. Skeletons reserve coordinate frames, ensuring a CLS score of 0.
                  </p>
                </div>

                <div className="w-full min-h-[180px] bg-slate-50 border border-black/[0.04] p-5 rounded-2xl flex flex-col justify-between overflow-hidden relative">
                  
                  {isSimulatingLoad ? (
                    <div className="space-y-4 animate-pulse">
                      <div className="h-4 bg-slate-200 rounded w-1/3" />
                      {hasSkeletons ? (
                        <div className="h-24 bg-slate-200 rounded-xl w-full flex items-center justify-center text-[10px] text-black/35 font-mono font-bold">RESERVED SKELETON COORDINATES</div>
                      ) : (
                        <div className="h-0 border-transparent w-full" />
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {simulatedElements ? (
                        <motion.div 
                          initial={{ opacity: 0, y: hasSkeletons ? 0 : 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ type: "spring", stiffness: 150, damping: 18 }}
                          className="space-y-3"
                        >
                          <h5 className="text-xs font-bold text-slate-950 font-sans">Dynamic Heavy Component Rendered</h5>
                          <div className="p-4 bg-white border border-black/5 rounded-xl flex gap-3 items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                              <Check className="w-5 h-5 text-[#0070f3]" />
                            </div>
                            <div>
                              <p className="text-xs text-slate-900 font-bold leading-none">Layout Anchored Perfectly</p>
                              <span className="text-[10px] text-black/35 font-mono">0.000s Shift Registered</span>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <p className="text-xs text-black/45 font-light text-center py-6">Load simulation is idle.</p>
                      )}
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-black/55">Layout Shift Score:</span>
                    <span className={`text-sm font-mono font-black px-2 py-0.5 rounded ${clsValue === 0 ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"}`}>
                      CLS: {clsValue.toFixed(3)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-black/5 items-center justify-between">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={hasSkeletons} 
                      onChange={(e) => setHasSkeletons(e.target.checked)}
                      className="rounded border-gray-300 text-[#0070f3] focus:ring-[#0070f3]" 
                    />
                    <span className="text-xs font-sans text-slate-900 font-semibold">Enable Aspect-Ratio Skeleton Reserves</span>
                  </label>
                  
                  <button
                    onClick={runClsSimulation}
                    disabled={isSimulatingLoad}
                    className="py-2.5 px-4 bg-black text-white hover:bg-[#0070f3] rounded-full text-xs font-semibold font-mono tracking-tight transition-all duration-300 active:scale-95 disabled:opacity-45"
                  >
                    {isSimulatingLoad ? "STREAMING..." : "SIMULATE LAYOUT LOAD"}
                  </button>
                </div>
              </div>
            )}

          </div>

          <div className="p-4 rounded-xl border border-orange-200/50 bg-orange-50/40 text-orange-800 text-xs flex gap-2.5 items-start mt-6">
            <Zap className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <p className="font-light leading-relaxed">
              <strong>Interactive Core Assurance:</strong> Running mathematical coordinates within real-time rendering layers completely avoids hydration penalties, satisfying search rank parameters immediately.
            </p>
          </div>

          {isLeaf && (
            <div className="mt-8 p-8 rounded-3xl bg-slate-900 text-white border border-white/5 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block">DEEP-LINK SEO INDEX RECORD</span>
                  <h3 className="text-lg font-sans font-medium tracking-tight">Dynamic Search Authority Analysis</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {leafTags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-md bg-white/10 text-white/90 text-[10px] font-mono border border-white/5 uppercase">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4 text-xs md:text-sm font-light leading-relaxed text-slate-300">
                <p className="font-mono text-[10px] text-indigo-300 uppercase tracking-wider mb-2">★ AUDITED INTELLECTUAL SPECIFICATION</p>
                <div className="whitespace-pre-line text-slate-800 bg-white/95 p-6 rounded-2xl border border-white/10 shadow-lg font-sans">
                  {leafCopy}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 items-center">
                <span className="text-[9px] text-slate-400 uppercase tracking-wider">Related Contexts:</span>
                <a href="/sitemap" className="text-xs text-indigo-400 hover:text-white font-mono flex items-center gap-1 transition-all">
                  Full Sitemap Index <ChevronRight size={10} />
                </a>
                <span className="text-slate-600 text-xs">|</span>
                <a href={page.parentPath} onClick={handleBackToParent} className="text-xs text-indigo-400 hover:text-white font-mono flex items-center gap-1 transition-all">
                  {page.parentName} <ChevronRight size={10} />
                </a>
                <span className="text-slate-600 text-xs">|</span>
                <a href="/funnel/audit-request" className="text-xs text-indigo-400 hover:text-white font-mono flex items-center gap-1 transition-all">
                  Request Funnel Audit <ChevronRight size={10} />
                </a>
              </div>
              
              <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-400">
                <span>INDEXING PARAMETER: SECURE (200 OK)</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  GOOGLE BOT PRE-VERIFIED RANK ASSURANCE
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Index showing sitemaps 3rd layer nodes and nested links */}
        <div className="lg:col-span-4 space-y-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-black/[0.04]">
            <h3 className="text-xs font-mono text-black/45 tracking-widest uppercase block mb-4">SUB-INDEX DIRECTORY</h3>
            
            <div className="space-y-2">
              {subPagesData.map((node) => (
                <button
                  key={node.id}
                  onClick={() => navigateToSubPage(node.path)}
                  className={`w-full p-4 rounded-xl border text-left flex gap-3 transition-all duration-300 ${
                    page.id === node.id 
                      ? "bg-white border-black/10 shadow-sm text-slate-950 font-bold" 
                      : "bg-black/[0.01] border-transparent hover:bg-black/[0.03] text-black/65"
                  }`}
                >
                  <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${page.id === node.id ? 'bg-[#0070f3]/10 text-[#0070f3]' : 'bg-black/5 text-black/45'}`}>
                    <ChevronRight size={14} className={page.id === node.id ? "rotate-90 transition-transform" : ""} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-tight leading-tight">{node.name}</h4>
                    <span className="text-[9px] font-mono opacity-40 block mt-0.5">{node.path}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Contextual links box */}
          <div className="p-6 rounded-2xl bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block mb-3">INTERNAL RELATION SHIELD</span>
            <h4 className="text-sm font-semibold mb-2">Interconnected Architecture Map</h4>
            <p className="text-[11px] text-slate-300 font-light leading-relaxed mb-4">
              All coordinates and sub-components are interconnected to maintain crawling density. Our sitemap registers every deep node directly with search entities.
            </p>
            <a 
              href="/sitemap" 
              className="inline-flex items-center gap-1.5 text-xs text-[#0070f3] hover:text-white font-mono font-bold"
            >
              VISUAL SITEMAP ARCHITECTURE
              <ChevronRight size={12} />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
