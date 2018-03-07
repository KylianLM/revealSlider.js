var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/rSlider.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'rSlider.bundle.js',
        libraryTarget: 'var',
        library: 'rSlider'
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
