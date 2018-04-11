/**
 * 开发环境配置文件
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动生成html
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
if(process.env.NODE_ENV === 'development'){
    var loaders = ['react-hot','babel']
} else {
    var loaders = ['babel']
}
const config = {
    entry:{
        app:path.resolve(__dirname, './src/index.js'),// 入口文件
        vendor:['react','react-dom','react-router','react-redux','redux']
    },
    devtool:'cheap-module-eval-source-map',//source map追踪错误和警告
    devServer:{//本地开发服务器
        contentBase:'./dist',
        hot:true,
        historyApiFallback: true,
        inline: true,
        // progress: true,
        // port:9091    //这个端口你可以自定义
    },
    output:{
        filename:'[name].bundle.js',//打包后输出文件名称
        path: path.resolve(__dirname, './dist'), // 打包后的文件存储位置
        sourceMapFilename: '[name].map',
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx", ".json","css","less"],
        modules: [path.resolve(__dirname, "src"), "node_modules"]//添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索
    },
    module:{
        rules:[
            {
                test: /\.js|jsx$/,
                use: ['babel-loader?cacheDirectory'], // 开启编译缓存
                exclude: /node_modules/,
            },
            {
                test: /\.json/,
                use: ['json-loader'], // 开启编译缓存
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                exclude: [/\.(spec|e2e)\.ts$/],
                use: [
                    'ts-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,//css文件分类
                use: ExtractTextPlugin.extract({
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                modules:true,
                                importLoaders:1,
                                localIdentName:'[local]',
                            }
                        },
                        {
                            loader:'less-loader',
                        },
                    ],
                    fallback: 'style-loader', // 编译css文件的loader并开启css-modules功能
                }),
                exclude:/node_modules/,
            },
            {
                test: /\.(css|less)$/,//antd组件库css文件分类
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader!less-loader", // 编译css文件的loader并开启css-modules功能
                }),
                include:path.resolve(__dirname,"./node_modules/antd/lib/"),
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,//图片文件分类
                loader: 'url-loader?limit=8192&name=imgs/[name].[ext]?[hash]',
                exclude:/node_modules/,
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'this webpack.config.js',
            template:'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),//启动webpack内置HMR插件
        new LodashModuleReplacementPlugin,//loadsh引用
        // css 抽取
        new ExtractTextPlugin({
            filename:"[name].[hash].css",
            ignoreOrder:true,
            disable: false,
            allChunks: true
        }),

        //js/jsx压缩
        new webpack.optimize.UglifyJsPlugin({
            test:/(\.jsx|.js$)/,
            minimize:true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ],
}

module.exports = config;