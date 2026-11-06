# Project Structure & Architecture

**Website:** [https://parthmahadik.in](https://parthmahadik.in)  
**Repository Root & Next.js Application:** `parth-portfolio-v2`  
**Architecture:** Next.js (App Router), TypeScript, SCSS Modules, Turbopack, Framer Motion

---

## 1. Directory Tree

```
parth-portfolio-v2/
├── .env.example                       # Documented environment variables template
├── .gitignore                         # Strict exclusion of build, cache, and env artifacts
├── docs/                              # Architecture and operations documentation
│   ├── asset-manifest.md              # Complete public assets catalog and inventory
│   ├── deployment.md                  # Vercel & custom domain production operations
│   └── project-structure.md           # This document
├── next.config.ts                     # Turbopack, security headers & image settings
├── package.json                       # Lean production dependencies (zero bloat)
├── package-lock.json                  # Synchronized lockfile
├── public/                            # Static assets served at domain root
│   ├── apple-touch-icon.png           # iOS home screen icon (180x180)
│   ├── favicon.ico                    # Browser favicon
│   ├── icon.svg                       # Scalable vector tab icon
│   ├── llms.txt                       # Machine-readable profile for AI search crawlers
│   ├── og-image.png                   # Open Graph social share banner (1200x630)
│   └── assets/                        # Categorized visual and media assets
│       ├── about/                     # About section polaroids, speaking photo & engravings
│       ├── community/                 # GDG photo, CORE logo, presentation video (mp4/webm)
│       ├── cursors/                   # Custom parchment cursor SVGs, PNGs & leaf trail
│       ├── hero/                      # Hero portrait and Sahyadri fort background artwork
│       ├── projects/                  # AgroRent, AquaTrace, ARRA preview screenshots
│       ├── recognition/               # Hackathon cheque, trophies, certificates, engravings
│       └── toolkit/                   # Tech stack illustrations and ornaments
├── src/
│   ├── app/                           # Next.js App Router root
│   │   ├── globals.scss               # Design tokens, CSS custom properties, base reset
│   │   ├── layout.tsx                 # Root layout, metadata, canonical URL, fonts, GA4
│   │   ├── page.tsx                   # Single-page portfolio root with Schema.org JSON-LD
│   │   ├── robots.ts                  # Dynamic robots.txt with preview isolation
│   │   └── sitemap.ts                 # Dynamic single-page sitemap.xml
│   ├── components/                    # Feature-oriented modular components
│   │   ├── about/                     # Section 01: About & interactive polaroid collage
│   │   ├── analytics/                 # Privacy-conscious Google Analytics 4 loader
│   │   ├── common/                    # Shared reusable components (MaskingTape, BelowTheFold)
│   │   ├── community/                 # Section 04: GDG lead, CORE logo, video showcase
│   │   ├── contact/                   # Section 06: Contact & colophon footer
│   │   ├── cursor/                    # Custom cursor overlay with drifting leaf trail
│   │   ├── hero/                      # Section 00: Multilingual intro, canvas, nav, artwork
│   │   ├── intro/                     # Multilingual opening sequence & skip control
│   │   ├── recognition/               # Section 03: Hackathon accolades and experience
│   │   ├── toolkit/                   # Section 05: Categorized technical skills matrix
│   │   └── work/                      # Section 02: Selected engineering projects
│   └── lib/                           # Core utilities
│       └── analytics.ts               # GA4 single-page custom event dispatcher
├── tsconfig.json                      # Strict TypeScript compiler configuration
└── README.md                          # Primary developer guide and deployment overview
```

---

## 2. Core Architectural Principles

1. **Single-Page Architecture:**  
   The entire portfolio resides on a single route (`/`), divided into clear semantic sections navigable via anchor IDs:
   - `#home` (Hero)
   - `#about` (About & Collages)
   - `#work` (Selected Work: AgroRent, AquaTrace, ARRA)
   - `#experience` (Recognition & Experience)
   - `#community` (Community & Leadership: GDG on Campus, CORE, Gemini Ambassador)
   - `#skills` (Technical Toolkit)
   - `#contact` (Contact & Colophon)

2. **Server & Client Component Boundary:**  
   - Core layouts (`layout.tsx`, `page.tsx`) remain fast Server Components providing full metadata and structured data to crawlers.
   - Interactive sections use `"use client"` where state, canvas rendering, or Framer Motion animations are required.
   - Below-the-fold content is progressively loaded, ensuring sub-second First Contentful Paint.

3. **Styling Architecture:**  
   - Built exclusively with **SCSS Modules** (`*.module.scss`) scoped to each component.
   - Global tokens (color palette, typography, layout dimensions) are defined in `src/app/globals.scss`.
   - Zero external CSS libraries or bulky runtime CSS-in-JS frameworks.

4. **Asset Organization:**  
   - All static assets live in `public/assets/` organized strictly by feature folder (`hero/`, `about/`, `projects/`, `recognition/`, `community/`, `toolkit/`, `cursors/`).
   - Every asset is web-optimized (modern WebP/WebM/AVIF/PNG-quant) with high fidelity and responsive sizing.
   - Uncompressed camera masters and raw design packs are preserved outside the production repo in `source_assets_archive/`.

