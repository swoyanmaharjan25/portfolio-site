"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper
      id="faq"
      eyebrow="Working Together"
      title="An FAQ section that answers practical questions before prospects ask."
      description="This improves clarity around timelines, revisions, communication, and pricing expectations while keeping the experience premium."
    >
      <div className="grid gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <GlassCard key={faq.question} variant={isOpen ? "strong" : "soft"} className="p-1">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                data-cursor="interactive"
                className="flex w-full items-center justify-between gap-4 rounded-[1.4rem] px-5 py-5 text-left md:px-6"
                aria-expanded={isOpen}
              >
                <span className="subheading text-white">{faq.question}</span>
                <span className="text-2xl leading-none text-white/50">{isOpen ? "-" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="body px-5 pb-5 text-sm md:px-6 md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </GlassCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
