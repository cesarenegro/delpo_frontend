import Image from "next/image";
import Reveal from "./Reveal";

const STATS = [
  { value: "2008", label: "Founded" },
  { value: "30+", label: "Yrs Italian heritage" },
  { value: "8", label: "Production countries" },
  { value: "100%", label: "Line inspection" },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <Image
        src="/images/hero-skyline.jpg"
        alt="Hong Kong skyline at night, Victoria Harbour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-40" />

      <div
        className="absolute top-0 right-0 w-full md:w-[46%] h-full bg-racered/90 pointer-events-none"
        style={{ clipPath: "polygon(100% 0,100% 100%,55% 100%)" }}
      />
      <div
        className="absolute top-0 right-0 w-full md:w-[46%] h-full bg-void opacity-90 pointer-events-none"
        style={{ clipPath: "polygon(100% 0,100% 100%,64% 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32 w-full">
        <Reveal>
          <p className="eyebrow text-racered mb-5">HONG KONG · OEM MANUFACTURING · SINCE 2008</p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="display uppercase leading-[0.95] text-[13vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold max-w-4xl">
            Built for brands
            <br className="hidden sm:block" /> that race, ride
            <br className="hidden sm:block" /> &amp; carve fastest.
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-6 md:mt-8 max-w-xl text-signal text-base md:text-lg leading-relaxed">
            Delpo Ltd designs and manufactures technical activewear and accessories for the
            world&apos;s leading motorsport, cycling, ski and golf brands — produced across an
            eight-country network and inspected garment by garment.
          </p>
        </Reveal>

        <Reveal delay={270}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#network"
              className="inline-flex items-center gap-2 bg-paper text-void mono text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm hover:bg-racered hover:text-paper transition-colors focus-ring"
            >
              Explore our network
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-paper/30 text-paper mono text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm hover:border-paper transition-colors focus-ring"
            >
              Talk to Alberto →
            </a>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl border-t border-paper/15 pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="mono text-2xl md:text-3xl text-paper tick">{s.value}</p>
                <p className="eyebrow text-signaldim mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <a
        href="#brands"
        aria-label="Scroll to brands"
        className="hidden md:flex absolute bottom-8 right-8 z-10 items-center gap-3 text-signal hover:text-paper transition-colors focus-ring"
      >
        <span className="eyebrow">Scroll</span>
        <span className="w-9 h-9 rounded-full border border-paper/25 flex items-center justify-center animate-bounce">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 4L6 9L11 4" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      </a>
    </section>
  );
}
