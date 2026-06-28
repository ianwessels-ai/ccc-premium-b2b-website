import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container, Section } from "@/components/Section";
import { PrimaryCTA, SecondaryCTA } from "@/components/CTA";

export default function ThankYouPage() {
  return (
    <>
      <Nav />

      <main>
        <Section className="bg-slateCanvas">
          <Container>
            <div className="mx-auto max-w-3xl text-center">

              <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-gold" />

              <h1 className="text-4xl font-black tracking-tight text-navy md:text-6xl">
                Proposal Request Received
              </h1>

              <p className="mt-6 text-lg leading-8 text-bodyText">
                Thank you for contacting The Cricket Corporate Collective.
                A member of our team will review your requirements and contact you within 1 business day to discuss your objectives and next steps.
              </p>

              <div className="mt-10 rounded-premium bg-white p-8 shadow-premium">
                <h2 className="text-2xl font-black text-navy">
                  What Happens Next?
                </h2>

                <ul className="mt-6 space-y-4 text-left font-semibold text-navy">
                  <li>✓ We review your company details and objectives</li>
                  <li>✓ We assess the most suitable experience format</li>
                  <li>✓ We confirm event requirements and logistics</li>
                  <li>✓ We prepare a tailored proposal for your organisation</li>
                </ul>
              </div>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a
  href="/proposal"
  className="inline-flex rounded-full bg-gold px-7 py-4 text-sm font-black text-navy shadow-premium transition hover:brightness-95"
>
  Request Another Proposal
</a>

                <SecondaryCTA href="/">
                  <a href="/">Back To Homepage</a>
                </SecondaryCTA>
              </div>

            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}