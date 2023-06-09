"use strict";
// // import * as http from 'http';
// // var portNumber = 8080;
// // function requestListener(request: http.ServerRequest, response: http.ServerResponse) {
// //  response.writeHead(200, { 'Content-Type': 'text/plain' });
// //  response.write("Requested method: " + request.method+'\n')
// //  response.write('URL: '+ request.url+'\n')
// //  response.write('Response Text Here'+ '\n');
// //  response.end();
// // }
// // http.createServer(requestListener).listen(portNumber);
// // console.log('Listening on localhost:' + portNumber);
Object.defineProperty(exports, "__esModule", { value: true });
// import express = require('express');
// var server = express();
// var portnumber = 8080;
// function serverlistner(request: express.request, response: express.response){
//     response.send('Web URL: '+ request.url)
// }
// function secondfunc(request: express.request, response: express.response){
//     response.send('Second route, stay cool')
// }
// server.get("/", serverlistner);
// server.post('/s', secondfunc)
// server.listen(portnumber, ()=>{
//     console.log('Listening on port: localhost:'+ portnumber)
// })
var express = require("express");
var routes = require("./routes/index");
var book = require("./routes/book");
var http = require("http");
var path = require("path");
var favicon = require("serve-favicon");
var morgan = require("morgan");
var methodOveride = require("method-override");
var errorhandler = require("errorhandler");
// const jade = require('jade')
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
var faviconPath = path.join(__dirname, 'public', 'favicon.ico');
app.use(favicon(faviconPath));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOveride('_method'));
// Stylus middleware for taking care of css configuration and writing
var stylus = require("stylus");
app.use(stylus.middleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
// Development only to handle error
if ('development' == app.get("env")) {
    app.use(errorhandler());
}
// Routes
app.get('/', routes.index);
app.get('/b/:bkid', book.findBook);
app.get('/b', book.books);
app.post('/b', book.submit);
// run the server
http.createServer(app).listen(app.get('port'), function () {
    console.log('app running on: 127.0.0.1:' + app.get('port'));
});
