var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var pageCreate = require('./pageCreate.js');

app.get('/', function(req, res){
    pageCreate.indexHandle(__dirname + "/html/index.html", res);
});

//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json());
//
//app.post('/admin',function(req,res){
//    mongo.adminChangeSubmit(req, res);
//});

app.use(express.static(__dirname + '/html'));

var server = app.listen(80, function () {

    //var host = server.address().address;
    var port = server.address().port;

    //console.log('App listening at http://%s:%s', host, port);
    console.log('App listening on port %s', port);

});