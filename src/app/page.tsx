import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";

const AboutSection = dynamic(() =>
  import("@/components/about/AboutSection").then((mod) => mod.AboutSection)
);
const SelectedWorkSection = dynamic(() =>
  import("@/components/work/SelectedWorkSection").then(
    (mod) => mod.SelectedWorkSection
  )
);
const RecognitionSection = dynamic(() =>
  import("@/components/recognition/RecognitionSection").then(
    (mod) => mod.RecognitionSection
  )
);
const CommunitySection = dynamic(() =>
  import("@/components/community/CommunitySection").then(
    (mod) => mod.CommunitySection
  )
);
const ToolkitSection = dynamic(() =>
  import("@/components/toolkit/ToolkitSection").then(
    (mod) => mod.ToolkitSection
  )
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://parthmahadik.in/#person",
      name: "Parth Mahadik",
      url: "https://parthmahadik.in",
      image: "https://parthmahadik.in/og-image.png",
      jobTitle: "Software Developer, AI & Cloud Enthusiast",
      description:
        "I'm Parth Mahadik, a Computer Engineering student and software developer building web applications, backend systems and AI-integrated solutions. Explore my projects, achievements and technical journey.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Trinity College of Engineering and Research (TCOER)",
      },
      memberOf: [
        {
          "@type": "Organization",
          name: "Google Developer Group on Campus — TCOER",
        },
        {
          "@type": "Organization",
          name: "CORE, TCOER (Computer Organisation of Radical Engineers)",
        },
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Flask",
        "REST APIs",
        "AI Applications",
        "Google Gemini API",
        "Cloud Computing",
      ],
      sameAs: [
        "https://github.com/ParthMahadik33",
        "https://www.linkedin.com/in/parth-mahadik-489348325/",
        "https://www.credly.com/users/parth-mahadik.7429132e/badges",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://parthmahadik.in/#website",
      url: "https://parthmahadik.in",
      name: "Parth Mahadik | Software Developer, AI & Cloud Enthusiast",
      description:
        "I'm Parth Mahadik, a Computer Engineering student and software developer building web applications, backend systems and AI-integrated solutions. Explore my projects, achievements and technical journey.",
      publisher: {
        "@id": "https://parthmahadik.in/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://parthmahadik.in/#webpage",
      url: "https://parthmahadik.in",
      name: "Parth Mahadik | Software Developer, AI & Cloud Enthusiast",
      isPartOf: {
        "@id": "https://parthmahadik.in/#website",
      },
      about: {
        "@id": "https://parthmahadik.in/#person",
      },
      mainEntity: {
        "@id": "https://parthmahadik.in/#person",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <SelectedWorkSection />
      <RecognitionSection />
      <CommunitySection />
      <ToolkitSection />
    </main>
  );
}
