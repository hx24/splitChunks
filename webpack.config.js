const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:4].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        lodash: {
          name: 'lodash',
          // priority: 100,
          test: /[\\\/]node_modules[\\\/](lodash)[\\\/]/
        },
        commons: { name: 'commons', minChunks: 2 },
      }
    }
  },
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()]
};
