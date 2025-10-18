/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  experimental: {
    turbo: true,
  },
};

export default nextConfig;
