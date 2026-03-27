"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import heroImage from "@/assets/hero.png";
import { GlassCard } from "@/components/ui/GlassCard";
import { AbstractPrismScene } from "@/components/ui/AbstractPrismScene";

export function HeroSection({ stats }) {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.16), transparent 32%)`;
  const panelX = useTransform(glowX, [0, 100], prefersReducedMotion ? [0, 0] : [-10, 10]);
  const panelY = useTransform(glowY, [0, 100], prefersReducedMotion ? [0, 0] : [-8, 8]);
  const orbX = useTransform(glowX, [0, 100], prefersReducedMotion ? [0, 0] : [-18, 18]);
  const orbY = useTransform(glowY, [0, 100], prefersReducedMotion ? [0, 0] : [-16, 16]);

  function handleMove(event) {
    if (prefersReducedMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <section id="hero" className="section-shell relative pt-12 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[48rem] bg-[radial-gradient(circle_at_18%_14%,rgba(118,102,255,0.22),transparent_18%),radial-gradient(circle_at_74%_8%,rgba(88,48,255,0.22),transparent_22%),radial-gradient(circle_at_52%_42%,rgba(127,227,255,0.08),transparent_24%)]" />
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <span className="section-kicker" data-cursor="interactive">
            Premium identity systems, campaigns, and visual storytelling
          </span>
          <p className="section-eyebrow mt-10">
            Independent Designer / Available for select freelance projects
          </p>
          <h1 className="hero-title mt-6">
            Designing elevated brands that look cinematic, intentional, and built to last.
          </h1>
          <p className="body mt-8 max-w-[34rem] text-base md:text-[1.08rem]">
            I craft visual identities, campaign systems, packaging, and motion-ready brand
            assets for ambitious founders and brands who want more than generic design. Every
            deliverable is shaped for presence, clarity, and commercial impact.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a href="#work" className="premium-button" data-cursor="interactive">
              View Work
            </a>
            <a href="#contact" className="premium-button secondary" data-cursor="interactive">
              Let&apos;s Work Together
            </a>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <GlassCard key={stat.label} glow variant="soft" className="p-5 md:p-6">
                <p className="font-[family:var(--font-display-stack)] text-[2.15rem] font-bold tracking-[-0.06em] text-white md:text-[2.85rem]">
                  {stat.value}
                </p>
                <p className="mt-3 max-w-[14rem] text-sm leading-6 text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 34, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleMove}
          data-cursor="hero"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(127,227,255,0.18),transparent_70%)]"
            style={{ x: orbX, y: orbY }}
          />
          <motion.div style={{ x: panelX, y: panelY }}>
          <GlassCard
            glow
            variant="strong"
            className="relative overflow-hidden rounded-[2.6rem] p-5 md:p-7"
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: prefersReducedMotion ? undefined : spotlight }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)]" />
            <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.3em] text-white/46">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <span>Selected Frames / 2026</span>
            </div>

            <div className="relative mt-12 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,27,0.22),rgba(5,7,16,0.76))] shadow-[0_38px_90px_rgba(2,6,23,0.5)]">
              <AbstractPrismScene className="absolute inset-0" />
              <div className="absolute right-6 top-10 hidden h-[20rem] w-[12rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/16 shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:block">
                <Image
                  src={heroImage}
                  alt="A premium graphic design showcase preview"
                  priority
                  className="h-full w-full object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,4,10,0.94),transparent)]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,rgba(3,4,10,0.82),transparent)]" />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="section-eyebrow">Positioning</p>
                <h2 className="display-lg mt-3 max-w-[12ch] text-[2.6rem] md:text-[3.55rem]">
                  A future-facing identity world built like a luxury campaign.
                </h2>
              </div>
              <div className="surface-panel rounded-[1.55rem] p-4 text-sm leading-6 text-[var(--color-muted)]">
                Visual systems
                <br />
                Packaging
                <br />
                Campaign worlds
              </div>
            </div>
          </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
