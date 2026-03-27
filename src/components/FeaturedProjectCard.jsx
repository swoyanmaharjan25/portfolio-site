"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export function FeaturedProjectCard({ project, index }) {
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 150, damping: 18, mass: 0.9 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 18, mass: 0.9 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.14), transparent 32%)`;
  const isPrimary = index === 0;

  function handlePointerMove(event) {
    if (prefersReducedMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateHorizontal = ((x / bounds.width) - 0.5) * 8;
    const rotateVertical = (0.5 - y / bounds.height) * 8;

    rotateX.set(rotateVertical);
    rotateY.set(rotateHorizontal);
    glowX.set((x / bounds.width) * 100);
    glowY.set((y / bounds.height) * 100);
  }

  function resetCard() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
      style={
        prefersReducedMotion
          ? undefined
          : {
              transformStyle: "preserve-3d",
              rotateX,
              rotateY,
            }
      }
      className={isPrimary ? "h-full xl:col-span-7 xl:row-span-2" : "h-full xl:col-span-5"}
      data-cursor="project"
    >
      <GlassCard
        glow
        variant="strong"
        className={[
          "group h-full p-4 transition-[transform,box-shadow,border-color] duration-500 ease-[var(--ease-premium)] hover:shadow-[var(--shadow-card-hover)] md:p-5",
          isPrimary ? "xl:min-h-[46rem]" : "",
        ].join(" ")}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: prefersReducedMotion ? undefined : spotlight }}
        />
        <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 shadow-[0_20px_70px_rgba(2,6,23,0.28)]">
          <Image
            src={project.image}
            alt={project.title}
            className={[
              "w-full object-cover transition duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.045]",
              isPrimary ? "h-[27rem] md:h-[34rem]" : "h-[24rem] md:h-[27rem]",
            ].join(" ")}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,4,12,0.97),rgba(3,4,12,0.26),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.15),transparent_24%,transparent_60%,rgba(255,255,255,0.07))] opacity-90" />
          <div className="pointer-events-none absolute inset-y-0 left-[-25%] w-[45%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-0 transition-all duration-700 ease-[var(--ease-premium)] group-hover:left-[120%] group-hover:opacity-100" />
          <div className="absolute inset-x-5 bottom-5 md:inset-x-6 md:bottom-6">
            <p className="section-eyebrow text-white/55">{project.category}</p>
            <h3
              className={[
                "mt-3 max-w-[11ch] font-[family:var(--font-display-stack)] font-bold leading-[0.92] tracking-[-0.065em] text-white",
                isPrimary ? "text-[2.6rem] md:text-[4rem]" : "text-[2rem] md:text-[2.5rem]",
              ].join(" ")}
            >
              {project.title}
            </h3>
          </div>
        </div>

        <div className="relative mt-6 flex h-full flex-col">
          <div className="flex flex-wrap gap-2.5">
            {project.tags.slice(0, isPrimary ? 2 : 1).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/58"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-[36rem] text-sm leading-8 text-[var(--color-muted)] md:text-base">
            {project.description}
          </p>

          {isPrimary ? (
            <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-black/10 p-4 text-sm leading-7 text-[var(--color-muted)]">
              Flagship presentation with stronger image dominance, cleaner hierarchy, and a more
              editorial case-study setup.
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href={project.live} target="_blank" className="premium-button" data-cursor="interactive">
              View Case Study
            </Link>
            <Link href={project.github} target="_blank" className="premium-link" data-cursor="interactive">
              View Source <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}
