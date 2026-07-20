import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
    <div
  className="absolute -inset-8 h-[104%] w-[104%] bg-[url('/hero-cricket-cinematic.png')] bg-cover bg-[55%_center] bg-no-repeat"
/>

      <div
  className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-transparent"
  aria-hidden="true"
/>

      <div className="relative flex min-h-[92vh] w-full items-center px-8 pb-16 pt-24 sm:px-12 lg:px-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-amber-400">
            Corporate Cricket Collective
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
            More Than A Game.
            <span className="block text-amber-400">A Stronger Workplace.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Premium corporate cricket experiences designed to bring teams
            together through connection, competition and unforgettable shared
            moments.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#experiences"
              className="rounded-full bg-amber-400 px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-amber-300"
            >
              Explore Experiences
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-slate-950"
            >
              Start Planning
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm font-bold text-slate-200">
            <span>✓ Strengthen Teams</span>
            <span>✓ Build Culture</span>
            <span>✓ Engage Employees</span>
            <span>✓ Create Lasting Memories</span>
          </div>
        </div>
      </div>
    </section>
  );
}