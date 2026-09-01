import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PEYK_BASE_PATH || "",
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
