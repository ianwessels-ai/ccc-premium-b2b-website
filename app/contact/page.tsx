import type { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Contact Corporate Cricket Collective | Netherlands",
  description:
    "Contact Corporate Cricket Collective to discuss premium corporate cricket experiences, executive networking events and customised team-building programmes.",
};
import { Container, Section } from "@/components/Section";

export default function ContactPage() {
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
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h1 className="text-5xl font-black tracking-tight text-navy md:text-7xl">
                  Request A Proposal
                </h1>
                <p className="mt-6 text-lg leading-8 text-bodyText">
                  Tell us what you are planning, and we’ll design a cricket-based
                  corporate experience tailored to your company, goals, and group size.
                </p>
                <div className="mt-10 rounded-premium bg-white p-7 shadow-premium">
                  <h2 className="text-2xl font-black text-navy">What Happens Next?</h2>
                  <ol className="mt-5 space-y-3 font-semibold text-bodyText">
                    <li>1. We review your request</li>
                    <li>2. We contact you for key details</li>
                    <li>3. We prepare a tailored proposal</li>
                    <li>4. You approve the concept and date</li>
                  </ol>
                </div>
              </div>

              <form action="/api/proposal" method="POST" className="rounded-[2rem] bg-white p-8 shadow-premium">
              <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex={-1}
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
                      <input name={name} required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold" />
                    </label>
                  ))}
                </div>

                <label className="mt-5 block text-sm font-bold text-navy">
                  Service Interest
                  <select name="serviceInterest" required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold">
                    <option>Corporate Experience / Team Building</option>
                    <option>Corporate Cricket Tournament</option>
                    <option>Executive Networking</option>
                  </select>
                </label>

                <label className="mt-5 block text-sm font-bold text-navy">
                  Estimated Budget
                  <select name="budget" required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold">
                    <option>€1,000–€3,000</option>
                    <option>€3,000–€5,000</option>
                    <option>€5,000–€10,000</option>
                    <option>€10,000+</option>
                  </select>
                </label>

                <label className="mt-5 block text-sm font-bold text-navy">
                  Message
                  <textarea name="message" rows={5} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-gold" />
                </label>
                 <div className="mt-6 flex justify-center">
  <div
    className="cf-turnstile"
    data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
  />
</div>
                <button className="mt-4 w-full rounded-full bg-gold px-7 py-4 text-sm font-black text-navy shadow-premium transition hover:brightness-95">
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