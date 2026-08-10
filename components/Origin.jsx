import Image from "next/image";
import Reveal from "./Reveal";

export default function Origin() {
  return (
    <section id="origin" className="bg-void py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-8 items-center">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow text-racered mb-4">Origin</p>
            <h2 className="display uppercase text-4xl md:text-5xl font-semibold leading-[1.02] mb-6">
              Born from thirty years on an Italian cutting table.
            </h2>
            <p className="text-signal leading-relaxed mb-5">
              Delpo Ltd was founded in Hong Kong in 2008 by Alberto Del Monte — out of the ashes
              of a laboratory that, for thirty years, was known and trusted among major brands for
              sportswear mass production in Italy.
            </p>
            <p className="text-signal leading-relaxed mb-8">
              That heritage still sets the standard. Today Delpo designs, sources and inspects
              technical activewear and accessories for performance brands worldwide, with the same
              obsession for fit, fabric and finish.
            </p>
            <div className="flex flex-wrap gap-8 border-t border-paper/10 pt-6">
              <div>
                <p className="mono text-xl text-paper">Alberto Del Monte</p>
                <p className="eyebrow text-signaldim mt-1">Founder &amp; Director</p>
              </div>
              <div>
                <p className="mono text-xl text-paper">Hong Kong</p>
                <p className="eyebrow text-signaldim mt-1">Headquarters</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={120}>
            <div className="relative">
              <div className="relative w-full h-[420px] md:h-[560px] rounded-sm overflow-hidden">
                <Image
                  src="/images/history-dakar.jpg"
                  alt="Rider testing Delpo-manufactured motorbike apparel across the dunes"
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 md:-bottom-7 md:-left-7 bg-racered px-5 py-4 md:px-7 md:py-5 max-w-[220px] card-edge">
                <p className="mono text-2xl md:text-3xl text-paper leading-none">
                  30<span className="text-sm align-top">+ yrs</span>
                </p>
                <p className="eyebrow text-paper/85 mt-2">
                  Heritage in sportswear production, since the Italian lab era
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
