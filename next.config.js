const { withPlausibleProxy } = require('next-plausible');

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
  async redirects() {
    return [
      {
        source: '/golya',
        destination: 'https://golyakonf.simonyi.bme.hu',
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
