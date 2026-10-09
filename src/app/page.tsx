import Countdown from "@/components/countdown";
import RSVPForm from "@/components/rsvp-form";
import MessageForm from "@/components/message-form";
import { calendarUrl, event } from "@/lib/event";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

async function getApprovedMessages() {
  try {
    const db = createAdminClient();
    const { data } = await db.from("guest_messages").select("id,name,message,created_at").eq("approved", true).order("created_at", { ascending: false }).limit(6);
    return data || [];
  } catch {
    return [];
  }
}

function LotusMark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 80" aria-hidden="true" fill="none">
    <path d="M50 68C27 58 17 40 20 18c17 8 27 24 30 50Z" fill="#d6e2bf" stroke="#7c8d63" strokeWidth="1.4"/>
    <path d="M50 68C73 58 83 40 80 18 63 26 53 42 50 68Z" fill="#f2cbb9" stroke="#b77c73" strokeWidth="1.4"/>
    <path d="M50 68C34 47 35 25 50 5c15 20 16 42 0 63Z" fill="#f9e6d7" stroke="#b77c73" strokeWidth="1.4"/>
    <path d="M18 69Q50 78 82 69" stroke="#b78d4d" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>;
}

export default async function Home() {
  const messages = await getApprovedMessages();
  return <main className="invitation-site">
    <nav className="site-nav" aria-label="Main navigation">
      <a className="nav-brand" href="#home"><span>✽</span> Priyanka & Darshit</a>
      <div className="nav-links"><a href="#details">The Celebration</a><a href="#gallery">Little Details</a><a href="#wishes">Guestbook</a></div>
      <a className="nav-rsvp" href="#rsvp">RSVP <span>↗</span></a>
    </nav>

    <section className="hero invitation-hero" id="home">
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />
      <div className="hero-flower flower-left" aria-hidden="true">✿</div>
      <div className="hero-flower flower-right" aria-hidden="true">❀</div>
      <div className="hero-intro"><span className="tiny-rule" /> A little celebration, a lifetime of love <span className="tiny-rule" /></div>
      <div className="invitation-card">
        <div className="card-shadow" aria-hidden="true" />
        <div className="card-inner">
          <div className="card-corner corner-tl">❧</div><div className="card-corner corner-tr">❧</div>
          <div className="card-corner corner-bl">❧</div><div className="card-corner corner-br">❧</div>
          <div className="card-topline"><span>WITH LOVE & BLESSINGS</span><span className="topline-dot">✦</span><span>PLEASE JOIN US</span></div>
          <div className="ganesha-medallion" aria-label="Decorative elephant motif"><span>ॐ</span><small>शुभ</small></div>
          <p className="script-kicker">A new little love is on the way</p>
          <h1 className="invitation-title">Baby <em>Shower</em></h1>
          <div className="title-ornament"><span /> <LotusMark className="lotus-mark" /> <span /></div>
          <p className="invitation-copy">Please join us as we celebrate the sweetest little blessing and shower the parents-to-be with love, laughter, and good wishes.</p>
          <div className="parents-names"><span>Priyanka</span><i>&</i><span>Darshit</span></div>
          <div className="card-divider"><span>✦</span></div>
          <div className="date-ribbon">
            <div><small>THE DAY</small><strong>SUNDAY</strong><b>13</b><strong>DECEMBER 2026</strong></div>
            <div className="date-separator" />
            <div><small>THE TIME</small><strong>9:00 AM</strong><span>to</span><strong>1:00 PM</strong><small>EASTERN</small></div>
          </div>
          <p className="card-venue"><span>⌖</span> MARYHILL HERITAGE PARK COMMUNITY CENTRE<br /><small>58 St Charles St E · Woolwich, Ontario</small></p>
          <div className="card-actions">
            <a className="pill" href="#rsvp">Kindly RSVP <span>♡</span></a>
            <a className="text-link" href={calendarUrl()} target="_blank" rel="noreferrer">Add to calendar ↗</a>
          </div>
          <div className="card-bottom-note">Your presence is the most precious present</div>
        </div>
      </div>
      <div className="hero-bottom-note"><span>✧</span> A day of joy, blessings & beautiful beginnings <span>✧</span></div>
    </section>

    <section className="countdown section countdown-section">
      <div className="section-inner countdown-inner"><p className="section-kicker">COUNTING OUR BLESSINGS</p><h2 className="section-heading">The day is getting closer</h2><p className="section-lead">We can hardly wait to celebrate with you.</p><Countdown /></div>
    </section>

    <section id="details" className="section celebration-section">
      <div className="section-inner">
        <div className="section-heading-wrap"><LotusMark className="section-lotus" /><p className="section-kicker">SAVE A LITTLE SPACE IN YOUR HEART</p><h2 className="section-heading">A beautiful day awaits</h2><p className="section-lead">Come for the blessings, stay for the laughter, and help us make memories we’ll cherish forever.</p></div>
        <div className="detail-grid">
          <article className="detail-card detail-card-peach"><div className="detail-icon" aria-hidden="true">☼</div><p className="detail-overline">MARK YOUR CALENDAR</p><h3>When we gather</h3><p><strong>Sunday, December 13, 2026</strong><br />9:00 AM – 1:00 PM Eastern</p><a className="detail-link" href="/api/calendar">Download calendar invitation <span>↗</span></a></article>
          <article className="detail-card detail-card-pista"><div className="detail-icon" aria-hidden="true">⌖</div><p className="detail-overline">WE’LL SAVE YOU A SEAT</p><h3>Where to find us</h3><p><strong>{event.venue}</strong><br />{event.address}</p><a className="detail-link" href={event.mapUrl} target="_blank" rel="noreferrer">Get directions <span>↗</span></a></article>
        </div>
      </div>
    </section>

    <section className="games-banner"><div className="games-flower" aria-hidden="true">✿</div><p className="section-kicker">A LITTLE FUN IS IN STORE</p><h2>Come ready to play!</h2><p>Get ready to join in the games — we’ll have smiles, laughter, and a little friendly competition for everyone.</p><span className="games-sparkles" aria-hidden="true">✦　❀　✦</span></section>

    <section id="gallery" className="section gallery-section"><div className="section-inner"><p className="section-kicker">LITTLE TOUCHES, LOTS OF LOVE</p><h2 className="section-heading">A celebration in bloom</h2><p className="section-lead">Inspired by the traditions, blessings, and beautiful beginnings that bring us together.</p><div className="gallery-grid">
      <div className="gallery-tile gallery-lotus"><div className="gallery-art">🪷</div><span className="gallery-caption">LOVE IN BLOOM</span><strong>New beginnings</strong><small>A little love grows into a lifetime.</small></div>
      <div className="gallery-tile gallery-diya"><div className="gallery-art">🪔</div><span className="gallery-caption">LIGHT & BLESSINGS</span><strong>Wishes from the heart</strong><small>May the little one be surrounded by joy.</small></div>
      <div className="gallery-tile gallery-flower"><div className="gallery-art">🌼</div><span className="gallery-caption">FAMILY & JOY</span><strong>Together is beautiful</strong><small>Our favourite people, one special day.</small></div>
    </div><p className="gallery-note">A little preview of the celebration’s colours and traditions. Family photos can be added here before the big day.</p></div></section>

    <section id="rsvp" className="section rsvp-section"><div className="section-inner"><div className="rsvp-heading"><LotusMark className="section-lotus" /><p className="section-kicker">KINDLY REPLY BY NOVEMBER 22, 2026</p><h2 className="section-heading">Will you celebrate with us?</h2><p className="section-lead">Please send one RSVP per household so we can save a place for everyone.</p></div><RSVPForm /></div></section>

    <section id="wishes" className="section wishes-section"><div className="section-inner"><p className="section-kicker">LEAVE A LITTLE LOVE</p><h2 className="section-heading">Wishes for our little one</h2><p className="section-lead">Share a blessing, a kind thought, or a note for the parents-to-be. Messages appear after the hosts approve them.</p>{messages.length > 0 ? <div className="messages-grid">{messages.map((m: any) => <article className="message-card" key={m.id}><div className="message-stars" aria-hidden="true">✦　✦　✦</div><blockquote>“{m.message}”</blockquote><strong>— {m.name}</strong></article>)}</div> : <div className="empty wishes-empty"><span>❧</span><p>Your wishes will make this space bloom.</p><small>Be the first to leave a little note of love.</small></div>}<MessageForm /></div></section>

    <footer className="footer"><LotusMark className="footer-lotus" /><p className="footer-script">With love,</p><strong>Priyanka & Darshit</strong><p>Thank you for being part of our special day.</p><small>DECEMBER 13, 2026 <span>✦</span> MADE WITH LOVE</small></footer>
  </main>;
}
