/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    presentation: [
      './index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.svg$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.gif$/,
      loader: 'url-loader?mimetype=image/gif',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.(ico)$/,
      loader: 'static-loader'
    }]
  },
  postcss: function() {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-cssnext'),
      require('autoprefixer')
    ];
  }
};
