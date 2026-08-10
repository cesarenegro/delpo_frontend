import Image from "next/image";

const LOGOS = [
  { src: "/images/logo-dainese.png", alt: "Dainese", h: "h-6 md:h-7", w: 140, dark: true },
  { src: "/images/logo-alpinestars.png", alt: "Alpinestars", h: "h-5 md:h-6", w: 140 },
  { src: "/images/logo-omp.png", alt: "OMP", h: "h-6 md:h-7", w: 120 },
  { src: "/images/logo-oakley.png", alt: "Oakley", h: "h-5 md:h-6", w: 140 },
  { src: "/images/logo-colmar.png", alt: "Colmar", h: "h-8 md:h-9", w: 100 },
  { src: "/images/logo-clover.png", alt: "Clover", h: "h-7 md:h-8", w: 140 },
  { src: "/images/logo-rhplus.png", alt: "rh+", h: "h-6 md:h-7", w: 90 },
];

function LogoRow({ ariaHidden = false }) {
  return (
    <div className="flex items-center gap-16 shrink-0" aria-hidden={ariaHidden}>
      {LOGOS.map((l, i) => (
        <div key={i} className={l.dark ? "bg-void px-3 py-2 rounded-sm" : ""}>
          <Image
            src={l.src}
            alt={ariaHidden ? "" : l.alt}
            width={l.w}
            height={40}
            className={`${l.h} w-auto object-contain opacity-80`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section id="brands-mini" className="bg-paper py-7 border-b border-void/10">
      <div className="marquee-wrap overflow-hidden">
        <div className="marquee-track items-center gap-16 px-8">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
