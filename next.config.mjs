/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProd ? "/Zainab-Porfolio" : "",
  assetPrefix: isProd ? "/Zainab-Porfolio" : "",  
};

export default nextConfig;
