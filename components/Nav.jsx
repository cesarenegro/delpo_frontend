"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#origin", label: "Origin" },
  { href: "#craft", label: "Craft" },
  { href: "#network", label: "Network" },
  { href: "#process", label: "Process" },
  { href: "#brands", label: "Brands" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/95 backdrop-blur border-b border-paper/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-center gap-3 group">
            <Image
              src="/images/logo-delpo-white.png"
              alt="Delpo Ltd"
              width={160}
              height={75}
              className="h-7 md:h-8 w-auto"
              priority
            />
            <span className="hidden sm:block eyebrow text-signal group-hover:text-paper transition-colors">
              HONG&nbsp;KONG&nbsp;·&nbsp;EST.&nbsp;2008
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9 eyebrow text-signal">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-paper transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://delpo.online/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mono text-xs uppercase tracking-widest bg-lime-400 text-black hover:bg-lime-500 px-5 py-2.5 rounded-sm transition-colors focus-ring"
            >
              Delpo QC
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mono text-xs uppercase tracking-widest bg-racered hover:bg-racereddark text-paper px-5 py-2.5 rounded-sm transition-colors focus-ring"
            >
              Start a project
            </a>
          </div>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center focus-ring"
          >
            <span
              className="block w-6 h-px bg-paper transition-transform"
              style={open ? { transform: "translateY(6.5px) rotate(45deg)" } : undefined}
            />
            <span
              className="block w-6 h-px bg-paper transition-opacity"
              style={open ? { opacity: 0 } : undefined}
            />
            <span
              className="block w-6 h-px bg-paper transition-transform"
              style={open ? { transform: "translateY(-6.5px) rotate(-45deg)" } : undefined}
            />
          </button>
        </div>
      </div>

      <div
        className="lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out bg-void border-t border-paper/10"
        style={{ maxHeight: open ? "460px" : "0px" }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5 eyebrow text-signal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="hover:text-paper transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://delpo.online/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="inline-flex w-fit items-center gap-2 mono text-xs uppercase tracking-widest bg-lime-400 text-black hover:bg-lime-500 px-5 py-2.5 rounded-sm mt-2"
          >
            Delpo QC
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="inline-flex w-fit items-center gap-2 mono text-xs uppercase tracking-widest bg-racered text-paper px-5 py-2.5 rounded-sm"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
