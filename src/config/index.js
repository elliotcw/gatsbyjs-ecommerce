module.exports = {
  DEBUG: process.env.NODE_ENV === 'development',

  siteName: 'Every Day Organic',
  author: 'Elliot Williams',
  description: 'Expertly sourced organic foods at great prices',
  twitter: '@everydayorganic',
  fbUserId: '@everydayorganic',
  fbAppID: '@everydayorganic',
  type: 'website',

  GRAPHQL_ENDPOINT: 'https://gatsbyjs-ecommerce-api.williamselliot.now.sh',
  GRAPHQL_ENDPOINT_DEV: 'http://localhost:4000',
  siteUrl: 'https://www.everydayorganic.co.uk',
  mediumPublicationUrl: '',
  googleAnalytics: '',
  stripePublishableKey:
    process.env.NODE_ENV === 'development'
      ? 'pk_test_um1M4UvSEWpDYqRL4bsIVQ5S'
      : '',
  deliveryCharges: 2,

  backgroundColor: '#e0e0e0',
  themeColor: '#c62828',
  primaryColor: '#ef4566',
  secondaryColor: '#2876C4',
  logo: '/images/logo.png',
  homeBannerImage: '/images/home-bg-3.jpg',
};
