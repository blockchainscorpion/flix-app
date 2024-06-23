// import webpack from 'webpack';
// import path from 'path';
// import dotenv from 'dotenv';

const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  mode: 'production', // or 'production' as per environment
  entry: './js/script.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'api.apiData.API_KEY': JSON.stringify(process.env.API_KEY),
    }),
  ],
};
