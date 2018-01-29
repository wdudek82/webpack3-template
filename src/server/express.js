import express from 'express';
import path from 'path';

const server = express();

// Webpack Dev Middleware
const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

server.use(webpackDevMiddleware);

// Webpack Hot Middleware
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
server.use(webpackHotMiddleware);

// Static Middleware
const staticMiddleware = express.static('dist');
server.use(staticMiddleware);

server.listen(8000, () => {
  console.log('Server is listening');
})
