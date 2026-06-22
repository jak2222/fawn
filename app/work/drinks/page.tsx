import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import WordReveal from "../../components/WordReveal";

export const metadata: Metadata = {
  title: "Fawn — One Product, Every Market",
  description:
    "One product, localised for four markets, produced end to end with AI.",
  alternates: {
    canonical: "/work/drinks",
  },
  openGraph: {
    title: "Fawn — One Product, Every Market",
    description:
      "One product, localised for four markets, produced end to end with AI.",
    url: "https://byfawn.com/work/drinks",
    siteName: "Fawn",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const VIDEO_URL =
  "https://pub-a6d5b4a188db43c096d9036708f80ef2.r2.dev/lanterns_Precise_Starlight_2_5.mp4";
// Swap for a dedicated still if you'd rather not use this market frame as the poster.
const POSTER_URL = "/Smile/market-zh.png";

const CANS = [
  { src: "/Smile/can-blueberry.png", alt: "Smile sparkling water, blueberry" },
  {
    src: "/Smile/can-blackcurrant.png",
    alt: "Smile sparkling water, blackcurrant",
  },
  { src: "/Smile/can-strawberry.png", alt: "Smile sparkling water, strawberry" },
  {
    src: "/Smile/can-passionfruit.png",
    alt: "Smile sparkling water, passionfruit",
  },
];

const MARKET_FRAMES = [
  { src: "/Smile/market-en.png", alt: "Smile campaign frame, English market" },
  { src: "/Smile/market-zh.png", alt: "Smile campaign frame, Chinese market" },
  { src: "/Smile/market-hi.png", alt: "Smile campaign frame, Hindi market" },
  { src: "/Smile/market-sv.png", alt: "Smile campaign frame, Swedish market" },
];

export default function DrinksWorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bone text-ink">
      <Nav solid />

      <main className="flex-1 flex items-center">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 pt-28 md:pt-32 pb-14 md:pb-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-14 lg:gap-20 items-center">
            <Reveal>
              <MediaStage />
            </Reveal>

            <div>
              <WordReveal
                text="Fast adaptations, infinite variations"
                className="font-display font-normal tracking-[-0.012em] leading-[1.05] text-[clamp(2rem,4vw,3.25rem)]"
              />

              <Reveal delay={0.08} x={0}>
                <p className="mt-2 md:mt-3 font-display text-oxblood text-[19px] md:text-[22px] leading-[1.3]">
                  built to scale
                </p>
              </Reveal>

              <Reveal delay={0.14} x={0}>
                <div aria-hidden className="mt-5 md:mt-7 h-px w-12 md:w-16 bg-ink/35" />
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-6 md:mt-7 text-[15px] md:text-[16px] leading-[1.7] text-ink/80 max-w-[46ch]">
                  What you&apos;re seeing is a snapshot, the same product
                  adapted across languages, cultures and audiences. The real
                  power comes when this is paired with strategy. Instant
                  adaptation means we can build targeted variants for
                  different audience types, each one crafted to resonate with
                  the people most likely to convert, and keep building as the
                  brand grows. The result is a system that produces the right
                  content for the right audience, at scale. Anything we make
                  for a brand is shaped by its objectives, guidelines and
                  strategy.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function MediaStage() {
  return (
    <div className="rounded-[6px] border border-ink/10 bg-butter/40 p-4 md:p-6 lg:p-7">
      <CansRow />
      <div className="mt-4 md:mt-5">
        <MarketGrid />
      </div>
      <div className="mt-4 md:mt-5">
        <HeroVideo />
      </div>
    </div>
  );
}

function CansRow() {
  return (
    <div className="flex items-end justify-between">
      {CANS.map((can) => (
        <div key={can.src} className="relative h-20 md:h-28 lg:h-32 w-auto">
          <Image
            src={can.src}
            alt={can.alt}
            width={1080}
            height={1920}
            sizes="(max-width: 768px) 12vw, 8vw"
            priority
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}

function MarketGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-3">
      {MARKET_FRAMES.map((frame) => (
        <div
          key={frame.src}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[4px] border border-ink/10"
        >
          <Image
            src={frame.src}
            alt={frame.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      disableRemotePlayback
      poster={POSTER_URL}
      className="w-full aspect-[16/9] rounded-[4px] bg-ink object-cover shadow-xl"
    >
      <source src={VIDEO_URL} type="video/mp4" />
    </video>
  );
}
