"use client";
import Script from "next/script";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { Container, Section } from "@/components/Section";

export default function ProposalPage() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  try {
    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/proposal", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      router.push("/thank-you");
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("The form could not be submitted. Please try again.");
  }
}

  return (
    <>
      
      <Script
  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
  async
  defer
/>
      <main>
        <Section className="bg-slateCanvas">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="mb-6 h-1 w-16 rounded-full bg-gold" />

                <h1 className="text-4xl font-black tracking-tight text-navy md:text-6xl">
                  Request A Tailored Proposal
                </h1>

                <p className="mt-6 text-lg leading-8 text-bodyText">
                  Tell us about your organisation, team size and goals. We will
                  prepare a tailored Corporate Cricket Collective experience
                  designed around your people, culture and objectives.
                </p>

                <div className="mt-10 rounded-premium bg-white p-8 shadow-premium">
                  <h2 className="text-2xl font-black text-navy">
                    What Happens Next?
                  </h2>

                  <ul className="mt-6 space-y-4 text-base font-semibold text-navy">
                    <li>✓ We review your request</li>
                    <li>✓ We contact you for key details</li>
                    <li>✓ We design a tailored event proposal</li>
                    <li>✓ You receive a clear plan and pricing direction</li>
                  </ul>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] bg-white p-8 shadow-premium"
              >
                <input
  type="text"
  name="website"
  autoComplete="off"
  tabIndex={-1}
  className="hidden"
/>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-bold text-navy">
                    Full Name
                    <input
                      name="name"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                    />
                  </label>

                  <label className="text-sm font-bold text-navy">
                    Company Name
                    <input
                      name="company"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                    />
                  </label>

                  <label className="text-sm font-bold text-navy">
                    Job Title
                    <input
                      name="jobTitle"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                    />
                  </label>

                  <label className="text-sm font-bold text-navy">
                    Email Address
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                    />
                  </label>

                  <label className="text-sm font-bold text-navy">
                    Phone Number
                    <input
                      name="phone"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                    />
                  </label>

                  <label className="text-sm font-bold text-navy">
                    Number of Participants
                    <input
                      name="participants"
                      required
                      placeholder="e.g. 20, 35, 60"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                    />
                  </label>

                  <label className="text-sm font-bold text-navy">
                    Preferred Location
                    <input
                      name="location"
                      placeholder="e.g. Amsterdam, Zaandam, Rotterdam"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                    />
                  </label>

                  <label className="text-sm font-bold text-navy">
                    Preferred Date
                    <input
                      name="date"
                      type="date"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                    />
                  </label>
                </div>

                <label className="mt-5 block text-sm font-bold text-navy">
                  Preferred Experience
                  <select
                    name="serviceInterest"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                  >
                    <option>Corporate Team Building</option>
                    <option>Corporate Hospitality & Networking</option>
                    <option>Corporate Cricket Challenge</option>
                    <option>Not sure yet</option>
                  </select>
                </label>

                <label className="mt-5 block text-sm font-bold text-navy">
                  Estimated Budget
                  <select
                    name="budget"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                  >
                    <option>€1,000–€3,000</option>
                    <option>€3,000–€5,000</option>
                    <option>€5,000–€10,000</option>
                    <option>€10,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </label>

                <label className="mt-5 block text-sm font-bold text-navy">
                  Additional Requirements
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your goals, team, preferred format or any special requirements."
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold"
                  />
                </label>
                <div className="mt-6 flex justify-center">
  <div
    className="cf-turnstile"
    data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
  />
</div>
                <button
                 type="submit"
                className="mt-4 w-full rounded-full bg-gold px-7 py-4 text-sm font-black text-navy shadow-premium transition hover:brightness-95"
                >
                Request My Proposal
              </button>
              </form>
            </div>
          </Container>
        </Section>
      </main>

      
    </>
  );
}