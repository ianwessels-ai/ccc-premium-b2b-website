"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProposalForm() {
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

      if (!response.ok) {
        throw new Error("The proposal request could not be submitted.");
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(
          result.error || "The proposal request could not be submitted."
        );
      }

      form.reset();

      router.push("/thank-you");
    } catch (error) {
      console.error("Proposal form submission error:", error);

      setErrorMessage(
        "Something went wrong while submitting your request. Please try again."
      );

      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-premium sm:p-8"
    >
      {/* Honeypot field */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {[
          ["name", "Full Name"],
          ["company", "Company Name"],
          ["jobTitle", "Job Title"],
          ["email", "Email Address"],
          ["phone", "Phone Number"],
          ["participants", "Number of Participants"],
          ["location", "Preferred Location"],
          ["date", "Preferred Date"],
        ].map(([name, label]) => (
          <label key={name} className="text-sm font-bold text-navy">
            {label}

            <input
              type={
                name === "email"
                  ? "email"
                  : name === "phone"
                    ? "tel"
                    : name === "date"
                      ? "date"
                      : name === "participants"
                        ? "number"
                        : "text"
              }
              name={name}
              required
              min={name === "participants" ? "1" : undefined}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-gold"
            />
          </label>
        ))}
      </div>

      <label className="mt-5 block text-sm font-bold text-navy">
        Service Interest

        <select
          name="serviceInterest"
          required
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-gold"
        >
          <option value="" disabled>
            Select a service
          </option>

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
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-gold"
        >
          <option value="" disabled>
            Select an estimated budget
          </option>

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
      <div className="mt-6 flex justify-center">
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
        className="mt-5 w-full rounded-full bg-gold px-7 py-4 text-sm font-black text-navy shadow-premium transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending Request..." : "Request My Proposal"}
      </button>
    </form>
  );
}