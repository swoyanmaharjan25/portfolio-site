import { motion } from "framer-motion";
import hero from "./assets/hero.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function App() {
  const projects = [
    {
      title: "Coffee Shop Website",
      description:
        "Designed and built a modern responsive website for a coffee brand.",
      tags: ["React", "Responsive", "UI Design"],
      image: project1,
      live: "https://www.pinterest.com/SwoyanmaharjanOfficial/",
      github: "https://github.com/swoyanmaharjan25/portfolio-site",
    },
    {
      title: "Brand Identity Design",
      description:
        "Created logo, color system, and visual branding for a client project.",
      tags: ["Branding", "Logo", "Design"],
      image: project2,
      live: "https://www.pinterest.com/SwoyanmaharjanOfficial/",
      github: "https://github.com/swoyanmaharjan25/portfolio-site",
    },
    {
      title: "Portfolio Website",
      description:
        "Built a clean personal portfolio to showcase projects and skills.",
      tags: ["React", "Tailwind", "Frontend"],
      image: project3,
      live: "https://www.pinterest.com/SwoyanmaharjanOfficial/",
      github: "https://github.com/swoyanmaharjan25/portfolio-site",
    },
  ];

  const skills = [
    "Web Design",
    "Frontend Development",
    "Brand Identity",
    "Responsive Design",
    "Creative Strategy",
    "UI/UX",
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute left-[-80px] top-[25%] h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-80px] h-[340px] w-[340px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-neutral-300 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Available for work
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={0.08}
              className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500"
            >
              Portfolio Website
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.16}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl"
            >
              Hi, I’m <span className="text-white">Swo Yan</span>
              <span className="text-neutral-500"> — </span>
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                I build clean,
                <br />
                modern digital experiences.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.24}
              className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl"
            >
              I help brands, founders, and teams turn ideas into polished
              websites, thoughtful products, and memorable experiences that feel
              premium and perform beautifully.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.32}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_15px_40px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
              >
                View Projects
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-fuchsia-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
                <img
                  src={hero}
                  alt="Hero preview"
                  className="h-56 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                    About
                  </p>
                  <p className="mt-3 text-base leading-7 text-neutral-300">
                    I’m a designer/developer focused on building beautiful,
                    user-friendly, and high-performing experiences for the web.
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                    Services
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 transition duration-300 hover:border-white/20 hover:bg-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <p className="text-2xl font-semibold">3+</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                      Projects
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <p className="text-2xl font-semibold">100%</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                      Responsive
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <p className="text-2xl font-semibold">Creative</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                      Focus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Selected Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Projects that show what I do best
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              custom={index * 0.08}
              className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-sm leading-7 text-neutral-300">
                {project.description}
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  View Design
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-neutral-300 transition duration-300 hover:border-white/20 hover:bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                Why Me
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Simple, strong, and made to impress
              </h2>
            </div>

            <div className="space-y-4 text-neutral-300">
              <p>Designed to feel premium while staying easy to navigate.</p>
              <p>
                Flexible sections for projects, testimonials, services, and
                contact info.
              </p>
              <p>
                Easy to customize with your photo, links, resume, and social
                profiles.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-10 text-black shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_35%)]" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Let’s build something great together
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700">
              Feel free to reach out via email, LinkedIn, or GitHub for
              collaborations, freelance work, or opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:maharjanswoyan25@gmail.com"
                className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Email Me
              </a>

              <a
                href="https://np.linkedin.com/in/swoyan-maharjan-b466a42b4"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-100"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/swoyanmaharjan25"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}