// 使用node的path模块
const path  = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 打包入口
    entry: './src/main.js',
    // 打包出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(jpg|jpeg|png|svg)$/,
            type: 'asset/resource'
        }, {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },    //多个css融合为一个
                { loader: 'postcss-loader' }
            ]
        }, {
            test: /\.styl(us)?$/,
            use: [
                { loader: "vue-style-loader" },
                { loader: "css-loader" },
                { loader: 'postcss-loader' },
                { loader: "stylus-loader" }
            ]
        }, {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
        }]
    },

    plugins: [
        // 确保引入这个插件！
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
}