/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // No necesitas especificar `output: 'export'` aquí.
  // Asegúrate de usar `next build && next export` en tus scripts.
  basePath: isProd ? '/Zainab-Porfolio' : '',
  assetPrefix: isProd ? '/Zainab-Porfolio/' : '',
};

module.exports = nextConfig;

