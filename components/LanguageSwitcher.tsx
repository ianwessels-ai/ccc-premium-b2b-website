"use client";

import { useLanguage } from "./LanguageProvider";

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({
  className = "",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`flex items-center gap-2 text-sm font-bold ${className}`}
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`transition-colors ${
          language === "en"
            ? "text-amber-400"
            : "text-navy hover:text-navy/80"
        }`}
      >
        EN
      </button>

      <span className="text-navy/30">|</span>

      <button
        type="button"
        onClick={() => setLanguage("nl")}
        aria-pressed={language === "nl"}
        className={`transition-colors ${
          language === "nl"
            ? "text-amber-400"
            : "text-navy hover:text-navy/80"
        }`}
      >
        NL
      </button>
    </div>
  );
}