import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import hero from "./assets/hero.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const projects = [
  {
    title: "Luminous Commerce",
    description:
      "A concept storefront with bold editorial composition, tactile gradients, and conversion-focused interactions.",
    meta: "Web experience",
    image: project1,
    live: "https://www.pinterest.com/SwoyanmaharjanOfficial/",
    github: "https://github.com/swoyanmaharjan25/portfolio-site",
  },
  {
    title: "Aether Brand System",
    description:
      "A premium identity exploration balancing restrained typography with expressive product storytelling.",
    meta: "Brand direction",
    image: project2,
    live: "https://www.pinterest.com/SwoyanmaharjanOfficial/",
    github: "https://github.com/swoyanmaharjan25/portfolio-site",
  },
  {
    title: "Glassframe Portfolio",
    description:
      "A cinematic personal site built to feel immersive, polished, and unmistakably high-end on every screen.",
    meta: "Frontend build",
    image: project3,
    live: "https://www.pinterest.com/SwoyanmaharjanOfficial/",
    github: "https://github.com/swoyanmaharjan25/portfolio-site",
  },
];

const services = [
  "Creative direction",
  "Frontend development",
  "Brand identity",
  "Interactive UI systems",
  "Responsive execution",
  "Portfolio design",
];

const stats = [
  { value: "03", label: "Featured projects" },
  { value: "07", label: "Design layers in motion" },
  { value: "24/7", label: "Attention to detail" },
];

const principles = [
  {
    title: "Atmosphere first",
    text: "The visual system uses layered blur, reflective borders, and controlled color bloom to create a premium glass depth.",
  },
  {
    title: "Editorial rhythm",
    text: "Large headlines, asymmetry, and spacious pacing give the site a more curated, award-style presentation.",
  },
  {
    title: "Built to feel alive",
    text: "Motion is restrained but expressive, guiding attention without making the interface feel noisy or gimmicky.",
  },
];

function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 280, damping: 28, mass: 0.6 });
  const ringY = useSpring(cursorY, { stiffness: 280, damping: 28, mass: 0.6 });
  const dotX = useSpring(cursorX, { stiffness: 600, damping: 38, mass: 0.25 });
  const dotY = useSpring(cursorY, { stiffness: 600, damping: 38, mass: 0.25 });

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const media = window.matchMedia("(pointer: fine)");
    const updateMode = () => setEnabled(media.matches);
    updateMode();

    const handleMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleOver = (event) => {
      const target = event.target;
      const interactive = target instanceof Element && target.closest("a, button");
      setActive(Boolean(interactive));
    };

    media.addEventListener("change", updateMode);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);

    return () => {
      media.removeEventListener("change", updateMode);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (!enabled || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        className={`cursor-ring${active ? " is-active" : ""}`}
        style={{ x: ringX, y: ringY }}
      />
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} />
    </>
  );
}

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroFloatY = useTransform(
    scrollYProgress,
    [0, 0.35],
    prefersReducedMotion ? [0, 0] : [0, -80]
  );
  const heroCopyY = useTransform(
    scrollYProgress,
    [0, 0.35],
    prefersReducedMotion ? [0, 0] : [0, -40]
  );
  const ambientShift = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -160]
  );
  const ambientShiftReverse = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 104]
  );
  const ambientShiftSoft = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -72]
  );
  const workY = useTransform(
    scrollYProgress,
    [0.08, 0.55],
    prefersReducedMotion ? [0, 0] : [50, -30]
  );
  const approachY = useTransform(
    scrollYProgress,
    [0.25, 0.85],
    prefersReducedMotion ? [0, 0] : [70, -45]
  );
  const contactY = useTransform(
    scrollYProgress,
    [0.55, 1],
    prefersReducedMotion ? [0, 0] : [50, -15]
  );
  const heroImageY = useTransform(
    scrollYProgress,
    [0, 0.4],
    prefersReducedMotion ? [0, 0] : [0, -45]
  );
  const heroImageScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    prefersReducedMotion ? [1, 1] : [1.06, 1]
  );
  const projectImageY = useTransform(
    scrollYProgress,
    [0.08, 0.85],
    prefersReducedMotion ? [0, 0] : [30, -40]
  );

  return (
    <main className="site-shell">
      <CustomCursor />

      <motion.div className="ambient ambient-one" style={{ y: ambientShift }} />
      <motion.div className="ambient ambient-two" style={{ y: ambientShiftReverse }} />
      <motion.div className="ambient ambient-three" style={{ y: ambientShiftSoft }} />
      <div className="grid-overlay" />

      <header className="topbar glass-panel">
        <div className="brand-lockup">
          <span className="brand-mark" />
          <div>
            <p className="eyebrow">Swoyan Maharjan</p>
            <p className="brand-subtitle">Designer + Developer</p>
          </div>
        </div>

        <nav className="topnav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={stagger}
          style={{ y: heroCopyY }}
        >
          <motion.div variants={reveal} custom={0} className="hero-chip">
            <span className="status-dot" />
            High quality glassmorphism portfolio concept
          </motion.div>

          <motion.p variants={reveal} custom={0.08} className="eyebrow">
            Crafted for Swoyan Maharjan
          </motion.p>

          <motion.h1 variants={reveal} custom={0.16} className="hero-title">
            Hi, I&apos;m Swoyan Maharjan. I build clean, modern digital
            experiences.
          </motion.h1>

          <motion.p
            variants={reveal}
            custom={0.24}
            className="hero-description"
          >
            I design immersive websites that feel cinematic, modern, and
            premium, blending strong storytelling with polished frontend
            execution.
          </motion.p>

          <motion.div variants={reveal} custom={0.32} className="hero-actions">
            <a href="#work" className="button button-primary">
              Explore Work
            </a>
            <a href="#contact" className="button button-secondary">
              Start a Project
            </a>
          </motion.div>

          <motion.div variants={reveal} custom={0.4} className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card glass-panel">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: heroFloatY }}
        >
          <div className="visual-frame glass-panel">
            <div className="visual-orb visual-orb-one" />
            <div className="visual-orb visual-orb-two" />

            <div className="visual-header">
              <div className="traffic-lights">
                <span />
                <span />
                <span />
              </div>
              <p>Creative showcase / 2026</p>
            </div>

            <div className="visual-image-wrap">
              <motion.img
                src={hero}
                alt="Portfolio hero preview"
                className="visual-image"
                style={{ y: heroImageY, scale: heroImageScale }}
              />
              <div className="visual-sheen" />
            </div>

            <div className="visual-footer">
              <div>
                <p className="eyebrow">Selected focus</p>
                <h2>Glass-infused storytelling with tactile depth</h2>
              </div>
              <div className="mini-glass-card">
                <span>UI</span>
                <span>Motion</span>
                <span>Brand</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        id="work"
        className="content-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        style={{ y: workY }}
      >
        <motion.div variants={reveal} custom={0} className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Designed to feel collectible, not disposable.</h2>
        </motion.div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={reveal}
              custom={index * 0.1}
              className="project-card glass-panel"
              whileHover={prefersReducedMotion ? undefined : { y: -8 }}
            >
              <div className="project-image-wrap">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  style={{ y: projectImageY }}
                />
              </div>

              <div className="project-content">
                <p className="project-meta">{project.meta}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-actions">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    View Design
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="approach"
        className="content-section split-section"
        style={{ y: approachY }}
      >
        <motion.div
          className="approach-copy glass-panel"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Approach</p>
          <h2>The goal is not just glassmorphism. It is atmosphere.</h2>
          <p className="section-text">
            Great glassmorphism works when the page has depth, restraint, and a
            strong composition underneath the blur. This redesign focuses on all
            three, so the style feels intentional instead of trendy.
          </p>

          <div className="service-pills">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="principles-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              variants={reveal}
              custom={index * 0.08}
              className="principle-card glass-panel"
            >
              <p className="principle-index">0{index + 1}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="content-section"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: contactY }}
      >
        <div className="contact-panel glass-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something that feels unforgettable.</h2>
            <p className="section-text">
              Reach out for freelance work, collaborations, or a custom
              portfolio direction that feels more premium than the default
              template look.
            </p>
          </div>

          <div className="contact-actions">
            <a
              href="mailto:maharjanswoyan25@gmail.com"
              className="button button-primary"
            >
              Email Me
            </a>
            <a
              href="https://np.linkedin.com/in/swoyan-maharjan-b466a42b4"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/swoyanmaharjan25"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
