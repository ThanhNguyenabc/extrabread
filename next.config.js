const path = require('path');
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  transpilePackages: ['antd'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
    prependData: `
    @import "assets/styles/mixin.scss";
    @import "assets/styles/space.scss";
    @import "assets/styles/colors.scss";
    @import "assets/styles/constants.scss";
    `,
  },
  experimental: {
    // Required:
    appDir: false,
  },
  API_KEY: process.env.API_KEY,
  TABLE_NAME: process.env.TABLE_NAME,
  BASE_ID: process.env.BASE_ID,
  images: {
    domain: ['https://blog.extrabread.com', 'https://res.cloudinary.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
