/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static-cdn.jtvnw.net', 'cdn.discordapp.com']
  },
  compiler: {
    styledComponents: true 
  }
}

module.exports = nextConfig
