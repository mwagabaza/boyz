import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let started = false;

    function onScroll() {
      if (!started && window.scrollY > 0) {
        started = true;
        video!.play();
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bbmboyz-intro.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-bg-deep/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="animate-fade-in delay-1 font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold-primary mb-8">
          Est. 2016
        </p>

        <h1
          className="animate-fade-in delay-2 font-serif font-medium text-ivory leading-none"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 8rem)",
            textShadow: "0 0 60px rgba(201, 161, 76, 0.15)",
          }}
        >
          BOYZ
        </h1>

        <p
          className="animate-fade-in delay-3 font-jp text-ivory-muted mt-2"
          lang="ja"
          style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}
        >
          ボーイズ
        </p>

        <p className="animate-fade-in delay-4 font-sans text-ivory-muted text-sm md:text-base mt-8 leading-relaxed italic max-w-md mx-auto">
          Your direct line to Japan's most exclusive baseball cards.
        </p>

        <p
          className="animate-fade-in delay-5 font-jp text-ivory-muted/70 text-xs md:text-sm mt-3"
          lang="ja"
        >
          日本の至宝、あなたの手に。
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-6 absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="scroll-indicator w-px h-10 bg-gradient-to-b from-gold-primary/60 to-transparent" />
      </div>
    </header>
  );
}
