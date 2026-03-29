"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading label="Skills" index="03" inView={inView} />

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {categories.map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.15 }}
            >
              <h3 className="font-display font-700 text-lg text-text-primary mb-5 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + catIndex * 0.1 + i * 0.05,
                    }}
                    className="skill-badge px-4 py-2 text-sm font-body text-text-secondary bg-bg-elevated border border-border rounded cursor-default hover:border-accent/40 hover:text-accent transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
