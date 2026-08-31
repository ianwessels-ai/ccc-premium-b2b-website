import type { Metadata } from "next";
import Script from "next/script";

import CCCProposalForm from "@/components/CCCProposalForm";
import ContactIntro from "@/components/ContactIntro";
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
              <ContactIntro />

              <CCCProposalForm />
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}