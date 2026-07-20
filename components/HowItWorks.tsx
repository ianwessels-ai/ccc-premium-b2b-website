const steps = [
  {
    number: "01",
    title: "Discovery Call",
    text: "We learn about your team, objectives and preferred event format.",
  },
  {
    number: "02",
    title: "Choose Your Experience",
    text: "Select the package that best fits your participant numbers and goals.",
  },
  {
    number: "03",
    title: "We Plan Everything",
    text: "CCC coordinates the logistics, equipment, schedule and event management.",
  },
  {
    number: "04",
    title: "Event Day",
    text: "Your team enjoys a professionally facilitated cricket experience from start to finish.",
  },
  {
    number: "05",
    title: "Celebrate Together",
    text: "Finish with awards, recognition and memories that strengthen workplace culture.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-400">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            We make it simple from start to finish.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            From the first conversation to the final award presentation, we take
            care of everything so you can focus on your people.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:border-amber-400 hover:bg-white/10"
            >
              <p className="text-5xl font-black text-amber-400">
                {step.number}
              </p>

              <h3 className="mt-6 text-2xl font-black">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}