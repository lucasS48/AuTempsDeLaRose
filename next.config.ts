import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/plantes',
        permanent: true, // Définit une redirection permanente (HTTP 308)
      },
    ];
  },
  images: {
    domains: ["drive.google.com"],
  },
};

export default nextConfig;
