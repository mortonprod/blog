/// <reference path="../../typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path'

if (process.env.NODE_ENV === "development") {
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('../webpack.config.js'); ///Called from dist folder!!!!
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    config.entry.index.unshift("webpack-dev-server/client?http://localhost:8081/", "webpack/hot/dev-server");
    var proxy = require('proxy-middleware');
    var url = require('url');
}


var app = express();
app.use(express.static(path.join(__dirname, "dist")));

app.get('/', function (req: any, res: any) {
    res.send(renderFullPage());
});

app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV === "development") {
    let server = new WebpackDevServer(webpack(config), {
    //    contentBase: "../../../public/",
        hot: true,
        quiet: false,
        noInfo: false,
        publicPath: "/bundle/",
        stats: { colors: true }
    });
    server.listen(8081, "localhost", function () { });
    app.use('/bundle', proxy(url.parse('http://localhost:8081/bundle')));
}

var server = app.listen(app.get('port'), function () {
});


function renderFullPage() {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Start of blog</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/bundle/vendor.bundle.js"></script>
        <script src="/bundle/index.js"></script>
      </body>
    </html>
    `
}