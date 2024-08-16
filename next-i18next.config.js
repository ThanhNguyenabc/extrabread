const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  fallbackLng: {
    default: ['en'],
  },
  react: { useSuspense: false },
};
module.exports = config;
