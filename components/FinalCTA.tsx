"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-400">
          {t("finalCTA.eyebrow")}
        </p>

        <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
          {t("finalCTA.title")}
          <span className="block text-amber-400">
            {t("finalCTA.titleHighlight")}
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {t("finalCTA.description")}
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-10 py-5 text-sm font-black uppercase tracking-wide text-slate-950 transition duration-300 hover:scale-105 hover:bg-amber-300"
          >
            {t("finalCTA.button")}
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-400">
          <span>✓ {t("finalCTA.facilitated")}</span>
          <span>✓ {t("finalCTA.tailored")}</span>
          <span>✓ {t("finalCTA.premium")}</span>
        </div>
      </div>
    </section>
  );
}