import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/electric-fencing",
        destination: "/electric-fence-installation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
