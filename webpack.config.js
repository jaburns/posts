const webpack = require('webpack');

module.exports = {
    mode: 'production',
    context: __dirname,
    devtool: 'source-map',
    entry: './src/main.ts',
    output: {
        path: __dirname+'/docs',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{ test: /\.ts$/, loader: 'awesome-typescript-loader' }]
    },
    optimization: {
        minimize: true
    },
};