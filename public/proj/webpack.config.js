'use strict';
///postcss-loader <<< This is used to add css vendor prefixes
///If html generation is used then webpack-dev-server will use this as entry not the one in the current directory.
///Removed from loaders. Since the style-loader will add this inline in html and not be modular like extract text:  
// { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },Remove style loader=> Don't put all styles in head
///This will run sass, then add vendor stuff, then process css by adding hashes, and then create style sheet css.
///{
///    test: /\.scss$/,
///        loader: ExtractTextPlugin.extract(
///            //Need:?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5] to set the right name for each css!
///            "style",
///            "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass")
///},



//////////////////////////////////////////////
///TODO:Regex
///TODO:Note /\ just mean place actual \ and not \ on own which means escape character.
/// * match any number whats before it.
/// ? match zero or more
/// + match one or more.
/////////////////////////////
var HtmlWebpackPlugin = require('html-webpack-plugin');///Does not include app entry so not very useful.No app entry point. Only once used.
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var webpack = require('webpack');
var locals = {
    routes: [
        '/',
        '/webdevelopment',
        '/webdevelopment/blogcreation',

    ]
}
var config = {
    entry: {
       // app: ['./src/index.tsx', "bootstrap-sass!./bootstrap-sass.config.js"],
        app: ['./src/index.tsx'],

        vendors: ['react']
    },
    ///Webpack-dev-server.
    devServer: {
        port: 3000,
        ///TODO:NOTESeems silly since we are still sending a request. <<Fixed since I was not using hash browser.
        historyApiFallback: true ///This will fall back to index.html to server new asset but change url.
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        })
      //w  new StaticSiteGeneratorPlugin('bundle.js', locals.routes)

    ],

    output: {
        path: './dist',
        filename: 'bundle.js',
        libraryTarget: 'umd' // Need this for static site generation.
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]

    },
    module: {
        noParse: ['react'],
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    //Need:?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5] to set the right name for each css!
                    "style",
                    "css!postcss-loader!sass")
            },
            { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]'
                    //'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false' To minimise images. Not working.
                ]
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }


        ]
    }
};

module.exports = config;