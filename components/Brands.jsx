import Image from "next/image";
import Reveal from "./Reveal";

const CELLS = [
  { src: "/images/logo-dainese.png", alt: "Dainese", h: "max-h-8 md:max-h-10", w: 130, dark: true },
  { src: "/images/logo-alpinestars.png", alt: "Alpinestars", h: "max-h-7 md:max-h-9", w: 130 },
  { src: "/images/logo-omp.png", alt: "OMP", h: "max-h-9 md:max-h-11", w: 130 },
  { src: "/images/logo-oakley.png", alt: "Oakley", h: "max-h-7 md:max-h-9", w: 130 },
  { src: "/images/logo-colmar.png", alt: "Colmar", h: "max-h-12 md:max-h-14", w: 100 },
  { src: "/images/logo-clover.png", alt: "Clover", h: "max-h-10 md:max-h-12", w: 150 },
  { src: "/images/logo-rhplus.png", alt: "rh+", h: "max-h-8 md:max-h-10", w: 90 },
];

export default function Brands() {
  return (
    <section id="brands" className="bg-paper text-void py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-racered mb-4">Customers</p>
            <h2 className="display uppercase text-4xl md:text-5xl font-semibold leading-[1.02] mb-5">
              Trusted by the brands that can&apos;t afford to get it wrong.
            </h2>
            <p className="text-void/60 leading-relaxed">
              Performance apparel names that put Delpo-manufactured product on riders, cyclists,
              skiers and golfers.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-void/10 border border-void/10">
            {CELLS.map((c) => (
              <div
                key={c.alt}
                className={`flex items-center justify-center h-32 md:h-40 p-4 ${
                  c.dark ? "bg-void" : "bg-paper"
                }`}
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={c.w}
                  height={60}
                  className={`${c.h} w-auto object-contain`}
                />
              </div>
            ))}
            <div className="relative bg-paper h-32 md:h-40">
              <Image
                src="/images/qc-badges.jpg"
                alt="Finished Dainese logo badges ready for QC"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
