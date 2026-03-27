"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AbstractPrismScene } from "@/components/ui/AbstractPrismScene";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const initialState = {
  name: "",
  email: "",
  project: "",
};

export function ContactSection() {
  const [form, setForm] = useState(initialState);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Project inquiry from ${form.name || "Portfolio visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nProject Details:\n${form.project}`
    );

    window.location.href = `mailto:maharjanswoyan25@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="A stronger closing section built to convert serious design inquiries."
      description="The final CTA now combines persuasive copy, direct contact options, and a functional inquiry form that opens the visitor's email client."
      className="pb-24"
      align="start"
    >
      <div className="relative grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="pointer-events-none absolute -left-8 top-8 hidden h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(73,215,255,0.12),transparent_70%)] blur-[90px] lg:block" />
        <GlassCard glow variant="strong" className="p-6 md:p-8" data-cursor="project">
          <AbstractPrismScene compact className="absolute inset-0 opacity-80" />
          <div className="relative z-10">
          <p className="display-lg max-w-[11ch] text-[2.9rem] text-white md:text-[5rem]">
            Let&apos;s shape a brand presence that feels unmistakably premium.
          </p>
          <p className="body mt-6 max-w-xl text-sm md:text-base">
            If you&apos;re building a new identity, refreshing a visual system, or preparing a
            campaign launch, I&apos;d love to hear what you&apos;re working on.
          </p>

          <div className="mt-8 grid gap-4">
            <a href="mailto:maharjanswoyan25@gmail.com" className="premium-button justify-center" data-cursor="interactive">
              maharjanswoyan25@gmail.com
            </a>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://np.linkedin.com/in/swoyan-maharjan-b466a42b4"
                target="_blank"
                rel="noreferrer"
                className="premium-button secondary flex-1 justify-center"
                data-cursor="interactive"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/swoyanmaharjan25"
                target="_blank"
                rel="noreferrer"
                className="premium-button secondary flex-1 justify-center"
                data-cursor="interactive"
              >
                GitHub
              </a>
            </div>
          </div>
          </div>
        </GlassCard>

        <GlassCard variant="soft" className="p-6 md:p-8" data-cursor="project">
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <label className="grid gap-2">
              <span className="text-sm text-white/78">Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="rounded-[1.2rem] border border-white/10 bg-black/12 px-4 py-3 text-white outline-none transition focus:border-white/24 focus:bg-black/16"
                data-cursor="interactive"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/78">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="rounded-[1.2rem] border border-white/10 bg-black/12 px-4 py-3 text-white outline-none transition focus:border-white/24 focus:bg-black/16"
                data-cursor="interactive"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/78">Project brief</span>
              <textarea
                name="project"
                value={form.project}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about the brand, scope, timeline, and deliverables."
                className="rounded-[1.2rem] border border-white/10 bg-black/12 px-4 py-3 text-white outline-none transition focus:border-white/24 focus:bg-black/16"
                data-cursor="interactive"
                required
              />
            </label>

            <button type="submit" className="premium-button justify-center" data-cursor="interactive">
              Send Inquiry
            </button>
          </form>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
