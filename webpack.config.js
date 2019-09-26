'use strict';
const path = require('path');


module.exports = {
    context: __dirname + "/public",
    mode: "development",
    entry: './main',
    output:{
        path: path.resolve(__dirname ,'packedDir'),
        filename: '[name].js'
    },

    module:{
        rules:  [
        //     {
        //     test: /\.js$/,
        //     loader: "babel?presets[]=es2015"
        // },
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