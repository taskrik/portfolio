"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function ExperienceCard({
  job,
  index,
  inView,
}: {
  job: (typeof experience)[0];
  index: number;
  inView: boolean;
}) {
  const isBusiness = job.type === "business";

  return (
    <div className="relative pl-8 md:pl-12 overflow-visible">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-2 w-3 h-3 rounded-full border-2 bg-bg z-10 ${
          isBusiness ? "border-text-muted" : "border-accent"
        }`}
      />

      {/* Timeline line */}
      {index < experience.length - 1 && (
        <div className="absolute left-[5px] top-5 bottom-0 w-px timeline-line opacity-30" />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
        className="pb-16 overflow-visible"
      >
        {/* Chapter label for business role */}
        {isBusiness && (
          <div className="mb-3">
            <span className="text-xs uppercase tracking-widest text-text-muted font-body border border-border px-3 py-1 rounded-full">
              Prior Career
            </span>
          </div>
        )}

        {/* Period and location */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            className={`text-sm font-body font-500 ${
              isBusiness ? "text-text-muted" : "text-accent"
            }`}
          >
            {job.period}
          </span>
          <span className="text-text-muted text-sm">&bull;</span>
          <span className="text-text-muted text-sm">{job.location}</span>
        </div>

        {/* Role and company */}
        <div className="overflow-visible">
          <span
            className={`syne-fix font-display font-700 text-xl md:text-2xl ${
              isBusiness ? "text-text-secondary" : "text-text-primary"
            }`}
          >
            {job.role}
          </span>
        </div>
        <div className="overflow-visible">
          <span
            className={`font-body font-500 text-base ${
              isBusiness ? "text-text-muted" : "text-accent/80"
            }`}
          >
            {job.company}
          </span>
        </div>

        {/* Bullets */}
        <ul className="mt-5 space-y-3">
          {job.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.15 + i * 0.08,
              }}
              className="flex gap-3 text-text-secondary text-sm leading-relaxed"
            >
              <span
                className={`mt-1.5 shrink-0 ${
                  isBusiness ? "text-text-muted" : "text-accent"
                }`}
              >
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="currentColor"
                >
                  <rect width="6" height="6" rx="1" />
                </svg>
              </span>
              {bullet}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-bg-surface/40 overflow-visible"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-visible">
        <SectionHeading label="Experience" index="02" inView={inView} />

        <div className="mt-16 max-w-3xl overflow-visible">
          {experience.map((job, i) => (
            <ExperienceCard
              key={job.company}
              job={job}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
