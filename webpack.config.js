const prod = process.env.NODE_ENV === 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: prod ? 'production': 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + 'dist/'
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
  devtool: prod ? undefined: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ]
}