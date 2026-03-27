import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AbstractPrismScene } from "@/components/ui/AbstractPrismScene";

export function FeaturedWorkSection({ projects }) {
  return (
    <SectionWrapper
      id="work"
      eyebrow="Featured Work"
      title="Premium brand worlds and campaign systems with stronger storytelling."
      description="Large-format project cards now lead with image, category, and strategic context so visitors understand both the aesthetic quality and the business value behind the work."
      align="start"
    >
      <div className="relative mb-8">
        <div className="pointer-events-none absolute -left-6 top-[-2rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(142,125,255,0.18),transparent_72%)] blur-[90px]" />
        <div className="flex items-center justify-between gap-6">
          <p className="max-w-xl text-sm leading-8 text-[var(--color-muted)]">
            A curated selection of identity-led work, presented with more editorial pacing and a
            stronger hierarchy between flagship and supporting projects.
          </p>
          <a href="#contact" className="premium-link hidden lg:inline-flex" data-cursor="interactive">
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="grid gap-7 xl:auto-rows-[minmax(18rem,1fr)] xl:grid-cols-12">
        {projects.map((project, index) => (
          <FeaturedProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(9,11,25,0.9),rgba(7,8,18,0.72))] p-6">
          <AbstractPrismScene compact className="absolute inset-0" />
          <div className="relative z-10 max-w-xl">
            <p className="section-eyebrow">Showcase Direction</p>
            <h3 className="display-lg mt-4 max-w-[12ch] text-[2.4rem] md:text-[3.4rem]">
              Visual-first, asymmetric, and built like a campaign reveal.
            </h3>
            <p className="body mt-5 max-w-lg text-sm md:text-base">
              The work section now behaves more like a studio presentation with a dominant feature,
              supporting entries, and stronger light-to-dark contrast between projects.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="surface-panel rounded-[1.6rem] p-5">
            <p className="section-eyebrow">Editorial Rhythm</p>
            <p className="body mt-3 text-sm">
              Oversized imagery, fewer interface chips, and less repetitive CTA treatment.
            </p>
          </div>
          <div className="surface-panel rounded-[1.6rem] p-5">
            <p className="section-eyebrow">Creative Focus</p>
            <p className="body mt-3 text-sm">
              More atmospheric presentation, stronger cover hierarchy, and a premium spotlight hover system.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
