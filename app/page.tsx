import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { BentoGrid } from "@/components/bento-grid";
import { ProjectsSection } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { CommandPalette } from "@/components/command-palette";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SiteHeader />
      <CommandPalette />
      <HeroSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <BentoGrid />
      <SiteFooter />
    </main>
  );
}
