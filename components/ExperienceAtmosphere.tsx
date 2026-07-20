export default function ExperienceAtmosphere() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-500">
              The Experience
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Designed to create energy, connection and lasting memories.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every Corporate Cricket Collective event is built to bring people
              together through shared challenges, friendly competition and
              professionally facilitated team moments.
            </p>

            <p className="mt-6 text-sm font-semibold text-slate-500">
              Representative imagery illustrating the Corporate Cricket
              Collective experience.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="h-80 rounded-[2rem] bg-[url('/hero-cricket.jpg')] bg-cover bg-center shadow-xl" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="h-48 rounded-[2rem] bg-[url('/hero-cricket.jpg')] bg-cover bg-center" />
              <div className="h-48 rounded-[2rem] bg-[url('/hero-cricket.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}