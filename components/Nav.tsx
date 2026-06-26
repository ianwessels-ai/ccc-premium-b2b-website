import Image from "next/image";
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
    <header className="border-b border-slate-100 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Corporate Cricket Collective"
        width={290}
        height={80}
        priority
        className="h-auto w-[220px] md:w-[260px]"
      />
    </Link>

    <nav className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-bold text-navy transition duration-200 hover:text-gold"
        >
          {link.label}
        </Link>
      ))}
    </nav>

    <Link
      href="/proposal"
      className="rounded-full bg-gold px-6 py-3 text-sm font-black text-navy shadow-premium transition duration-200 hover:-translate-y-0.5 hover:brightness-95"
    >
      Request A Proposal
    </Link>
  </div>
</header>
  );
}