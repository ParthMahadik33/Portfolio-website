# Parth Mahadik — Personal Portfolio

[![Production Site](https://img.shields.io/badge/Live-parthmahadik.in-171512?style=for-the-badge&logo=vercel&logoColor=F4EBDD)](https://parthmahadik.in)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%20SEO%20%7C%20100%20A11y-brightgreen?style=for-the-badge)](https://parthmahadik.in)

A bespoke, single-page developer portfolio for **Parth Mahadik**, Software Developer and Computer Engineering student at the University of Mumbai. The site pairs high-contrast editorial typography and parchment textures with understated Maharashtrian heritage artwork, custom cursor trails, interactive polaroid collages, and fluid animations.

> **"Curious by default. Builder by choice."**

---

## 🧭 Portfolio Structure

The portfolio follows an intentional single-page architecture where all primary content resides on the root homepage (`/`), connected via seamless anchor navigation:

1. **`#home` (Hero):** Multilingual welcoming sequence (*Hello, Bonjour, Namaste, Nǐ Hǎo, Kon'nichiwa, Ciao, निर्माण*), Sahyadri mountain fort engraving, distressed vermilion sun, and hero portrait.
2. **`#about` (About & Collages):** Authentic handwritten scraps, botanical foliage, and an interactive fanning polaroid stack from Sahyadri fort trails.
3. **`#work` (Selected Work):** In-depth engineering case studies for **AgroRent** (agricultural machinery sharing platform), **AquaTrace** (IoT smart water management), and **ARRA** (enterprise railway operations platform).
4. **`#experience` (Recognition & Experience):** First place hackathon awards, EFOS recognition, Devine Hackathon, Novitech certification, and academic milestones.
5. **`#community` (Community & Leadership):** Leadership roles as Google Developer Groups (GDG) on Campus Lead, CORE Committee Head, and Google Gemini Student Ambassador, featuring real presentation video and team photographs.
6. **`#skills` (Technical Toolkit):** Categorized technical skill matrix spanning Languages, Frontend, Backend & APIs, Cloud & DevOps, Database & Storage, and AI/ML.
7. **`#contact` (Contact & Colophon):** Direct contact channel (`parthmahadik752@gmail.com`), social connections (GitHub, LinkedIn, Credly), and editorial colophon.

---

## 🛠️ Technology Stack

- **Core Framework:** [Next.js 16.4.3](https://nextjs.org/) (App Router, Turbopack, React Server Components)
- **Library:** [React 19.3.0](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** Modular SCSS (`*.module.scss`) with CSS custom properties & design tokens
- **Motion & Physics:** [Framer Motion 14](https://www.framer.com/motion/) with complete `prefers-reduced-motion` accessibility support
- **Analytics:** Privacy-friendly Google Analytics 4 (GA4) with single-page custom interaction dispatching
- **Deployment:** [Vercel](https://vercel.com/) with Edge caching and permanent 308 non-www canonical redirects

---

## 📂 Project Structure

```
parth-portfolio-v2/
├── docs/                      # Architecture, manifest, and deployment documentation
│   ├── asset-manifest.md      # Public assets directory and format catalog
│   ├── deployment.md          # Vercel setup and custom domain operations
│   └── project-structure.md   # Complete codebase directory walkthrough
├── public/                    # Static assets served at domain root
│   ├── assets/                # Categorized visual and media assets
│   │   ├── about/             # Polaroid photos, speaking portrait, botanicals
│   │   ├── community/         # Video clips, team photo, CORE logo
│   │   ├── cursors/           # Custom quill pointer SVGs and leaf drift trail
│   │   ├── hero/              # Mountain artwork and hero portrait
│   │   ├── projects/          # High-fidelity project screenshots and engravings
│   │   ├── recognition/       # Hackathon cheque photo, trophies, certificates
│   │   └── toolkit/           # Tech stack illustrations and ornaments
│   ├── apple-touch-icon.png   # iOS home screen icon
│   ├── favicon.ico            # Favicon
│   ├── icon.svg               # Scalable tab icon
│   ├── llms.txt               # Machine-readable profile for AI search engines
│   └── og-image.png           # Open Graph social sharing card
├── src/
│   ├── app/                   # Next.js App Router root (layout, page, robots, sitemap)
│   ├── components/            # Section components (hero, about, work, community, etc.)
│   └── lib/                   # Analytics dispatcher and shared helpers
├── .env.example               # Template for environment variables
├── next.config.ts             # Security headers, Turbopack, and build optimizations
└── package.json               # Lean production dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** `v20.x` LTS or higher recommended
- **Package Manager:** `npm` (included with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/ParthMahadik33/Portfolio-website.git

# Navigate into the project directory
cd Portfolio-website/parth-portfolio-v2

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Run production build with Turbopack
npm run build

# Start local production server
npm start
```

### Linting and Type Checking

```bash
# Type-check with TypeScript compiler
npx tsc --noEmit

# Lint with ESLint
npm run lint
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root (or set in Vercel):

```env
# Google Analytics 4 Measurement ID (optional in development; required in production)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🌐 Deployment to Vercel

1. Push your changes to the `main` branch on GitHub.
2. Connect the repository to **Vercel**.
3. In **Settings** → **Domains**, set `parthmahadik.in` as the **Primary Domain** and ensure `www.parthmahadik.in` redirects permanently to `parthmahadik.in`.
4. In **Settings** → **Environment Variables**, configure `NEXT_PUBLIC_GA_ID`.
5. Automatic deployments will run on every push.

For more details, see [`docs/deployment.md`](./docs/deployment.md).

---

## 📄 License

Designed and developed by **Parth Mahadik**. All rights reserved.
