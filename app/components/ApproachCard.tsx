"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  delay?: number;
};

export default function ApproachCard({ title, delay = 0 }: Props) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[3px] bg-ink">
      {/* Subtle inner gradient — feels like a film still */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-[#332E27] via-[#1F1B17] to-[#08070A]"
      />

      {/* Centred typeset word + animated underline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.p
          className="font-display font-normal text-bone text-[clamp(1.65rem,2.8vw,2.5rem)] tracking-[-0.015em] leading-none"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.p>
        <motion.span
          aria-hidden
          className="mt-4 md:mt-5 block h-px bg-bone/45 origin-left"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.3,
            delay: delay + 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      {/* Aspect-ratio chip, bottom-left */}
      <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
        <span className="label-eyebrow bg-black/20 backdrop-blur-sm rounded-sm px-2 py-1 text-bone/35">
          16/9
        </span>
      </div>
    </div>
  );
}
