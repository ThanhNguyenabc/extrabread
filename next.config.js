const path = require('path');
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
    prependData: `
    @import "assets/styles/mixin.scss";
    @import "assets/styles/space.scss";
    @import "assets/styles/colors.scss";
    @import "assets/styles/constants.scss";
    `,
  },
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      {
        hostname: 'blog.extrabread.com',
        protocol: 'https',
      },
    ],
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
  transpilePackages: [
    'antd',
    '@ant-design',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-notification',
    'rc-tooltip',
    'rc-tree',
    'rc-table',
    'rc-field-form',
  ],

  rewrites: () => {
    return [
      {
        source: '/:pos',
        destination: '/products/:pos',
      },
    ];
  },
};

module.exports = nextConfig;
