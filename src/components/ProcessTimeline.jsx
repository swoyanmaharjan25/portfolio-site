import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ProcessTimeline({ steps }) {
  return (
    <SectionWrapper
      id="process"
      eyebrow="Process"
      title="A premium workflow that keeps strategy, craft, and delivery aligned."
      description="This section gives prospects a clear sense of how projects move from discovery to launch, reducing friction before they reach out."
    >
      <div className="relative grid gap-5 lg:grid-cols-5">
        <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] lg:block" />
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard variant="soft" className="relative h-full p-6">
              <div className="absolute -top-2 left-6 h-4 w-4 rounded-full border border-white/12 bg-[linear-gradient(135deg,rgba(73,215,255,0.85),rgba(142,125,255,0.85))] shadow-[0_0_26px_rgba(73,215,255,0.24)]" />
              <p className="small-meta text-[var(--color-accent-soft)]">
                0{index + 1}
              </p>
              <h3 className="heading mt-5 text-[1.35rem] text-white">{step.title}</h3>
              <p className="body mt-4 text-sm">{step.text}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
