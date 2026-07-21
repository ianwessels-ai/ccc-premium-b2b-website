import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-slate-950 lg:min-h-[92vh]">
      {/* Optimized hero background image */}
      <Image
        src="/hero-cricket-cinematic.webp"
        alt=""
        fill
        priority
        quality={82}
        sizes="100vw"
        className="
          object-cover
          object-[72%_center]
          sm:object-[64%_center]
          md:object-[60%_center]
          lg:object-[55%_center]
        "
        aria-hidden="true"
      />

      {/* Dark overlay for text readability */}
      <div
        className="
          absolute inset-0 z-[1]
          bg-gradient-to-r
          from-slate-950/95
          via-slate-950/70
          to-slate-950/20
          lg:from-slate-950/90
          lg:via-slate-950/55
          lg:to-transparent
        "
        aria-hidden="true"
      />

      {/* Hero content */}
      <div
        className="
          relative z-10
          flex min-h-[100svh] w-full items-center
          px-6 pb-14 pt-32
          sm:px-10 sm:pb-16 sm:pt-32
          md:px-12
          lg:min-h-[92vh] lg:px-20 lg:pb-16 lg:pt-24
        "
      >
        <div className="w-full max-w-3xl">
          <p className="mb-5 text-left text-sm font-black uppercase tracking-[0.28em] text-amber-400">
            Corporate Cricket Collective
          </p>

          <h1 className="max-w-[11ch] text-left text-[3.25rem] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:max-w-none lg:text-8xl">
            More Than A Game.
            <span className="block text-amber-400">
              A Stronger Workplace.
            </span>
          </h1>

          <p className="mt-6 max-w-[34rem] text-left text-base leading-7 text-slate-200 sm:text-lg sm:leading-8 md:mt-8 md:text-xl">
            Premium corporate cricket experiences designed to bring teams
            together through connection, competition and unforgettable shared
            moments.
          </p>

          {/* Hero buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#experiences"
              className="w-full rounded-full bg-amber-400 px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-amber-300 sm:w-auto"
            >
              Explore Experiences
            </Link>

            <Link
              href="/contact"
              className="w-full rounded-full border border-white/40 px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
            >
              Start Planning
            </Link>
          </div>

          {/* Hero benefits */}
          <div className="mt-10 grid grid-cols-1 gap-4 text-sm font-bold text-slate-200 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-3">
            <span className="flex items-start gap-2">
              <span className="shrink-0 text-amber-400">✓</span>
              <span>Strengthen Teams</span>
            </span>

            <span className="flex items-start gap-2">
              <span className="shrink-0 text-amber-400">✓</span>
              <span>Build Culture</span>
            </span>

            <span className="flex items-start gap-2">
              <span className="shrink-0 text-amber-400">✓</span>
              <span>Engage Employees</span>
            </span>

            <span className="flex items-start gap-2">
              <span className="shrink-0 text-amber-400">✓</span>
              <span>Create Lasting Memories</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}