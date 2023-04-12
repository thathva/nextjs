/** @type {import('next').NextConfig} */
const webpack = require('webpack');
let resourceRegExp=/^pg-native$/
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/, contextRegExp }));
    
    return config;
  },
}

module.exports = nextConfig
