import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  driftX: number;
  driftY: number;
  baseAlpha: number;
}

export default function ParticleLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Use refs to track coordinates to prevent hook/state re-rendering overhead
  const mouseRef = useRef({ x: -1000, y: -1000, lastX: -1000, lastY: -1000, active: false, speed: 0 });

  // Handle responsive resize with a robust ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Tracking pointer updates across the entire Hero section bounding rect
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const m = mouseRef.current;
      m.speed = Math.hypot(x - m.lastX, y - m.lastY);
      m.x = x;
      m.y = y;
      m.lastX = x;
      m.lastY = y;
      m.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  // Run the physics and render loop inside requestAnimationFrame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || size.width === 0 || size.height === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Support Retina/high-res displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size.width * dpr;
    canvas.height = size.height * dpr;
    ctx.scale(dpr, dpr);

    const particles: Particle[] = [];
    const maxParticles = Math.min(100, Math.floor((size.width * size.height) / 10000));

    // Initialize particles on the grid
    for (let i = 0; i < maxParticles; i++) {
      const baseAlpha = 0.08 + Math.random() * 0.14;
      particles.push({
        x: Math.random() * size.width,
        y: Math.random() * size.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: 1.0 + Math.random() * 1.8,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        driftX: (Math.random() - 0.5) * 0.25,
        driftY: (Math.random() - 0.5) * 0.25,
      });
    }

    let animationFrameId: number;

    const tick = () => {
      ctx.clearRect(0, 0, size.width, size.height);

      const mouse = mouseRef.current;

      // Draw faint connections between adjacent particles mimicking structural blueprints
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 110) {
            const ratio = 1 - dist / 110;
            const lineAlpha = ratio * Math.min(p1.alpha, p2.alpha) * 0.45;
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Faint blueprints mesh color accent
            ctx.strokeStyle = `rgba(0, 112, 243, ${lineAlpha})`;
            ctx.lineWidth = 0.5 + ratio * 0.45;
            ctx.stroke();
          }
        }
      }

      // Update particle speeds, bounds, and render individual nodes
      for (const p of particles) {
        // Base drift forces
        p.vx = p.vx * 0.94 + p.driftX * 0.06;
        p.vy = p.vy * 0.94 + p.driftY * 0.06;

        // Interactive cursor vector fluid drag
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 160) {
            const ratio = 1 - dist / 160;
            // Stronger force if cursor is moving fast
            const multiplier = 1.0 + mouse.speed * 0.015;
            const force = ratio * ratio * 0.95 * multiplier;
            
            // Push-repulsion angle out from cursor center position
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * 0.4;
            p.vy += Math.sin(angle) * force * 0.4;

            // Micro ambient glow interaction
            p.alpha = p.alpha * 0.85 + (p.baseAlpha * 1.8) * 0.15;
          } else {
            p.alpha = p.alpha * 0.95 + p.baseAlpha * 0.05;
          }
        } else {
          p.alpha = p.alpha * 0.95 + p.baseAlpha * 0.05;
        }

        // Apply physical velocity integration
        p.x += p.vx;
        p.y += p.vy;

        // Soft screen border wrap-around with position resets to avoid corner gathers
        if (p.x < -10) {
          p.x = size.width + 10;
          p.vx *= 0.5;
        } else if (p.x > size.width + 10) {
          p.x = -10;
          p.vx *= 0.5;
        }

        if (p.y < -10) {
          p.y = size.height + 10;
          p.vy *= 0.5;
        } else if (p.y > size.height + 10) {
          p.y = -10;
          p.vy *= 0.5;
        }

        // Draw particle node point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Deep modern electric blue when influenced, soft neutral slate in rest state
        if (mouse.active && Math.hypot(p.x - mouse.x, p.y - mouse.y) < 160) {
          ctx.fillStyle = `rgba(0, 112, 243, ${p.alpha})`;
        } else {
          ctx.fillStyle = `rgba(15, 23, 42, ${p.alpha})`;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [size]);

  return (
    <div
      ref={containerRef}
      id="particle-layer-container"
      className="absolute inset-0 w-full h-full pointer-events-none z-1"
    >
      <canvas
        ref={canvasRef}
        id="particle-layer-canvas"
        className="block w-full h-full"
      />
    </div>
  );
}
