import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Placeholder from "./components/Placeholder";
import VideoBackground from "./components/VideoBackground";
import WordReveal from "./components/WordReveal";
import CalBooking from "./components/CalBooking";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="overflow-x-hidden">
        <Hero />
        <div className="mx-auto max-w-[1280px] border-x border-ink/10">
          <Services />
          <SectionRule />
          <Approach />
          <SectionRule />
          <Contact />
          <SectionRule />
          <Footer />
        </div>
      </main>
    </>
  );
}

function SectionRule() {
  return <div aria-hidden className="h-px bg-ink/10" />;
}

function ChapterMarker({ children }: { children: string }) {
  return (
    <Reveal>
      <p className="font-display italic text-oxblood text-[15px] md:text-[17px]">
        {children}
      </p>
    </Reveal>
  );
}

function HeadingAccent() {
  return (
    <Reveal delay={0.1} x={0}>
      <div aria-hidden className="mt-5 md:mt-7 h-px w-12 md:w-16 bg-ink/35" />
    </Reveal>
  );
}

/* ────────────────────────── HERO ────────────────────────── */

function Hero() {
  return (
    <section
      data-hero
      className="relative isolate w-full h-[100svh] overflow-hidden"
    >
      <VideoBackground src="/Landing%20Page.mp4" />

      {/* Upper-right micro-copy — adds density without clutter */}
      <div className="absolute top-24 right-6 md:top-28 md:right-12 lg:right-16 z-10 text-right">
        <Reveal delay={0.4} x={0}>
          <p className="label-eyebrow text-bone/55">est. 2026 · LDN</p>
        </Reveal>
      </div>

      {/* Bottom-left copy stack */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[88%] md:max-w-[68%] lg:max-w-[58%]">
          <WordReveal
            text="Strategic AI content, crafted for scale."
            className="font-display font-normal text-bone leading-[1.04] tracking-[-0.012em] text-[clamp(2.25rem,5.5vw,5.25rem)]"
          />

          <Reveal delay={1.0} x={0} className="mt-6 md:mt-8">
            <p className="text-bone/80 text-[clamp(1.05rem,1.4vw,1.4rem)] max-w-[42ch] leading-[1.5]">
              For brands that want to have their cake and eat it too.
            </p>
          </Reveal>

          <Reveal delay={1.3} x={0} className="mt-8 md:mt-10">
            <a
              href="https://cal.com/jak-norwood-bdwdcp/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-oxblood text-bone px-5 md:px-6 py-2.5 md:py-3 text-[13px] md:text-[14px] tracking-[0.01em] hover:bg-[#8A2828] transition-colors duration-300"
            >
              Book a call
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue — bottom-center */}
      <div className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-2.5">
          <span className="label-eyebrow text-bone/55">scroll</span>
          <span
            aria-hidden
            className="block w-px h-9 md:h-11 bg-bone/55 scroll-cue-line"
          />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── OUR SERVICES ──────────────────── */

function Services() {
  return (
    <section id="services" className="relative">
      <div className="px-6 md:px-10 pt-20 md:pt-28 pb-6 md:pb-10">
        <ChapterMarker>services — 01</ChapterMarker>
        <Reveal delay={0.08}>
          <h2 className="mt-2 md:mt-3 font-display font-normal tracking-[-0.012em] leading-[1.02] text-[clamp(2.25rem,5.5vw,4.75rem)] max-w-[14ch]">
            Our Services
          </h2>
        </Reveal>
        <HeadingAccent />
      </div>

      <ServiceRow
        index="01"
        title="AI Production"
        body="From brief to delivery. We create high-end AI-driven content that competes with the best in the world: films, campaigns, product assets, and brand content, directed end-to-end with a creative eye that tools alone can't replicate. The output of a full production, without the overhead."
        layout="text-left"
        mediaLabel="brand film"
        mediaSrc="/service1.png"
        mediaAlt="AI Production"
      />
      <RowDivider />
      <ServiceRow
        index="02"
        title="Content at Scale"
        body="We don't just adapt content across markets, we build it to find the right people in the first place. Demographics, platforms, trends, cultural context, language: every variable considered so your content arrives with precision and lands with impact. Hyper-personalised, globally deployed, strategically driven from the start."
        layout="text-right"
        mediaLabel="scaled output"
        mediaSrc="/service2.png"
        mediaAlt="Content at Scale"
      />
      <RowDivider />
      <ServiceRow
        index="03"
        title="Content Systems"
        body="A framework built for how AI actually moves. We design and build bespoke content systems around your business: workflows, agent pipelines, brand models, and quality controls that don't just work today but adapt as the tools evolve. When the next model drops, your framework absorbs it. Your output keeps scaling, your standards stay locked."
        layout="text-left"
        mediaLabel="systems"
        mediaSrc="/service%203.png"
        mediaAlt="Content Systems"
      />
      <RowDivider />
      <ServiceRow
        index="04"
        title="Social"
        body="Your channels, fully handled. We own the strategy, make the content, and run the posting, with agents writing in your brand voice, scheduling around your audience, and keeping everything consistent across every platform. All the output of a full social team, without the unnecessary overhead."
        layout="text-right"
        mediaLabel="social grid"
        mediaSrc="/Service4.png"
        mediaAlt="Social"
      />

      {/* End-cap — Buttercream band with "also" chapter marker */}
      <div className="bg-butter/45 mt-6 md:mt-10">
        <div className="px-6 md:px-10 py-10 md:py-14">
          <ChapterMarker>also &mdash;</ChapterMarker>
          <Reveal delay={0.05}>
            <p className="mt-4 md:mt-5 text-[16px] md:text-[18px] leading-[1.6] text-ink/80 max-w-[62ch]">
              {`We also offer AI consultancy and content audits, custom brand model training, AI product studios, team training and enablement, and the work that doesn't fit a neat box. If you're not sure where your project sits, that's usually the best reason to talk.`}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RowDivider() {
  return (
    <div className="px-6 md:px-10">
      <div aria-hidden className="h-px bg-ink/8 max-w-[1100px] mx-auto" />
    </div>
  );
}

function ServiceRow({
  index,
  title,
  body,
  layout,
  mediaLabel,
  mediaSrc,
  mediaAlt,
}: {
  index: string;
  title: string;
  body: string;
  layout: "text-left" | "text-right";
  mediaLabel: string;
  mediaSrc?: string;
  mediaAlt?: string;
}) {
  const media = (
    <Reveal delay={0.12}>
      <Placeholder
        ratio="16/9"
        label={mediaLabel}
        tone="butter"
        hoverScale
        src={mediaSrc}
        alt={mediaAlt}
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </Reveal>
  );

  return (
    <div className="px-3 md:px-6">
      <div className="group rounded-md border border-transparent transition-all duration-500 hover:border-ink/12 hover:bg-butter/15 hover:scale-[1.005] transform-gpu px-3 md:px-4 py-8 md:py-12">
        <div className="md:grid md:grid-cols-12 md:gap-10 items-center">
          {layout === "text-left" ? (
            <>
              <div className="md:col-span-5">
                <ServiceText index={index} title={title} body={body} />
              </div>
              <div className="md:col-span-7 mt-7 md:mt-0">{media}</div>
            </>
          ) : (
            <>
              <div className="md:col-span-7 mt-7 md:mt-0 md:order-1 order-2">
                {media}
              </div>
              <div className="md:col-span-5 md:order-2 order-1">
                <ServiceText index={index} title={title} body={body} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceText({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-3 text-gold">
          <span className="label-eyebrow">{index}</span>
          <span aria-hidden className="h-px w-10 md:w-14 bg-current opacity-80" />
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="mt-3 md:mt-4 font-display font-normal tracking-[-0.012em] leading-[1.05] text-[clamp(1.65rem,3.2vw,2.6rem)]">
          {title}
        </h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 md:mt-5 text-[14px] md:text-[15px] leading-[1.65] text-ink/75 max-w-[48ch]">
          {body}
        </p>
      </Reveal>
    </div>
  );
}

/* ──────────────────── OUR APPROACH ──────────────────── */

function Approach() {
  return (
    <section id="approach" className="relative">
      <div className="px-6 md:px-10 py-20 md:py-28">
        <ChapterMarker>approach — 02</ChapterMarker>
        <Reveal delay={0.08}>
          <h2 className="mt-2 md:mt-3 font-display font-normal tracking-[-0.012em] leading-[1.02] text-[clamp(2.25rem,5.5vw,4.75rem)] max-w-[15ch]">
            Our Approach
          </h2>
        </Reveal>
        <HeadingAccent />

        <div className="mt-12 md:mt-14 max-w-[700px] space-y-6 md:space-y-8">
          {/* Emphasised opening statement */}
          <Reveal delay={0.05}>
            <p className="font-display text-[clamp(1.65rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.01em] text-ink">
              The traditional agency model is finished.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-ink/85">
              {`It was built for a world where every task needed a different specialist and every specialist needed managing: layers of coordinators and middle managers, each one adding cost, adding delay, and distorting the work as it passed from desk to desk. AI has made that structure redundant, so we removed it. What's left is a direct line between you and the people building the work, backed by systems that handle the rest, running on the same enterprise-grade infrastructure and security standards you'd expect. Better work, made faster, without the cost the old model never thought to question.`}
            </p>
          </Reveal>

          <Reveal delay={0.19}>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-ink/85">
              And we create work at the highest level. We build bespoke
              frameworks for every client: fine-tuned models, creative
              agents, and end-to-end AI workflows that hyper-personalise
              content to reach new audiences with real impact. We set the
              strategy, execute with precision, and use intelligence at
              every stage so each iteration lands harder than the last.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT ───────────────────────── */

function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-20 md:py-28">
      <div className="md:grid md:grid-cols-12 md:gap-10">
        <div className="md:col-span-9 md:col-start-4">
          <ChapterMarker>contact — 04</ChapterMarker>
          <Reveal delay={0.08}>
            <h2 className="mt-2 md:mt-3 font-display font-normal tracking-[-0.012em] leading-[1.02] text-[clamp(2.25rem,5vw,4.5rem)] max-w-[18ch]">
              Discover what&apos;s possible for you.
            </h2>
          </Reveal>
          <HeadingAccent />
        </div>
      </div>

      <div className="mt-10 md:mt-14 md:grid md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6 md:col-start-2 max-w-[560px]">
          <Reveal delay={0.05}>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-ink/85">
              {`Fawn takes on a small number of projects at a time, so we can give each one the focus it deserves. Come with a brief or come with a blank page.`}
            </p>
          </Reveal>

          <Reveal delay={0.12} x={0}>
            <p className="mt-3 md:mt-4 font-display italic text-oxblood text-[15px] md:text-[17px] leading-[1.4]">
              {`Book a call below, and we'll show you what's possible.`}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <Reveal>
          <Placeholder
            ratio="21/9"
            label="cinematic banner"
            tone="ink"
            src="/Banner%20Bottom.png"
            alt="Fawn cinematic banner"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </Reveal>
      </div>

      <div className="mt-12 md:mt-16 md:grid md:grid-cols-12 md:gap-10">
        <Reveal delay={0.1} x={0} className="md:col-span-10 md:col-start-2 block">
          <div className="relative rounded-[6px] border border-ink/15 bg-bone overflow-hidden">
            <span className="absolute top-5 left-5 md:top-7 md:left-7 font-display italic text-ink/45 text-[13px] md:text-[14px] z-10 pointer-events-none">
              schedule
            </span>
            <div className="pt-12 md:pt-14">
              <CalBooking />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-8 md:mt-12">
        <Reveal x={0}>
          <p className="text-center">
            <a
              href="mailto:hello@byfawn.com"
              className="link-underline text-ink font-semibold text-[15px] md:text-[17px] tracking-[-0.005em]"
            >
              hello@byfawn.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── FOOTER ────────────────────────── */

function Footer() {
  return (
    <footer className="relative px-6 md:px-10 py-12 md:py-14">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7 md:gap-10">
        <div>
          <a
            href="#top"
            className="wordmark text-[26px] md:text-[30px] leading-none block"
            aria-label="Fawn"
          >
            fawn
          </a>
          <p className="mt-3 font-display italic text-[15px] md:text-[16px] text-ink/70 max-w-[34ch] leading-[1.4]">
            AI content that does more for less.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-3">
          <a
            href="mailto:hello@byfawn.com"
            className="link-underline text-[13px] md:text-[14px] text-ink/85"
          >
            hello@byfawn.com
          </a>
          <ul className="flex items-center gap-2" aria-label="Social links">
            {[
              { name: "Instagram", icon: InstagramIcon },
              { name: "LinkedIn", icon: LinkedInIcon },
              { name: "Vimeo", icon: VimeoIcon },
            ].map(({ name, icon: Icon }) => (
              <li key={name}>
                <a
                  href="#"
                  aria-label={name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/65 hover:text-ink hover:border-ink/40 transition-colors duration-300"
                >
                  <Icon className="h-[14px] w-[14px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 md:mt-10 pt-4 border-t border-ink/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-ink/45">
        <span className="label-eyebrow">© Fawn 2026.</span>
        <span className="label-eyebrow">byfawn.com</span>
      </div>
    </footer>
  );
}

/* ────────────────────────── ICONS ────────────────────────── */

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9.5h4v11H3v-11zM10 9.5h3.8v1.55h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.55 4.78 5.86V20.5h-4v-4.95c0-1.18-.02-2.7-1.7-2.7-1.7 0-1.96 1.27-1.96 2.6V20.5H10v-11z" />
    </svg>
  );
}

function VimeoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M22.4 7.2c-.1 2.1-1.6 5-4.5 8.6-3 3.8-5.5 5.7-7.6 5.7-1.3 0-2.4-1.2-3.3-3.6L5.3 11c-.6-2.4-1.3-3.6-2-3.6-.2 0-.7.3-1.7.9L1 6.9c1.1-.9 2.1-1.9 3.1-2.8 1.4-1.2 2.5-1.8 3.2-1.9 1.7-.2 2.7 1 3.1 3.6.4 2.8.7 4.6.9 5.2.5 2 1.1 3 1.7 3 .5 0 1.2-.7 2.1-2.2.9-1.4 1.4-2.6 1.5-3.4.1-1.4-.4-2.1-1.5-2.1-.5 0-1.1.1-1.6.3 1.1-3.5 3.1-5.2 6.1-5.1 2.3.1 3.3 1.6 3.2 4.5z" />
    </svg>
  );
}
