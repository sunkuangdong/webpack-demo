const base = require("./webpack.config.base.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'production',
    ...base,
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css',
        })
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            },
        ]
    },
};