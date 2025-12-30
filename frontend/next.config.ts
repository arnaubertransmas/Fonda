import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {},
    },
  },
  images: {
    domains: ["cdn.shortpixel.ai"],
  }
};

export default nextConfig;
