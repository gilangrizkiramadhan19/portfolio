/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const repoName = "portfolio"; // <-- ganti sesuai nama repo kamu

const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "", // penting!
  assetPrefix: isProd ? `/${repoName}/` : "", // penting banget buat _next/static dll
};

export default nextConfig;
