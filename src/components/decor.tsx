import { useId } from "react";

/* Hand-drawn SVG decorations: all original artwork, no external image files needed. */

type P = { className?: string };

export function Lotus({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 120 90" aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="lotusPink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbd3c2" />
          <stop offset="1" stopColor="#f09f87" />
        </linearGradient>
      </defs>
      <path d="M60 78C30 70 14 50 16 26c22 6 38 24 44 52Z" fill="#f6c4b0" stroke="#d98d78" strokeWidth="1.2" />
      <path d="M60 78C90 70 106 50 104 26c-22 6-38 24-44 52Z" fill="#f6c4b0" stroke="#d98d78" strokeWidth="1.2" />
      <path d="M60 78C40 62 30 40 38 14c16 12 26 34 22 64Z" fill="url(#lotusPink)" stroke="#d98d78" strokeWidth="1.2" />
      <path d="M60 78C80 62 90 40 82 14c-16 12-26 34-22 64Z" fill="url(#lotusPink)" stroke="#d98d78" strokeWidth="1.2" />
      <path d="M60 78C46 56 46 28 60 4c14 24 14 52 0 74Z" fill="#fde6da" stroke="#d98d78" strokeWidth="1.2" />
      <path d="M14 80c14 6 28 8 46 8s32-2 46-8" stroke="#8fa573" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 82c-6-8-6-14 0-18 6 4 8 10 4 18zM90 82c6-8 6-14 0-18-6 4-8 10-4 18z" fill="#a8bb8d" />
    </svg>
  );
}

function Blossom({ x, y, r = 15, rot = 0 }: { x: number; y: number; r?: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy={-r * 0.62} rx={r * 0.55} ry={r * 0.78} transform={`rotate(${a})`} fill="#f9c4ad" stroke="#eba08a" strokeWidth="0.8" />
      ))}
      <circle r={r * 0.28} fill="#e9b55c" />
      <circle r={r * 0.12} fill="#c98b34" />
    </g>
  );
}

function Leaf({ x, y, rot, s = 1, tone = "#8da572" }: { x: number; y: number; rot: number; s?: number; tone?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0C10-14 28-14 40 0 28 14 10 14 0 0Z" fill={tone} />
      <path d="M2 0H34" stroke="#ffffff55" strokeWidth="1" />
    </g>
  );
}

/** A flowering branch used on card corners. Mirror it with CSS (scaleX / scaleY). */
export function Branch({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 200 290" aria-hidden="true" fill="none">
      <path d="M26 288C46 214 34 150 78 92S142 30 186 8" stroke="#7d9566" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M52 200C80 190 100 170 112 142" stroke="#7d9566" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M86 112C112 112 138 96 152 70" stroke="#7d9566" strokeWidth="2.2" strokeLinecap="round" />
      <Leaf x={40} y={250} rot={-70} s={0.9} />
      <Leaf x={44} y={226} rot={20} s={0.8} tone="#a3b98a" />
      <Leaf x={60} y={176} rot={-60} s={1} tone="#a3b98a" />
      <Leaf x={74} y={132} rot={14} s={0.9} />
      <Leaf x={100} y={90} rot={-50} s={1} tone="#a3b98a" />
      <Leaf x={126} y={58} rot={10} s={0.9} />
      <Leaf x={150} y={28} rot={-40} s={0.8} tone="#a3b98a" />
      <Leaf x={92} y={168} rot={30} s={0.75} />
      <Leaf x={126} y={110} rot={-20} s={0.7} tone="#a3b98a" />
      <Blossom x={30} y={196} r={17} rot={10} />
      <Blossom x={110} y={140} r={19} rot={-12} />
      <Blossom x={72} y={84} r={16} rot={24} />
      <Blossom x={150} y={64} r={14} rot={-8} />
      <Blossom x={176} y={22} r={12} rot={30} />
      <circle cx="52" cy="150" r="5" fill="#f3b8a2" />
      <circle cx="132" cy="92" r="4" fill="#f3b8a2" />
      <circle cx="96" cy="46" r="4.5" fill="#f3b8a2" />
    </svg>
  );
}

export function Diya({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 120 100" aria-hidden="true" fill="none">
      <g className="flame">
        <path d="M60 8C46 28 46 40 60 50c14-10 14-22 0-42Z" fill="#ffb347" />
        <path d="M60 22C53 34 54 42 60 48c6-6 7-14 0-26Z" fill="#fff2b8" />
      </g>
      <path d="M12 56c0 22 20 34 48 34s48-12 48-34c-18 8-30 10-48 10S30 64 12 56Z" fill="#d9a441" stroke="#a87820" strokeWidth="1.5" />
      <path d="M12 56c18-8 30-10 48-10s30 2 48 10c-18 8-30 10-48 10S30 64 12 56Z" fill="#efc468" stroke="#a87820" strokeWidth="1.5" />
      <ellipse cx="60" cy="52" rx="14" ry="3" fill="#8b5a1e" />
      <path d="M36 80h48" stroke="#a87820" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Ear({ k }: { k: string }) {
  return (
    <>
      <path d="M104 80C74 44 14 56 8 112c-5 48 36 88 84 64 16-26 22-68 12-96Z" fill={`url(#SKIN${k})`} stroke="#8d7c70" strokeWidth="1" />
      <path d="M98 92C76 66 32 76 28 116c-3 36 26 64 58 48 12-22 18-52 12-72Z" fill={`url(#EARIN${k})`} />
      <path d="M92 102C72 102 52 114 40 130M92 122C74 126 58 138 51 152M91 142C79 150 68 158 63 166" stroke="#d98c82" strokeWidth="1.3" strokeLinecap="round" opacity=".55" fill="none" />
      <path d="M22 76C40 58 70 58 92 76" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".22" fill="none" />
    </>
  );
}

function Eye({ x, k, flip = false }: { x: number; k: string; flip?: boolean }) {
  const d = flip ? 1 : -1; // direction of the outer corner
  return (
    <g>
      <ellipse cx={x} cy="103" rx="7.6" ry="9.2" fill="#35261f" />
      <ellipse cx={x} cy="103" rx="7.6" ry="9.2" fill={`url(#EYESHINE${k})`} />
      <circle cx={x - 2.4} cy="99" r="3" fill="#fff" />
      <circle cx={x + 2.6} cy="107.6" r="1.4" fill="#fff" opacity=".85" />
      <path d={`M${x - 9} 94q9 -8 18 0`} stroke="#4a382e" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      <path d={`M${x + d * 8.5} 95l${d * 5} -3M${x + d * 6} 91.5l${d * 3.5} -5M${x + d * 3} 89.5l${d * 1.5} -5.5`} stroke="#4a382e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <ellipse className="be-lid" cx={x} cy="103" rx="8.8" ry="10.4" fill="#c7b7aa" />
    </g>
  );
}

/** A cute front-facing baby elephant with idle animations (breathing, ear flaps, trunk sway, blinking, floating hearts). */
export function BabyElephant({ className = "", still = false }: { className?: string; still?: boolean }) {
  const raw = useId();
  const k = raw.replace(/[^a-zA-Z0-9]/g, "");
  const u = (n: string) => `url(#${n}${k})`;
  return (
    <svg className={`be ${still ? "be-still" : ""} ${className}`} viewBox="0 0 300 280" aria-hidden="true" fill="none">
      <defs>
        <radialGradient id={`SKIN${k}`} cx="42%" cy="30%" r="85%">
          <stop offset="0" stopColor="#e9dfd6" />
          <stop offset=".55" stopColor="#cbbaad" />
          <stop offset="1" stopColor="#9c8b7f" />
        </radialGradient>
        <linearGradient id={`BODY${k}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d3c4b8" />
          <stop offset="1" stopColor="#a39286" />
        </linearGradient>
        <radialGradient id={`EARIN${k}`} cx="60%" cy="45%" r="75%">
          <stop offset="0" stopColor="#f6cfc6" />
          <stop offset="1" stopColor="#e3a197" />
        </radialGradient>
        <linearGradient id={`TRUNK${k}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a39286" />
          <stop offset=".45" stopColor="#d9cbc0" />
          <stop offset="1" stopColor="#9e8d81" />
        </linearGradient>
        <radialGradient id={`BLUSH${k}`}>
          <stop offset="0" stopColor="#f4a79c" stopOpacity=".75" />
          <stop offset="1" stopColor="#f4a79c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`EYESHINE${k}`} cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#7a5a48" stopOpacity=".55" />
          <stop offset="1" stopColor="#35261f" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="265" rx="84" ry="9" fill="#5c6e48" opacity=".22" />

      <g className="be-all">
        {/* legs + body */}
        <rect x="102" y="222" width="42" height="40" rx="18" fill={u("BODY")} stroke="#8d7c70" strokeWidth="1" />
        <rect x="156" y="222" width="42" height="40" rx="18" fill={u("BODY")} stroke="#8d7c70" strokeWidth="1" />
        <ellipse cx="150" cy="206" rx="68" ry="54" fill={u("BODY")} stroke="#8d7c70" strokeWidth="1" />
        <ellipse cx="150" cy="222" rx="38" ry="26" fill="#fff" opacity=".12" />
        <g fill="#f2e9df" stroke="#b5a69a" strokeWidth=".8">
          <ellipse cx="113" cy="254" rx="4.6" ry="5.6" /><ellipse cx="123" cy="256" rx="4.6" ry="5.6" /><ellipse cx="133" cy="254" rx="4.6" ry="5.6" />
          <ellipse cx="167" cy="254" rx="4.6" ry="5.6" /><ellipse cx="177" cy="256" rx="4.6" ry="5.6" /><ellipse cx="187" cy="254" rx="4.6" ry="5.6" />
        </g>
        <path d="M108 242q16 7 32 0M160 242q16 7 32 0" stroke="#7d6d62" strokeWidth="1.3" strokeLinecap="round" opacity=".35" />

        {/* ears */}
        <g className="be-ear-l"><Ear k={k} /></g>
        <g className="be-ear-r"><g transform="translate(300 0) scale(-1 1)"><Ear k={k} /></g></g>

        {/* head */}
        <ellipse cx="150" cy="110" rx="60" ry="57" fill={u("SKIN")} stroke="#8d7c70" strokeWidth="1" />
        <ellipse cx="136" cy="76" rx="30" ry="14" fill="#fff" opacity=".2" />
        <path d="M126 80q24 -9 48 0M132 90q18 -6 36 0" stroke="#7d6d62" strokeWidth="1.3" strokeLinecap="round" opacity=".28" />
        <path d="M146 54q-3 -9 -10 -12M150 53q0 -10 3 -15M154 54q4 -9 12 -10" stroke="#8a796d" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="100" cy="130" rx="13" ry="8" fill={u("BLUSH")} />
        <ellipse cx="200" cy="130" rx="13" ry="8" fill={u("BLUSH")} />

        <Eye x={121} k={k} />
        <Eye x={179} k={k} flip />

        {/* trunk */}
        <g className="be-trunk">
          <path d="M134 112C130 146 128 176 137 200c5 13 23 16 28 2 3-9-4-15-10-11-4 2-6-1-5-7 3-20 10-44 16-72Z" fill={u("TRUNK")} stroke="#8d7c70" strokeWidth="1" />
          <path d="M131 140q18 7 36 -2M130 158q17 7 32 -1M131 176q14 6 26 -1M135 192q11 6 20 0" stroke="#7d6d62" strokeWidth="1.4" strokeLinecap="round" opacity=".35" />
          <path d="M143 122C140 150 139 176 145 196" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".2" />
          <ellipse cx="157" cy="207" rx="4.2" ry="2.4" fill="#6e5d52" opacity=".5" />
        </g>

        {/* little blossom on the head */}
        <g transform="translate(193 60) rotate(14)">
          <path d="M-4 6C-18 4-24 14-26 22 -14 22-6 16-4 6Z" fill="#9bb27c" />
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="0" cy="-8" rx="5.6" ry="8" transform={`rotate(${a})`} fill="#f8bba8" stroke="#eba08a" strokeWidth=".7" />
          ))}
          <circle r="4" fill="#e9b55c" />
        </g>
      </g>

      <g fill="#f2a3a0">
        <path className="be-heart h1" d="M236 80c-6-6-10-2-6 3l6 7 6-7c4-5 0-9-6-3Z" />
        <path className="be-heart h2" d="M262 112c-5-5-8-1-5 3l5 6 5-6c3-4 0-8-5-3Z" />
        <path className="be-heart h3" d="M44 70c-5-5-8-1-5 3l5 6 5-6c3-4 0-8-5-3Z" />
      </g>
    </svg>
  );
}

/** Soft rolling hills with a pale sun, the backdrop for the elephant. */
export function Landscape({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 480 190" aria-hidden="true" preserveAspectRatio="xMidYMax slice" fill="none">
      <circle cx="248" cy="78" r="66" fill="#fbd9bd" opacity=".75" />
      <path d="M0 120c60-40 110-46 170-14 50-34 110-40 160-8 50-20 100-8 150 18v74H0z" fill="#d9e3c6" opacity=".9" />
      <path d="M0 140c70-30 140-34 220-8 80-24 170-18 260 12v46H0z" fill="#c4d3a8" />
      <path d="M0 166c90-20 180-18 270-4 70 10 150 6 210-6v34H0z" fill="#aebf8e" />
      <g stroke="#7d9566" strokeWidth="2" strokeLinecap="round">
        <path d="M350 168v-20M350 156c-6-4-8-10-8-14M350 152c6-4 8-8 8-12" />
        <path d="M96 170v-16M96 160c-5-3-6-8-6-11M96 157c5-3 6-6 6-10" />
      </g>
    </svg>
  );
}

export function Heart({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 24 22" aria-hidden="true">
      <path d="M12 21C5 15.5 1 12 1 7.2 1 4 3.4 1.6 6.4 1.6c2 0 4 1 5.6 3.2 1.6-2.2 3.6-3.2 5.6-3.2 3 0 5.4 2.4 5.4 5.6 0 4.8-4 8.300-11 13.800Z" fill="#c68a4a" />
    </svg>
  );
}

/** Thin gold divider with a lotus in the middle. */
export function Divider({ className = "" }: P) {
  return (
    <div className={`divider ${className}`} aria-hidden="true">
      <span />
      <Lotus className="divider-lotus" />
      <span />
    </div>
  );
}

/** The ribbon bow on the opening envelope. */
export function Bow({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 160 110" aria-hidden="true" fill="none">
      <path d="M80 56C60 20 22 14 12 34c-8 18 22 38 68 22Z" fill="#a9b98a" stroke="#869a68" strokeWidth="1.4" />
      <path d="M80 56C100 20 138 14 148 34c8 18-22 38-68 22Z" fill="#a9b98a" stroke="#869a68" strokeWidth="1.4" />
      <path d="M80 58C54 70 40 92 34 106c26-4 38-20 46-48Z" fill="#94a876" stroke="#869a68" strokeWidth="1.4" />
      <path d="M80 58c26 12 40 34 46 48-26-4-38-20-46-48Z" fill="#94a876" stroke="#869a68" strokeWidth="1.4" />
      <path d="M30 34c16-8 34-6 50 22M130 34c-16-8-34-6-50 22" stroke="#c6d3ac" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="66" y="42" width="28" height="26" rx="8" fill="#b4c395" stroke="#869a68" strokeWidth="1.4" />
    </svg>
  );
}
