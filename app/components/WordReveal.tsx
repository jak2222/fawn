"use client";

import { motion, type Variants } from "framer-motion";

const easeOutEditorial = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.075, delayChildren: 0.15 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutEditorial },
  },
};

type Props = {
  text: string;
  className?: string;
  emphasize?: number[]; // word indexes to set in italic
};

export default function WordReveal({ text, className, emphasize = [] }: Props) {
  const words = text.split(" ");
  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {words.map((w, i) => {
        const italic = emphasize.includes(i);
        return (
          <span
            key={`${w}-${i}`}
            className="inline-block whitespace-pre"
            style={{ overflow: "hidden", paddingBottom: "0.06em" }}
          >
            <motion.span
              variants={word}
              className="inline-block"
              style={italic ? { fontStyle: "italic" } : undefined}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </motion.h1>
  );
}
