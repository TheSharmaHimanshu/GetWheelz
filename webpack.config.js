const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        open: true
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            use: [
                { 
                    loader: 'style-loader' 
                }, 
                { 
                    loader: 'css-loader' 
                }
            ],
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output'
        }),
        /*new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            title: 'learn-webpack'
          }),*/
        new CleanWebpackPlugin({
            exclude: ["./dist/index.html", "images/*"],
        })
    ]
};