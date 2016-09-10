var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/**/*spec.js',
            'src/**/*spec.jsx',
            'dist/vendors.js',
            'dist/bundle.js'

        ],
        ///["webpack"] will tell karma to run this through webpack first.
        preprocessors: {
            'src/**/*spec.js': ['webpack', 'sourcemap'],
            'src/**/*spec.jsx': ['webpack', 'sourcemap'],
            'dist/vendors.js': ['webpack','sourcemap'],
            'dist/bundle.js': ['webpack','sourcemap']

        },
        webpack: webpackConfig,
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    })
}