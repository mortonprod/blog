'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    entry: {
        index: ['./src/client/index.ts'],
    },
    plugins: [
    ],
    output: {
        path: "./dist/assets/bundle",
        filename: '[name].js',
        libraryTarget: 'umd' // Need this for static site generation.
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]

    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style-loader','css-loader','postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            { test: /\.ts?$/, loader: "ts-loader" },
            {
                test: /\.(png|ttf|eot|svg|woff(2)?)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000
                }
            }
        ]
    }
};

module.exports = config;