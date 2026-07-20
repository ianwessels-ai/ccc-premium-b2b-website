import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-400">
          Ready To Build A Stronger Workplace?
        </p>

        <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Let's Create An Experience
          <span className="block text-amber-400">
            Your Team Will Never Forget.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Whether you're planning a team-building session, department event or
          company championship, Corporate Cricket Collective will deliver a
          professionally managed experience that strengthens relationships,
          builds workplace culture and leaves a lasting impression.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-10 py-5 text-sm font-black uppercase tracking-wide text-slate-950 transition duration-300 hover:scale-105 hover:bg-amber-300"
          >
            Start Planning
          </Link>

          <Link
            href="#experiences"
            className="rounded-full border border-white/30 px-10 py-5 text-sm font-black uppercase tracking-wide transition duration-300 hover:border-white hover:bg-white hover:text-slate-950"
          >
            Explore Experiences
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-400">
          <span>✓ Professionally Facilitated</span>
          <span>✓ Tailored To Your Team</span>
          <span>✓ Premium Corporate Experience</span>
        </div>
      </div>
    </section>
  );
}