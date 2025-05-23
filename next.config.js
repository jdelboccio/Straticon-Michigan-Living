/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
    unoptimized: true
  },
  basePath: '/Straticon-Michigan-Living',
  assetPrefix: '/Straticon-Michigan-Living/',
  allowedDevOrigins: ['*.csb.app'],
};

module.exports = nextConfig;
