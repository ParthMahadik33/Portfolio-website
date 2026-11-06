"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const BelowTheFoldContent = dynamic(() => import("./BelowTheFoldContent"), {
  ssr: false,
});

const srOnlyStyle: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export const BelowTheFoldSections: React.FC = () => {
  const [activated, setActivated] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activated || typeof window === "undefined") return;

    const trigger = () => {
      setActivated(true);
    };

    if (
      window.scrollY > 10 ||
      (window.location.hash && window.location.hash !== "#home")
    ) {
      const id = window.requestAnimationFrame(trigger);
      return () => window.cancelAnimationFrame(id);
    }

    const events: (keyof WindowEventMap)[] = [
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
      "pointerdown",
      "pointermove",
      "keydown",
      "hashchange",
    ];

    events.forEach((evt) =>
      window.addEventListener(evt, trigger, { passive: true, once: true })
    );

    let observer: IntersectionObserver | null = null;
    if (sentinelRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            trigger();
          }
        },
        { rootMargin: "120px 0px" }
      );
      observer.observe(sentinelRef.current);
    }

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, trigger));
      if (observer) observer.disconnect();
    };
  }, [activated]);

  if (activated) {
    return <BelowTheFoldContent />;
  }

  return (
    <div ref={sentinelRef}>
      {/* Semantic SSR & Accessibility structure for Section 01: About */}
      <section
        id="about"
        aria-label="About the Builder"
        style={{ minHeight: "900px", position: "relative" }}
      >
        <span id="journey" aria-hidden="true" />
        <div style={srOnlyStyle}>
          <h2>01 / ABOUT THE BUILDER — Built with curiosity, discipline, and purpose.</h2>
          <p>
            I am Parth Mahadik, a Computer Engineering student at Trinity
            College of Engineering and Research (TCOER), Pune, focused on
            building practical software that solves real problems. From
            AI-powered web platforms and simulation systems to developer tooling
            and community initiatives, I enjoy taking ideas from concept to
            working product.
          </p>
        </div>
      </section>

      {/* Semantic SSR & Accessibility structure for Section 02: Selected Work */}
      <section
        id="work"
        aria-label="Selected Engineering Work"
        style={{ minHeight: "1400px", position: "relative" }}
      >
        <div style={srOnlyStyle}>
          <h2>02 / SELECTED WORK — Systems built for real-world impact.</h2>
          <article>
            <h3>AgroRent — AI-Assisted Farm Machinery Rental Marketplace</h3>
            <p>
              An AI-assisted farm machinery rental marketplace designed to
              connect farmers with equipment owners through a more accessible,
              transparent rental experience with Python, Flask, Gemini API,
              Twilio, and Razorpay.
            </p>
            <a href="https://agrorent-v3.onrender.com/">Explore AgroRent Live Project</a>
            <a href="https://github.com/ParthMahadik33/AgroRent-v3">AgroRent Source Code on GitHub</a>
          </article>
          <article>
            <h3>AquaTrace — Maritime Intelligence and Oil-Spill Investigation Platform</h3>
            <p>
              A maritime intelligence and oil-spill investigation platform
              combining satellite-data workflows, vessel-track correlation,
              geospatial analysis, and spill-dispersion simulations built with
              Next.js, TypeScript, Python, Flask, and Leaflet.
            </p>
            <a href="https://aqua-trace-olive.vercel.app/">Explore AquaTrace Live Project</a>
            <a href="https://github.com/ParthMahadik33/AquaTrace">AquaTrace Source Code on GitHub</a>
          </article>
          <article>
            <h3>ARRA — Autonomous Rail Response Agent</h3>
            <p>
              An autonomous railway safety and response simulation system
              designed to detect track hazards, evaluate risk, and coordinate
              multi-agent emergency dispatch in real time.
            </p>
            <a href="https://arra-autonomous-rail-response-agent.onrender.com/">Explore ARRA Live Simulation</a>
            <a href="https://github.com/ParthMahadik33/ARRA---Autonomous-Rail-Response-Agent">ARRA Source Code on GitHub</a>
          </article>
        </div>
      </section>

      {/* Semantic SSR & Accessibility structure for Section 03: Recognition & Experience */}
      <section
        id="experience"
        aria-label="Recognition and Experience"
        style={{ minHeight: "1100px", position: "relative" }}
      >
        <span id="recognition" aria-hidden="true" />
        <div style={srOnlyStyle}>
          <h2>03 / RECOGNITION &amp; EXPERIENCE — The work took more than one try.</h2>
          <h3>Winner — Hack-Tech Innovation Hackathon 2025 (Team Synapse Trinity)</h3>
          <p>Recognized at Science and Technology Park (India) for our solution and innovation.</p>
          <h3>Third Prize — EFOS SkillUp India Hackathon 2026 (Team Elite Trio)</h3>
          <h3>Winner — Devine Tech Solutions Hackathon</h3>
          <h3>Foundations in AI Internship — NoviTech R&amp;D Pvt. Ltd.</h3>
        </div>
      </section>

      {/* Semantic SSR & Accessibility structure for Section 04: Community & Leadership */}
      <section
        id="community"
        aria-label="Community & Leadership"
        style={{ minHeight: "1200px", position: "relative" }}
      >
        <span id="leadership" aria-hidden="true" />
        <div style={srOnlyStyle}>
          <h2>04 / COMMUNITY &amp; LEADERSHIP — Growing by building with others.</h2>
          <p>
            Web Specialist at Google Developer Group on Campus — TCOER, and
            Technical Member at CORE, TCOER (Computer Organisation of Radical
            Engineers).
          </p>
        </div>
      </section>

      {/* Semantic SSR & Accessibility structure for Section 05: Technical Toolkit */}
      <section
        id="toolkit"
        aria-label="Section 05: Technical Toolkit"
        style={{ minHeight: "1000px", position: "relative" }}
      >
        <span id="skills" aria-hidden="true" />
        <div style={srOnlyStyle}>
          <h2>05 / TECHNICAL TOOLKIT — Tools I use. Systems I build.</h2>
          <p>
            Languages, Frameworks, Backend &amp; Databases, AI &amp; Cloud
            Integrations, and Developer Tooling: Python, TypeScript, JavaScript,
            C++, SQL, React, Next.js, Flask, Node.js, PostgreSQL, MongoDB,
            Google Cloud, Gemini API, Docker, Git, and Linux.
          </p>
          <a href="https://www.credly.com/users/parth-mahadik.7429132e/badges">
            Verified Google Cloud Skill Badges on Credly
          </a>
        </div>
      </section>

      {/* Semantic SSR & Accessibility structure for Section 06: Contact and Colophon */}
      <footer
        id="contact"
        aria-label="Section 06: Contact and Colophon"
        style={{ minHeight: "550px", position: "relative" }}
      >
        <div style={srOnlyStyle}>
          <h2>06 / CONTACT &amp; COLOPHON — Curious by default. Builder by choice.</h2>
          <p>
            Get in touch with Parth Mahadik for software engineering roles, full-stack web
            applications, AI integrations, and technical collaborations.
          </p>
          <a href="mailto:parthmahadik752@gmail.com">
            Email: parthmahadik752@gmail.com
          </a>
          <a href="https://github.com/ParthMahadik33">
            GitHub / ParthMahadik33
          </a>
          <a href="https://www.linkedin.com/in/parthmahadik/">
            LinkedIn / in/parthmahadik
          </a>
          <a href="https://scorebadge.com/site/parthmahadik.in">
            scorebadge · Public Site Audit
          </a>
        </div>
      </footer>
    </div>
  );
};