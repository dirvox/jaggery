/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static export
  experimental: {
    turbo: true,
  },
};
export default nextConfig;
