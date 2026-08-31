"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-2xl font-black">
              Corporate Cricket Collective
            </p>

            <p className="mt-4 max-w-md text-slate-400">
              {t("footer.tagline")}
            </p>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              {t("footer.description")}
            </p>

            {/* Footer language switcher */}
            <div
              className="mt-6 flex items-center gap-2 text-sm font-bold"
              aria-label="Language selector"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={`transition-colors ${
                  language === "en"
                    ? "text-amber-400"
                    : "text-white hover:text-amber-400"
                }`}
              >
                EN
              </button>

              <span className="text-white/40">|</span>

              <button
                type="button"
                onClick={() => setLanguage("nl")}
                aria-pressed={language === "nl"}
                className={`transition-colors ${
                  language === "nl"
                    ? "text-amber-400"
                    : "text-white hover:text-amber-400"
                }`}
              >
                NL
              </button>
            </div>
          </div>

          <div>
            <p className="font-black uppercase tracking-wide text-amber-400">
              {t("footer.quickLinks")}
            </p>

            <div className="mt-5 grid gap-3 text-slate-400">
              <Link href="/" className="hover:text-white">
                {t("footer.home")}
              </Link>

              <Link href="/#experiences" className="hover:text-white">
                {t("footer.experiences")}
              </Link>

              <Link href="/contact" className="hover:text-white">
                {t("footer.contact")}
              </Link>

              <Link href="/terms" className="hover:text-white">
                {t("footer.terms")}
              </Link>
            </div>
          </div>

          <div>
            <p className="font-black uppercase tracking-wide text-amber-400">
              {t("footer.contact")}
            </p>

            <div className="mt-5 grid gap-3 text-slate-400">
              <a
                href="mailto:hello@corporatecricketcollective.com"
                className="hover:text-white"
              >
                hello@corporatecricketcollective.com
              </a>

              <p>{t("footer.location")}</p>

              <a
                href="https://www.linkedin.com/company/corporate-cricket-collective"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/corporatecricketcollective?igsh=ZzNpb3JhM3d2bzB2&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-sm text-slate-500">
            © 2026 Corporate Cricket Collective. {t("footer.rights")}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {t("footer.registered")}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <p>
              <span className="font-semibold text-white">KVK:</span>{" "}
              <span>42124948</span>
            </p>

            <span className="hidden text-slate-600 md:block">|</span>

            <p>
              <span className="font-semibold text-white">VAT:</span>{" "}
              <span>NL005516965B39</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}