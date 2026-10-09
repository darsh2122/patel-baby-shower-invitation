"use client";
import { useEffect, useState } from "react";
import { Bow, Branch, BabyElephant, Diya } from "./decor";

type Stage = "idle" | "opening" | "leaving" | "gone";

/** Full-screen "tap to open" envelope. Plays once per browser session. */
export default function EnvelopeIntro() {
  const [stage, setStage] = useState<Stage>("idle");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("invite-opened") === "1"; } catch {}
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      document.documentElement.dataset.intro = "open";
      setStage("gone");
      return;
    }
    document.body.style.overflow = "hidden";
    setReady(true);
    return () => { document.body.style.overflow = ""; };
  }, []);

  function open() {
    if (stage !== "idle") return;
    setStage("opening");
    try { sessionStorage.setItem("invite-opened", "1"); } catch {}
    window.setTimeout(() => setStage("leaving"), 1500);
    window.setTimeout(() => {
      document.documentElement.dataset.intro = "open";
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
    }, 1750);
    window.setTimeout(() => setStage("gone"), 2600);
  }

  if (stage === "gone") return null;

  return (
    <div className={`intro intro-${stage} ${ready ? "intro-ready" : ""}`} role="dialog" aria-label="Open your invitation">
      <Branch className="intro-branch intro-branch-tl" />
      <Branch className="intro-branch intro-branch-br" />
      <Diya className="intro-diya" />
      <p className="intro-line">A little something special<br />is waiting for you…</p>
      <button className="envelope" onClick={open} aria-label="Tap to open the invitation">
        <span className="env-glow" aria-hidden="true" />
        <span className="env-back" />
        <span className="env-card" aria-hidden="true">
          <em>You&rsquo;re invited</em>
          <strong>Baby Shower</strong>
        </span>
        <span className="env-front" />
        <span className="env-flap" />
        <span className="env-ribbon-v" />
        <span className="env-ribbon-h" />
        <Bow className="env-bow" />
        <span className="env-tag" aria-hidden="true"><BabyElephant className="env-tag-elephant" still /></span>
      </button>
      <p className="intro-tap">Tap to open</p>
    </div>
  );
}
