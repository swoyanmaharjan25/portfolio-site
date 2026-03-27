"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);
  const auraX = useSpring(cursorX, { stiffness: 120, damping: 22, mass: 1 });
  const auraY = useSpring(cursorY, { stiffness: 120, damping: 22, mass: 1 });
  const ringX = useSpring(cursorX, { stiffness: 260, damping: 26, mass: 0.7 });
  const ringY = useSpring(cursorY, { stiffness: 260, damping: 26, mass: 0.7 });
  const dotX = useSpring(cursorX, { stiffness: 560, damping: 34, mass: 0.28 });
  const dotY = useSpring(cursorY, { stiffness: 560, damping: 34, mass: 0.28 });
  const hoveredRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState("default");

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const media = window.matchMedia("(pointer: fine)");
    const handleMediaChange = () => {
      setEnabled(media.matches);
      document.body.classList.toggle("cursor-active", media.matches);
    };
    handleMediaChange();

    function handlePointerMove(event) {
      const target =
        event.target instanceof Element
          ? event.target.closest("[data-cursor], a, button, input, textarea, [role='button']")
          : null;

      hoveredRef.current = target;
      setMode(target?.getAttribute("data-cursor") || (target ? "interactive" : "default"));

      let x = event.clientX;
      let y = event.clientY;

      if (hoveredRef.current) {
        const rect = hoveredRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x += (centerX - x) * 0.12;
        y += (centerY - y) * 0.12;
      }

      cursorX.set(x);
      cursorY.set(y);
    }

    function handlePointerLeave() {
      hoveredRef.current = null;
      setMode("default");
    }

    media.addEventListener("change", handleMediaChange);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      document.body.classList.remove("cursor-active");
      media.removeEventListener("change", handleMediaChange);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (!enabled || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className={`custom-cursor-aura is-${mode}`}
        style={{ x: auraX, y: auraY }}
      />
      <motion.div
        aria-hidden="true"
        className={`custom-cursor-ring is-${mode}`}
        style={{ x: ringX, y: ringY }}
      />
      <motion.div
        aria-hidden="true"
        className={`custom-cursor-dot is-${mode}`}
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}
