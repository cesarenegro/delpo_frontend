import Image from "next/image";

const LINKS = [
  { href: "#origin", label: "Origin" },
  { href: "#craft", label: "Craft" },
  { href: "#network", label: "Network" },
  { href: "#process", label: "Process" },
  { href: "#brands", label: "Brands" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-graphite border-t border-paper/10">
      <div className="flag-divider" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-delpo-white.png"
            alt="Delpo Ltd"
            width={140}
            height={65}
            className="h-6 w-auto"
          />
          <p className="eyebrow text-signaldim">© {year} Delpo Ltd. Hong Kong.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 eyebrow text-signaldim">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-paper transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
