import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { SelectedWorkSection } from "@/components/work/SelectedWorkSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SelectedWorkSection />
    </main>
  );
}
