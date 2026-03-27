import { GlassCard } from "@/components/ui/GlassCard";
import { AbstractPrismScene } from "@/components/ui/AbstractPrismScene";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="A sharper personal positioning section with studio-level confidence."
      description="This gives visitors a quick understanding of who you are, how you think, and the kind of design leadership they can expect when hiring you."
    >
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <GlassCard glow variant="strong" className="relative min-h-[28rem] overflow-hidden p-6 md:p-8">
          <AbstractPrismScene compact className="absolute inset-0 opacity-90" />
          <div className="relative flex h-full flex-col justify-between rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
            <div>
              <p className="section-eyebrow">Portrait Placeholder</p>
              <div className="mt-6 flex h-56 items-center justify-center rounded-[1.6rem] border border-dashed border-white/18 bg-black/12 text-sm uppercase tracking-[0.24em] text-white/35">
                Add your image here
              </div>
            </div>
            <div className="surface-panel rounded-[1.4rem] p-4 text-sm leading-7 text-[var(--color-muted)]">
              Freelance availability: open for identity systems, campaigns, packaging, and collaborative retainer work.
            </div>
          </div>
        </GlassCard>

        <GlassCard variant="soft" className="p-6 md:p-8">
          <p className="subheading max-w-[50rem] text-white/88">
            I&apos;m Swoyan Maharjan, a graphic designer focused on building visually rich
            brand systems that feel both contemporary and enduring. My work blends editorial
            restraint, expressive composition, and digital readiness so each project performs
            beautifully across print, web, and motion.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="surface-panel rounded-[1.4rem] p-5">
              <p className="section-eyebrow">Design Philosophy</p>
              <p className="body mt-3 text-sm">
                Strong design should create emotional atmosphere first, then support clarity,
                memorability, and conversion.
              </p>
            </div>
            <div className="surface-panel rounded-[1.4rem] p-5">
              <p className="section-eyebrow">Best Fit Clients</p>
              <p className="body mt-3 text-sm">
                Founders, fashion labels, beauty brands, hospitality concepts, and premium product
                businesses seeking elevated identity work.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/6 p-6">
            <p className="section-eyebrow">Working Style</p>
            <p className="body mt-4 max-w-3xl text-sm md:text-base">
              Strategy-led, detail-obsessed, and collaborative. I like to bring structure to
              early-stage ideas, shape them into a refined visual language, and package the final
              system so teams can use it with confidence.
            </p>
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
