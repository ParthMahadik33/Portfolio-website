import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 200, 256, 320, 384, 420, 480, 540],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
