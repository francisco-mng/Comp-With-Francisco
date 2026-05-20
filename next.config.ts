import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

module.exports = {
  allowedDevOrigins: ['www.compwithfrancisco.co.za', "compwithfrancisco.co.za"],
}