/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  experimental: {
    turbo: true, // optional
  },
};
export default nextConfig;
