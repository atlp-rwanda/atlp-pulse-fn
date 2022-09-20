const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
module.exports = {
    entry: {
        app: './src/index.tsx',
    },
    plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Production version'
    }),
    new MiniCssExtractPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve( __dirname , 'dist/'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.json','.tsx', '.ts']
        },
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
}