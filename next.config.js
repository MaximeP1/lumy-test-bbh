/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.brest.life',
      },
    ],
  },
}

module.exports = nextConfig
