import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's.wordpress.com',
        pathname: '/mshots/**',
      },
    ],
  },
  transpilePackages: ['motion'],
};

export default nextConfig;
