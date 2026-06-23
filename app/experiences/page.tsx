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
              <h1 className="text-5xl font-black tracking-tight text-navy md:text-7xl">Corporate Experiences Designed To Strengthen Workplace Culture</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-bodyText">Team-building and company engagement programmes built around premium cricket-inspired experiences.</p>
              <div className="mt-9"><PrimaryCTA>Request A Proposal</PrimaryCTA></div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}