import { useReveal } from "../hooks/useFadeIn";
import SectionLabel from "./SectionLabel";

const pillars = [
  {
    num: "01",
    titleEn: "SOURCE",
    titleJp: "探索",
    body: "Tell us what you're hunting. We'll find it in markets you've never heard of.",
  },
  {
    num: "02",
    titleEn: "AUTHENTICATE",
    titleJp: "鑑定",
    body: "Every card verified. Every transaction transparent. Provenance documented.",
  },
  {
    num: "03",
    titleEn: "DELIVER",
    titleJp: "配送",
    body: "Direct from Japan. Bulk purchasing power, competitive pricing, careful handling.",
  },
];

export default function Process() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32 max-w-4xl mx-auto">
      <div className="reveal">
        <SectionLabel number="02" titleEn="THE PROCESS" titleJp="工程" />
      </div>

      <div className="flex flex-col md:flex-row md:gap-0 reveal-group">
        {pillars.map((p, i) => (
          <div
            key={p.num}
            className={`reveal flex-1 py-8 md:py-0 md:px-8 ${
              i < pillars.length - 1
                ? "border-b border-gold-deep/30 md:border-b-0 md:border-r"
                : ""
            } ${i === 0 ? "md:pl-0" : ""} ${i === pillars.length - 1 ? "md:pr-0" : ""}`}
          >
            <p className="font-mono text-gold-primary/40 text-xs tracking-[0.3em] mb-3">
              {p.num}
            </p>
            <p className="font-jp text-gold-primary text-xs tracking-[0.2em] uppercase mb-2" lang="ja">
              {p.titleJp}
            </p>
            <h3 className="font-serif font-medium text-ivory text-xl md:text-2xl mb-4">
              {p.titleEn}
            </h3>
            <p className="font-sans text-ivory-muted text-sm leading-[1.8]">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
