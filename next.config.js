/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Zainab-Porfolio" : "",
  assetPrefix: isProd ? "/Zainab-Porfolio/" : "",
};

module.exports = nextConfig;

