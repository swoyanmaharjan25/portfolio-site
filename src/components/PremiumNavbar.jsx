"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useEffectEvent, useState } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function PremiumNavbar() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const updateActive = useEffectEvent((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible[0]?.target?.id) {
      setActiveSection(visible[0].target.id);
    }
  });

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(updateActive, {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.2, 0.4, 0.7],
    });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-[linear-gradient(90deg,rgba(34,211,238,0.75),rgba(217,70,239,0.75),rgba(139,92,246,0.75))]"
        style={{
          scaleX: prefersReducedMotion ? 1 : progress,
        }}
      />
      <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
        <motion.div
          className={[
            "relative mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-hidden rounded-full border px-4 py-3 md:px-6",
            "bg-[rgba(12,14,22,0.55)] backdrop-blur-[24px]",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(255,255,255,0.04),0_8px_30px_rgba(0,0,0,0.6)]",
            scrolled
              ? "border-white/8 bg-[rgba(12,14,22,0.62)] backdrop-blur-[28px]"
              : "border-white/8",
          ].join(" ")}
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-1/2 h-20 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(118,102,255,0.12),rgba(127,227,255,0.06)_38%,transparent_76%)] blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)]"
          />

          <Link
            href="#hero"
            className="relative z-10 flex items-center gap-2"
            data-cursor="interactive"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_14px_rgba(34,211,238,0.05)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_rgba(34,211,238,0.28)]" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[var(--color-muted)]">
                Swoyan Maharjan
              </p>
              <p className="text-sm font-medium tracking-[-0.02em] text-white/92">Graphic Designer</p>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="relative z-10 hidden items-center gap-3.5 rounded-full border border-white/8 bg-white/[0.035] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:flex"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  data-cursor="interactive"
                  className={[
                    "relative rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.04em] transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "text-white"
                      : "text-white/68 hover:bg-white/[0.05] hover:text-white/90",
                  ].join(" ")}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-0 rounded-full border border-white/8 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <Link
            href="#contact"
            className="relative z-10 hidden min-h-[3rem] items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(18,22,34,0.96),rgba(10,12,20,0.96))] px-5 text-[13px] font-semibold tracking-[0.02em] text-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(255,255,255,0.03),0_6px_22px_rgba(0,0,0,0.34),0_0_18px_rgba(118,102,255,0.1)] transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:border-white/16 hover:bg-[linear-gradient(180deg,rgba(24,29,44,0.98),rgba(12,15,24,0.98))] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.04),0_10px_26px_rgba(0,0,0,0.38),0_0_24px_rgba(118,102,255,0.14)] md:inline-flex"
            data-cursor="interactive"
          >
            Let&apos;s Work Together
          </Link>
        </motion.div>
      </header>
    </>
  );
}
