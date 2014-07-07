
/**
 * Module dependencies.
 */
require('./db');

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//PS：读取IO耗时，性能是否会受到影响？？？
//指定文件夹下面，如果代码规划得好应该问题不是很大
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
		console.log("###############" + file);
		router = require('./controllers/' + file);
		router.controller(app);
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
