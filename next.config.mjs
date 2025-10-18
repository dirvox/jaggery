/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static export
  experimental: {
    turbo: true, // optional, because you are using turbopack
  },
};



export default nextConfig;
