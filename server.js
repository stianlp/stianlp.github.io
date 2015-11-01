var express = require('express');
var app = express();

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/views', express.static(__dirname + '/views'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

app.listen(process.env.PORT || 3000);