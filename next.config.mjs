/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable trailing slashes
  trailingSlash: false,
  // Disable redirects
  async redirects() {
    return [];
  },
  // Disable rewrites
  async rewrites() {
    return [];
  },
};

export default nextConfig;