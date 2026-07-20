const benefits = [
  {
    title: "Build Stronger Teams",
    text: "Shared challenges create trust, communication and stronger working relationships that extend beyond the event.",
  },
  {
    title: "Engage Every Employee",
    text: "Designed so everyone can participate and contribute, regardless of cricket experience or sporting ability.",
  },
  {
    title: "Strengthen Workplace Culture",
    text: "Create memorable moments that boost morale, celebrate success and bring people together.",
  },
  {
    title: "Professionally Managed",
    text: "From planning through to delivery, CCC manages every detail so your team can simply enjoy the experience.",
  },
  {
    title: "Premium Corporate Experience",
    text: "More than a game—an event your employees will remember and your organisation will be proud to host.",
  },
  {
    title: "Tailored to Your Business",
    text: "Every experience is adapted to your team size, objectives, venue and company culture.",
  },
];

export default function WhyCCC() {
  return (
    <section id="why-ccc" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-500">
            Why CCC
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Built for culture, connection and unforgettable team moments.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Cricket is the medium. Stronger workplace relationships are the
            outcome.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-amber-400 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-lg font-black text-slate-950">
                {index + 1}
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}