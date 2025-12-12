/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/apmcnewasa-react',
  assetPrefix: '/apmcnewasa-react/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;