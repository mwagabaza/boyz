import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setCount(target);
      return;
    }

    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { count, ref };
}

export default function Nameplate() {
  const { count, ref } = useCountUp(247);

  return (
    <footer className="relative">
      {/* The Nameplate Banner */}
      <div
        ref={ref}
        className="border-t border-b border-gold-deep/40"
        style={{
          background:
            "linear-gradient(135deg, #0E1224 0%, #131826 50%, #0E1224 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-6 md:py-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Left — Inventory counter */}
            <div className="flex items-center gap-4 md:gap-6">
              <div>
                <p className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-gold-primary/60">
                  Inventory
                </p>
                <p className="font-jp text-[9px] text-ivory-muted/40 mt-0.5" lang="ja">
                  在庫
                </p>
              </div>

              <span
                className="font-mono text-ivory text-3xl md:text-4xl font-medium"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {String(count).padStart(3, "0")}
              </span>

              {/* Gold P badge */}
              <div className="w-6 h-6 rounded-full border border-gold-primary/60 flex items-center justify-center">
                <span className="font-serif text-gold-primary text-xs font-medium">
                  P
                </span>
              </div>
            </div>

            {/* Center divider */}
            <div className="hidden md:block w-px h-10 bg-gold-deep/40" />

            {/* Right — Brand mark */}
            <div className="text-right">
              <p className="font-sans text-[10px] font-medium tracking-[0.25em] uppercase text-ivory-muted/60">
                2026 BOYZ — 1st Version
              </p>
              <p className="font-jp text-[9px] text-ivory-muted/40 mt-1" lang="ja">
                2026年 ボーイズ 初版
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-gold-deep/20">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <p className="font-sans text-[11px] text-ivory-muted/40">
            &copy; 2026 BOYZ. Curators of Japan's finest.
          </p>
          <p className="font-jp text-[11px] text-gold-primary/30" lang="ja">
            厳選
          </p>
        </div>
      </div>
    </footer>
  );
}
