import hero from "./assets/hero.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
export default function App() {
  const projects = [
  {
    title: "Coffee Shop Website",
    description: "Designed and built a modern responsive website for a coffee brand.",
    tags: ["React", "Responsive", "UI Design"],
    image: project1,
    live: "#",
    github: "https://github.com/swoyanmaharjan25/portfolio-site",
  },
  {
    title: "Brand Identity Design",
    description: "Created logo, color system, and visual branding for a client project.",
    tags: ["Branding", "Logo", "Design"],
    image: project2,
    live: "#",
    github: "https://github.com/swoyanmaharjan25/portfolio-site",
  },
  {
    title: "Portfolio Website",
    description: "Built a clean personal portfolio to showcase projects and skills.",
    tags: ["React", "Tailwind", "Frontend"],
    image: project3,
    live: "#",
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
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
              Portfolio Website
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
              Hi, I’m <span className="text-neutral-300">Swo Yan</span> — I build clean,
              modern digital experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              I help brands, founders, and teams turn ideas into polished websites,
              thoughtful products, and memorable experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition hover:border-neutral-500"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/80 p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">About</p>
                <p className="mt-3 text-base leading-7 text-neutral-300">
                  I’m a designer/developer focused on building beautiful, user-friendly,
                  and high-performing experiences for the web.
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Services</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Projects that show what I do best
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-6 shadow-xl transition hover:-translate-y-1"
            ><div className="overflow-hidden rounded-[1.5rem]">
  <img
  src={project.image}
  alt={project.title}
  className="aspect-[4/3] w-full object-cover rounded-[1.5rem] transition hover:scale-110"
/>
</div>
              <h3 className="mt-6 text-xl font-semibold">{project.title}</h3>

<p className="mt-3 text-sm leading-7 text-neutral-300">
  {project.description}
</p>

{/* 🔥 ADD BUTTONS HERE */}
<div className="mt-4 flex gap-3">
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="text-sm px-4 py-2 rounded-lg bg-white text-black hover:opacity-80"
  >
    Live
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="text-sm px-4 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-800"
  >
    GitHub
  </a>
</div>

{/* existing tags */}
<div className="mt-5 flex flex-wrap gap-2">
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-16">
        <div className="grid gap-6 rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Why Me</p>
            <h2 className="mt-3 text-3xl font-semibold">Simple, strong, and made to impress</h2>
          </div>
          <div className="space-y-4 text-neutral-300">
            <p>Designed to feel premium while staying easy to navigate.</p>
            <p>Flexible sections for projects, testimonials, services, and contact info.</p>
            <p>Easy to customize with your photo, links, resume, and social profiles.</p>
          </div>
        </div>
      </section>

<section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
  <div className="rounded-[2rem] bg-white p-10 text-black shadow-2xl">
    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Contact</p>

    <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
      Let’s build something great together
    </h2>

    <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700">
      Feel free to reach out via email, LinkedIn, or GitHub for collaborations,
      freelance work, or opportunities.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="mailto:maharjanswoyan25@gmail.com"
        className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white"
      >
        maharjanswoyan25@gmail.com
      </a>

      <a
        href="https://np.linkedin.com/in/swoyan-maharjan-b466a42b4"
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium text-black"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/swoyanmaharjan25"
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium text-black"
      >
        GitHub
      </a>
    </div>
  </div>
</section>
    </main>
  );
}