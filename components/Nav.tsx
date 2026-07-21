"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-4 sm:pt-5">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <nav className="relative flex items-center justify-between bg-transparent px-0 py-2 sm:py-3">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative z-50 flex shrink-0 items-center"
            aria-label="Corporate Cricket Collective home"
          >
            <Image
              src="/logo.png"
              alt="Corporate Cricket Collective"
              width={160}
              height={46}
              priority
              className="h-auto w-[135px] sm:w-[150px] lg:w-[160px]"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <Link
              href="/#experiences"
              className="text-sm font-semibold text-white/90 transition hover:text-amber-400"
            >
              Experiences
            </Link>

            <Link
              href="/#why-ccc"
              className="text-sm font-semibold text-white/90 transition hover:text-amber-400"
            >
              Why CCC
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold text-white/90 transition hover:text-amber-400"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-amber-400 px-7 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition duration-300 hover:scale-105 hover:bg-amber-300 md:inline-flex"
          >
            Book Your Experience
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-slate-950/20 text-white transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-6 bg-current transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-6 bg-current transition duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>

          {/* Mobile dropdown */}
          <div
            className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] z-40 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl transition-all duration-300 md:hidden ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-3 opacity-0"
            }`}
          >
            <div className="flex flex-col p-4">
              <Link
                href="/#experiences"
                onClick={closeMenu}
                className="rounded-2xl px-5 py-4 text-base font-semibold text-white transition hover:bg-white/5 hover:text-amber-400"
              >
                Experiences
              </Link>

              <Link
                href="/#why-ccc"
                onClick={closeMenu}
                className="rounded-2xl px-5 py-4 text-base font-semibold text-white transition hover:bg-white/5 hover:text-amber-400"
              >
                Why CCC
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-2xl px-5 py-4 text-base font-semibold text-white transition hover:bg-white/5 hover:text-amber-400"
              >
                Contact
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-amber-300"
              >
                Book Your Experience
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}