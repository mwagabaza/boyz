import { useReveal } from "../hooks/useFadeIn";
import SectionLabel from "./SectionLabel";

export default function Invitation() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
      <div className="reveal">
        <SectionLabel number="05" titleEn="THE INVITATION" titleJp="招待" />
      </div>

      <h2 className="reveal font-serif font-medium text-ivory text-3xl md:text-5xl leading-tight mb-3">
        Have a grail in mind?
      </h2>

      <p className="reveal font-jp text-ivory-muted/70 text-sm mb-6" lang="ja">
        探している一枚はありますか？
      </p>

      <p className="reveal font-sans text-ivory-muted text-base md:text-lg italic mb-10">
        Let us find it.
      </p>

      <a
        href="mailto:the.bbm.boys@gmail.com"
        className="reveal relative inline-block font-sans text-gold-primary text-lg md:text-xl font-medium tracking-wide gold-underline"
      >
        the.bbm.boys@gmail.com
      </a>

      <div className="reveal mt-8">
        <p className="font-sans text-ivory-muted/50 text-xs md:text-sm">
          Inquiries answered within 24 hours.
        </p>
        <p className="font-jp text-ivory-muted/40 text-xs mt-1" lang="ja">
          24時間以内にご返信。
        </p>
      </div>
    </section>
  );
}
