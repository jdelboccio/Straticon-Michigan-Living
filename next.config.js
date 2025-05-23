/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Straticon-Michigan-Living',
  images: {
    unoptimized: true,
    domains: [
      'images.pexels.com',
      'cdn.traversecity.com',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  // Disable server-side features for static export
  experimental: {
    appDir: true
  },
  // Disable features that require server-side functionality
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
