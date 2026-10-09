import { Baby, CalendarDays, CalendarPlus, Camera, ChevronDown, Clock, Flower2, Footprints, Heart as HeartIcon, MapPin, Navigation, ExternalLink, Shirt, Sparkles, PartyPopper } from "lucide-react";
import Countdown from "@/components/countdown";
import RSVPForm from "@/components/rsvp-form";
import MessageForm from "@/components/message-form";
import Reveal from "@/components/reveal";
import Petals from "@/components/petals";
import Nav from "@/components/nav";
import EnvelopeIntro from "@/components/envelope-intro";
import { Branch, Diya, Divider, BabyElephant, Heart, Landscape, Lotus } from "@/components/decor";
import { calendarUrl, event, photos } from "@/lib/event";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

type GuestMessage = { id: string; name: string; message: string; created_at: string };

async function getApprovedMessages(): Promise<GuestMessage[]> {
  try {
    const db = createAdminClient();
    const { data } = await db
      .from("guest_messages")
      .select("id,name,message,created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(12);
    return (data as GuestMessage[]) || [];
  } catch {
    return [];
  }
}

const tileIcons = {
  heart: HeartIcon,
  baby: Baby,
  shoes: Footprints,
  camera: Camera,
  flower: Flower2,
  sparkles: Sparkles,
} as const;

/** The four floral corners on every card. */
function Corners() {
  return (
    <>
      <Branch className="corner corner-tl" />
      <Branch className="corner corner-tr" />
      <Branch className="corner corner-bl" />
      <Branch className="corner corner-br" />
    </>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <header className="sec-title">
      <Lotus className="sec-lotus" />
      <h2>{children}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </header>
  );
}

export default async function Home() {
  const messages = await getApprovedMessages();

  return (
    <main className="invite">
      <EnvelopeIntro />
      <Petals />
      <Nav brand="P & D" />

      {/* 2. WELCOME */}
      <section id="welcome" className="screen hero">
        <div className="sheet sheet-arch hero-sheet">
          <Corners />
          <div className="sheet-body">
            <div className="medallion pop" style={{ "--i": 0 } as React.CSSProperties}><img src="/baby-ganesha.svg" alt="Cute baby Ganesha" /></div>
            <p className="serif-lead pop" style={{ "--i": 1 } as React.CSSProperties}>With love and joy,<br />we invite you to our</p>
            <h1 className="script script-xl shimmer pop" style={{ "--i": 2 } as React.CSSProperties}>Baby Shower</h1>
            <p className="serif-body pop" style={{ "--i": 3 } as React.CSSProperties}>As we celebrate the upcoming arrival<br />of our little one</p>
            <p className="hosted pop" style={{ "--i": 4 } as React.CSSProperties}>Hosted by</p>
            <p className="hosts pop" style={{ "--i": 5 } as React.CSSProperties}>{event.hostsFull}</p>
            <Heart className="beat pop" />
            <p className="serif-body small pop" style={{ "--i": 6 } as React.CSSProperties}>A new chapter, a bigger love,<br />our greatest blessing is on the way!</p>
            <div className="hero-when pop" style={{ "--i": 7 } as React.CSSProperties}>
              <span><CalendarDays size={14} /> {event.dateLabel}</span>
              <span><Clock size={14} /> {event.timeLabel}</span>
            </div>
            <div className="hero-actions pop" style={{ "--i": 8 } as React.CSSProperties}>
              <a className="btn btn-primary" href="#rsvp">RSVP now</a>
              <a className="btn btn-ghost" href="#details">See details</a>
            </div>
            <Lotus className="hero-lotus pop float" />
          </div>
        </div>
        <a className="scroll-cue" href="#countdown" aria-label="Scroll down"><ChevronDown size={22} /></a>
      </section>

      {/* 3. COUNTDOWN */}
      <section id="countdown" className="screen countdown-screen">
        <Reveal className="sheet sheet-soft">
          <Corners />
          <div className="sheet-body">
            <p className="serif-lead">The celebration begins in</p>
            <Countdown />
            <Divider />
            <div className="scene">
              <Landscape className="scene-bg" />
              <BabyElephant className="scene-elephant" />
              <Lotus className="scene-lotus scene-lotus-l float" />
              <Lotus className="scene-lotus scene-lotus-r float" />
            </div>
            <h2 className="script script-lg">Baby Shower</h2>
            <p className="when-strong">{event.dateLabel}</p>
            <p className="when-light">{event.timeLabel}</p>
          </div>
        </Reveal>
      </section>

      {/* 4. OUR STORY */}
      <section id="story" className="screen">
        <Reveal className="sheet sheet-arch">
          <Corners />
          <div className="sheet-body">
            <SectionTitle>Our Story</SectionTitle>
            <p className="serif-body">From the day we found out, our hearts have been filled with more love, more dreams and more excitement.</p>
            <p className="serif-body">This little one has already brought so much joy into our lives, and we can&rsquo;t wait to share this special journey with you.</p>
            <Reveal effect="zoom" delay={150} className="photo-frame">
              {photos.story ? (
                <img src={photos.story} alt="Our story" loading="lazy" />
              ) : (
                <div className="photo-ph" role="img" aria-label="Photo coming soon">
                  <HeartIcon size={54} strokeWidth={1.2} className="beat" />
                  <small>Our photo goes here</small>
                </div>
              )}
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* 5. EVENT DETAILS */}
      <section id="details" className="screen">
        <Reveal className="sheet sheet-arch">
          <Corners />
          <div className="sheet-body">
            <SectionTitle>Baby Shower Details</SectionTitle>
            <ul className="detail-list">
              <Reveal as="li" effect="left" delay={0}>
                <span className="d-ico"><CalendarDays size={22} strokeWidth={1.5} /></span>
                <div><h3>Date</h3><p>{event.dateLabel}</p></div>
              </Reveal>
              <Reveal as="li" effect="left" delay={90}>
                <span className="d-ico"><Clock size={22} strokeWidth={1.5} /></span>
                <div><h3>Time</h3><p>{event.timeLabel}</p></div>
              </Reveal>
              <Reveal as="li" effect="left" delay={180}>
                <span className="d-ico"><MapPin size={22} strokeWidth={1.5} /></span>
                <div><h3>Venue</h3><p>{event.venue}<br />{event.address}</p></div>
              </Reveal>
              <Reveal as="li" effect="left" delay={270}>
                <span className="d-ico"><Shirt size={22} strokeWidth={1.5} /></span>
                <div><h3>Dress Code</h3><p>{event.dressCode}<br /><small>({event.dressNote})</small></p></div>
              </Reveal>
              <Reveal as="li" effect="left" delay={360}>
                <span className="d-ico"><PartyPopper size={22} strokeWidth={1.5} /></span>
                <div><h3>Fun &amp; Games</h3><p>{event.funLine}</p></div>
              </Reveal>
            </ul>
            <a className="btn btn-ghost" href="/api/calendar"><CalendarPlus size={16} /> Add to Calendar</a>
            <a className="mini-link" href={calendarUrl()} target="_blank" rel="noreferrer">or open in Google Calendar <ExternalLink size={12} /></a>
            <Diya className="sheet-diya" />
          </div>
        </Reveal>
      </section>

      {/* 6. LOCATION */}
      <section id="location" className="screen">
        <Reveal className="sheet sheet-arch">
          <Corners />
          <div className="sheet-body">
            <SectionTitle>Location</SectionTitle>
            <div className="map-frame">
              <iframe title={`Map to ${event.venue}`} src={event.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <p className="venue-name">{event.venue}</p>
            <p className="serif-body small">{event.address}</p>
            <div className="stack">
              <a className="btn btn-primary btn-block" href={event.mapUrl} target="_blank" rel="noreferrer"><Navigation size={16} /> Get Directions</a>
              <a className="btn btn-ghost btn-block" href={event.mapUrl} target="_blank" rel="noreferrer">View on Google Maps <ExternalLink size={14} /></a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 7. RSVP */}
      <section id="rsvp" className="screen">
        <Reveal className="sheet sheet-arch">
          <Corners />
          <div className="sheet-body">
            <SectionTitle sub={<>Kindly reply by <strong>{event.rsvpDeadlineLabel}</strong></>}>RSVP</SectionTitle>
            <RSVPForm />
          </div>
        </Reveal>
      </section>

      {/* 8. GALLERY */}
      <section id="gallery" className="screen">
        <Reveal className="sheet sheet-arch">
          <Corners />
          <div className="sheet-body">
            <SectionTitle>Our Journey So Far</SectionTitle>
            <div className="gallery">
              {photos.gallery.map((p, i) => {
                const Icon = tileIcons[p.icon];
                return (
                  <Reveal key={i} effect="zoom" delay={(i % 2) * 90 + Math.floor(i / 2) * 60} className={`g-tile g-${i % 6}`}>
                    {p.src ? (
                      <img src={p.src} alt={p.alt} loading="lazy" />
                    ) : (
                      <div className="g-ph" role="img" aria-label={p.alt}>
                        <Icon size={34} strokeWidth={1.2} />
                        <small>{p.alt}</small>
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 9. GUEST MESSAGES */}
      <section id="wishes" className="screen">
        <Reveal className="sheet sheet-arch">
          <Corners />
          <div className="sheet-body">
            <SectionTitle sub={<>Leave a note, wish or blessing<br />for our baby!</>}>Messages for Our Little One</SectionTitle>
            <MessageForm />
            {messages.length > 0 && (
              <div className="wall">
                <h3 className="wall-title">Wishes so far</h3>
                {messages.map((m, i) => (
                  <Reveal as="article" key={m.id} effect={i % 2 ? "right" : "left"} delay={i * 40} className="note">
                    <blockquote>&ldquo;{m.message}&rdquo;</blockquote>
                    <cite>{m.name}</cite>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* 12. THANK YOU */}
      <section id="thanks" className="screen thanks-screen">
        <Reveal className="sheet sheet-thanks">
          <Corners />
          <div className="sheet-body">
            <Lotus className="sec-lotus" />
            <h2 className="script script-xl">Thank You!</h2>
            <p className="serif-body">We&rsquo;re so grateful for your love, support and for being a part of this special journey.</p>
            <Heart className="beat" />
            <p className="serif-body small">With love,</p>
            <p className="hosts">{event.hostsShort}</p>
            <BabyElephant className="thanks-elephant" />
          </div>
        </Reveal>
      </section>

      <footer className="foot">
        <small>{event.dateLabel} · Made with love</small>
      </footer>
    </main>
  );
}
