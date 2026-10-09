"use client";
import { FormEvent, useState } from "react";
import { CalendarPlus, Check, Heart, Loader2, Send } from "lucide-react";
import Confetti from "./confetti";
import { calendarUrl } from "@/lib/event";

const dietary = ["No preference", "Vegetarian", "Vegan", "Jain", "Gluten-free", "Halal", "Other"];

export default function RSVPForm() {
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [guests, setGuests] = useState<number>(1);
  const [bigParty, setBigParty] = useState(false);
  const [diet, setDiet] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<null | "yes" | "no">(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const other = String(fd.get("dietOther") || "").trim();
    const dietaryNotes = diet === "Other" ? other || "Other" : diet === "No preference" ? "" : diet;
    const payload = {
      householdName: name,
      contactName: name,
      email: String(fd.get("email") || ""),
      attending,
      guestCount: attending === "yes" ? guests : 0,
      dietaryNotes: attending === "yes" ? dietaryNotes : "",
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
    };
    try {
      const res = await fetch("/api/rsvp", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "We couldn’t save your RSVP. Please try again.");
      setDone(attending);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="rsvp-done" role="status">
        {done === "yes" && <Confetti />}
        <span className="done-badge"><Check size={30} strokeWidth={2.4} /></span>
        <h3 className="script">{done === "yes" ? "See you there!" : "We'll miss you"}</h3>
        <p>
          {done === "yes"
            ? "Your RSVP has been received. We can’t wait to celebrate with you."
            : "Thank you for letting us know. You’ll be in our hearts on the day."}
        </p>
        {done === "yes" && (
          <a className="btn btn-ghost" href={calendarUrl()} target="_blank" rel="noreferrer"><CalendarPlus size={16} /> Add to calendar</a>
        )}
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={submit} noValidate={false}>
      <p className="rsvp-question">Will you be joining us?</p>
      <div className="toggle" role="radiogroup" aria-label="Attendance">
        <button type="button" role="radio" aria-checked={attending === "yes"} className={attending === "yes" ? "on" : ""} onClick={() => setAttending("yes")}>Yes, I&rsquo;ll be there</button>
        <button type="button" role="radio" aria-checked={attending === "no"} className={attending === "no" ? "on" : ""} onClick={() => setAttending("no")}>Sorry, can&rsquo;t make it</button>
      </div>

      <div className="field">
        <label htmlFor="name">Full name <b>*</b></label>
        <input id="name" name="name" required minLength={2} maxLength={120} autoComplete="name" placeholder="Enter your name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email <b>*</b></label>
        <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" />
        <small>Only the hosts can see this. We use it to avoid duplicate replies.</small>
      </div>

      <div className={`collapse ${attending === "yes" ? "collapse-open" : ""}`} aria-hidden={attending !== "yes"}>
        <div className="collapse-inner">
          <div className="field">
            <span className="label">Number of guests <b>*</b></span>
            <div className="pills" role="radiogroup" aria-label="Number of guests">
              {[1, 2, 3].map((n) => (
                <button type="button" key={n} role="radio" aria-checked={!bigParty && guests === n} className={!bigParty && guests === n ? "on" : ""} onClick={() => { setBigParty(false); setGuests(n); }} tabIndex={attending === "yes" ? 0 : -1}>{n}</button>
              ))}
              <button type="button" role="radio" aria-checked={bigParty} className={bigParty ? "on" : ""} onClick={() => { setBigParty(true); setGuests(Math.max(4, guests)); }} tabIndex={attending === "yes" ? 0 : -1}>4+</button>
            </div>
            {bigParty && (
              <div className="stepper">
                <button type="button" aria-label="Fewer guests" onClick={() => setGuests((g) => Math.max(4, g - 1))}>−</button>
                <output aria-live="polite">{guests} guests</output>
                <button type="button" aria-label="More guests" onClick={() => setGuests((g) => Math.min(20, g + 1))}>+</button>
              </div>
            )}
            <small>Please send one reply per household and include everyone coming.</small>
          </div>
          <div className="field">
            <label htmlFor="diet">Dietary preference</label>
            <select id="diet" value={diet} onChange={(e) => setDiet(e.target.value)} tabIndex={attending === "yes" ? 0 : -1}>
              <option value="" disabled>Select an option</option>
              {dietary.map((d) => <option key={d}>{d}</option>)}
            </select>
            {diet === "Other" && <input name="dietOther" maxLength={200} placeholder="Tell us what to plan for" tabIndex={attending === "yes" ? 0 : -1} />}
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="rsvpMessage">Message for the parents</label>
        <textarea id="rsvpMessage" name="message" maxLength={1000} placeholder="Leave a sweet message…" />
      </div>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {error && <p role="alert" className="form-error">{error}</p>}
      <button className="btn btn-primary btn-block" disabled={busy}>
        {busy ? <><Loader2 size={16} className="spin" /> Sending…</> : <>Submit RSVP <Send size={15} /></>}
      </button>
      <p className="form-foot"><Heart size={12} fill="currentColor" /> Only the hosts can see your reply</p>
    </form>
  );
}
