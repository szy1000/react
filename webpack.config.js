var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename: 'style.css'
})

module.exports = {
	// devtool: isPro ? 'source-map' : 'cheap-module-eval-source-map', // 开发
	devtool: 'cheap-module-eval-source-map', // 开发
	entry: "./src/App.js",
	output: {
		path: path.resolve(__dirname,"dist"),
		filename: 'bundle.js',
		// publicPath: '/dist'
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
					use: [ 'css-loader', 'sass-loader']
				})
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(jpg|png|jpeg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
							// publicPath: 'images/'
						}
					}
				]
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
		// new htmlWebpackPlugin({
		// 	filename: 'users.html',
		// 	template: 'src/users.html',
		// 	chunks:[]
		// }),
		new openBrowserPlugin({ url: 'http://localhost:8080' }),
		new cleanWebpackPlugin(['dist']) //删除之前的dist文件夹
	]
};