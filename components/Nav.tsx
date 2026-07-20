import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-slate-950/55 px-5 py-2 text-white shadow-xl backdrop-blur-2xl sm:px-7">
        <Link
          href="/"
          aria-label="Corporate Cricket Collective homepage"
          className="shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Corporate Cricket Collective"
            width={155}
            height={50}
            priority
            className="h-auto w-[135px] sm:w-[155px]"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          <Link
            href="/#experiences"
            className="text-sm font-semibold tracking-wide text-white/75 transition hover:text-white"
          >
            Experiences
          </Link>

          <Link
            href="/#why-ccc"
            className="text-sm font-semibold tracking-wide text-white/75 transition hover:text-white"
          >
            Why CCC
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold tracking-wide text-white/75 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-amber-400 px-5 py-2.5 text-xs font-black uppercase tracking-wide text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 sm:px-6"
        >
          <span className="hidden sm:inline">Book Your Experience</span>
          <span className="sm:hidden">Book</span>
        </Link>
      </div>
    </header>
  );
}