/// <reference path="../../typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path'
var app = express();
app.use(express.static(path.join(__dirname, "client")));

app.get('/', function (req: any, res: any) {
    res.send(renderFullPage());
});

app.set('port', process.env.PORT || 3000);
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
        <script src="vendor.bundle.js"></script>
        <script src="index.js"></script>
      </body>
    </html>
    `
}