import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CaseStudiesSection({ studies }) {
  return (
    <SectionWrapper
      id="case-studies"
      eyebrow="Case Study Structure"
      title="A future-ready project detail system for deeper client trust."
      description="Each panel is structured to support full case-study storytelling even when final copy is still being prepared."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {studies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard glow variant="soft" className="h-full p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-eyebrow">{study.category}</p>
                  <h3 className="heading mt-4 text-[2rem] text-white md:text-[2.5rem]">
                    {study.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/6 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-white/60">
                  {study.year}
                </span>
              </div>

              <div className="mt-8 grid gap-4 text-sm leading-7 text-[var(--color-muted)] md:grid-cols-2">
                {study.panels.map((panel) => (
                  <div key={panel.label} className="surface-panel rounded-[1.4rem] p-4">
                    <p className="section-eyebrow">{panel.label}</p>
                    <p className="mt-3">{panel.text}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
