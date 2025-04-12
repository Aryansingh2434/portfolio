/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'], // Add any other domains you're loading images from
  },
  typescript: {
    ignoreBuildErrors: true, // Only use this if you want to ignore TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // Only use this if you want to ignore ESLint errors during build
  }
}

module.exports = nextConfig
