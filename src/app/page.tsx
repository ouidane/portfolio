import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Bio from "@/components/bio";
import ElevatorPitch from "@/components/elevator-pitch";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Bio />
      <SectionDivider />
      <ElevatorPitch />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Skills />
    </main>
  );
}
