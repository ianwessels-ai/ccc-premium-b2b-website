"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function CCCProposalForm() {
  const router = useRouter();

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
          result.error || "Your request could not be submitted."
        );
      }

      form.reset();
      router.push("/thank-you");
    } catch (error) {
      console.error("Proposal submission error:", error);

      setErrorMessage(
        "Something went wrong while submitting your request. Please refresh the page and try again."
      );

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
          Full Name
          <input
            type="text"
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          Company Name
          <input
            type="text"
            name="company"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          Job Title
          <input
            type="text"
            name="jobTitle"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          Email Address
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          Phone Number
          <input
            type="tel"
            name="phone"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          Number of Participants
          <input
            type="number"
            name="participants"
            min="1"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          Preferred Location
          <input
            type="text"
            name="location"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>

        <label className="text-sm font-bold text-navy">
          Preferred Date
          <input
            type="date"
            name="date"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-gold"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold text-navy">
        Service Interest
        <select
          name="serviceInterest"
          required
          defaultValue="Corporate Experience / Team Building"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-gold"
        >
          <option value="Corporate Experience / Team Building">
            Corporate Experience / Team Building
          </option>

          <option value="Corporate Cricket Tournament">
            Corporate Cricket Tournament
          </option>

          <option value="Executive Networking">
            Executive Networking
          </option>
        </select>
      </label>

      <label className="mt-5 block text-sm font-bold text-navy">
        Estimated Budget
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
        Message
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
        {isSubmitting ? "Sending Request..." : "Request My Proposal"}
      </button>
    </form>
  );
}