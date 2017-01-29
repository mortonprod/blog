'use strict';
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//if (process.env.NODE_ENV === "production") {
//} else {
//}
var config = {
    entry: {
        index: ['./src/client/index.ts'],
    },
    plugins: [
    ],
    output: {
        path: "./dist/assets/bundle",
        publicPath:"/bundle/",
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
    },
    postcss: function () {
        return [autoprefixer(
            //    { browsers: ['ie 10', 'firefox 20', 'safari 9.1','Chrome ] }
            { browsers: ['> 0%'] }
        )];
    }
};

module.exports = config;