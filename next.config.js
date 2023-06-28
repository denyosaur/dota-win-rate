/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.cloudflare.steamstatic.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cloudflare.steamstatic.com',
        pathname: 'apps/dota2/images/dota_react/heroes/',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
