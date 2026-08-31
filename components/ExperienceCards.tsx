"use client";

import { useLanguage } from "./LanguageProvider";

export default function ExperienceCards() {
  const { t } = useLanguage();

  const experiences = [
    {
      name: t("experiences.challenge.name"),
      label: t("experiences.challenge.label"),
      badge: t("experiences.challenge.badge"),
      participants: t("experiences.challenge.participants"),
      duration: t("experiences.challenge.duration"),
      format: t("experiences.challenge.format"),
      description: t("experiences.challenge.description"),
      href: "/experiences/challenge",
    },
    {
      name: t("experiences.challengePlus.name"),
      label: t("experiences.challengePlus.label"),
      badge: t("experiences.challengePlus.badge"),
      participants: t("experiences.challengePlus.participants"),
      duration: t("experiences.challengePlus.duration"),
      format: t("experiences.challengePlus.format"),
      description: t("experiences.challengePlus.description"),
      href: "/experiences/challenge-plus",
    },
    {
      name: t("experiences.championship.name"),
      label: t("experiences.championship.label"),
      badge: t("experiences.championship.badge"),
      participants: t("experiences.championship.participants"),
      duration: t("experiences.championship.duration"),
      format: t("experiences.championship.format"),
      description: t("experiences.championship.description"),
      href: "/experiences/championship",
    },
  ];

  return (
    <section id="experiences" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-500">
            {t("experiences.eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            {t("experiences.title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("experiences.description")}
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
                  {experience.participants} {t("experiences.participants")}
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
                  <p>
                    👥 {experience.participants} {t("experiences.participants")}
                  </p>

                  <p>🕒 {experience.duration}</p>

                  <p>🏏 {experience.format}</p>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <span className="text-sm font-black uppercase tracking-wide text-slate-950">
                    {t("experiences.premium")}
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

