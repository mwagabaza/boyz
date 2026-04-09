interface SectionLabelProps {
  number: string;
  titleEn: string;
  titleJp: string;
}

export default function SectionLabel({ number, titleEn, titleJp }: SectionLabelProps) {
  return (
    <div className="mb-10">
      <p className="font-sans text-[11px] font-medium tracking-[0.3em] uppercase text-gold-primary">
        {number} — {titleEn}{" "}
        <span className="font-jp text-ivory-muted/60" lang="ja">
          / {titleJp}
        </span>
      </p>
      <div className="w-full h-px bg-gold-deep/40 mt-4" />
    </div>
  );
}
