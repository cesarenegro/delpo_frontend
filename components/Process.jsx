"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const STAGES = [
  {
    num: "01",
    title: "PPS Preparation",
    summary: "Style risk analysis, tech pack review and pre-production sample sign-off.",
    rr: {
      Delpo: [
        "Style risk analysis with customer staff",
        "Cooperate on style review",
        "Report to customer quality/planning team & vendor",
      ],
      Vendor: [
        "Provide tech pack / sample / comments",
        "Cooperate on style review",
        "Follow up on risk resolution",
        "PPS copy to Delpo",
      ],
      Customer: ["Cooperate on style review", "Follow up on risk resolution"],
    },
  },
  {
    num: "02",
    title: "Production Launch",
    summary: "Tech pack cross-checked against the production line before the first cut.",
    rr: {
      Delpo: [
        "Resolve technical / process items for launch",
        "Check tech pack against production correspondence",
        "Report to customer quality/planning team & vendor",
      ],
      Vendor: ["Follow up on risk resolution", "Follow up on production resolution"],
      Customer: ["Follow up on risk resolution"],
    },
  },
  {
    num: "03",
    title: "Performance Tracking",
    summary: "In-line inspection through to final AQL, reported back at every step.",
    rr: {
      Delpo: [
        "In-line inspection",
        "Report to customer quality/planning team & vendor",
        "Final AQL inspection",
      ],
      Vendor: ["100% line inspection"],
      Customer: ["100% in-line inspection", "AQL performance review from customer QC staff"],
    },
  },
];

export default function Process() {
  const [stage, setStage] = useState(0);
  const current = STAGES[stage];
  const widths = ["33.33%", "66.66%", "100%"];

  return (
    <section id="process" className="bg-void py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-racered mb-4">Process</p>
            <h2 className="display uppercase text-4xl md:text-5xl font-semibold leading-[1.02] mb-5">
              How a style moves from sketch to shipment.
            </h2>
            <p className="text-signal leading-relaxed">
              Roles and responsibilities are fixed from day one — for Delpo, the vendor, and the
              customer alike.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mb-10">
            <div className="hidden md:block absolute left-0 right-0 top-[13px] h-px bg-paper/15" />
            <div
              className="hidden md:block absolute left-0 top-[13px] h-px bg-racered progress-line"
              style={{ width: widths[stage], transform: "scaleX(1)" }}
            />
            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
              {STAGES.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => setStage(i)}
                  className="text-left group focus-ring"
                >
                  <span className="flex items-center gap-3 mb-3">
                    <span
                      className="w-[27px] h-[27px] rounded-full border-2 flex items-center justify-center mono text-[11px] transition-colors"
                      style={
                        i === stage
                          ? { borderColor: "#d91e2b", background: "#d91e2b", color: "#f4f2ee" }
                          : { borderColor: "rgba(244,242,238,0.3)", color: "#9095a0" }
                      }
                    >
                      {s.num}
                    </span>
                  </span>
                  <h3
                    className={`display uppercase text-xl md:text-2xl transition-colors ${
                      i === stage ? "text-racered" : "group-hover:text-racered"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="text-signal text-sm mt-2 max-w-xs">{s.summary}</p>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="bg-graphite card-edge rounded-sm overflow-hidden">
            <div className="hidden sm:grid grid-cols-3 mono text-[11px] uppercase tracking-wide text-signaldim border-b border-paper/10">
              <div className="px-5 py-3 border-r border-paper/10">Delpo</div>
              <div className="px-5 py-3 border-r border-paper/10">Vendor</div>
              <div className="px-5 py-3">Customer</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y divide-paper/10 sm:divide-y-0">
              {Object.entries(current.rr).map(([role, items], idx) => (
                <ul
                  key={role}
                  className={`px-5 py-6 text-sm text-signal space-y-2.5 ${
                    idx < 2 ? "sm:border-r sm:border-paper/10" : ""
                  }`}
                >
                  <li className="sm:hidden eyebrow text-racered !text-[10px] mb-1">{role}</li>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
