"use client";

import React, { useEffect } from "react";
import { AboutSection } from "@/components/about/AboutSection";
import { SelectedWorkSection } from "@/components/work/SelectedWorkSection";
import { RecognitionSection } from "@/components/recognition/RecognitionSection";
import { CommunitySection } from "@/components/community/CommunitySection";
import { ToolkitSection } from "@/components/toolkit/ToolkitSection";

export const BelowTheFoldContent: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      if (id && id !== "home") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  return (
    <>
      <AboutSection />
      <SelectedWorkSection />
      <RecognitionSection />
      <CommunitySection />
      <ToolkitSection />
    </>
  );
};

export default BelowTheFoldContent;

