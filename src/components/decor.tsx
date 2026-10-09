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

export function Elephant({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 250 200" aria-hidden="true" fill="none">
      {/* ground shadow */}
      <ellipse cx="128" cy="188" rx="86" ry="7" fill="#7d956633" />
      {/* far legs */}
      <rect x="82" y="128" width="24" height="56" rx="10" fill="#b8987c" />
      <rect x="150" y="128" width="24" height="56" rx="10" fill="#b8987c" />
      {/* body */}
      <ellipse cx="136" cy="104" rx="78" ry="52" fill="#d2b196" />
      {/* near legs */}
      <rect x="62" y="130" width="28" height="56" rx="11" fill="#d2b196" />
      <rect x="172" y="130" width="28" height="56" rx="11" fill="#d2b196" />
      <rect x="62" y="172" width="28" height="9" rx="4" fill="#e9c27a" />
      <rect x="172" y="172" width="28" height="9" rx="4" fill="#e9c27a" />
      {/* tail */}
      <path d="M212 96c12 6 14 20 8 34" stroke="#b8987c" strokeWidth="4" strokeLinecap="round" />
      <circle cx="220" cy="132" r="4" fill="#8f6d50" />
      {/* blanket */}
      <path d="M92 58c26-14 74-14 104 4l6 56c-34 14-78 14-112 0l2-60Z" fill="#3f8f86" stroke="#e9c27a" strokeWidth="3" />
      <path d="M100 70c24-8 64-8 92 4" stroke="#f2a65a" strokeWidth="5" strokeLinecap="round" />
      <path d="M104 100c22 8 62 8 88 0" stroke="#f2a65a" strokeWidth="4" strokeLinecap="round" />
      <g fill="#e9c27a">
        <circle cx="122" cy="85" r="5" /><circle cx="146" cy="88" r="6" /><circle cx="170" cy="85" r="5" />
        <path d="M100 116l4 10 4-10zM124 120l4 10 4-10zM148 122l4 10 4-10zM172 120l4 10 4-10z" />
      </g>
      {/* ear */}
      <path d="M76 52c-30-14-48 10-40 38 6 20 28 26 42 6 8-14 6-34-2-44Z" fill="#c4a287" stroke="#a98767" strokeWidth="1.2" />
      <path d="M70 62c-16-6-26 8-22 24 4 12 14 14 22 4 4-8 4-20 0-28Z" fill="#efb8a6" />
      {/* head */}
      <circle cx="62" cy="92" r="40" fill="#d2b196" />
      {/* head cloth */}
      <path d="M34 66c8-22 40-30 62-12-6 10-14 16-24 20-14 4-28 0-38-8Z" fill="#f2a65a" stroke="#e9c27a" strokeWidth="2" />
      <path d="M62 52l7 14h-14z" fill="#e9c27a" />
      <circle cx="62" cy="68" r="3.4" fill="#d6563c" />
      {/* trunk */}
      <path d="M44 114c-14 14-20 36-10 52 6 10 20 8 22-4 2-10-6-14-12-12" stroke="#d2b196" strokeWidth="19" strokeLinecap="round" />
      <path d="M38 126c-6 12-6 24 0 34" stroke="#b8987c" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      {/* tusks + eye */}
      <path d="M78 122c8 6 16 6 24 0" stroke="#fff6e6" strokeWidth="5" strokeLinecap="round" />
      <circle cx="72" cy="94" r="3.6" fill="#4a3a30" />
      <circle cx="73.2" cy="92.8" r="1.1" fill="#fff" />
      <path d="M76 84c3-3 6-3 9 0" stroke="#4a3a30" strokeWidth="1.4" strokeLinecap="round" />
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
