// import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "d2gcql29fe9vk.cloudfront.net"
      }
    ],
  },
 };

export default nextConfig;
