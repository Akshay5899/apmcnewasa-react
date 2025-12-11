/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                // required for GitHub Pages
  images: {
    unoptimized: true,            // disable Next.js image optimization
  },
  assetPrefix: '/apmcnewasa-react/', // REQUIRED for images, CSS, JS
  basePath: '/apmcnewasa-react',     // REQUIRED for routing
};

module.exports = nextConfig;
