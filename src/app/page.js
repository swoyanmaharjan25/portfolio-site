"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AboutSection } from "@/components/AboutSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { FAQSection } from "@/components/FAQSection";
import { FeaturedWorkSection } from "@/components/FeaturedWorkSection";
import { HeroSection } from "@/components/HeroSection";
import { PremiumNavbar } from "@/components/PremiumNavbar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ToolsSection } from "@/components/ToolsSection";
import { GlowBackground } from "@/components/ui/GlowBackground";
import {
  caseStudies,
  faqs,
  featuredProjects,
  processSteps,
  services,
  stats,
  testimonials,
  tools,
  trustLogos,
} from "@/data/siteContent";

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroShift = useTransform(
    scrollYProgress,
    [0, 0.25],
    prefersReducedMotion ? [0, 0] : [0, -80]
  );
  const contentShift = useTransform(
    scrollYProgress,
    [0.1, 1],
    prefersReducedMotion ? [0, 0] : [20, -24]
  );

  return (
    <main className="relative isolate overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
      <CustomCursor />
      <GlowBackground className="left-[-20rem] top-[-16rem] h-[48rem] w-[48rem] bg-[radial-gradient(circle,_rgba(118,102,255,0.2),_transparent_68%)]" />
      <GlowBackground className="right-[-18rem] top-[10rem] h-[46rem] w-[46rem] bg-[radial-gradient(circle,_rgba(88,48,255,0.18),_transparent_70%)]" />
      <GlowBackground className="bottom-[12%] left-[8%] h-[36rem] w-[36rem] bg-[radial-gradient(circle,_rgba(127,227,255,0.08),_transparent_68%)]" />
      <GlowBackground className="right-[0%] top-[48%] h-[30rem] w-[30rem] bg-[radial-gradient(circle,_rgba(212,108,255,0.12),_transparent_70%)]" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(to_bottom,rgba(4,5,13,0.28),rgba(4,5,13,0.82))]" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_50%_30%,rgba(118,102,255,0.08),transparent_32%)]" />
      <div className="noise-overlay pointer-events-none fixed inset-0 -z-10 opacity-30" />
      <div className="grid-overlay pointer-events-none fixed inset-0 -z-10" />

      <PremiumNavbar />

      <motion.div style={{ y: heroShift }}>
        <HeroSection stats={stats} />
      </motion.div>

      <motion.div className="relative z-10" style={{ y: contentShift }}>
        <FeaturedWorkSection projects={featuredProjects} />
        <CaseStudiesSection studies={caseStudies} />
        <ServicesGrid services={services} />
        <ProcessTimeline steps={processSteps} />
        <TestimonialsSection testimonials={testimonials} logos={trustLogos} />
        <AboutSection />
        <ToolsSection tools={tools} />
        <FAQSection faqs={faqs} />
        <ContactSection />
      </motion.div>
    </main>
  );
}
