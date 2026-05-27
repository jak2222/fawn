import Image from "next/image";

type Ratio = "16/9" | "9/16" | "4/3" | "3/2" | "21/9" | "1/1" | "5/4";
type Tone = "butter" | "ink" | "oxblood";

type Props = {
  ratio: Ratio;
  label?: string;
  tone?: Tone;
  hoverScale?: boolean;
  className?: string;
  src?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
};

const aspectClass: Record<Ratio, string> = {
  "16/9": "aspect-[16/9]",
  "9/16": "aspect-[9/16]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "21/9": "aspect-[21/9]",
  "1/1": "aspect-square",
  "5/4": "aspect-[5/4]",
};

const styles: Record<
  Tone,
  {
    bg: string;
    gradient: string;
    ratioText: string;
    labelText: string;
    labelBg: string;
    border: string;
  }
> = {
  butter: {
    bg: "bg-butter/85",
    gradient: "from-butter/95 via-butter/70 to-butter/55",
    ratioText: "text-ink/45",
    labelText: "text-ink/75",
    labelBg: "bg-bone/40",
    border: "border-ink/12",
  },
  ink: {
    bg: "bg-ink",
    gradient: "from-[#332E27] via-[#1F1B17] to-[#08070A]",
    ratioText: "text-bone/30",
    labelText: "text-bone/65",
    labelBg: "bg-black/20",
    border: "border-transparent",
  },
  oxblood: {
    bg: "bg-oxblood",
    gradient: "from-[#8A2828] via-[#6E1E1E] to-[#3F1010]",
    ratioText: "text-bone/40",
    labelText: "text-bone/80",
    labelBg: "bg-black/15",
    border: "border-transparent",
  },
};

export default function Placeholder({
  ratio,
  label,
  tone = "butter",
  hoverScale = false,
  className,
  src,
  alt,
  sizes,
  priority,
}: Props) {
  const s = styles[tone];
  const hasImage = Boolean(src);

  return (
    <div
      className={`relative ${aspectClass[ratio]} w-full overflow-hidden rounded-[3px] border ${s.border} ${s.bg} ${className ?? ""}`}
    >
      {hasImage ? (
        <Image
          src={src!}
          alt={alt ?? ""}
          fill
          sizes={sizes ?? "(max-width: 768px) 100vw, 60vw"}
          priority={priority}
          className={[
            "object-cover",
            hoverScale
              ? "transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              : "",
          ].join(" ")}
        />
      ) : (
        <div
          aria-hidden
          className={[
            "absolute inset-0 bg-gradient-to-br",
            s.gradient,
            hoverScale
              ? "transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              : "",
          ].join(" ")}
        />
      )}

      <div
        className={[
          "absolute inset-0 flex items-end p-3 md:p-4 pointer-events-none",
          hasImage ? "justify-end" : "justify-between",
        ].join(" ")}
      >
        {!hasImage && (
          <span
            className={`label-eyebrow ${s.ratioText} ${s.labelBg} backdrop-blur-sm rounded-sm px-2 py-1`}
          >
            {ratio}
          </span>
        )}
        {label && (
          <span
            className={`font-display italic ${s.labelText} ${s.labelBg} backdrop-blur-sm rounded-sm px-2.5 py-1 text-[12px] md:text-[13px]`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
