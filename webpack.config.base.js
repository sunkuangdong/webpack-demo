var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack 学习",
            template: "./src/assets/index.html"
        }),
    ],
};