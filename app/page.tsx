import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container, Section } from "@/components/Section";
import { PrimaryCTA, SecondaryCTA } from "@/components/CTA";

const services = [
  {
    title: "Corporate Experiences",
    text: "Team-building and company engagement programmes designed to strengthen workplace culture.",
  },
  {
    title: "Executive Networking",
    text: "Relationship-focused business experiences where professionals connect naturally.",
  },
  {
    title: "Corporate Challenges",
    text: "Competitive inter-company cricket experiences built for energy, connection, and prestige.",
  },
];

const challenges = [
  "Disengaged teams",
  "Hybrid work isolation",
  "Weak cross-team relationships",
  "Forgettable team-building activities",
];

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        <section className="bg-white px-6 py-8 md:py-10">
          <Container>
            <div className="grid items-center gap-16 md:grid-cols-[1fr_1fr]">
              <div>
                <div className="mb-6 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-navy">
                  Corporate Connection Through Cricket
                </div>

                <h1 className="text-4xl font-black leading-tight tracking-tight text-navy md:text-6xl lg:text-7xl">
                  <span className="block">More Than A Game.</span>
                  <span className="block">A Stronger Workplace.</span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-bodyText">
                  We help organisations build stronger teams, meaningful business
                  relationships, and engaged workplace cultures through premium
                  corporate cricket experiences.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <PrimaryCTA />
                  <SecondaryCTA href="/experiences">
                    Explore Experiences
                  </SecondaryCTA>
                </div>

                <div className="mt-10 grid gap-3 text-sm font-bold text-navy sm:grid-cols-3">
                  <span>Corporate Team Building</span>
                  <span>Executive Networking</span>
                  <span>Corporate Cricket Experiences</span>
                </div>
              </div>

              <div className="rounded-[2rem] bg-slateCanvas p-4 shadow-premium">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/hero-corporate-cricket.jpg"
                    alt="Corporate professionals connecting through a premium cricket experience"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section className="bg-slateCanvas">
  <Container>
    <h2 className="max-w-4xl text-4xl font-black tracking-tight text-navy md:text-5xl">
      Workplace Connection Is No Longer Optional
    </h2>

    <p className="mt-6 max-w-3xl text-xl leading-8 text-bodyText">
      Organisations today face increasing pressure to build connected,
      collaborative and engaged teams.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        "Employee disengagement",
        "Hybrid work isolation",
        "Limited cross-team collaboration",
        "Culture and retention challenges",
      ].map((item) => (
        <div
          key={item}
          className="rounded-premium border-t-4 border-gold bg-white p-7 shadow-premium"
        >
          <p className="font-bold text-navy">{item}</p>
        </div>
      ))}
    </div>

    <p className="mt-10 max-w-3xl text-lg font-semibold text-navy">
      Organisations that invest in meaningful employee experiences create
      stronger relationships, healthier cultures and more connected teams.
    </p>
  </Container>
</Section>

        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-navy md:text-5xl">
                Why Cricket Works Where Traditional Team Building Falls Short
              </h2>

              <p className="mt-5 text-lg leading-8 text-bodyText">
                CCC turns cricket into a premium corporate tool for connection,
                culture, and commercial relationships.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-premium border border-slate-100 bg-white p-8 shadow-premium"
                >
                  <div className="mb-6 h-1 w-16 rounded-full bg-gold" />
                  <h3 className="text-2xl font-black text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-bodyText">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
<Section className="bg-slateCanvas">
  <Container>
    <div className="mb-16">
      <div className="mb-6 h-1 w-16 rounded-full bg-gold" />

      <h2 className="max-w-4xl text-4xl font-black tracking-tight text-navy md:text-5xl">
        Experiences Designed Around People, Culture And Connection
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-bodyText">
        Whether your objective is team building, client engagement or executive
        networking, every Corporate Cricket Collective experience is designed
        to create meaningful connections and measurable business value.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-3">
      <div className="rounded-premium border-t-4 border-gold bg-white p-8 shadow-premium">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-gold">
          Experience 01
        </p>

        <h3 className="text-2xl font-black text-navy">
          Corporate Team Building
        </h3>

        <p className="mt-4 text-base leading-7 text-bodyText">
          Interactive cricket-based experiences designed to strengthen
          communication, collaboration, trust and workplace culture.
        </p>

        <ul className="mt-6 space-y-3 text-base font-semibold text-navy">
          <li>✓ Team challenges</li>
          <li>✓ Leadership activities</li>
          <li>✓ Problem-solving exercises</li>
          <li>✓ Inclusive participation</li>
          <li>✓ No cricket experience required</li>
        </ul>
      </div>

      <div className="rounded-premium border-t-4 border-gold bg-white p-8 shadow-premium">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-gold">
          Experience 02
        </p>

        <h3 className="text-2xl font-black text-navy">
          Corporate Hospitality
        </h3>

        <p className="mt-4 text-base leading-7 text-bodyText">
          Premium relationship-building experiences where meaningful business
          conversations happen naturally around a shared cricket experience.
        </p>

        <ul className="mt-6 space-y-3 text-base font-semibold text-navy">
          <li>✓ Executive hospitality</li>
          <li>✓ Informal networking</li>
          <li>✓ Relationship building</li>
          <li>✓ Hosted experiences</li>
          <li>✓ Premium venue environment</li>
        </ul>
      </div>

      <div className="rounded-premium border-t-4 border-gold bg-white p-8 shadow-premium">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-gold">
          Experience 03
        </p>

        <h3 className="text-2xl font-black text-navy">
          Corporate Cricket Challenges
        </h3>

        <p className="mt-4 text-base leading-7 text-bodyText">
          Friendly inter-company competitions that combine teamwork,
          engagement and memorable shared experiences.
        </p>

        <ul className="mt-6 space-y-3 text-base font-semibold text-navy">
          <li>✓ Team tournaments</li>
          <li>✓ Cross-company interaction</li>
          <li>✓ Friendly competition</li>
          <li>✓ Team recognition</li>
          <li>✓ Shared celebrations</li>
        </ul>
      </div>
    </div>
  </Container>
</Section>
        <Section className="bg-navy text-white">
          <Container>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Why Leading Organisations Choose CCC
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                "Stronger Teams",
                "Better Workplace Culture",
                "Improved Collaboration",
                "Meaningful Business Relationships"
              ].map((item) => (
                <div key={item} className="rounded-premium bg-white/10 p-7">
                  <h3 className="text-xl font-black">{item}</h3>
                </div>
              ))}
            </div>
          </Container>
        </Section>
<Section className="bg-white">
  <Container>
    <div className="mb-14 text-center">
      <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-gold" />

      <h2 className="text-4xl font-black tracking-tight text-navy md:text-5xl">
        How It Works
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-bodyText">
        From first conversation to event day, we make the process simple,
        professional and tailored to your organisation.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        ["01", "Discovery Call", "We discuss your goals, group size, preferred format and desired outcomes."],
        ["02", "Proposal & Planning", "You receive a tailored proposal covering format, venue, catering and event details."],
        ["03", "Event Delivery", "CCC manages the experience from arrival through to the final activity."],
        ["04", "Lasting Impact", "Your team leaves with stronger relationships, better collaboration and shared memories."],
      ].map(([number, title, text]) => (
        <div
          key={number}
          className="flex min-h-[280px] flex-col justify-between rounded-premium border border-slate-100 bg-slateCanvas p-8 text-left shadow-premium"
        >
          <div>
            <div className="text-5xl font-black text-gold">{number}</div>

            <h3 className="mt-8 text-2xl font-black leading-tight text-navy">
              {title}
            </h3>
          </div>

          <p className="mt-6 text-base leading-7 text-bodyText">
            {text}
          </p>
        </div>
      ))}
    </div>
  </Container>
</Section>
<Section className="bg-slateCanvas">
  <Container>
    <div className="mb-16">
      <div className="mb-6 h-1 w-16 rounded-full bg-gold" />

      <h2 className="max-w-4xl text-4xl font-black tracking-tight text-navy md:text-5xl">
        Corporate Packages Built Around Your Team
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-bodyText">
        Choose the experience that best fits your organisation, group size and
        desired outcomes. Each package can be tailored around your goals,
        schedule and preferred level of hospitality.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-3">
      {[
        {
          label: "Package 01",
          title: "Team Building Experience",
          audience: "Best for internal teams",
          description:
            "A focused corporate cricket experience designed to strengthen communication, collaboration and team connection.",
          features: [
            "Ideal for departments and project teams",
            "Beginner-friendly cricket activities",
            "Collaboration-focused challenges",
            "Light hospitality options",
            "Half-day or extended format",
          ],
        },
        {
          label: "Package 02",
          title: "Corporate Hospitality Experience",
          audience: "Best for clients and leadership groups",
          description:
            "A premium hosted experience combining cricket, conversation and hospitality in a relaxed professional environment.",
          features: [
            "Ideal for client engagement",
            "Hosted networking environment",
            "Food and refreshment coordination",
            "Business-casual atmosphere",
            "Flexible event structure",
          ],
        },
        {
          label: "Package 03",
          title: "Corporate Cricket Challenge",
          audience: "Best for larger company groups",
          description:
            "A friendly competitive format where teams come together for connection, recognition and shared achievement.",
          features: [
            "Ideal for multi-team groups",
            "Tournament-style format",
            "Team recognition and awards",
            "Structured match coordination",
            "Corporate hospitality add-ons",
          ],
        },
      ].map((pkg) => (
        <div
          key={pkg.title}
          className="flex h-full flex-col rounded-premium border-t-4 border-gold bg-white p-8 shadow-premium"
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">
            {pkg.label}
          </p>

          <h3 className="mt-5 text-2xl font-black leading-tight text-navy">
            {pkg.title}
          </h3>

          <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-bodyText">
            {pkg.audience}
          </p>

          <p className="mt-5 text-base leading-7 text-bodyText">
            {pkg.description}
          </p>

          <ul className="mt-6 space-y-3 text-base font-semibold text-navy">
            {pkg.features.map((feature) => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <PrimaryCTA>Request Package Proposal</PrimaryCTA>
          </div>
        </div>
      ))}
    </div>
  </Container>
</Section>
<Section className="bg-navy">
  <Container>
    <div className="text-center">
      <h2 className="text-4xl font-black text-white md:text-5xl">
        Why Organisations Trust CCC
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
        Corporate Cricket Collective combines decades of cricket experience
        with professional event delivery to create engaging, inclusive and
        memorable workplace experiences.
      </p>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        "24 Years Of Cricket Experience",
        "ECB Level 2 Qualified Coach",
        "Designed For All Experience Levels",
        "Inclusive And Beginner Friendly",
        "Professional Event Planning",
        "Tailored Corporate Experiences",
      ].map((item) => (
        <div
          key={item}
          className="rounded-premium bg-white/10 p-8 text-center"
        >
          <p className="text-xl font-bold text-white">{item}</p>
        </div>
      ))}
    </div>
  </Container>
</Section>
<Section className="bg-white">
  <Container>
    <div className="mb-16">
      <div className="mb-6 h-1 w-16 rounded-full bg-gold" />

      <h2 className="max-w-4xl text-4xl font-black tracking-tight text-navy md:text-5xl">
        Frequently Asked Questions
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-bodyText">
        Everything your team needs to know before planning a Corporate Cricket Collective experience.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          question: "Do participants need cricket experience?",
          answer:
            "No. Every experience is designed to be beginner-friendly, inclusive and enjoyable for all ability levels.",
        },
        {
          question: "What group sizes do you cater for?",
          answer:
            "We can design experiences for small teams, medium-sized departments and larger corporate groups.",
        },
        {
          question: "Do you provide the equipment?",
          answer:
            "Yes. Equipment can be coordinated as part of the event proposal, depending on the format and venue.",
        },
        {
          question: "Can the event be tailored to our company?",
          answer:
            "Yes. Each experience can be adapted around your goals, group size, schedule and preferred level of hospitality.",
        },
        {
          question: "How long does an event usually last?",
          answer:
            "Most experiences can be designed as a half-day, extended half-day or full-day programme.",
        },
        {
          question: "Can catering and refreshments be included?",
          answer:
            "Yes. Catering, refreshments and hospitality options can be included in the tailored proposal.",
        },
      ].map((faq) => (
        <div
          key={faq.question}
          className="rounded-premium border border-slate-100 bg-slateCanvas p-8 shadow-premium"
        >
          <h3 className="text-xl font-black text-navy">{faq.question}</h3>
          <p className="mt-4 leading-7 text-bodyText">{faq.answer}</p>
        </div>
      ))}
    </div>
  </Container>
</Section>
<Section className="bg-navy">
  <Container>
    <div className="mx-auto max-w-4xl text-center">
      <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-gold" />

      <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
        Ready To Build Stronger Teams Through Shared Experiences?
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/80">
        Whether your goal is team building, employee engagement,
        leadership development or corporate hospitality, we will create
        a tailored experience designed around your people and objectives.
      </p>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <PrimaryCTA>
          Request A Proposal
        </PrimaryCTA>

        <SecondaryCTA href="/experiences">
          Explore Experiences
        </SecondaryCTA>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-premium bg-white/10 p-6">
          <p className="text-lg font-bold text-white">
            Team Building
          </p>
        </div>

        <div className="rounded-premium bg-white/10 p-6">
          <p className="text-lg font-bold text-white">
            Corporate Hospitality
          </p>
        </div>

        <div className="rounded-premium bg-white/10 p-6">
          <p className="text-lg font-bold text-white">
            Corporate Cricket Challenges
          </p>
        </div>
      </div>
    </div>
  </Container>
</Section>
      </main>

      <Footer />
    </>
  );
}