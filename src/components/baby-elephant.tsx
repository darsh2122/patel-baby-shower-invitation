/* eslint-disable @next/next/no-img-element */
type Mode = "walk" | "idle" | "still";

const W = 692;
const H = 535;

function Heart({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 22" aria-hidden="true">
      <path d="M12 21C5 15.5 1 12 1 7.2 1 4 3.4 1.6 6.4 1.6c2 0 4 1 5.6 3.2 1.6-2.2 3.6-3.2 5.6-3.2 3 0 5.4 2.4 5.4 5.6 0 4.8-4 8.3-11 13.8Z" fill="#f2a3a0" />
    </svg>
  );
}

/**
 * The finished baby-elephant artwork, split into layers (body, front legs, back legs, trunk)
 * so each part can move on its own.
 *   walk  – walking in place (legs swing, body bobs, trunk sways)
 *   idle  – standing and breathing (trunk sways, blinks)
 *   still – a single flat image, no motion
 */
export function BabyElephant({ className = "", mode = "walk" }: { className?: string; mode?: Mode }) {
  if (mode === "still") {
    return <img className={`ele-still ${className}`} src="/elephant/full.webp" alt="" width={W} height={H} decoding="async" aria-hidden="true" />;
  }
  const layer = (name: string, extra = "") => (
    <img className={`ele-layer ele-${name} ${extra}`} src={`/elephant/${name}.webp`} alt="" width={W} height={H} decoding="async" draggable={false} />
  );
  return (
    <div className={`ele ele-${mode} ${className}`} aria-hidden="true">
      <span className="ele-shadow" />
      <div className="ele-bob">
        {layer("back")}
        {layer("front")}
        {layer("base")}
        <div className="ele-trunk-wrap">{layer("trunk")}</div>
        <span className="ele-lid" />
      </div>
      <Heart className="ele-heart h1" />
      <Heart className="ele-heart h2" />
    </div>
  );
}
