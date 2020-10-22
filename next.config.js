const withPWA = require('next-pwa');
const withLess = require('@zeit/next-less');

module.exports = withPWA(
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
    },
  })
);
