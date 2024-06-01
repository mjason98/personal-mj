/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "eu-central-1-shared-euc1-02.graphassets.com",
          port: "",
        },
      ],
    },
  };
  
  export default nextConfig;