import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            pathname: '**',
          },
        ]
      }
};

export default nextConfig;
