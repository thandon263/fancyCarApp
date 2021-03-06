var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/app.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // [BASE CONFIGURATION]
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },
    devtool: 'source-map'
}