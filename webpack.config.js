const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = () => {
  dotenv.config();

  const prod = process.env.NODE_ENV === 'production';

  return {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build/'),
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
      port: 3001,
      compress: true,
    },
    resolve: {
      alias: {
        'chart.js': 'chart.js/auto',
      },
      fallback: {
        crypto: require.resolve('crypto-browserify'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.js', '.json', '.tsx', '.ts', '.svg'],
          },
          use: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    devtool: prod ? undefined : 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public', 'locales'),
            to: path.resolve(__dirname, 'build', 'locales'),
          },
        ],
      }),
    ],
  };
};
