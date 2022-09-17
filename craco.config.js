const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    }
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://codercba.com:1888/airbnb/api',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
};
