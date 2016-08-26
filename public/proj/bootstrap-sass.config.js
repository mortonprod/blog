module.exports = {
    verbose: true, // print out your custom files used
    debug: false, // print out the full generated scss file
    styleLoader: "style-loader!css-loader!sass-loader", // see example for the ExtractTextPlugin
    scripts: {
        // add every bootstrap script you need
        'transition': true
    },
    styles: {
        // add every bootstrap style you need
        "mixins": true,

        "normalize": true,
        "print": true,
        "glyphicons": true,
        "scaffolding": true,
        "type": true,
    }
};