"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorHalo() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches
    ) {
      return;
    }
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[40] h-[500px] w-[500px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(110, 30, 30, 0.06) 0%, rgba(110, 30, 30, 0.03) 35%, rgba(110, 30, 30, 0) 70%)",
        willChange: "transform",
        transform: "translate3d(-9999px, -9999px, 0)",
      }}
    />
  );
}
