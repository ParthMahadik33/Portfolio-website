# Deployment & Production Operations Guide

**Primary Domain:** [https://parthmahadik.in](https://parthmahadik.in)  
**Hosting Provider:** Vercel  
**Continuous Deployment:** Connected to GitHub repository `ParthMahadik33/Portfolio-website` (`main` branch)

---

## 1. Domain Routing & Canonical Configuration

The portfolio uses the **non-www** apex domain as its single canonical URL.

### Required Vercel Domain Settings
1. Go to **Vercel Dashboard** → Select the project.
2. Navigate to **Settings** → **Domains**.
3. Ensure the following configuration:
   - `parthmahadik.in` → **Primary Domain**
   - `www.parthmahadik.in` → **Redirects to `parthmahadik.in` (308 Permanent)**

### DNS Records (GoDaddy / Registrar)
| Type | Name / Host | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | 600s / 1 hour |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600s / 1 hour |
| **TXT** | `@` | `google-site-verification=...` (GSC verification) | Default |

---

## 2. Environment Variables

Configure the following variables in **Vercel Project Settings** → **Environment Variables**:

| Variable | Target Value | Environments | Purpose |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Production, Preview | Google Analytics 4 Measurement ID |

*Note: In local development, `NEXT_PUBLIC_GA_ID` can remain unset. The application conditionally loads Google Analytics only when a valid `G-` prefixed ID is present, ensuring zero development console spam or performance overhead.*

---

## 3. Build & CI/CD Pipeline

Every push to `main` triggers an automatic Turbopack production build:

```bash
# Production build command
next build

# Linting command
eslint

# Local development server
next dev
```

### Build Specifications
- **Framework:** Next.js 16 (Turbopack)
- **Node Version:** Node.js 20.x LTS or higher
- **Zero Config SSR:** Statically generates all pages (`/`, `/robots.txt`, `/sitemap.xml`) at build time for instant Edge CDN delivery.
