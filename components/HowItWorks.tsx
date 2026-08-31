"use client";

import { useLanguage } from "./LanguageProvider";

export default function HowItWorks() {
  const { language, t } = useLanguage();

  const steps = [
    {
      number: "01",
      title:
        language === "nl" ? (
          <>
            Kennismakings
            <br />
            gesprek
          </>
        ) : (
          t("howItWorks.discovery.title")
        ),
      text: t("howItWorks.discovery.text"),
    },
    {
      number: "02",
      title: t("howItWorks.choose.title"),
      text: t("howItWorks.choose.text"),
    },
    {
      number: "03",
      title: t("howItWorks.plan.title"),
      text: t("howItWorks.plan.text"),
    },
    {
      number: "04",
      title:
        language === "nl" ? (
          <>
            Evenement
            <br />
            dag
          </>
        ) : (
          t("howItWorks.eventDay.title")
        ),
      text: t("howItWorks.eventDay.text"),
    },
    {
      number: "05",
      title: t("howItWorks.celebrate.title"),
      text: t("howItWorks.celebrate.text"),
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-400">
            {t("howItWorks.eyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            {t("howItWorks.title")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {t("howItWorks.description")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="min-w-0 rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:border-amber-400 hover:bg-white/10"
            >
              <p className="text-5xl font-black text-amber-400">
                {step.number}
              </p>

              <h3 className="mt-6 min-h-[3rem] text-xl font-black leading-tight">
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