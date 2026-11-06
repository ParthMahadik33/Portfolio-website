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

## 2. Analytics & Tracking Configuration (Google Tag Manager & GA4)

Google Analytics 4 is integrated exclusively via **Google Tag Manager** (`GTM-NRP9327Z`).

### Environment Variables
Configure in **Vercel Project Settings** → **Environment Variables**:

| Variable | Default Value | Environments | Purpose |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_GTM_ID` | `GTM-NRP9327Z` | Production, Preview | Google Tag Manager Container ID |
| `NEXT_PUBLIC_GA_ID` | `G-4GD9QZJK5D` | Production, Preview | Google Analytics 4 Measurement ID |

### GTM Container Setup Guide (`GTM-NRP9327Z`)
1. Log into **[Google Tag Manager](https://tagmanager.google.com/)** and select container `GTM-NRP9327Z`.
2. Under **Tags** → **New**:
   - **Tag Type:** `Google Tag` (Google Analytics)
   - **Tag ID:** `G-4GD9QZJK5D`
   - **Triggering:** `Initialization - All Pages` (or `All Pages`)
3. Under **Variables**, ensure built-in click and page variables are enabled.
4. For custom interactions (`section_navigation`, `project_exploration`, `github_repository_click`, `resume_download`, `contact_email_click`, `linkedin_click`, `external_project_visit`), add **Google Analytics: GA4 Event** tags triggered by **Custom Event** triggers matching these event names.
5. In **Google Analytics 4** (`G-4GD9QZJK5D`), verify under **Admin** → **Data Streams** that enhanced measurement is enabled and Realtime reports display active visitor events.

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

