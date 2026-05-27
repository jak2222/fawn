type Props = {
  number: string;
  label: string;
  className?: string;
};

export default function SectionLabel({ number, label, className }: Props) {
  return (
    <div
      className={`flex items-center gap-3 text-ink/55 ${className ?? ""}`}
      aria-hidden
    >
      <span className="label-eyebrow">{number}</span>
      <span className="h-px w-10 md:w-14 bg-ink/30" />
      <span className="label-eyebrow">{label}</span>
    </div>
  );
}
