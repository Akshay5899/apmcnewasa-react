/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/apmcnewasa-react',
  assetPrefix: '/apmcnewasa-react/',
};

module.exports = nextConfig;
