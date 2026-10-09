"use client";
import { FormEvent, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { Loader2, Lock } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("darsh2122@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      setError("Sign-in failed. Check your credentials and make sure this admin user exists in Supabase Auth.");
      return;
    }
    window.location.href = "/admin";
  }

  return (
    <main className="adm-login">
      <form className="adm-login-card" onSubmit={submit}>
        <span className="adm-lock"><Lock size={22} /></span>
        <h1>Host sign in</h1>
        <p>Only the event hosts can view RSVPs.</p>
        {error && <p role="alert" className="adm-alert">{error}</p>}
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        <button className="adm-btn adm-btn-block" disabled={busy}>{busy ? <><Loader2 size={15} className="adm-spin" /> Signing in…</> : "Sign in"}</button>
        <a href="/">← Back to invitation</a>
      </form>
    </main>
  );
}
