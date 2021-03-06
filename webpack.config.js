const path = require('path');
// var LiveReloadPlugin = require('webpack-livereload-plugin');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const fs = require('fs');
const cors = require('cors');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: "/dist/",
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    devServer: {
        open: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist')

    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
    // plugins: [
    //     new LiveReloadPlugin()
    // ]
};