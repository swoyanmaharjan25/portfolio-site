import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  className = "",
  align = "between",
  children,
}) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={reveal}
    >
      {(eyebrow || title || description) && (
        <div
          className={[
            "mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end",
            align === "start" ? "md:justify-start md:gap-12" : "md:justify-between",
          ].join(" ")}
        >
          <div className="max-w-3xl">
            {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="section-title mt-4">{title}</h2> : null}
          </div>
          {description ? (
            <p className="body max-w-xl text-sm md:text-[1.02rem]">
              {description}
            </p>
          ) : null}
        </div>
      )}
      {children}
    </motion.section>
  );
}
