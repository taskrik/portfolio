# krikonis.dev

Personal portfolio site built with Next.js, Tailwind CSS, and Motion.

**[Live Site](https://krikonis.dev)**

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org/) (App Router)
- **Styling** — [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations** — [Motion](https://motion.dev/)
- **Fonts** — [Syne](https://fonts.google.com/specimen/Syne) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)
- **Runtime** — [Bun](https://bun.sh/)
- **Deployment** — [Vercel](https://vercel.com/)

## Getting Started

```bash
# Install dependencies
bun install

# Run dev server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page — assembles all sections
│   ├── globals.css         # Theme tokens, custom utilities
│   ├── icon.tsx            # Generated favicon
│   ├── opengraph-image.tsx # Generated OG image
│   └── twitter-image.tsx   # Generated Twitter card
├── components/
│   ├── Navigation.tsx      # Sticky nav with scroll-aware links
│   ├── Hero.tsx            # Intro, profile photo, stats
│   ├── About.tsx           # Extended bio and core impact
│   ├── Experience.tsx      # Timeline of roles
│   ├── Skills.tsx          # Skill badges by category
│   ├── Projects.tsx        # Side project cards
│   ├── Contact.tsx         # Contact form / links
│   └── Footer.tsx          # Footer
└── data/
    └── portfolio.ts        # All content lives here
```

## License

MIT
