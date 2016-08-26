'use strict';
var webpack = require('webpack');
var config = {
    entry: {
        app: ['./src/index.tsx', "bootstrap-sass!./bootstrap-sass.config.js"],
        vendors: ['react']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]

    },
    module: {
        noParse: ['react'],
        loaders: [
            { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
            { test: /\.(png|jpg)$/, loader: 'file-loader' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }

        ]
    }
};

module.exports = config;