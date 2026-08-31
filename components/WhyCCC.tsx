"use client";

import { useLanguage } from "./LanguageProvider";

export default function WhyCCC() {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t("whyCCC.buildTeams.title"),
      text: t("whyCCC.buildTeams.text"),
    },
    {
      title: t("whyCCC.engageEmployees.title"),
      text: t("whyCCC.engageEmployees.text"),
    },
    {
      title: t("whyCCC.strengthenCulture.title"),
      text: t("whyCCC.strengthenCulture.text"),
    },
    {
      title: t("whyCCC.professionallyManaged.title"),
      text: t("whyCCC.professionallyManaged.text"),
    },
    {
      title: t("whyCCC.premiumExperience.title"),
      text: t("whyCCC.premiumExperience.text"),
    },
    {
      title: t("whyCCC.tailored.title"),
      text: t("whyCCC.tailored.text"),
    },
  ];

  return (
    <section id="why-ccc" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-500">
            {t("whyCCC.eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            {t("whyCCC.title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("whyCCC.description")}
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

              <p className="mt-4 leading-7 text-slate-600">
                {benefit.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}