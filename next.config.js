/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push([new webpack.IgnorePlugin(/^pg-native$/)]);

    return config;
  },
}

module.exports = nextConfig
