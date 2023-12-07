/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "admin.bigmod.io"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;