var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: "/app/src",
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/client.js",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.png$/, loader: 'file-loader'},
        ]
    },
    output: {
        path: "/wwwroot",
        filename: "client.min.js"
    },
    plugins: debug ? [new HtmlWebpackPlugin()] : [
        new HtmlWebpackPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
