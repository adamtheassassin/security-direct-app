import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/electric-fencing",
        destination: "/electric-fence-installation",
        permanent: true,
      },
      {
        source: "/garage-doors-motors",
        destination: "/garage-door-installation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
