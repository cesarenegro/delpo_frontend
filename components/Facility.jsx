import Image from "next/image";
import Reveal from "./Reveal";

const CAPS = [
  {
    title: "Design",
    copy: "From concept sketch to technical flat, built around how the garment will actually be used.",
    icon: (
      <path
        d="M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Product development",
    copy: "Pattern, fit and construction refined across sample rounds before a single unit is cut.",
    icon: <circle cx="12" cy="12" r="3" />,
  },
  {
    title: "Merchandising",
    copy: "Calendars, costings and line plans managed office-to-office so nothing slips a date.",
    icon: <path d="M6 2l1.5 6M18 2l-1.5 6M6 8h12l1 13H5L6 8z" />,
  },
  {
    title: "Sourcing materials",
    copy: "Membranes, hardware and technical fabrics vetted against the brief before booking.",
    icon: <path d="M3 21V9l9-6 9 6v12 M9 21V12h6v9" />,
  },
];

export default function Facility() {
  return (
    <section id="facility" className="bg-graphite py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-racered mb-4">Facility</p>
            <h2 className="display uppercase text-4xl md:text-5xl font-semibold leading-[1.02] mb-6">
              Everything runs in-house — including the scrutiny.
            </h2>
            <p className="text-signal leading-relaxed mb-8">
              Design, development and sourcing feed a single quality-control discipline. Nothing
              ships without a documented pass.
            </p>
            <div className="relative w-full h-64 rounded-sm overflow-hidden card-edge">
              <Image
                src="/images/design-sketch.jpg"
                alt="Technical design sketch of a motorbike jacket"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {CAPS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="card-edge rounded-sm bg-void p-6 h-full">
                <div className="w-10 h-10 rounded-full border border-racered/50 flex items-center justify-center mb-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d91e2b" strokeWidth="1.6">
                    {c.icon}
                  </svg>
                </div>
                <h3 className="display uppercase text-xl mb-2">{c.title}</h3>
                <p className="text-signal text-sm leading-relaxed">{c.copy}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={320} className="sm:col-span-2">
            <div className="card-edge rounded-sm bg-void p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="sm:w-1/2">
                  <div className="w-10 h-10 rounded-full border border-racered/50 flex items-center justify-center mb-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d91e2b" strokeWidth="1.6">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  </div>
                  <h3 className="display uppercase text-xl mb-2">Quality control</h3>
                  <p className="text-signal text-sm leading-relaxed">
                    In-line and final AQL inspection, on-site, in every one of our eight production
                    countries.
                  </p>
                </div>
                <div className="sm:w-1/2 relative h-40 rounded-sm overflow-hidden">
                  <Image
                    src="/images/qc-caliper.jpg"
                    alt="Quality control inspector measuring a glove seam with calipers"
                    fill
                    sizes="(min-width: 640px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
