import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-bfe3a944affd4efaa100db300cff3085.r2.dev',
        pathname: '/**',
      },
    ],
  },
}
export default nextConfig
