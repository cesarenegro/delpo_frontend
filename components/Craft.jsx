import Image from "next/image";
import Reveal from "./Reveal";

const CATEGORIES = [
  {
    num: "01",
    title: "Motorbike",
    img: "/images/jacket-gray.jpg",
    alt: "Technical motorbike touring jacket",
    copy: "Race and touring gear built to Dakar-grade abuse — abrasion, waterproofing, and armour-ready construction.",
  },
  {
    num: "02",
    title: "Bicycle",
    img: "/images/jacket-neon.jpg",
    alt: "High-visibility technical cycling jacket",
    copy: "Packable, high-visibility outerwear engineered for long hours in the saddle.",
  },
  {
    num: "03",
    title: "Ski",
    img: "/images/glove-red.jpg",
    alt: "Technical racing glove detail",
    copy: "Insulated, weatherproof pieces with the same close-tolerance panelling as our race gloves.",
  },
  {
    num: "04",
    title: "Golf",
    img: "/images/product-jacket.jpg",
    alt: "Technical golf and travel outerwear",
    copy: "Lightweight technical layers built for four-season club and travel wear.",
  },
];

const ACCESSORIES = [
  { img: "/images/backpack-1.jpg", alt: "Technical backpack" },
  { img: "/images/backpack-2.jpg", alt: "Touring backpack" },
  { img: "/images/saddlebag.jpg", alt: "Motorbike saddle bag" },
  { img: "/images/hoodie-oakley.jpg", alt: "Branded technical hoodie" },
];

export default function Craft() {
  return (
    <section id="craft" className="bg-graphite py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-racered mb-4">Craft</p>
            <h2 className="display uppercase text-4xl md:text-5xl font-semibold leading-[1.02] mb-5">
              One factory network. Four disciplines.
            </h2>
            <p className="text-signal leading-relaxed">
              Delpo specializes in technical activewear built for genuine performance — plus the
              accessories that go with it. Every category runs through the same design, sourcing
              and quality-control pipeline.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="group relative h-[420px] rounded-sm overflow-hidden card-edge">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="eyebrow text-racered mb-2">{c.num}</p>
                  <h3 className="display uppercase text-2xl">{c.title}</h3>
                  <p className="text-signal text-sm mt-2 leading-relaxed">{c.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 md:mt-20">
            <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
              <h3 className="display uppercase text-2xl md:text-3xl">Plus a full accessories line</h3>
              <p className="text-signal text-sm max-w-sm">
                Technical backpacks, saddle bags and carry systems built alongside every apparel
                programme.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ACCESSORIES.map((a) => (
                <div key={a.img} className="relative h-56 rounded-sm overflow-hidden card-edge">
                  <Image src={a.img} alt={a.alt} fill sizes="25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
