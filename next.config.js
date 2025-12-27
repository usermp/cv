/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath and assetPrefix removed for custom domain deployment
  // When using custom domain, site is served from root, not from /cv
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;
