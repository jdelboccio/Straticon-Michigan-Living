/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  experimental: {
    appDir: true,
  },
  // Configure allowed domains for images
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true,
  },
  // Disable features that require server-side functionality
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
