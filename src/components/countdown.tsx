"use client";
import { useEffect, useState } from "react";

const target = new Date("2026-12-13T09:00:00-05:00").getTime();

function parts(now: number) {
  const d = Math.max(0, target - now);
  return [
    { label: "Days", value: Math.floor(d / 86400000) },
    { label: "Hours", value: Math.floor((d % 86400000) / 3600000) },
    { label: "Minutes", value: Math.floor((d % 3600000) / 60000) },
    { label: "Seconds", value: Math.floor((d % 60000) / 1000) },
  ];
}

export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now !== null && now >= target) {
    return <p className="count-done">The celebration is here. See you there!</p>;
  }
  const t = now === null ? null : parts(now);
  return (
    <div className="count-grid" role="timer" aria-label="Countdown to the baby shower">
      {(t ?? parts(target)).map(({ label, value }) => (
        <div className="count-cell" key={label}>
          <span key={t ? value : "x"} className={`count-num ${t ? "tick" : ""}`}>{t ? String(value).padStart(2, "0") : "--"}</span>
          <span className="count-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
