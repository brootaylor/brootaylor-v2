module.exports = {
  name: 'Bruce Taylor',
  short_name: 'BWT',
  metaTitle: 'Bruce Taylor',
  metaDescription: 'I\'m a Front End Web Designer & Developer living in Crawley, West Sussex, UK and have been helping people build & enhance their websites since 2003.',
  metaImage: '/assets/images/common/logo.png',
  metaImageAlt: 'Site logo for Bruce Taylor.',
  logoAlt: 'Site logo for Bruce Taylor.',
  lang: 'en-gb',
  start_url: '/',
  display: 'standalone',
  rootUrl: process.env.URL || '',
  environment: process.env.ELEVENTY_ENV,
  logo: '/assets/images/common/avios-logo.png',
  theme_color_android: '#212227',
  theme_color_ios: '#212227',
  background_color_android: '#ffffff',
  background_color_mstile: '#212227',
  accent_color: '#212227',
  favicon: '/assets/ico/favicon.ico',
  icon: '/assets/ico/apple-touch-icon.png',
  icon_192: '/assets/ico/android-chrome-192x192.png',
  icon_512: '/assets/ico/android-chrome-512x512.png',
  icon_mstile: '/assets/ico/mstile-150x150.png',
  twitter: '@brootaylor', // Twitter handle
  AnalyticsUrchin: 'UA-XXX-X', // Analytics urchin uses this value
  scriptsVendor: false, // If using vendor (ie. 3rd party) scripts
  scriptsServiceworker: true, // If using a service worker
  yearCurrent: new Date().getFullYear(),
  author: {
    name: 'Bruce Taylor',
    url: 'https://brootaylor.com'
  },
};

