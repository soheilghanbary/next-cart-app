/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  optimizeFonts: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
}

module.exports = nextConfig
