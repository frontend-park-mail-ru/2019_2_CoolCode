'use strict';
const path = require('path');

module.exports = {
	context: __dirname ,
	mode: "development",
	entry: ['babel-polyfill', './public/main.js'],
	output:{
		path: path.resolve(__dirname ,'packedDir'),
		filename: '\main.js',
		publicPath: './',
	},
	devServer : {
		historyApiFallback: true,
		rewrites: [
			{ from: /\//, to: '/index.html'}
		]
	},

	module:{
		rules:  [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							[
								"@babel/plugin-proposal-class-properties"
							]
						]
					}
				}
			},
			{
				test: /\.(js)$/,
				exclude: [/node_modules/, /worker/],
				use: ["eslint-loader"],

			},
			{
				test: /\.worker\.js$/,
				use: { loader: 'worker-loader', options: { inline: true , fallback: false, publicPath: '/workers/' } }
			},

			{
				test: /\.pug$/,
				loader: "pug-loader"

			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test:  /\.(png|svg|jpe?g|gif)$/,
				loader: 'file-loader',

			}]
	}

};