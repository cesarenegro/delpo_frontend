"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import NetworkMap from "./NetworkMap";

const OFFICES = {
  hk: {
    name: "Hong Kong",
    role: "Headquarters",
    lat: 22.3193,
    lng: 114.1694,
    staff: [
      ["Director", "1"],
      ["Office manager", "1"],
      ["Shipping manager", "1"],
    ],
  },
  china: {
    name: "China",
    role: "Production office",
    lat: 23.1291,
    lng: 113.2644,
    staff: [["Quality control", "2"]],
  },
  vietnam: {
    name: "Vietnam",
    role: "Production office",
    lat: 21.0278,
    lng: 105.8342,
    staff: [
      ["Office manager", "1"],
      ["Merchandiser", "1"],
      ["Quality control", "2"],
    ],
  },
  indonesia: {
    name: "Indonesia",
    role: "Production office",
    lat: -6.2088,
    lng: 106.8456,
    staff: [
      ["Manager / product development", "1"],
      ["Merchandiser", "1"],
      ["Quality control", "2"],
    ],
  },
  myanmar: {
    name: "Myanmar",
    role: "Production office",
    lat: 16.8409,
    lng: 96.1735,
    staff: [["Quality control", "1"]],
  },
  cambodia: {
    name: "Cambodia",
    role: "Production office",
    lat: 11.5564,
    lng: 104.9282,
    staff: [["Quality control", "1"]],
  },
  pakistan: {
    name: "Pakistan",
    role: "Production office",
    lat: 24.8607,
    lng: 67.0011,
    staff: [["Quality control", "2"]],
  },
  thailand: {
    name: "Thailand",
    role: "Production office",
    lat: 13.7563,
    lng: 100.5018,
    staff: [["Quality control", "—"]],
  },
  bangladesh: {
    name: "Bangladesh",
    role: "Production office",
    lat: 23.8103,
    lng: 90.4125,
    staff: [
      ["QC manager", "1"],
      ["Quality control", "3"],
    ],
  },
};

const ORDER = [
  "hk",
  "china",
  "vietnam",
  "indonesia",
  "myanmar",
  "cambodia",
  "pakistan",
  "thailand",
  "bangladesh",
];

export default function Network() {
  const [active, setActive] = useState("hk");
  const office = OFFICES[active];
  const total = office.staff.reduce((sum, [, n]) => sum + (parseInt(n) || 0), 0);

  return (
    <section id="network" className="bg-void py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="eyebrow text-racered mb-4">Network</p>
            <h2 className="display uppercase text-4xl md:text-5xl font-semibold leading-[1.02] mb-5">
              Eight countries. One quality standard.
            </h2>
            <p className="text-signal leading-relaxed">
              Every Delpo order is staffed on the ground — not audited after the fact. Select an
              office below to see who&apos;s stationed there.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
            {/* map */}
            <div className="lg:col-span-3 relative rounded-sm card-edge bg-graphite overflow-hidden min-h-[320px] aspect-[4/3] sm:aspect-[16/10]">
              <NetworkMap offices={OFFICES} order={ORDER} active={active} onSelect={setActive} />
              <p className="absolute bottom-0 left-0 right-0 eyebrow text-signaldim px-5 pb-3 pt-6 bg-gradient-to-t from-graphite via-graphite/80 to-transparent pointer-events-none">
                Live network map — click a marker to see office staffing
              </p>
            </div>

            {/* detail panel */}
            <div className="lg:col-span-2 bg-graphite card-edge rounded-sm p-6 md:p-8 min-h-[320px] flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="eyebrow text-racered mb-1">{office.role}</p>
                  <h3 className="display uppercase text-3xl">{office.name}</h3>
                </div>
                <span className="mono text-3xl text-paper tick">{total || "—"}</span>
              </div>
              <ul className="space-y-0 flex-1">
                {office.staff.map(([role, n]) => (
                  <li
                    key={role}
                    className="flex items-center justify-between border-t border-paper/10 py-3"
                  >
                    <span className="text-sm text-signal">{role}</span>
                    <span className="mono text-sm text-paper">{n}</span>
                  </li>
                ))}
              </ul>
              <p className="eyebrow text-signaldim mt-6 pt-4 border-t border-paper/10">
                On-the-ground staffing, per office
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex flex-wrap gap-2 mt-6">
            {ORDER.map((key) => {
              const o = OFFICES[key];
              const isActive = key === active;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`mono text-xs uppercase tracking-wide px-3 py-2 rounded-sm border transition-colors focus-ring ${
                    isActive
                      ? "text-paper border-paper/40"
                      : "text-signal border-paper/15 hover:text-paper hover:border-paper/40"
                  }`}
                >
                  {o.name}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
