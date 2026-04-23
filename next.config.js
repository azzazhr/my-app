/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com", "encrypted-tbn0.gstatic.com",],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;