import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { SelectedWorkSection } from "@/components/work/SelectedWorkSection";
import { RecognitionSection } from "@/components/recognition/RecognitionSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SelectedWorkSection />
      <RecognitionSection />
    </main>
  );
}
