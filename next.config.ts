import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.CACHET_BASE_PATH || "",
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
