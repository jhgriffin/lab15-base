const HTMLWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    devtool : 'source-map',
    mode    : 'development',
    entry   : './src/scripts/app.js',
    output  : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/app.js'
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HTMLWebPackPlugin({
            filename: 'index.html',
            title: 'Welcome to My Page!',
            mainDiv: 'welcome-message',
            template: 'src/index.html'
        })
    ]
};