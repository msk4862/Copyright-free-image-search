/** @type {import('next').NextConfig} */

const dns = require('dns');

dns.setDefaultResultOrder('ipv4first');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
