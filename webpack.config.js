var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');

var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

const apiMocker = require('webpack-api-mocker');
const mocker = require('./mock/mocker.js');
var extractPlugin = new ExtractTextPlugin({
    filename: 'style.css'
})

var isPro = process.env.NODE_ENV === "production";

const postcssOpts = {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        }),
        pxtorem({
            rootValue: 75,
            propWhiteList: [],
        }),
    ],
    sourceMap: true,
};

module.exports = {
    devtool: isPro ? 'source-map' : 'cheap-module-eval-source-map', // 开发
    entry: "./src/App.js",
    devServer: {
        host: '0.0.0.0',
        // port: 8080,
        before(app) {
            apiMocker(app, path.resolve('./mock/mocker.js'))
        }
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.[hash:6].js',
        // publicPath: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js|tsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['babel-preset-react'].map(require.resolve)
                            // presets: ["es2015", "react"].map(require.resolve)
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    // use: ['css-loader', 'sass-loader'],
                    use: [
                        'css-loader',
                        {loader: 'postcss-loader', options: postcssOpts},
                        {loader: 'sass-loader'}
                    ]
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:6].[ext]',
                        outputPath: 'images/',
                        // publicPath: 'images/'
                    },
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            }
        ]
    },

    plugins: [
        autoprefixer,
        new webpack.HotModuleReplacementPlugin(),  //开启热更新
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Swiper: 'swiper'
        }),
        extractPlugin,

        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                minimize: true,
                postcss: function () {// 高清方案，将px转换为rem
                    return [
                        require('postcss-pxtorem')({
                            rootValue: 75,
                            propWhiteList: [],
                        })
                    ]
                }
            }
        }),

        // new htmlWebpackPlugin({
        // 	filename: 'users.html',
        // 	template: 'src/users.html',
        // 	chunks:[]
        // }),
        // new openBrowserPlugin({url: 'http://localhost:8080'}),
        new cleanWebpackPlugin(['dist']) //删除之前的dist文件夹
    ]
};