/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure data/ files are bundled into Vercel serverless functions
  outputFileTracingIncludes: {
    "/api/bot": ["./data/**"],
  },
}

export default nextConfig
