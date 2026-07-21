import type { Metadata } from "next";
import Script from "next/script";

import CCCProposalForm from "@/components/CCCProposalForm";
import { Container, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact Corporate Cricket Collective | Netherlands",
  description:
    "Contact Corporate Cricket Collective to discuss premium corporate cricket experiences, executive networking events and customised team-building programmes.",
};

export default function ContactPage() {
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
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
                  Tell us what you are planning, and we’ll design a
                  cricket-based corporate experience tailored to your company,
                  goals, and group size.
                </p>

                <div className="mt-10 rounded-premium bg-white p-7 shadow-premium">
                  <h2 className="text-2xl font-black text-navy">
                    What Happens Next?
                  </h2>

                  <ol className="mt-5 space-y-3 font-semibold text-bodyText">
                    <li>1. We review your request</li>
                    <li>2. We contact you for key details</li>
                    <li>3. We prepare a tailored proposal</li>
                    <li>4. You approve the concept and date</li>
                  </ol>
                </div>
              </div>

              <CCCProposalForm />
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}