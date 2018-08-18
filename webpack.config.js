const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const fs = require('fs');
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
   
    plugins: [
        new HtmlWebPackPlugin({
            template: "./dist/index.html",
            inject: false,
            filename: "./index.html"
      })
    ],
    devServer: {
    
        open: true,
        
        
        https: {
            key: fs.readFileSync('ssl/server.key'),
            cert: fs.readFileSync('ssl/server.crt'),
            ca: fs.readFileSync('ssl/rootCA.pem'),
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                    secure: false,
                    changeOrigin: true,
            }

        }

        
        
    }
};