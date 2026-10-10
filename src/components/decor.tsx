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

const SKIN = "#e4b98a";
const FAR = "#cfa273";

function Leg({ x, w, phase, far = false }: { x: number; w: number; phase: "a" | "b"; far?: boolean }) {
  const r = x + w;
  return (
    <g className={`be-leg be-leg-${phase}`} style={{ transformOrigin: `${x + w / 2}px 200px` }}>
      <path d={`M${x} 198H${r}L${r - 2} 252Q${r - 2} 268 ${r - 11} 268H${x + 11}Q${x + 2} 268 ${x + 2} 252Z`} fill={far ? FAR : SKIN} />
      <g fill={far ? "#e6cfae" : "#f7e8d2"}>
        {[0.26, 0.5, 0.74].map((f) => (
          <ellipse key={f} cx={x + w * f} cy="262.5" rx="4" ry="3.1" />
        ))}
      </g>
    </g>
  );
}

/**
 * Side-view baby elephant (faces right), drawn flat and soft so it blends into the pastel scene.
 * mode: "walk" = walking in place, "idle" = standing and breathing, "still" = no animation.
 */
export function BabyElephant({ className = "", mode = "walk" }: { className?: string; mode?: "walk" | "idle" | "still" }) {
  const raw = useId();
  const k = raw.replace(/[^a-zA-Z0-9]/g, "");
  const drops: [number, number, string][] = [
    [266, 96, "#cf4a35"], [277, 94, "#e8b84a"], [289, 94, "#cf4a35"], [300, 94, "#e8b84a"], [312, 96, "#cf4a35"],
  ];
  return (
    <svg className={`be be-${mode} ${className}`} viewBox="0 0 420 290" aria-hidden="true" fill="none">
      <defs>
        <clipPath id={`bc${k}`}>
          <ellipse cx="178" cy="176" rx="104" ry="66" />
        </clipPath>
        <linearGradient id={`bs${k}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a8763f" stopOpacity="0" />
          <stop offset="1" stopColor="#a8763f" stopOpacity=".34" />
        </linearGradient>
        <radialGradient id={`bl${k}`}>
          <stop offset="0" stopColor="#f0968a" stopOpacity=".8" />
          <stop offset="1" stopColor="#f0968a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse className="be-shadow" cx="180" cy="270" rx="130" ry="9" fill="#5c6e48" opacity=".22" />

      <g className="be-bob">
        {/* tail (behind the body) */}
        <g transform="translate(0 -14)">
          <g className="be-tail" style={{ transformOrigin: "88px 152px" }}>
            <path d="M90 152C66 150 55 176 61 199" stroke="#d3a577" strokeWidth="7" strokeLinecap="round" />
            <path d="M61 193c-9 6-9 19 0 26 9-7 9-20 0-26Z" fill="#7a4a2e" />
          </g>
        </g>

        {/* legs: far pair is darker; diagonal pairs move together */}
        <Leg x={140} w={36} phase="a" far />
        <Leg x={184} w={36} phase="b" far />
        <Leg x={104} w={40} phase="b" />
        <Leg x={216} w={40} phase="a" />

        <g transform="translate(0 -14)">
        {/* body */}
        <ellipse cx="178" cy="176" rx="104" ry="66" fill={SKIN} />
        <g clipPath={`url(#bc${k})`}>
          <ellipse cx="178" cy="226" rx="104" ry="40" fill={`url(#bs${k})`} />
          <ellipse cx="168" cy="124" rx="78" ry="12" fill="#fff" opacity=".16" />
        </g>

        {/* embroidered blanket */}
        <path d="M120 118Q176 98 232 116L238 186Q178 204 114 188Z" fill="#4f8f51" stroke="#e6b84a" strokeWidth="3" strokeLinejoin="round" />
        <path d="M133 125Q176 111 221 123L225 176Q178 190 128 178Z" fill="#c8452f" />
        <path d="M176 126 196 150 176 174 156 150Z" fill="#e9a23b" />
        <path d="M176 137 188 150 176 163 164 150Z" fill="#4f8f51" />
        <circle cx="176" cy="150" r="4" fill="#c8452f" />
        <path d="M146 141 154 150 146 159 138 150ZM206 141 214 150 206 159 198 150Z" fill="#e9a23b" />
        <g fill="#e6b84a">
          {[[146, 129], [160, 126], [176, 125], [192, 126], [208, 129], [142, 167], [156, 169], [170, 170], [184, 170], [198, 169], [212, 167]].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" />
          ))}
        </g>
        <g className="be-tassel" style={{ transformOrigin: "178px 190px" }}>
          <path d="M178 192 187 204 178 216 169 204Z" fill="#4f8f51" stroke="#e6b84a" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="178" cy="190" r="3.4" fill="#e6b84a" />
        </g>

        {/* head */}
        <g className="be-head" style={{ transformOrigin: "246px 150px" }}>
          <circle cx="288" cy="124" r="54" fill={SKIN} />

          {/* trunk, raised in a happy curl */}
          <g className="be-trunk-wrap" style={{ transformOrigin: "326px 142px" }}>
            <g className="be-trunk" style={{ transformOrigin: "326px 142px" }}>
              <path d="M314 159C358 178 408 160 405 98C405 82 383 82 383 98C380 134 364 146 330 125Z" fill={SKIN} />
              <path d="M349 141Q354 151 350 164M366 150Q371 160 367 172M380 130Q392 136 405 128M384 112Q394 117 404 110" stroke="#b98a58" strokeWidth="1.6" strokeLinecap="round" opacity=".55" />
            </g>
          </g>

          {/* ear */}
          <path d="M262 88C236 80 220 108 226 134C232 160 258 170 272 150C284 132 284 100 262 88Z" fill="#a8763f" opacity=".2" transform="translate(3 4)" />
          <g className="be-ear" style={{ transformOrigin: "268px 92px" }}>
            <path d="M262 88C236 80 220 108 226 134C232 160 258 170 272 150C284 132 284 100 262 88Z" fill="#d9a972" />
            <path d="M262 102C246 98 238 116 242 134C246 150 260 154 266 142C272 130 272 112 262 102Z" fill="#f0b4a2" opacity=".78" />
            <path d="M249 112Q246 130 252 142M258 108Q256 126 259 138" stroke="#d98f80" strokeWidth="1.2" strokeLinecap="round" opacity=".6" />
          </g>

          {/* little green cap with forehead drops */}
          <path d="M250 92C250 58 326 54 328 94Q289 80 250 92Z" fill="#5b9a55" />
          <path d="M250 92Q289 80 328 94L326 100Q289 88 252 99Z" fill="#3f7a43" />
          <path d="M262 76C272 66 292 64 304 68" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".25" />
          <circle cx="288" cy="61" r="5.5" fill="#e8b84a" />
          <circle cx="286.4" cy="59.2" r="1.6" fill="#fff" opacity=".6" />
          {drops.map(([x, y, c]) => (
            <path key={x} d={`M${x - 3} ${y}L${x + 3} ${y}L${x} ${y + 8}Z`} fill={c} />
          ))}

          {/* face */}
          <ellipse cx="302" cy="136" rx="12" ry="7.5" fill={`url(#bl${k})`} />
          <ellipse cx="314" cy="116" rx="7" ry="8.4" fill="#3b2a20" />
          <circle cx="311.8" cy="112.6" r="2.6" fill="#fff" />
          <circle cx="316" cy="120" r="1.1" fill="#fff" opacity=".85" />
          <ellipse className="be-lid" cx="314" cy="116" rx="8" ry="9.4" fill={SKIN} />
          <path d="M322 108l5-3" stroke="#3b2a20" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M306 150Q313 159 324 152" stroke="#7a4a35" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        <g fill="#f2a3a0">
          <path className="be-heart h1" d="M392 70c-6-6-10-2-6 3l6 7 6-7c4-5 0-9-6-3Z" />
          <path className="be-heart h2" d="M410 92c-5-5-8-1-5 3l5 6 5-6c3-4 0-8-5-3Z" />
        </g>
        </g>
      </g>
    </svg>
  );
}

/** A tiny tuft of grass with a blossom, used for the drifting ground. */
export function Tuft({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 30 24" aria-hidden="true" fill="none">
      <path d="M15 24C14 16 9 10 4 7M15 24C15 14 16 8 15 2M15 24C17 16 22 10 27 8" stroke="#7d9566" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="15" cy="4" r="3.2" fill="#f3b8a2" />
      <circle cx="15" cy="4" r="1.2" fill="#e9b55c" />
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
