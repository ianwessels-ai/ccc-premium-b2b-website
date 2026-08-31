"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

export default function CCCProposalForm() {
  const router = useRouter();
  const { t } = useLanguage();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/proposal", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || t("proposal.errorSubmit")
        );
      }

      form.reset();
      router.push("/thank-you");
      } catch (error) {
  console.error("Proposal submission error:", error);

  if (error instanceof Error) {
    setErrorMessage(error.message);
  } else {
    setErrorMessage(t("proposal.errorGeneral"));
  }

  setIsSubmitting(false);
}
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-premium sm:p-8"
    >
      {/* Spam-protection honeypot */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-bold text-navy">
          {t("proposal.fullName")}
          <input
            type="text"
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          {t("proposal.companyName")}
          <input
            type="text"
            name="company"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          {t("proposal.jobTitle")}
          <input
            type="text"
            name="jobTitle"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          {t("proposal.email")}
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          {t("proposal.phone")}
          <input
            type="tel"
            name="phone"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          {t("proposal.participants")}
          <input
            type="number"
            name="participants"
            min="1"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          {t("proposal.location")}
          <input
            type="text"
            name="location"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          {t("proposal.date")}
          <input
            type="date"
            name="date"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold text-navy">
        {t("proposal.serviceInterest")}
        <select
          name="serviceInterest"
          required
          defaultValue="Corporate Experience / Team Building"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-gold"
        >
          <option value="Corporate Experience / Team Building">
            {t("proposal.serviceTeamBuilding")}
          </option>

          <option value="Corporate Cricket Tournament">
            {t("proposal.serviceTournament")}
          </option>

          <option value="Executive Networking">
            {t("proposal.serviceNetworking")}
          </option>
        </select>
      </label>

      <label className="mt-5 block text-sm font-bold text-navy">
        {t("proposal.budget")}
        <select
          name="budget"
          required
          defaultValue="€1,000–€3,000"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-gold"
        >
          <option value="€1,000–€3,000">€1,000–€3,000</option>
          <option value="€3,000–€5,000">€3,000–€5,000</option>
          <option value="€5,000–€10,000">€5,000–€10,000</option>
          <option value="€10,000+">€10,000+</option>
        </select>
      </label>

      <label className="mt-5 block text-sm font-bold text-navy">
        {t("proposal.message")}
        <textarea
          name="message"
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
        />
      </label>

      {/* Cloudflare Turnstile */}
      <div className="mt-6 flex min-h-[70px] justify-center">
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        />
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full rounded-full bg-gold px-7 py-4 text-sm font-black text-navy shadow-premium transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting
          ? t("proposal.sending")
          : t("proposal.submit")}
      </button>
    </form>
  );
}