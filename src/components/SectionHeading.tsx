"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  label: string;
  index: string;
  inView: boolean;
}

export default function SectionHeading({
  label,
  index,
  inView,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-accent font-body font-500 text-sm"
      >
        /{index}
      </motion.span>
      <div className="overflow-hidden pb-3">
        <motion.h2
          initial={{ y: 60 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-800 text-3xl md:text-5xl tracking-tight uppercase"
          style={{ lineHeight: 1.3 }}
        >
          {label}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 h-px bg-border origin-left"
      />
    </div>
  );
}
