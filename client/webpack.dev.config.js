const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const WebpackNotifierPlugin = require('webpack-notifier')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        port: 8000,
        contentBase: 'app/ui/www',
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new WebpackNotifierPlugin({alwaysNotify: true})
    ]
})