import type { NextConfig } from "next";

const isPreview = process.env.VERCEL_ENV === "preview";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 200, 256, 320, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          ...(isPreview
            ? [
                {
                  key: "X-Robots-Tag",
                  value: "noindex, nofollow",
                },
              ]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
