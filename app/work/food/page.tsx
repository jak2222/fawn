import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import WordReveal from "../../components/WordReveal";

export const metadata: Metadata = {
  title: "Fawn — Food Film",
  description:
    "A social-first food piece, produced end to end with AI, from concept to final grade.",
  alternates: {
    canonical: "/work/food",
  },
  openGraph: {
    title: "Fawn — Food Film",
    description:
      "A social-first food piece, produced end to end with AI, from concept to final grade.",
    url: "https://byfawn.com/work/food",
    siteName: "Fawn",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

// Swap in the Cloudflare R2 poster URL once uploaded.
const VIDEO_URL =
  "https://pub-a6d5b4a188db43c096d9036708f80ef2.r2.dev/salmon.mov";
const POSTER_URL = "POSTER_URL_PLACEHOLDER";

export default function FoodWorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bone text-ink">
      <Nav solid />

      <main className="flex-1 flex items-center">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 pt-28 md:pt-32 pb-14 md:pb-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-14 lg:gap-20 items-center">
            <Reveal>
              <VideoStage />
            </Reveal>

            <div>
              <WordReveal
                text="Social-first food content"
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
                <p className="mt-6 md:mt-7 text-[15px] md:text-[16px] leading-[1.7] text-ink/80 max-w-[48ch]">
                  Social-first food content, produced end to end with AI.
                  What you&apos;re watching is a single piece, but the real
                  value is what comes next: the same approach scales across
                  markets, audiences and formats, content adapted and
                  localised without the cost or turnaround of producing each
                  version from scratch. A demonstration of what&apos;s
                  possible. Anything we make for a brand is shaped by its
                  objectives, guidelines and strategy.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function VideoStage() {
  return (
    <div className="relative flex items-center justify-center rounded-[6px] border border-ink/10 bg-butter/40 p-6 md:p-10 lg:p-12">
      <video
        src={VIDEO_URL}
        poster={POSTER_URL}
        controls
        playsInline
        preload="metadata"
        className="h-auto max-h-[65vh] md:max-h-[80vh] w-auto aspect-[9/16] rounded-[4px] bg-ink object-cover shadow-xl"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
