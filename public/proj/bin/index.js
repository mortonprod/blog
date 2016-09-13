/////Entry point for the app "node (this file)"  to run
var debug = require('debug')('blog');
var app = require('../app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});
