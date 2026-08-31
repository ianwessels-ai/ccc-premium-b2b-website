"use client";

import { Container, Section } from "@/components/Section";
import { useLanguage } from "@/components/LanguageProvider";

export default function ThankYouPage() {
  const { t } = useLanguage();

  return (
    <main>
      <Section className="bg-slateCanvas">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-gold" />

            <h1 className="text-4xl font-black tracking-tight text-navy md:text-6xl">
              {t("thankYou.title")}
            </h1>

            <p className="mt-6 text-lg leading-8 text-bodyText">
              {t("thankYou.description")}
            </p>

            <div className="mt-10 rounded-premium bg-white p-8 shadow-premium">
              <h2 className="text-2xl font-black text-navy">
                {t("thankYou.nextTitle")}
              </h2>

              <ul className="mt-6 space-y-4 text-left font-semibold text-navy">
                <li>✓ {t("thankYou.next1")}</li>
                <li>✓ {t("thankYou.next2")}</li>
                <li>✓ {t("thankYou.next3")}</li>
                <li>✓ {t("thankYou.next4")}</li>
              </ul>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-black text-navy shadow-premium transition hover:brightness-95"
              >
                {t("thankYou.anotherProposal")}
              </a>

              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-navy px-7 py-4 text-sm font-black text-navy transition hover:bg-navy hover:text-white"
              >
                {t("thankYou.backHome")}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}