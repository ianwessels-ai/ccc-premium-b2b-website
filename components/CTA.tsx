import Link from "next/link";

export function PrimaryCTA({ children = "Request A Proposal" }: { children?: React.ReactNode }) {
  return (
    <Link
      href="/proposal"
      className="inline-flex rounded-full bg-gold px-7 py-4 text-sm font-black text-navy shadow-premium transition hover:brightness-95"
    >
      {children}
    </Link>
  );
}

export function SecondaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex rounded-full border border-navy px-7 py-4 text-sm font-black text-navy transition hover:bg-navy hover:text-white"
    >
      {children}
    </Link>
  );
}