const webpack = require('webpack')
const path = require('path')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',

                include: [
                    path.resolve(__dirname, 'node_modules', 'semantic-ui-css', 'semantic.min.css')
                ]
            },
            {
                test: /\.(s(c|a))ss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src', 'sass'),
                ]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['build']),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
}