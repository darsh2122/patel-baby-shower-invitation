import { Check, Download, EyeOff, LayoutDashboard, LogOut, MessageCircle, Trash2, Users } from "lucide-react";
import { requireAdmin } from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { signOut } from "./signout";
import { approveMessage, deleteMessage, hideMessage } from "./actions";

export const dynamic = "force-dynamic";

const when = (iso: string, long = false) =>
  new Date(iso).toLocaleString("en-CA", long ? { dateStyle: "medium", timeStyle: "short", timeZone: "America/Toronto" } : { dateStyle: "medium", timeZone: "America/Toronto" });

export default async function AdminPage() {
  await requireAdmin();
  const db = createAdminClient();
  const [{ data: rsvps, error: rsvpError }, { data: messages, error: messageError }] = await Promise.all([
    db.from("household_rsvps").select("id,household_name,contact_name,email,attending,guest_count,dietary_notes,message,created_at").order("created_at", { ascending: false }),
    db.from("guest_messages").select("id,name,message,approved,created_at").order("created_at", { ascending: false }),
  ]);

  const rows = rsvps || [];
  const notes = messages || [];
  const yes = rows.filter((r) => r.attending);
  const no = rows.filter((r) => !r.attending);
  const guests = yes.reduce((n, r) => n + r.guest_count, 0);
  const pendingNotes = notes.filter((m) => !m.approved).length;
  const invited = Number(process.env.INVITED_HOUSEHOLDS || 0);
  const hasInvited = Number.isFinite(invited) && invited > 0;

  const stats = hasInvited
    ? [
        { label: "Households invited", value: invited, tone: "teal", sub: `${rows.length} replied` },
        { label: "Attending", value: guests, tone: "green", sub: `${yes.length} household${yes.length === 1 ? "" : "s"}` },
        { label: "Declined", value: no.length, tone: "red", sub: "households" },
        { label: "Awaiting reply", value: Math.max(0, invited - rows.length), tone: "sand", sub: "households" },
      ]
    : [
        { label: "Households replied", value: rows.length, tone: "teal", sub: "total RSVPs" },
        { label: "Guests attending", value: guests, tone: "green", sub: `${yes.length} household${yes.length === 1 ? "" : "s"}` },
        { label: "Declined", value: no.length, tone: "red", sub: "households" },
        { label: "Notes to review", value: pendingNotes, tone: "sand", sub: `${notes.length} total` },
      ];

  return (
    <div className="adm-shell">
      <aside className="adm-side">
        <p className="adm-brand">Baby Shower</p>
        <nav>
          <a href="#top" className="on"><LayoutDashboard size={16} /> Dashboard</a>
          <a href="#rsvps"><Users size={16} /> RSVPs</a>
          <a href="#messages"><MessageCircle size={16} /> Messages{pendingNotes > 0 && <b>{pendingNotes}</b>}</a>
        </nav>
        <div className="adm-side-foot">
          <a href="/">View invitation</a>
          <form action={signOut}><button><LogOut size={15} /> Logout</button></form>
        </div>
      </aside>

      <main className="adm-main" id="top">
        <header className="adm-head">
          <h1>Dashboard</h1>
          <a className="adm-btn" href="/api/admin/export"><Download size={15} /> Export CSV</a>
        </header>

        {(rsvpError || messageError) && <p className="adm-alert">Some data could not be loaded. Check that the database migration has run and the server keys are set.</p>}

        <section className="adm-stats">
          {stats.map((s) => (
            <div key={s.label} className={`adm-stat tone-${s.tone}`}>
              <span>{s.label}</span>
              <strong>{s.value}</strong>
              <small>{s.sub}</small>
            </div>
          ))}
        </section>

        <section id="rsvps" className="adm-card">
          <h2>RSVPs</h2>
          <div className="adm-table-wrap">
            <table>
              <thead>
                <tr><th>Name</th><th>Attending</th><th>Guests</th><th>Dietary</th><th>Message</th><th>RSVP date</th></tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td>{r.contact_name}<small>{r.email}</small></td>
                    <td><span className={`adm-pill ${r.attending ? "yes" : "no"}`}>{r.attending ? "Yes" : "No"}</span></td>
                    <td>{r.guest_count}</td>
                    <td>{r.dietary_notes || "—"}</td>
                    <td className="adm-msg">{r.message || "—"}</td>
                    <td>{when(r.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {rows.length === 0 && <p className="adm-empty">No RSVPs yet. They will appear here as guests reply.</p>}
          </div>
        </section>

        <section id="messages" className="adm-card">
          <h2>Guest messages</h2>
          <p className="adm-hint">New notes stay hidden from the invitation until you approve them.</p>
          <ul className="adm-notes">
            {notes.map((m) => (
              <li key={m.id}>
                <div>
                  <p>&ldquo;{m.message}&rdquo;</p>
                  <small>{m.name} · {when(m.created_at, true)} · <span className={`adm-pill ${m.approved ? "yes" : "wait"}`}>{m.approved ? "Showing" : "Pending"}</span></small>
                </div>
                <div className="adm-actions">
                  {m.approved ? (
                    <form action={hideMessage.bind(null, m.id)}><button title="Hide from the invitation"><EyeOff size={15} /> Hide</button></form>
                  ) : (
                    <form action={approveMessage.bind(null, m.id)}><button className="ok" title="Show on the invitation"><Check size={15} /> Approve</button></form>
                  )}
                  <form action={deleteMessage.bind(null, m.id)}><button className="del" title="Delete permanently" aria-label="Delete message"><Trash2 size={15} /></button></form>
                </div>
              </li>
            ))}
          </ul>
          {notes.length === 0 && <p className="adm-empty">No messages yet.</p>}
        </section>
      </main>
    </div>
  );
}
