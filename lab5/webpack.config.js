const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {main: './src/scripts/app.js',
    form:'./src/scripts/form.js',
    rlist:'./src/scripts/rlist.js'},
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main','rlist'],
      title:'Book Review - Main page'
    }),
    new HTMLPlugin({
      filename: 'addr.html',
      template: 'src/index.html',
      chunks: ['main','form'],
      title:'Book Review - Add review page'
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
    new EnvironmentPlugin(['API_URL'])
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              configFile: "./babel.config.js",
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: "source-map"
};
