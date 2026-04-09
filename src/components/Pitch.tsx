import { useReveal } from "../hooks/useFadeIn";
import SectionLabel from "./SectionLabel";

export default function Pitch() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32 max-w-4xl mx-auto">
      <div className="reveal">
        <SectionLabel number="01" titleEn="THE OPERATION" titleJp="運営について" />
      </div>

      <div className="md:flex md:gap-16">
        <div className="md:flex-1">
          <h2 className="reveal font-serif font-medium text-ivory text-2xl md:text-4xl leading-tight mb-3">
            We don't import cards.
            <br />
            We unlock a market.
          </h2>

          <p className="reveal font-jp text-ivory-muted/70 text-sm mb-10" lang="ja">
            市場を開く。
          </p>

          <p className="reveal font-sans text-ivory-muted text-sm md:text-base leading-[1.8] mb-6 max-w-[60ch]">
            Years of relationship-building inside Japan's notoriously closed card
            markets. Native-language fluency across every major Japanese
            marketplace and auction platform. Quarterly trips to source in person.
            We're not middlemen — we're insiders.
          </p>

          <p className="reveal font-sans text-ivory-muted text-sm md:text-base leading-[1.8] max-w-[60ch]">
            When you tell us what you're looking for, we go places other dealers
            don't know exist.
          </p>
        </div>

        {/* Desktop decorative side element */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <div className="w-px h-32 bg-gold-deep/40" />
          <p
            className="font-jp text-gold-primary/30 text-xs"
            lang="ja"
            style={{ writingMode: "vertical-rl" }}
          >
            日本市場への扉
          </p>
        </div>
      </div>
    </section>
  );
}
