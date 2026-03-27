"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AbstractPrismScene({ className = "", compact = false }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`scene-shell ${compact ? "is-compact" : ""} ${className}`}>
      <motion.div
        aria-hidden="true"
        className="halo-orb halo-orb-primary"
        animate={prefersReducedMotion ? undefined : { y: [-10, 10, -10], scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="halo-orb halo-orb-secondary"
        animate={prefersReducedMotion ? undefined : { y: [12, -10, 12], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="violet-beam"
        animate={prefersReducedMotion ? undefined : { rotate: [18, 22, 18], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="aurora-ribbon aurora-ribbon-one"
        animate={prefersReducedMotion ? undefined : { rotate: [0, 4, 0], y: [-4, 6, -4] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="aurora-ribbon aurora-ribbon-two"
        animate={prefersReducedMotion ? undefined : { rotate: [0, -5, 0], x: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="prism-core">
        <div className="prism-highlight" />
        <div className="prism-shadow" />
      </div>
      <div className="scene-grid" />
    </div>
  );
}
