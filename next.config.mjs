/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.pexels.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'gorodprizrak.com' },
    ],
  },
};

export default nextConfig;
