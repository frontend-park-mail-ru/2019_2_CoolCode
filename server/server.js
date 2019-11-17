'use strict';

// const express = require('express');
// const body = require('body-parser');
// const cookie = require('cookie-parser');
// const morgan = require('morgan');
// const path = require('path');
// const proxy = require('express-http-proxy');
// const fallback = require('express-history-api-fallback');
//
//
//
//
// const app = express();
//
// app.use(morgan('dev'));
// app.use(body.json());
// app.use(cookie());
//
// var root = path.resolve(__dirname, '..', 'packedDir');
// var rootImg = path.resolve(__dirname, '..', 'public');
// app.use(express.static(root));
// app.use(express.static(rootImg));
//
// app.use('/api', proxy('http://95.163.209.195:8080', {
// 	proxyReqPathResolver: (req) => {
// 		console.log(req.url);
// 		return `${req.url}`;
// 	}
// }));
//
// app.use('/ws', proxy('ws://95.163.209.195:8080', {
// 	proxyReqPathResolver: (req) => {
// 		console.log(req.url);
// 		return `${req.url}`;
// 	}
// }));
//
// app.use(fallback('index.html', { root: root }));
// app.use(fallback('index.html', { root: rootImg }));
//
//
//
//
//
// const port = process.env.PORT || 3000;
//
// app.listen(port, function () {
// 	console.log(`Server listening port ${port}`);
// });
//
var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var backend = 'http://95.163.209.195:8080';
const path = require('path');

const fallback = require('express-history-api-fallback');

var root = path.resolve(__dirname, '..', 'packedDir');
 var rootImg = path.resolve(__dirname, '..', 'public');
 app.use(express.static(root));
 app.use(express.static(rootImg));


app.all("/api/*", function(req, res) {
	req.url = req.url.substring(4);
	apiProxy.web(req, res, {target: backend});
});

app.use(fallback('index.html', { root: root }));
app.use(fallback('index.html', { root: rootImg }));


var server = require('http').createServer(app);
server.on('upgrade', function (req, socket, head) {
    //console.log(req.url);
    req.url = req.url.substring(4);
	apiProxy.ws(req, socket, head, {target: backend});
});
server.listen(3000);