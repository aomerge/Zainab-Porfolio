/** @type {import('next').NextConfig} */
// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/Zainab-Porfolio' : '',
  assetPrefix: isProd ? '/Zainab-Porfolio/' : '',
};

export default nextConfig;


