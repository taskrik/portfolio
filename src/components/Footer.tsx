"use client";

import { personalInfo } from "@/data/portfolio";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-800 text-sm text-text-muted">
          A<span className="text-accent">K</span>
          <span className="font-body font-400 ml-3">
            &copy; {new Date().getFullYear()} &middot; Made with ❤️ by taskrik
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("social_click", {
                label: "GitHub",
                location: "footer",
              })
            }
            className="text-text-muted hover:text-accent transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("social_click", {
                label: "LinkedIn",
                location: "footer",
              })
            }
            className="text-text-muted hover:text-accent transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.medium}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("social_click", {
                label: "Medium",
                location: "footer",
              })
            }
            className="text-text-muted hover:text-accent transition-colors text-sm"
          >
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
