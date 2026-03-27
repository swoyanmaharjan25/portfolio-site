import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function TestimonialsSection({ testimonials, logos }) {
  return (
    <SectionWrapper
      id="testimonials"
      eyebrow="Trust & Testimonials"
      title="Social proof now feels curated, elevated, and ready for real client signals."
      description="Use this area for testimonials, notable collaborators, or logo trust marks. The placeholders are intentionally polished so the section still feels premium before final content arrives."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard glow variant={index === 0 ? "strong" : "soft"} className="p-6 md:p-8">
                <p className="font-[family:var(--font-display-stack)] text-[1.4rem] leading-[1.55] tracking-[-0.03em] text-white/90 md:text-[1.7rem]">
                  &quot;{item.quote}&quot;
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-base font-medium text-white">{item.name}</p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{item.role}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/55">
                    {item.highlight}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <GlassCard variant="soft" className="p-6 md:p-8">
          <p className="section-eyebrow">Selected Collaborators</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {logos.map((logo) => (
              <div
                key={logo}
                className="surface-panel flex min-h-24 items-center justify-center rounded-[1.4rem] px-4 text-center text-sm uppercase tracking-[0.22em] text-white/45"
                data-cursor="interactive"
              >
                {logo}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/6 p-5 text-sm leading-8 text-[var(--color-muted)]">
            Replace these placeholders with real client logos, featured publications, or industry badges once available. The layout is already tuned to support them cleanly on desktop and mobile.
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
