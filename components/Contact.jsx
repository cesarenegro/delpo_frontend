import Image from "next/image";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-void py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-racered mb-4">Contact</p>
            <h2 className="display uppercase text-4xl md:text-5xl font-semibold leading-[1.02] mb-6">
              Let&apos;s build your
              <br />
              next collection.
            </h2>
            <p className="text-signal leading-relaxed mb-10 max-w-md">
              Reach out directly to our founder to discuss a new programme, a factory audit, or an
              existing style that needs saving.
            </p>

            <div className="bg-graphite card-edge rounded-sm p-7 md:p-8 max-w-md">
              <p className="mono text-xl text-paper">Alberto Del Monte</p>
              <p className="eyebrow text-signaldim mt-1 mb-6">Founder &amp; Director</p>

              <a
                href="mailto:albertodelmonte@delpoltd.com"
                className="flex items-center justify-between border-t border-paper/10 py-4 group focus-ring"
              >
                <span className="text-sm text-signal group-hover:text-paper transition-colors">
                  albertodelmonte@delpoltd.com
                </span>
                <span className="mono text-xs text-racered">Email →</span>
              </a>
              <a
                href="tel:+85264023317"
                className="flex items-center justify-between border-t border-paper/10 py-4 group focus-ring"
              >
                <span className="text-sm text-signal group-hover:text-paper transition-colors">
                  +852 6402 3317
                </span>
                <span className="mono text-xs text-racered">HK mobile →</span>
              </a>
              <a
                href="tel:+393456889374"
                className="flex items-center justify-between border-t border-paper/10 py-4 group focus-ring"
              >
                <span className="text-sm text-signal group-hover:text-paper transition-colors">
                  +39 345 6889 374
                </span>
                <span className="mono text-xs text-racered">Italy mobile →</span>
              </a>
              <div className="border-t border-paper/10 pt-4 mt-1">
                <p className="text-sm text-signal leading-relaxed">
                  Delpo Ltd. — RM C, 11/F Billion Plaza 2,
                  <br />
                  No.10 Cheung Yue St., Cheung Sha Wan,
                  <br />
                  Kowloon, Hong Kong.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative h-64 md:h-80 rounded-sm overflow-hidden card-edge">
                <Image
                  src="/images/contact-building.jpg"
                  alt="Office tower in Kowloon, Hong Kong"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 relative h-40 md:h-48 rounded-sm overflow-hidden card-edge">
                <Image
                  src="/images/contact-street.jpg"
                  alt="Cheung Yue Street, Cheung Sha Wan, Kowloon"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
