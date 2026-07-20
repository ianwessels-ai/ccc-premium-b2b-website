
import Hero from "../components/Hero";
import ExperienceCards from "../components/ExperienceCards";
import ComparisonTable from "../components/ComparisonTable";
import WhyCCC from "../components/WhyCCC";
import HowItWorks from "../components/HowItWorks";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main className="bg-white text-slate-950">
      <Hero />
      <ExperienceCards />
      <ComparisonTable />
      <WhyCCC />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
}
