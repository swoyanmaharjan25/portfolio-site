import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ToolsSection({ tools }) {
  return (
    <SectionWrapper
      id="tools"
      eyebrow="Tools & Capabilities"
      title="A clearer snapshot of the platforms, craft areas, and execution range behind the work."
      description="Grouping capabilities this way helps clients quickly understand your toolkit without reading a long paragraph."
    >
      <GlassCard variant="soft" className="p-6 md:p-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              className="surface-panel rounded-[1.3rem] px-4 py-4 text-sm tracking-[0.12em] text-white/72 transition-transform duration-500 ease-[var(--ease-premium)] hover:-translate-y-1"
              data-cursor="interactive"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
