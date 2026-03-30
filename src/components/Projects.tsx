"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-bg-surface/40"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading label="Projects" index="04" inView={inView} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 bg-bg-elevated border border-border rounded-lg hover:border-accent/30 transition-all duration-500 flex flex-col"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded border border-border flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <svg
                  className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>

              <h3 className="font-display font-700 text-lg text-text-primary group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-2 flex-1">
                {project.description}
              </p>

              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="text-text-muted text-xs font-body group-hover:text-accent/60 transition-colors">
                  {project.url.replace("https://", "").replace(/\/$/, "")}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
