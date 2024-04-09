/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  Images: {
    domains: ["https://via.placeholder.com"],
  },
  output: "export",
  basePath: isProd ? "/Zainab-Porfolio" : "",
  assetPrefix: isProd ? "/Zainab-Porfolio/" : "",
};

module.exports = nextConfig;

