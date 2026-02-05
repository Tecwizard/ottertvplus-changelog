/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ottertvplus-changelog",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
