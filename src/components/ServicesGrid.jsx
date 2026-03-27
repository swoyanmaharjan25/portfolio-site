import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ServicesGrid({ services }) {
  return (
    <SectionWrapper
      id="services"
      eyebrow="Services"
      title="Creative services packaged like a high-touch studio offering."
      description="The service architecture is cleaner, easier to scan, and designed to communicate depth rather than a generic list of skills."
      align="start"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard
              glow
              variant={index === 1 ? "strong" : "soft"}
              className="group h-full p-6 transition-transform duration-500 ease-[var(--ease-premium)] hover:-translate-y-1 md:p-7"
              data-cursor="project"
            >
              <p className="small-meta text-[var(--color-accent-soft)]">
                {service.index}
              </p>
              <h3 className="heading mt-6 text-white">
                {service.title}
              </h3>
              <p className="body mt-5 text-sm md:text-base">
                {service.text}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
