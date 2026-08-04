import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/LandingPage",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
