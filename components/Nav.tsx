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
  width={380}
  height={110}
  priority
  className="h-auto w-[260px] md:w-[340px]"
/>
    </Link>

    <nav className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative text-sm font-semibold text-navy transition-all duration-300 hover:text-gold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.label}
        </Link>
      ))}
    </nav>

    <Link
      href="/proposal"
      className="rounded-full bg-gold px-7 py-3.5 text-sm font-black text-navy shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:brightness-95"
    >
      Request A Proposal
    </Link>
  </div>
</header>
  );
}