import { useReveal } from "../hooks/useFadeIn";
import SectionLabel from "./SectionLabel";

const cards = [
  { title: "BBM 2013 Rookie", subtitle: "Shohei Ohtani RC" },
  { title: "Calbee Premium", subtitle: "1976 Sadaharu Oh" },
  { title: "Topps Japan Edition", subtitle: "2024 NPB Select" },
  { title: "BBM Icons", subtitle: "Ichiro Suzuki Auto" },
  { title: "Epoch One", subtitle: "Yu Darvish /50" },
];

export default function Vault() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="px-6 max-w-4xl mx-auto">
        <div className="reveal">
          <SectionLabel number="04" titleEn="FROM THE VAULT" titleJp="秘蔵" />
        </div>

        <h2 className="reveal font-serif font-medium text-ivory text-2xl md:text-4xl leading-tight mb-10">
          Recent acquisitions.
        </h2>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="reveal gallery-scroll flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-56rem)/2+1.5rem))] pb-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="card-tilt shrink-0 w-48 md:w-56"
            style={{ aspectRatio: "5/7" }}
          >
            <div className="w-full h-full border border-gold-deep/30 bg-bg-elevated flex flex-col justify-end p-5">
              <p className="font-mono text-gold-primary/40 text-[10px] tracking-[0.2em] uppercase mb-1">
                {String(i + 1).padStart(3, "0")}
              </p>
              <p className="font-serif text-ivory text-base md:text-lg font-medium leading-tight">
                {card.title}
              </p>
              <p className="font-sans text-ivory-muted/60 text-xs mt-1">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 max-w-4xl mx-auto mt-8">
        <p className="reveal font-sans text-ivory-muted/60 text-xs md:text-sm italic">
          A small selection. The full vault is by inquiry only.
        </p>
        <p className="reveal font-jp text-ivory-muted/40 text-xs mt-1" lang="ja">
          秘蔵庫の全貌はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
