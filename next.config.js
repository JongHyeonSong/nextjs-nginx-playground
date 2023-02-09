const { imageOptimizer } = require('next/dist/server/image-optimizer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // imageOptimizer

  // exportPathMap:{

  // }
}

module.exports = nextConfig
