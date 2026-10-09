"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "welcome", label: "Welcome" },
  { id: "story", label: "Our Story" },
  { id: "details", label: "Details" },
  { id: "location", label: "Location" },
  { id: "gallery", label: "Gallery" },
  { id: "wishes", label: "Wishes" },
];

export default function Nav({ brand }: { brand: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("welcome");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 40);
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
        <div className="nav-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
        <a className="nav-brand" href="#welcome" onClick={() => setOpen(false)}>{brand}</a>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : ""}>{l.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="#rsvp">RSVP</a>
        <button className="nav-burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
      <div className={`drawer ${open ? "drawer-open" : ""}`} aria-hidden={!open}>
        {links.map((l, i) => (
          <a key={l.id} href={`#${l.id}`} style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{l.label}</a>
        ))}
        <a className="drawer-rsvp" href="#rsvp" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>RSVP</a>
      </div>
    </>
  );
}
