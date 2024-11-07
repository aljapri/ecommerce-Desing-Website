import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'readymadeui.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pagedone.io',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
