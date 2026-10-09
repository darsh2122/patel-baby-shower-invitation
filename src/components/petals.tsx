"use client";
import { useEffect, useState, type CSSProperties } from "react";

type Petal = { left: number; size: number; delay: number; dur: number; drift: number; hue: number };

/** Gently falling petals behind the page. Generated after mount so server and client markup match. */
export default function Petals({ count = 16 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const n = window.innerWidth < 640 ? Math.round(count * 0.6) : count;
    setPetals(
      Array.from({ length: n }, () => ({
        left: Math.random() * 100,
        size: 10 + Math.random() * 14,
        delay: -Math.random() * 24,
        dur: 16 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 160,
        hue: Math.floor(Math.random() * 3),
      }))
    );
  }, [count]);
  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className={`petal petal-${p.hue}`}
          style={{ left: `${p.left}%`, width: p.size, height: p.size * 1.3, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`, "--drift": `${p.drift}px` } as CSSProperties}
        />
      ))}
    </div>
  );
}
