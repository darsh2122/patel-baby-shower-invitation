"use client";
import { FormEvent, useState } from "react";
import { Loader2, Send, Sparkles } from "lucide-react";

export default function MessageForm() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const r = await fetch("/api/messages", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: fd.get("name"), message: fd.get("message") }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "Could not send your note.");
      form.reset();
      setCount(0);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your note.");
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="rsvp-done msg-done" role="status">
        <span className="done-badge"><Sparkles size={26} /></span>
        <h3 className="script">Thank you!</h3>
        <p>Your note is on its way to the parents. It will appear here once they&rsquo;ve had a look.</p>
        <button className="btn btn-ghost" onClick={() => setSent(false)}>Write another</button>
      </div>
    );
  }

  return (
    <form className="msg-form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="guestMessage">Your message</label>
        <textarea id="guestMessage" name="message" required minLength={2} maxLength={500} placeholder="Your message…" onChange={(e) => setCount(e.target.value.length)} />
        <small className="counter">{count}/500</small>
      </div>
      <div className="field">
        <label htmlFor="messageName">Your name</label>
        <input id="messageName" name="name" required minLength={2} maxLength={100} placeholder="Enter your name" autoComplete="name" />
      </div>
      {error && <p role="alert" className="form-error">{error}</p>}
      <button className="btn btn-primary btn-block" disabled={busy}>
        {busy ? <><Loader2 size={16} className="spin" /> Sending…</> : <>Submit <Send size={15} /></>}
      </button>
    </form>
  );
}
