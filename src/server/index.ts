import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as jsonfile from 'jsonfile';
var app = express();
app.use(express.static(path.join(__dirname, "./assets")));
app.use(bodyParser.urlencoded({ extended: true }));
console.log(path.join(__dirname, "./assets"))
app.get('/', function (req: express.Request, res: express.Response, next:any) {
    //Send file not connected to express.
    res.sendFile(path.join(__dirname, './assets','views', 'index.html'));
    //next();
});
app.post('/choice', function (req: express.Request, res: express.Response) {
    console.log(req.body)
    jsonfile.readFile(path.join(__dirname, './assets', 'options.json'), function (err:any, obj:any) {
        console.log(obj)
        // Using another variable to prevent confusion.
        var fileObj = obj;

        // Modify the text at the appropriate id
        fileObj[req.body.subject] = fileObj[req.body.subject] + 1;

        // Write the modified obj to the file
        jsonfile.writeFile(path.join(__dirname, './assets', 'options.json'), fileObj, function (err:any) {
            if (err) {
                throw err;
            } else {
                res.redirect('/');
            }
        });
    });
});
app.listen(3000, function () {});


