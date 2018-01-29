const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // Using Polyfills
    // main: ['babel-polyfill', './src/main.js']
    main: './src/main.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist')
  },

  // Dev Server
  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  },

  // Module
  module: {
    rules: [
      // Loaders for js
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            
          }
        ],
        exclude: /node_modules/
      },

      // Loaders for styles
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: 'css-loader'
        // })
      },

      // Loaders for html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },

      // Loaders for images
      {
        test: /\.(jpeg|jpg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  // Extracting styles
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
