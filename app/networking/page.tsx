import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Networking Events | Netherlands",
  description:
    "Premium executive networking events that combine cricket, business relationships and memorable corporate experiences for professionals across the Netherlands.",
};
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container, Section } from "@/components/Section";
import { PrimaryCTA } from "@/components/CTA";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-navy">
                The Cricket Corporate Collective
              </div>
              <h1 className="text-5xl font-black tracking-tight text-navy md:text-7xl">Executive Networking Through Shared Sporting Experiences</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-bodyText">Premium networking environments where professionals connect naturally through cricket, conversation, and shared experience.</p>
              <div className="mt-9"><PrimaryCTA>Request Networking Information</PrimaryCTA></div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}