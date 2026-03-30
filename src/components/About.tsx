"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { personalInfo, languages } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading label="About" index="01" inView={inView} />

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-text-secondary text-base leading-relaxed mt-4">
              {personalInfo.extendedSummary}
            </p>

            {/* Core Impact */}
            <div className="mt-8 space-y-4">
              <h3 className="text-text-muted text-xs uppercase tracking-widest font-body">
                Core Impact
              </h3>
              {personalInfo.coreImpact.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="currentColor"
                    >
                      <rect width="6" height="6" rx="1" />
                    </svg>
                  </span>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    <span className="text-accent font-600">{item.label}:</span>{" "}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-accent font-display font-600 text-xl mt-8 italic">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info */}
            <div>
              <div className="text-text-muted text-xs uppercase tracking-widest mb-1 font-body">
                Location
              </div>
              <div className="text-text-primary font-500">
                {personalInfo.location}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="text-text-muted text-xs uppercase tracking-widest mb-3 font-body">
                Languages
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="px-4 py-2 border border-border rounded bg-bg-surface"
                  >
                    <span className="text-text-primary font-500 text-sm">
                      {lang.name}
                    </span>
                    <span className="text-text-muted text-xs ml-2">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education highlights */}
            <div>
              <div className="text-text-muted text-xs uppercase tracking-widest mb-3 font-body">
                Education
              </div>
              <div className="space-y-2">
                <div className="text-text-primary font-500 text-sm">
                  Full Stack Development Certificate{" "}
                  <span className="text-text-muted">
                    &mdash; Cadaisseur Academy
                  </span>
                </div>
                <div className="text-text-primary font-500 text-sm">
                  Civil Engineering{" "}
                  <span className="text-text-muted">
                    &mdash; University of Patras
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
