"use client";
import { useMemo, type CSSProperties } from "react";

const colors = ["#f3b8a2", "#e9c27a", "#a9b98a", "#f9dcc4", "#d98d78", "#fff1b8"];

/** A one-shot burst of confetti and petals. Mount it to fire it. */
export default function Confetti({ pieces = 70 }: { pieces?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => {
        const angle = (Math.random() * 160 - 80) * (Math.PI / 180);
        const power = 220 + Math.random() * 380;
        return {
          x: Math.sin(angle) * power,
          y: -Math.cos(angle) * power * (0.6 + Math.random() * 0.6),
          r: Math.random() * 720 - 360,
          c: colors[i % colors.length],
          s: 6 + Math.random() * 8,
          d: Math.random() * 180,
          round: Math.random() > 0.5,
        };
      }),
    [pieces]
  );
  return (
    <div className="confetti" aria-hidden="true">
      {items.map((p, i) => (
        <i
          key={i}
          style={{ background: p.c, width: p.s, height: p.round ? p.s : p.s * 0.5, borderRadius: p.round ? "50%" : 2, animationDelay: `${p.d}ms`, "--x": `${p.x}px`, "--y": `${p.y}px`, "--r": `${p.r}deg` } as CSSProperties}
        />
      ))}
    </div>
  );
}
