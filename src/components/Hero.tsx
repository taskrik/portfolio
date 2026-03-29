"use client";

import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-32 md:py-0">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-5">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-12 bg-accent" />
              <span className="text-accent text-sm font-body font-500 tracking-widest uppercase">
                {personalInfo.title}
              </span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
                className="font-display font-800 text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none"
              >
                {personalInfo.firstName}
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                className="font-display font-800 text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-accent glow-text"
              >
                {personalInfo.lastName}
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-xl text-text-muted text-sm md:text-base leading-relaxed mt-2"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-lg text-text-secondary text-base md:text-lg leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-body font-600 text-sm rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                View Experience
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text-primary font-body font-500 text-sm rounded hover:border-accent/50 hover:text-accent transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex gap-12 mt-8 pt-8 border-t border-border/50"
            >
              {[
                { value: "7+", label: "Years Engineering" },
                { value: "13+", label: "Years Professional" },
                { value: "5", label: "Companies" },
                { value: "5", label: "Side Projects" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-800 text-3xl md:text-4xl text-accent">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs md:text-sm mt-1 font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden md:block"
          >
            <div className="relative w-[320px] lg:w-[380px]">
              {/* Accent border glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent rounded-2xl blur-sm" />
              <div className="relative overflow-hidden rounded-2xl border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpeg"
                  alt="Anastasios Krikonis"
                  className="object-cover w-full h-auto block"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs tracking-widest uppercase font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-text-muted/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
