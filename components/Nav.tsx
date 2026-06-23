import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/networking", label: "Networking" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-black tracking-tight text-navy">
          CCC
          <span className="ml-2 text-xs font-semibold uppercase tracking-[0.22em] text-bodyText">
            Cricket Corporate Collective
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/proposal"
          className="rounded-full bg-gold px-7 py-4 text-sm font-black text-navy shadow-premium transition hover:scale-105"
        >
          Request A Proposal
        </Link>
      </div>
    </header>
  );
}