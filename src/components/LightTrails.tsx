import { useEffect, useRef, useMemo } from "react";

function generatePaths(count: number): string[] {
  const paths: string[] = [];
  for (let i = 0; i < count; i++) {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const cp1x = Math.random() * 100;
    const cp1y = Math.random() * 100;
    const cp2x = Math.random() * 100;
    const cp2y = Math.random() * 100;
    const endX = Math.random() * 100;
    const endY = Math.random() * 100;
    paths.push(
      `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`
    );
  }
  return paths;
}

interface TrailConfig {
  d: string;
  duration: number;
  delay: number;
  opacity: number;
  width: number;
}

export default function LightTrails() {
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const trails = useMemo<TrailConfig[]>(() => {
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;
    const count = isMobile ? 10 : 16;
    const paths = generatePaths(count);
    return paths.map((d, i) => ({
      d,
      duration: 18 + Math.random() * 14,
      delay: i * 1.2 + Math.random() * 3,
      opacity: 0.15 + Math.random() * 0.35,
      width: 0.8 + Math.random() * 1.2,
    }));
  }, []);

  if (prefersReducedMotion.current) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #1A1408 0%, #0A0E1A 70%)",
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #1A1408 0%, #0A0E1A 70%)",
        }}
      />

      {/* SVG light trails */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="trailMask" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="fadeMask">
            <rect width="100" height="100" fill="url(#trailMask)" />
          </mask>
        </defs>

        <g mask="url(#fadeMask)" style={{ mixBlendMode: "screen" }}>
          {trails.map((trail, i) => (
            <TrailPath key={i} config={trail} />
          ))}
        </g>
      </svg>
    </div>
  );
}

function TrailPath({ config }: { config: TrailConfig }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const animation = path.animate(
      [
        { strokeDashoffset: `${length}`, opacity: 0 },
        { strokeDashoffset: `${length * 0.6}`, opacity: config.opacity },
        { strokeDashoffset: "0", opacity: 0 },
      ],
      {
        duration: config.duration * 1000,
        delay: config.delay * 1000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );

    return () => animation.cancel();
  }, [config]);

  return (
    <path
      ref={pathRef}
      d={config.d}
      fill="none"
      stroke="#E8C77A"
      strokeWidth={config.width}
      filter="url(#glow)"
      opacity="0"
    />
  );
}
