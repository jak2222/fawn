"use client";

import { motion } from "framer-motion";

type Props = {
  src?: string;
  poster?: string;
};

export default function VideoBackground({ src, poster }: Props) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink"
    >
      {src ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        // Subtle 10s warm pulse — Ink to #2A1818
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #1F1B17 0%, #2A1818 50%, #1F1B17 100%)",
              "linear-gradient(135deg, #2A1818 0%, #1F1B17 50%, #2A1818 100%)",
              "linear-gradient(135deg, #1F1B17 0%, #2A1818 50%, #1F1B17 100%)",
            ],
          }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        />
      )}

      {/* Bottom 50% darkening for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />

      {!src && (
        <div className="absolute right-6 top-24 md:right-10 md:top-28">
          <span className="label-eyebrow text-bone/30">
            video&nbsp;placeholder
          </span>
        </div>
      )}
    </div>
  );
}
