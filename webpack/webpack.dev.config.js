var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

var frontendDir = path.join(__dirname, '../frontend');
var publicDir = path.join(__dirname, '../public');

module.exports = {
    entry: [
        path.join(frontendDir, 'index.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }
        ]
    },
    output: {
        path: publicDir,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: publicDir,
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" }
    }

}