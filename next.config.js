/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ottertvplus-changelog",
  assetPrefix: "/ottertvplus-changelog/",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
