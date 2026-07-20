

const experiences = [
  {
    name: "Corporate Cricket Challenge™",
    label: "Small Team Experience",
    badge: "Best for small teams",
    participants: "Up to 20",
    duration: "3–4 hours",
    format: "Gamified team challenge",
    description:
      "Built for smaller teams who want connection, energy and a memorable team-building experience.",
    href: "/experiences/challenge",
  },
  {
    name: "Corporate Cricket Challenge Plus™",
    label: "Department Experience",
    badge: "Best balance",
    participants: "21–35",
    duration: "5–6 hours",
    format: "Challenges + mini tournament",
    description:
      "Designed for departments wanting friendly competition, collaboration and stronger workplace relationships.",
    href: "/experiences/challenge-plus",
  },
  {
    name: "Corporate Cricket Championship™",
    label: "Company Experience",
    badge: "Ultimate experience",
    participants: "36–60",
    duration: "6–8 hours",
    format: "Full championship format",
    description:
      "A flagship corporate cricket tournament that turns larger groups into one unforgettable shared experience.",
    href: "/experiences/championship",
  },
];

export default function ExperienceCards() {
  return (
    <section id="experiences" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-500">
            Find Your Perfect Experience
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Three experiences. One unforgettable outcome.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're bringing together 12 colleagues or an entire company,
            Corporate Cricket Collective has an experience designed to strengthen
            teams, build workplace culture and create lasting memories.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
  key={experience.name}
  tabIndex={0}
  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl focus:-translate-y-2 focus:border-amber-400 focus:shadow-2xl focus:outline-none active:-translate-y-1"
>
              <div className="overflow-hidden">
                <div className="h-72 bg-[url('/hero-cricket.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-105" />
              </div>

              <div className="p-8">
                <div className="mb-6 inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-amber-700">
                  {experience.badge}
                </div>

                <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-500">
                  {experience.participants} participants
                </p>

                <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                  {experience.name}
                </h3>

                <p className="mt-2 text-lg font-bold text-slate-500">
                  {experience.label}
                </p>

                <p className="mt-5 leading-7 text-slate-600">
                  {experience.description}
                </p>

                <div className="mt-8 grid gap-3 text-sm font-bold text-slate-700">
                  <p>👥 {experience.participants} participants</p>
                  <p>🕒 {experience.duration}</p>
                  <p>🏏 {experience.format}</p>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
  <span className="text-sm font-black uppercase tracking-wide text-slate-950">
    Premium team experience
  </span>
</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}