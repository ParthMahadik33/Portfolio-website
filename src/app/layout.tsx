import type { Metadata, Viewport } from "next";
import {
  Bodoni_Moda,
  Barlow_Condensed,
  Inter,
  Martel,
  Caveat,
} from "next/font/google";
import { CustomCursorOverlay } from "../components/cursor/CustomCursorOverlay";
import { GoogleAnalytics } from "../components/analytics/GoogleAnalytics";
import "./globals.scss";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
  preload: true,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-barlow",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const martel = Martel({
  subsets: ["devanagari", "latin"],
  weight: ["700", "800", "900"],
  display: "swap",
  variable: "--font-martel",
  preload: true,
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-caveat",
  preload: false,
});

const SITE_URL = "https://parthmahadik.in";
const SITE_TITLE =
  "Parth Mahadik | Software Developer, AI & Cloud Enthusiast";
const SITE_DESCRIPTION =
  "I'm Parth Mahadik, a Computer Engineering student and software developer building web applications, backend systems and AI-integrated solutions. Explore my projects, achievements and technical journey.";

const isPreview = process.env.VERCEL_ENV === "preview";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4EBDD",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Parth Mahadik",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Parth Mahadik Portfolio",
  authors: [{ name: "Parth Mahadik", url: SITE_URL }],
  creator: "Parth Mahadik",
  publisher: "Parth Mahadik",
  keywords: [
    "Parth Mahadik",
    "Software Developer",
    "AI Enthusiast",
    "Cloud Enthusiast",
    "Computer Engineering Student",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "Flask",
    "AI Applications",
    "AgroRent",
    "AquaTrace",
    "ARRA",
    "GDG on Campus TCOER",
    "Pune",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: isPreview
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Parth Mahadik",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parth Mahadik — Software Developer, AI & Cloud Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVariables = [
    bodoniModa.variable,
    barlowCondensed.variable,
    inter.variable,
    martel.variable,
    caveat.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVariables}>
      <body>
        <GoogleAnalytics />
        {children}
        <CustomCursorOverlay />
      </body>
    </html>
  );
}
