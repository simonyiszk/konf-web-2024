import { withPlausibleProxy } from 'next-plausible';

/** @type {import('next').NextConfig} */
const nextConfig = withPlausibleProxy({
  customDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_URL,
})({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'konf-api-staging.kir-dev.hu',
      },
      {
        protocol: 'https',
        hostname: 'konf-api.kir-dev.hu',
      },
    ],
  },
});

module.exports = nextConfig;
