"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "About Fawn" },
];

const CAL_URL = "https://cal.com/jak-norwood-bdwdcp/30min";

export default function Nav() {
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setOverHero(window.scrollY < window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        overHero
          ? "bg-transparent border-b border-transparent"
          : "bg-bone/75 backdrop-blur-md border-b border-ink/10",
      ].join(" ")}
    >
      <nav
        className="mx-auto flex max-w-[1280px] items-center justify-between px-6 md:px-10 py-4 md:py-5"
        aria-label="Primary"
      >
        {/* Wordmark + (optional) logo
            ─────────────────────────────────────────────
            To add a logo glyph next to "fawn":
              1. Drop your file in /public, e.g. public/logo.svg
              2. Uncomment the <Image /> below and add `import Image from "next/image";` at the top.
            ───────────────────────────────────────────── */}
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Fawn — back to top"
        >
          <Image
            src="/Logo.png"
            alt=""
            width={32}
            height={32}
            priority
            className={[
              "h-7 md:h-8 w-auto object-contain transition-[filter] duration-500",
              overHero ? "invert brightness-200" : "",
            ].join(" ")}
          />
          <span
            className={[
              "wordmark text-[26px] md:text-[30px] leading-none transition-colors duration-500",
              overHero ? "text-bone" : "text-ink",
            ].join(" ")}
          >
            fawn
          </span>
        </a>

        <div className="flex items-center gap-5 md:gap-8">
          <ul className="hidden md:flex items-center gap-7 text-[14px]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={[
                    "transition-colors duration-500",
                    overHero
                      ? "text-bone/95 hover:text-bone"
                      : "text-ink/70 hover:text-ink",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Book a call — solid Oxblood over hero, outlined-fills-on-hover past hero */}
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "group inline-flex items-center gap-1.5 rounded-full px-4 md:px-5 py-2 md:py-2.5 text-[12px] md:text-[13px] tracking-[0.01em] transition-colors duration-300",
              overHero
                ? "bg-oxblood text-bone hover:bg-[#8A2828]"
                : "border border-oxblood text-oxblood hover:bg-oxblood hover:text-bone",
            ].join(" ")}
          >
            Book a call
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
