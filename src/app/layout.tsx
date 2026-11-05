import type { Metadata, Viewport } from "next";
import {
  Bodoni_Moda,
  Barlow_Condensed,
  Inter,
  Martel,
  Caveat,
} from "next/font/google";
import { CustomCursorOverlay } from "../components/cursor/CustomCursorOverlay";
import "./globals.scss";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
  preload: true,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-barlow",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const martel = Martel({
  subsets: ["devanagari", "latin"],
  weight: ["800"],
  display: "swap",
  variable: "--font-martel",
  preload: true,
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-caveat",
  preload: false,
});

const SITE_URL = "https://www.parthmahadik.in";
const SITE_TITLE =
  "Parth Mahadik | Software Developer & Computer Engineering Student";
const SITE_DESCRIPTION =
  "Portfolio of Parth Mahadik, a Computer Engineering student and software developer building full-stack web applications, AI-powered tools, and real-world software systems.";

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
  robots: {
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
        alt: "Parth Mahadik — Software Developer & Computer Engineering Student",
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
        {children}
        <CustomCursorOverlay />
      </body>
    </html>
  );
}
