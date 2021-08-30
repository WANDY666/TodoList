const baseConfig = require('./webpack.base.js');

const { merge } = require('webpack-merge')

const devConfig = {
    mode: 'development',
    devtool: 'eval',

    devServer: {
        static: './dist',
        hot: true,
        open: true
    }
}

module.exports = merge(baseConfig, devConfig);