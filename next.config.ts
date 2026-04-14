import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * @description: Disable image optimization for production for saving costs on Vercel
     * @see: https://nextjs.org/docs/app/building-your-application/optimizing/images
     */
    unoptimized: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
