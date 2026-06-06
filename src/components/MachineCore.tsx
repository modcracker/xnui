import { useState, useEffect, useRef } from "react";

// 3D Particle structure for Verlet-integration tissue cloth simulation
interface Particle {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
  pz: number;
  ox: number; 
  oy: number; 
  u: number;  
  v: number;  
  tu: number; // Pre-mapped texture u coordinates [0..512]
  tv: number; // Pre-mapped texture v coordinates [0..512]
  pinned: boolean;
}

interface Constraint {
  p1: Particle;
  p2: Particle;
  length: number;
}

interface ProjectedPoint {
  x: number;
  y: number;
  rx: number;
  ry: number;
  rz: number;
  u: number;
  v: number;
  tu: number;
  tv: number;
}

interface Triangle {
  pA: ProjectedPoint;
  pB: ProjectedPoint;
  pC: ProjectedPoint;
  cu: number;
  cv: number;
  avgZ: number;
  nx: number;
  ny: number;
  nz: number;
}

export default function MachineCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dims, setDims] = useState({ width: 680, height: 680 });
  const [isTouched, setIsTouched] = useState(false);
  const isVisibleRef = useRef(true);
  const lastActiveTimeRef = useRef(Date.now());

  // High-Resolution Texture Canvas Ref (caches the logo and text drawn at high-res)
  const texCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize the pristine logo canvas once
  if (!texCanvasRef.current) {
    const texCanvas = document.createElement("canvas");
    texCanvas.width = 512;
    texCanvas.height = 512;
    const texCtx = texCanvas.getContext("2d");
    if (texCtx) {
      const cx = 256;
      const cy = 256;

      // 1. Solid crisp white brand flag canvas background
      texCtx.fillStyle = "#ffffff";
      texCtx.fillRect(0, 0, 512, 512);

      // 2. Double stitch lines
      texCtx.strokeStyle = "#e5e7eb"; // Cool slate gray border stitch
      texCtx.lineWidth = 2.5;
      texCtx.strokeRect(18, 18, 512 - 36, 512 - 36);

      texCtx.strokeStyle = "rgba(0, 0, 0, 0.03)";
      texCtx.lineWidth = 1.2;
      texCtx.strokeRect(24, 24, 512 - 48, 512 - 48);

      // 3. Central Signature Branding Box Logo
      const lSize = 136;
      const lx = cx - lSize / 2;
      const ly = cy - 44 - lSize / 2; // Perfectly balanced vertical spacing

      // Black outer frame
      texCtx.strokeStyle = "#111111";
      texCtx.lineWidth = 7;
      texCtx.strokeRect(lx, ly, lSize, lSize);

      // White inner safety fill
      texCtx.fillStyle = "#ffffff";
      texCtx.fillRect(lx + 4, ly + 4, lSize - 8, lSize - 8);

      // Signature electric-blue crossover stripes (45 degrees / -45 degrees)
      texCtx.strokeStyle = "#0070f3";
      texCtx.lineWidth = 11;
      texCtx.lineCap = "round";

      // Diagonal 1: top-left to bottom-right
      texCtx.beginPath();
      texCtx.moveTo(lx + lSize * 0.25, ly + lSize * 0.25);
      texCtx.lineTo(lx + lSize * 0.75, ly + lSize * 0.75);
      texCtx.stroke();

      // Diagonal 2: top-right to bottom-left
      texCtx.beginPath();
      texCtx.moveTo(lx + lSize * 0.75, ly + lSize * 0.25);
      texCtx.lineTo(lx + lSize * 0.25, ly + lSize * 0.75);
      texCtx.stroke();

      // 4. Beautiful custom-spaced bold "xnui" lowercase typographic title
      texCtx.fillStyle = "#111111";
      texCtx.font = "bold 44px Inter, system-ui, -apple-system, sans-serif";
      if ("letterSpacing" in texCtx) {
        (texCtx as any).letterSpacing = "2px";
      }
      texCtx.textAlign = "center";
      texCtx.textBaseline = "middle";

      const text = "xnui";
      const textY = cy + 74; // Padded gracefully beneath the square logo sashes
      
      texCtx.fillText(text, cx, textY);
    }
    texCanvasRef.current = texCanvas;
  }

  // References to track dynamic properties in animation loop
  const mouseStateRef = useRef({
    x: 0,
    y: 0,
    px: 0,
    py: 0,
    vx: 0,
    vy: 0,
    active: false,
    isTouched: false,
    firstFrame: true,
    hoverFactor: 0,
  });

  // Observe and dynamically resize the canvas based on its parent size
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        // Allow canvas sizes up to 1340px to fit on full-screen displays beautifully
        const size = Math.min(1340, Math.max(340, Math.min(width, height || width)));
        setDims({ width: size, height: size });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Set up an intersection observer to pause heavy loop updates when offscreen
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    }, { threshold: 0.01 });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Set up and run the physical Verlet sheet cloth simulation inside requestAnimationFrame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Grid details for the tissue paper surface - optimized for buttery smooth rendering
    const NX = 9;
    const NY = 9;
    const pad = 280; // Total physical bounds of normalized coordinates (-pad to pad)
    
    // Generate particles representing points on the physical canvas
    const particles: Particle[] = [];
    for (let j = 0; j < NY; j++) {
      const v = -1 + 2 * (j / (NY - 1));
      for (let i = 0; i < NX; i++) {
        const u = -1 + 2 * (i / (NX - 1));
        const px = u * pad;
        const py = v * pad;
        
        // Initial sag for drape look
        const initialSagZ = (1.0 - (u * u)) * 40 - 15;

        // Pin the entire top row to maintain a beautiful, neat, square-ish hanging shape
        const isPinned = j === 0;

        particles.push({
          x: px,
          y: py,
          z: initialSagZ,
          px: px,
          py: py,
          pz: initialSagZ,
          ox: px,
          oy: py,
          u,
          v,
          tu: ((u + 1) / 2) * 512,
          tv: ((v + 1) / 2) * 512,
          pinned: isPinned,
        });
      }
    }

    // Generate constraints (Springs) to keep mesh cohesive
    const constraints: Constraint[] = [];
    const cellW = (pad * 2) / (NX - 1);
    
    for (let j = 0; j < NY; j++) {
      for (let i = 0; i < NX; i++) {
        const idx = j * NX + i;
        const p1 = particles[idx];

        // 1. Structural horizontal
        if (i < NX - 1) {
          const p2 = particles[j * NX + (i + 1)];
          constraints.push({ p1, p2, length: cellW });
        }
        // 2. Structural vertical
        if (j < NY - 1) {
          const p2 = particles[(j + 1) * NX + i];
          constraints.push({ p1, p2, length: cellW });
        }
        // 3. Shear Diagonal
        if (i < NX - 1 && j < NY - 1) {
          const p2 = particles[(j + 1) * NX + (i + 1)];
          constraints.push({ p1, p2, length: cellW * Math.sqrt(2) });
        }
        if (i > 0 && j < NY - 1) {
          const p2 = particles[(j + 1) * NX + (i - 1)];
          constraints.push({ p1, p2, length: cellW * Math.sqrt(2) });
        }
        // 4. Bending resistance constraints
        if (i < NX - 2) {
          const p2 = particles[j * NX + (i + 2)];
          constraints.push({ p1, p2, length: cellW * 2 });
        }
        if (j < NY - 2) {
          const p2 = particles[(j + 2) * NX + i];
          constraints.push({ p1, p2, length: cellW * 2 });
        }
      }
    }

    // Index mesh triangles for depth sorting and polygon fills
    const triangles: { pA: number; pB: number; pC: number }[] = [];
    for (let j = 0; j < NY - 1; j++) {
      for (let i = 0; i < NX - 1; i++) {
        const p00 = j * NX + i;
        const p10 = j * NX + (i + 1);
        const p01 = (j + 1) * NX + i;
        const p11 = (j + 1) * NX + (i + 1);

        triangles.push({ pA: p00, pB: p10, pC: p01 });
        triangles.push({ pA: p10, pB: p11, pC: p01 });
      }
    }

    let animationFrameId: number;
    let time = 0;
    let entryTime = 0; // Session entry clock in seconds for napkin choreography

    // Core Animation and Physics loop
    const loop = () => {
      // 1. If tab/view is offscreen, do nothing but keep requested
      if (!isVisibleRef.current) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }

      // 2. If idle after entry phase (4 seconds of complete mouse inactivity), skip computations
      const isIdle = entryTime > 8.0 && (Date.now() - lastActiveTimeRef.current > 4000) && !mouseStateRef.current.active;
      if (isIdle) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }

      time += 0.016;
      entryTime += 0.016;
      const mState = mouseStateRef.current;
      const scaleFactor = dims.width / 720;

      // 1. Calculate horizontal slide-in progress (Phase 1 & 2)
      // A majestic unrolling float-in from the left that completes around 4.0 seconds.
      const normTimeX = Math.min(1.0, entryTime / 4.0);
      const shiftEase = 1.0 - Math.pow(1.0 - normTimeX, 3); // Soft decelerating cubic easeOut
      const currentShiftX = -380 * scaleFactor * (1.0 - shiftEase);

      // 2. Calculate fold intensity (how compacted it is)
      const normTimeFold = Math.min(1.0, entryTime / 4.2);
      const foldEase = 1.0 - Math.pow(1.0 - normTimeFold, 3); // cubic easeOut
      const currentFoldIntensity = 1.0 - foldEase;

      // 3. 3D rotation angles for loaded slant (decays gracefully to front facing)
      const angleY = 24 * (Math.PI / 180) * (1.0 - shiftEase);
      const angleX = 6 * (Math.PI / 180) * (1.0 - shiftEase);

      // 4. Wave Volume Choreography (Billow -> Flat/Settle -> Ribboning -> Steady)
      let waveVolume = 1.0;
      if (entryTime < 3.2) {
        const t = entryTime / 3.2;
        waveVolume = 2.0 - t * 1.25; // Rich initial billowing wave
      } else if (entryTime < 4.5) {
        const t = (entryTime - 3.2) / 1.3;
        waveVolume = 0.75 * (1.0 - t) + 0.02 * t; // Deep unfurl down to a solid square
      } else if (entryTime < 5.8) {
        waveVolume = 0.02; // Pauses as a completely flat, solid square in the center
      } else if (entryTime < 7.5) {
        const t = (entryTime - 5.8) / 1.7;
        waveVolume = 0.02 * (1.0 - t) + 1.0 * t; // Slowly starts ribboning and blowing
      } else {
        waveVolume = 1.0;
      }

      // Calculate and safe-damp Cursor Velocity to prevent sudden frame-jumping
      let rawVX = 0;
      let rawVY = 0;
      if (mState.active) {
        if (mState.firstFrame) {
          mState.px = mState.x;
          mState.py = mState.y;
          mState.firstFrame = false;
        }
        rawVX = mState.x - mState.px;
        rawVY = mState.y - mState.py;
        mState.px = mState.x;
        mState.py = mState.y;
      } else {
        mState.px = 0;
        mState.py = 0;
      }

      const speedCap = 25;
      const rawSpeed = Math.hypot(rawVX, rawVY);
      let dampVX = rawVX;
      let dampVY = rawVY;
      if (rawSpeed > speedCap) {
        dampVX = (rawVX / rawSpeed) * speedCap;
        dampVY = (rawVY / rawSpeed) * speedCap;
      }

      // Smooth velocity over frames
      mState.vx = mState.vx * 0.85 + dampVX * 0.15;
      mState.vy = mState.vy * 0.85 + dampVY * 0.15;

      const container = containerRef.current;
      const rectWidth = container ? container.clientWidth : dims.width;
      const rectHeight = container ? container.clientHeight : dims.height;

      const localMouseX = (mState.x - rectWidth / 2) / scaleFactor;
      const localMouseY = (mState.y - rectHeight / 2) / scaleFactor;
      const localVX = mState.vx / scaleFactor;
      const localVY = mState.vy / scaleFactor;

      // Constant physical parameters
      const gravityY = 0.065; // Extremely soft vertical drape sag for neat look

      // Gentle waving breeze - highly polished, organic satin look
      const windTurbulence = waveVolume;
      const blowX = Math.sin(time * 0.5) * 0.022 * windTurbulence;
      const blowY = (Math.cos(time * 0.4) * 0.012 - (1.0 - shiftEase) * 0.035) * windTurbulence;

      // 1. Calculate a raw target hover factor based on active status and page boundary distance to prevent harsh edge clipping
      let targetHoverFactor = 0.0;
      if (mState.active) {
        const distLeft = mState.x;
        const distRight = rectWidth - mState.x;
        const distTop = mState.y;
        const distBottom = rectHeight - mState.y;
        const minDist = Math.min(distLeft, distRight, distTop, distBottom);
        const marginZone = 55; // 55px boundary zone to fade hover before pointer exits the 3D surface
        
        if (minDist <= 0) {
          targetHoverFactor = 0.0;
        } else if (minDist < marginZone) {
          targetHoverFactor = minDist / marginZone;
        } else {
          targetHoverFactor = 1.0;
        }
      }

      // 2. Smooth the factor using a luxurious low-pass filter to fade out beautifully
      if (mState.hoverFactor === undefined) {
        mState.hoverFactor = 0;
      }
      mState.hoverFactor = mState.hoverFactor * 0.88 + targetHoverFactor * 0.12;
      
      const activeFactor = mState.hoverFactor;

      for (let idx = 0; idx < particles.length; idx++) {
        const p = particles[idx];
        if (p.pinned) continue;

        // Calculate distance and influence of the pointer (aligned with visual shifted drawn coordinate)
        const drawnX = p.x + currentShiftX;
        const dMouse = Math.hypot(drawnX - localMouseX, p.y - localMouseY);
        const influence = Math.max(0, 1.0 - dMouse / 185); // 185px interactive radius
        const sqInfluence = influence * influence;

        // 1. Pristine baseline drape sag (mostly flat & square-ish Rest State)
        const neutralZ = (1.0 - (p.u * p.u)) * 14 - 4;

        // 2. Premium multi-frequency wave with organic diagonal propagation for ribboning satin folds
        const mainWave = Math.sin(time * 2.2 - p.u * 2.5 + p.v * 0.8) * 9.5 * windTurbulence;
        const microWave = Math.cos(time * 3.6 + p.u * 3.2 - p.v * 1.2) * 2.8 * windTurbulence;
        const backgroundWave = (mainWave + microWave) * (p.v + 1.2);

        // When the mouse is active, we almost completely silence ambient background waves so it ripples ONLY where the mouse touches
        const ambientScale = 1.0 - Math.min(1.0, activeFactor * 0.95);
        let windFZ = backgroundWave * ambientScale;

        let windFX = blowX;
        let windFY = blowY;

        const localInteractiveWeight = influence * activeFactor;

        if (localInteractiveWeight > 0.001) {
          // Dynamic interactive waving on Z only where the mouse touches:
          const dentZ = - (mState.isTouched ? 24.0 : 7.0) * sqInfluence;
          const rippleZ = Math.sin(time * 14.0 - dMouse * 0.08) * (mState.isTouched ? 18.0 : 8.0) * sqInfluence;
          const interactiveZ = dentZ + rippleZ;

          // Locally add interactive ripple displacement to our silenced ambient base
          windFZ += interactiveZ * localInteractiveWeight;

          // Drag forces & inertia from cursor speed
          const pushX = localVX * (mState.isTouched ? 0.09 : 0.03) * localInteractiveWeight;
          const pushY = localVY * (mState.isTouched ? 0.09 : 0.03) * localInteractiveWeight;

          // Soft coordinate pull ONLY when actively clicked/dragged
          const pullX = mState.isTouched ? (localMouseX - p.x) * 0.04 * sqInfluence * localInteractiveWeight : 0;
          const pullY = mState.isTouched ? (localMouseY - p.y) * 0.04 * sqInfluence * localInteractiveWeight : 0;

          windFX += pushX + pullX;
          windFY += pushY + pullY;
        }

        // Apply Verlet Equations
        const tempX = p.x;
        const tempY = p.y;
        const tempZ = p.z;

        const friction = 0.965; // Soft luxurious satin damp rate

        p.x += (p.x - p.px) * friction + windFX;
        p.y += (p.y - p.py) * friction + gravityY + windFY;

        // Z-axis target tracking with spring-damp logic to make waves absolutely smooth
        const targetZ = neutralZ + windFZ;
        p.z += (p.z - p.pz) * friction + (targetZ - p.z) * 0.12;

        p.px = tempX;
        p.py = tempY;
        p.pz = tempZ;

        // Restrictor bounds for stable 3D coordinate system limits
        p.z = Math.max(-140, Math.min(140, p.z));
      }

      // Relax constraints using a balanced number of iterations for a 9x9 grid size
      for (let iter = 0; iter < 3; iter++) {
        for (let cIdx = 0; cIdx < constraints.length; cIdx++) {
          const { p1, p2, length } = constraints[cIdx];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dz = p2.z - p1.z;
          const MathHypot = Math.hypot(dx, dy, dz);
          if (MathHypot === 0) continue;
          
          const diff = (length - MathHypot) / MathHypot * 0.52;
          const ox = dx * diff;
          const oy = dy * diff;
          const oz = dz * diff;

          if (!p1.pinned) {
            p1.x -= ox;
            p1.y -= oy;
            p1.z -= oz;
          }
          if (!p2.pinned) {
            p2.x += ox;
            p2.y += oy;
            p2.z += oz;
          }
        }
      }

      // Project all simulation particles to rotated perspective 3D coordinate space
      const projected: ProjectedPoint[] = particles.map(p => {
        let px = p.x;
        let py = p.y;
        let pz = p.z;

        if (currentShiftX !== 0) {
          px += currentShiftX;
        }

        if (currentFoldIntensity > 0) {
          // Smooth, organic rolling scroll/tube dome shape (cos) instead of a sharp linear absolute crease
          const foldAmount = Math.cos(p.u * Math.PI * 0.5) * -160 * currentFoldIntensity;
          pz += foldAmount;

          // Add a tertiary fluttering billow that ripples the surface dynamically as it floats in
          const floatFlutter = Math.sin(p.u * Math.PI * 1.5 + time * 2.5) * 35 * currentFoldIntensity * (1.2 - p.v * 0.3);
          pz += floatFlutter;

          // Smooth squeeze that pulls outer sides inwards towards the center using a sinusoidal easing
          const squeezeAmount = Math.sin(p.u * Math.PI * 0.5) * 110 * currentFoldIntensity;
          px -= squeezeAmount;
        }

        // Rotate around Y-axis (Yaw)
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const rx = px * cosY - pz * sinY;
        const rz = px * sinY + pz * cosY;

        // Rotate around X-axis (Pitch)
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const finalX = rx;
        const finalY = py * cosX - rz * sinX;
        const finalZ = py * sinX + rz * cosX;

        // Standard perspective division
        const fov = 850;
        const distance = 0;
        const f = fov / (fov + distance - finalZ);

        return {
          x: finalX * f * scaleFactor,
          y: finalY * f * scaleFactor,
          rx: finalX,
          ry: finalY,
          rz: finalZ,
          u: p.u,
          v: p.v,
          tu: p.tu,
          tv: p.tv
        };
      });

      // Build dynamic Triangles database using projected perspective points
      const renderTriangles: Triangle[] = [];
      for (let tIdx = 0; tIdx < triangles.length; tIdx++) {
        const { pA, pB, pC } = triangles[tIdx];
        const p1 = projected[pA];
        const p2 = projected[pB];
        const p3 = projected[pC];

        const cu = (p1.u + p2.u + p3.u) / 3;
        const cv = (p1.v + p2.v + p3.v) / 3;
        const avgZ = (p1.rz + p2.rz + p3.rz) / 3;

        // Calculate surface Normal using rotated coordinates
        const ux = p2.rx - p1.rx;
        const uy = p2.ry - p1.ry;
        const uz = p2.rz - p1.rz;

        const vx = p3.rx - p1.rx;
        const vy = p3.ry - p1.ry;
        const vz = p3.rz - p1.rz;

        const Nx = uy * vz - uz * vy;
        const Ny = uz * vx - ux * vz;
        const Nz = ux * vy - uy * vx;
        const len = Math.hypot(Nx, Ny, Nz);

        let nx = 0, ny = 0, nz = 1;
        if (len > 0.001) {
          nx = Nx / len;
          ny = Ny / len;
          nz = Nz / len;
        }

        renderTriangles.push({
          pA: p1,
          pB: p2,
          pC: p3,
          cu,
          cv,
          avgZ,
          nx,
          ny,
          nz,
        });
      }

      // Painters depth sorting (Sort lowest average Z to highest)
      renderTriangles.sort((a, b) => a.avgZ - b.avgZ);

      // Core Canvas Rendering routine
      ctx.clearRect(0, 0, dims.width, dims.height);
      ctx.save();
      ctx.translate(dims.width / 2, dims.height / 2);

      // Light coordinates mapped relative to physical simulator space
      const lightX = localMouseX;
      const lightY = localMouseY;
      const lightZ = 220; // Suspended bulb depth

      // Render textured Flag with high-fidelity 3D Affine Texture mapping
      const texCanvas = texCanvasRef.current;
      if (texCanvas) {
        for (let tIdx = 0; tIdx < renderTriangles.length; tIdx++) {
          const t = renderTriangles[tIdx];

          // 1. Calculate dynamic directional PointLight
          const txCentroid = (t.pA.rx + t.pB.rx + t.pC.rx) / 3;
          const tyCentroid = (t.pA.ry + t.pB.ry + t.pC.ry) / 3;
          const tzCentroid = (t.pA.rz + t.pB.rz + t.pC.rz) / 3;

          const Lx = lightX - txCentroid;
          const Ly = lightY - tyCentroid;
          const Lz = lightZ - tzCentroid;
          const LDist = Math.hypot(Lx, Ly, Lz);

          let diffuse = 0.5;
          let specular = 0;
          if (LDist > 0.1) {
            const ldx = Lx / LDist;
            const ldy = Ly / LDist;
            const ldz = Lz / LDist;

            // Diffuse reflection Lambertian formula
            const diffuseDot = t.nx * ldx + t.ny * ldy + t.nz * ldz;
            diffuse = Math.max(0, diffuseDot);

            // Specular highlights using halfway vector
            const hx = ldx;
            const hy = ldy;
            const hz = ldz + 1; // Sight vector is [0, 0, 1]
            const hLen = Math.hypot(hx, hy, hz);
            if (hLen > 0.01) {
              const hdx = hx / hLen;
              const hdy = hy / hLen;
              const hdz = hz / hLen;
              const specularDot = t.nx * hdx + t.ny * hdy + t.nz * hdz;
              specular = Math.pow(Math.max(0, specularDot), 22);
            }
          }

          // 2. Translate coordinates to screen Space representation
          const x0 = t.pA.x;
          const y0 = t.pA.y;
          
          const x1 = t.pB.x;
          const y1 = t.pB.y;
          
          const x2 = t.pC.x;
          const y2 = t.pC.y;

          // Use pre-mapped Texture space coordinates [0, 512]
          const u0 = t.pA.tu;
          const v0 = t.pA.tv;
          
          const u1 = t.pB.tu;
          const v1 = t.pB.tv;
          
          const u2 = t.pC.tu;
          const v2 = t.pC.tv;

          ctx.save();
          
          // Apply polygon clip
          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.closePath();
          ctx.clip();

          // Apply Affine Transformation 2D matrix projection
          const delta = u0 * (v1 - v2) + u1 * (v2 - v0) + u2 * (v0 - v1);
          if (Math.abs(delta) > 0.001) {
            const a = (x0 * (v1 - v2) + x1 * (v2 - v0) + x2 * (v0 - v1)) / delta;
            const b = (y0 * (v1 - v2) + y1 * (v2 - v0) + y2 * (v0 - v1)) / delta;
            const c = (x0 * (u2 - u1) + x1 * (u0 - u2) + x2 * (u1 - u0)) / delta;
            const d = (y0 * (u2 - u1) + y1 * (u0 - u2) + y2 * (u1 - u0)) / delta;
            const e = (x0 * (u1 * v2 - u2 * v1) + x1 * (u2 * v0 - u0 * v2) + x2 * (u0 * v1 - u1 * v0)) / delta;
            const f = (y0 * (u1 * v2 - u2 * v1) + y1 * (u2 * v0 - u0 * v2) + y2 * (u0 * v1 - u1 * v0)) / delta;
            
            ctx.transform(a, b, c, d, e, f);
            ctx.drawImage(texCanvas, 0, 0);
          }
          ctx.restore();

          // Draw shading overlay in screen space representation
          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.closePath();

          // Compute realistic shading coefficient
          const ambient = 0.35 + (1.0 - Math.min(1.0, Math.hypot(t.cu, t.cv))) * 0.12;
          const intensity = ambient + diffuse * 0.6 + specular * 0.25;

          // Overlay dynamic lighting layers inside paths
          if (intensity < 1.0) {
            ctx.fillStyle = `rgba(0, 0, 0, ${Math.min(0.85, (1.0 - intensity) * 0.65)})`;
            ctx.fill();
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.4, (intensity - 1.0) * 0.35)})`;
            ctx.fill();
          }

          // Subtle fabric texture micro structure overlay lines
          ctx.strokeStyle = `rgba(0, 0, 0, 0.015)`;
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dims.width, dims.height]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    lastActiveTimeRef.current = Date.now();
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (!mouseStateRef.current.active) {
      mouseStateRef.current.firstFrame = true;
    }
    mouseStateRef.current.x = mouseX;
    mouseStateRef.current.y = mouseY;
    mouseStateRef.current.active = true;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    lastActiveTimeRef.current = Date.now();
    setIsTouched(true);
    mouseStateRef.current.isTouched = true;
    handlePointerMove(e);
  };

  const handlePointerUp = () => {
    lastActiveTimeRef.current = Date.now();
    setIsTouched(false);
    mouseStateRef.current.isTouched = false;
  };

  const handlePointerLeave = () => {
    lastActiveTimeRef.current = Date.now();
    setIsTouched(false);
    mouseStateRef.current.isTouched = false;
    mouseStateRef.current.active = false;
  };

  return (
    <div 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-full flex items-center justify-center overflow-visible select-none cursor-grab active:cursor-grabbing pointer-events-auto"
    >
      <canvas 
        ref={canvasRef}
        width={dims.width}
        height={dims.height}
        className="block drop-shadow-2xl select-none pointer-events-none"
      />
    </div>
  );
}
