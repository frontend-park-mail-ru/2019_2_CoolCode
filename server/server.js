'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const proxy = require('express-http-proxy');
const fallback = require('express-history-api-fallback');


const app = express();

app.use(morgan('dev'));
app.use(body.json());
app.use(cookie());

var root = path.resolve(__dirname, '..', 'packedDir');
var rootImg = path.resolve(__dirname, '..', 'public');
app.use(express.static(root));
app.use(express.static(rootImg));

app.use('/api', proxy('http://95.163.209.195:8080', {
	proxyReqPathResolver: (req) => {
		console.log(req.url);
		return `${req.url}`;
	}
}));




// app.use('/users', proxy('https://95.163.209.195:8080', {
// 	proxyReqOptDecorator: reqOpts => {
// 		console.log(reqOpts);
// 		return reqOpts;
// 	},
// 	proxyReqPathResolver: function (req) {
// 		console.log(req.protocol);
// 		console.log('!' + req.url);
// 		console.log('!!!' + req.originalUrl);
// 		return req.url;
// 	}
// }));
app.use(fallback('index.html', { root: root }));
app.use(fallback('index.html', { root: rootImg }));





const port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
