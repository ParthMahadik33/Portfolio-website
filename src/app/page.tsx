import { Hero } from "@/components/hero/Hero";
import { BelowTheFoldSections } from "@/components/common/BelowTheFoldSections";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.parthmahadik.in/#person",
      name: "Parth Mahadik",
      url: "https://www.parthmahadik.in",
      image: "https://www.parthmahadik.in/og-image.png",
      jobTitle: "Software Developer & Computer Engineering Student",
      description:
        "Computer Engineering student and software developer building full-stack web applications, AI-powered tools, and real-world software systems.",
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
      ],
      sameAs: [
        "https://github.com/ParthMahadik33",
        "https://www.credly.com/users/parth-mahadik.7429132e/badges",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.parthmahadik.in/#website",
      url: "https://www.parthmahadik.in",
      name: "Parth Mahadik | Software Developer & Computer Engineering Student",
      description:
        "Portfolio of Parth Mahadik, a Computer Engineering student and software developer building full-stack web applications, AI-powered tools, and real-world software systems.",
      publisher: {
        "@id": "https://www.parthmahadik.in/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.parthmahadik.in/#webpage",
      url: "https://www.parthmahadik.in",
      name: "Parth Mahadik | Software Developer & Computer Engineering Student",
      isPartOf: {
        "@id": "https://www.parthmahadik.in/#website",
      },
      about: {
        "@id": "https://www.parthmahadik.in/#person",
      },
      mainEntity: {
        "@id": "https://www.parthmahadik.in/#person",
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
      <BelowTheFoldSections />
    </main>
  );
}
