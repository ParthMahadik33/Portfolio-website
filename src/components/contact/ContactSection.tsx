"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import styles from "./Contact.module.scss";

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Verified contact destinations from project configuration
  // Using actual configured contact email from project repository
  const emailAddress = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "parthmahadik752@gmail.com";
  const githubUrl = "https://github.com/ParthMahadik33";
  const linkedinUrl = "https://www.linkedin.com/in/parth-mahadik-489348325/";
  const resumeUrl = "/assets/resume/Parth_Mahadik_Resume.pdf";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";

  useEffect(() => {
    if (
      !sectionRef.current ||
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trackEvent("contact_section_view", { section: "contact" });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleEmailClick = () => {
    trackEvent("contact_email_click", {
      contact_method: "email",
      email: emailAddress,
      link_location: "contact_section",
    });
  };

  const handleGithubClick = () => {
    trackEvent("github_repository_click", {
      repository_name: "Profile-ParthMahadik33",
      url: githubUrl,
      link_location: "contact_section",
    });
  };

  const handleLinkedinClick = () => {
    trackEvent("linkedin_click", {
      platform: "linkedin",
      profile_url: linkedinUrl,
      link_location: "contact_section",
    });
  };

  const handleInstagramClick = () => {
    if (!instagramUrl) return;
    trackEvent("instagram_click", {
      platform: "instagram",
      profile_url: instagramUrl,
      link_location: "contact_section",
    });
  };

  const handleResumeClick = () => {
    trackEvent("resume_download", {
      file_name: "Parth_Mahadik_Resume.pdf",
      file_type: "pdf",
      download_url: resumeUrl,
      link_text: "Download Resume",
    });
  };

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackEvent("section_navigation", {
      section_name: "home",
      navigation_source: "back_to_top",
    });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className={styles.contactSection}
      aria-label="Section 07: Let's Connect"
    >
      {/* Anchor for direct #contact navigation */}
      <span id="contact-anchor" className={styles.sectionAnchor} aria-hidden="true" />

      {/* Layered Sahyadri Fort Landscape Artwork (Right) */}
      <div className={styles.landscapeBackdrop} aria-hidden="true">
        {/* Soft atmospheric distant mountain ridge behind fort */}
        <div className={styles.distantRidgeLayer}>
          <Image
            src="/assets/contact/landscape/soft-distant-mountain-ridge.png"
            alt=""
            width={238}
            height={173}
            className={styles.distantRidgeImage}
          />
        </div>

        {/* Main fort, textured vermilion sun, stone stairways, and saffron flag */}
        <Image
          src="/assets/contact/landscape/sahyadri-fort-landscape.png"
          alt="Sahyadri historic hill fort bastion, stone stairways, saffron flag, textured vermilion sun, and mountain landscape"
          width={508}
          height={425}
          className={styles.landscapeImage}
          priority
        />

        {/* Distant soaring birds above fort */}
        <div className={styles.distantBirdsWrapper}>
          <Image
            src="/assets/contact/landscape/distant-birds.png"
            alt=""
            width={147}
            height={39}
            className={styles.birdsImage}
          />
        </div>
      </div>

      {/* Botanical Branch along Left Edge */}
      <div className={styles.leftBotanicalEdge} aria-hidden="true">
        <Image
          src="/assets/contact/botanical/botanical-left-branch.png"
          alt=""
          width={124}
          height={308}
          className={styles.botanicalImage}
        />
      </div>

      <div className={styles.contactContainer}>
        {/* 1. Header Bar: 07 / LET'S CONNECT  ————————  THE LAST PAGE */}
        <header className={styles.sectionHeaderRow}>
          <div className={styles.sectionTag}>
            <span className={styles.tagNum}>07</span>
            <span className={styles.tagSep}>/</span>
            <span className={styles.tagText}>LET&apos;S CONNECT</span>
          </div>

          <div className={styles.headerRuleWrapper}>
            <div className={styles.headerRule} />
          </div>

          <div className={styles.headerRightTag}>THE LAST PAGE</div>
        </header>

        {/* 2. Main Editorial Content Area */}
        <div className={styles.contentWrapper}>
          {/* Headline: Good things start with a conversation. (strictly 2 lines on desktop) */}
          <h2 className={styles.editorialHeadline}>
            <span className={styles.headlineCharcoal}>Good things start with</span>
            <span className={styles.headlineVermilionWrap}>
              <span className={styles.headlineVermilion}>a conversation.</span>
              {/* Authentic Hand-Painted Vermilion Brush Underline */}
              <Image
                src="/assets/contact/decorative/red-brush-underline.png"
                alt=""
                width={524}
                height={35}
                className={styles.brushUnderlineImage}
                aria-hidden="true"
              />
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className={styles.supportingCopy}>
            Have an interesting idea, a challenging problem, or an opportunity worth exploring? Let&apos;s talk.
          </p>

          {/* 3. Devanagari Accent & Direct Email Row */}
          <div className={styles.contactEmailRow}>
            <span className={styles.devanagariAccent} lang="sa">
              संपर्क
            </span>

            <span className={styles.emailDivider} aria-hidden="true">
              |
            </span>

            <a
              href={`mailto:${emailAddress}`}
              className={styles.emailDirectLink}
              onClick={handleEmailClick}
              aria-label={`Send email to Parth Mahadik at ${emailAddress}`}
            >
              {/* Envelope Line Icon */}
              <svg
                className={styles.emailIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B5282D"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className={styles.emailText}>{emailAddress}</span>
              <span className={styles.linkArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* 4. Action Paper Badges / Pills */}
          <div className={styles.badgesRow}>
            {/* GitHub Pill */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.paperBadge} ${styles.paperBadgeIvory}`}
              onClick={handleGithubClick}
              aria-label="Parth Mahadik on GitHub (opens in new tab)"
            >
              {/* Torn-paper PNG backing */}
              <Image
                src="/assets/contact/ui_backings/blank-github-paper-button-backing.png"
                alt=""
                fill
                sizes="(max-width: 768px) 160px, 180px"
                className={styles.badgeBackingImage}
                priority
              />
              <div className={styles.badgeContent}>
                <svg
                  className={styles.badgeIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className={styles.badgeLabel}>GitHub</span>
                <span className={styles.badgeArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>

            {/* LinkedIn Pill */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.paperBadge} ${styles.paperBadgeIvory}`}
              onClick={handleLinkedinClick}
              aria-label="Parth Mahadik on LinkedIn (opens in new tab)"
            >
              {/* Torn-paper PNG backing */}
              <Image
                src="/assets/contact/ui_backings/blank-linkedin-paper-button-backing.png"
                alt=""
                fill
                sizes="(max-width: 768px) 160px, 180px"
                className={styles.badgeBackingImage}
                priority
              />
              <div className={styles.badgeContent}>
                <svg
                  className={styles.badgeIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.37 9.74V10.13H5.09v8.37h2.74z" />
                </svg>
                <span className={styles.badgeLabel}>LinkedIn</span>
                <span className={styles.badgeArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>

            {/* Instagram Pill (conditionally rendered only if configured) */}
            {instagramUrl ? (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.paperBadge} ${styles.paperBadgeIvory}`}
                onClick={handleInstagramClick}
                aria-label="Parth Mahadik on Instagram (opens in new tab)"
              >
                <Image
                  src="/assets/contact/ui_backings/blank-instagram-paper-button-backing.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 160px, 180px"
                  className={styles.badgeBackingImage}
                />
                <div className={styles.badgeContent}>
                  <svg
                    className={styles.badgeIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className={styles.badgeLabel}>Instagram</span>
                  <span className={styles.badgeArrow} aria-hidden="true">
                    ↗
                  </span>
                </div>
              </a>
            ) : null}

            {/* Download Resume Pill (Authentic Torn Vermilion Paper Scrap) */}
            <a
              href={resumeUrl}
              download="Parth_Mahadik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.paperBadge} ${styles.paperBadgeVermilion}`}
              onClick={handleResumeClick}
              aria-label="Download Parth Mahadik's Resume in PDF format"
            >
              {/* Vermilion torn-paper PNG backing */}
              <Image
                src="/assets/contact/ui_backings/blank-vermilion-resume-button-backing.png"
                alt=""
                fill
                sizes="(max-width: 768px) 220px, 260px"
                className={styles.badgeBackingImage}
                priority
              />
              <div className={styles.badgeContent}>
                {/* Document Icon */}
                <svg
                  className={styles.badgeIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className={styles.badgeLabel}>Download Resume</span>
                <span className={styles.badgeArrow} aria-hidden="true">
                  ↓
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* 5. Compact Editorial Footer */}
        <div className={styles.footerWrapper}>
          {/* Top hairline rule with Sahyadri mountain ridgeline line art resting on it */}
          <div className={styles.footerRuleContainer}>
            <div className={styles.footerRule} />
            <div className={styles.mountainSketchContainer} aria-hidden="true">
              <Image
                src="/assets/contact/landscape/footer-mountain-line-art.png"
                alt=""
                width={294}
                height={97}
                className={styles.mountainSketchImage}
              />
            </div>
          </div>

          <div className={styles.compactFooterBar}>
            <div className={styles.footerBrand}>PARTH MAHADIK</div>

            <div className={styles.footerCenter}>
              <div className={styles.footerCopyright}>
                &copy; {new Date().getFullYear()} Parth Mahadik. <em>Built with curiosity.</em>
              </div>
            </div>

            <div className={styles.footerRight}>
              <span className={styles.footerDivider} aria-hidden="true">
                |
              </span>
              <a
                href="#home"
                className={styles.backToTopLink}
                onClick={handleBackToTop}
                aria-label="Back to top of the page"
              >
                <span>Back to Top</span>
                <span aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
