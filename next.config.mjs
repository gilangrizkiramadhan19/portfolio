/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio"; // nama repo kamu

const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "", // trailing slash penting di assetPrefix
  trailingSlash: true, // tambahin ini biar path lebih aman di static export
};

export default nextConfig;
