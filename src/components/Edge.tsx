import { useReveal } from "../hooks/useFadeIn";
import SectionLabel from "./SectionLabel";

const points = [
  {
    en: "Direct sourcing from NPB and Japan-exclusive inventory",
    jp: "NPB公式およびジャパン限定商品の直接調達",
  },
  {
    en: "Native Kanji search methodology across Japanese marketplaces",
    jp: "漢字によるネイティブ検索手法",
  },
  {
    en: "Relationship-based — never bots, never scrapers",
    jp: "信頼関係に基づく取引",
  },
  {
    en: "Shohei Ohtani specialist inventory",
    jp: "大谷翔平専門在庫",
  },
];

export default function Edge() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32 max-w-4xl mx-auto">
      <div className="reveal">
        <SectionLabel number="03" titleEn="THE EDGE" titleJp="強み" />
      </div>

      <h2 className="reveal font-serif font-medium text-ivory text-2xl md:text-4xl leading-tight mb-3">
        Access you cannot replicate.
      </h2>

      <p className="reveal font-jp text-ivory-muted/70 text-sm mb-12" lang="ja">
        他では手に入らない。
      </p>

      <div className="reveal-group space-y-8">
        {points.map((point, i) => (
          <div key={i} className="reveal flex gap-4">
            <span className="text-gold-primary text-sm mt-0.5 shrink-0">
              ◆
            </span>
            <div>
              <p className="font-sans text-ivory text-sm md:text-base font-medium leading-relaxed">
                {point.en}
              </p>
              <p className="font-jp text-ivory-muted/60 text-xs md:text-sm mt-1" lang="ja">
                {point.jp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
