"use client";

import { useLanguage } from "./LanguageProvider";

export default function ContactIntro() {
  const { t } = useLanguage();

  return (
    <div>
      <h1 className="text-5xl font-black tracking-tight text-navy md:text-7xl">
        {t("contact.title")}
      </h1>

      <p className="mt-6 text-lg leading-8 text-bodyText">
        {t("contact.description")}
      </p>

      <div className="mt-10 rounded-premium bg-white p-7 shadow-premium">
        <h2 className="text-2xl font-black text-navy">
          {t("contact.nextTitle")}
        </h2>

        <ol className="mt-5 space-y-3 font-semibold text-bodyText">
          <li>{t("contact.next1")}</li>
          <li>{t("contact.next2")}</li>
          <li>{t("contact.next3")}</li>
          <li>{t("contact.next4")}</li>
        </ol>
      </div>
    </div>
  );
}